import {
  BufferGeometry,
  Color,
  Float32BufferAttribute,
  LineSegments,
  PerspectiveCamera,
  Scene,
  ShaderMaterial,
  Vector3,
  WebGLRenderer,
} from 'three';

/** A wireframe of Punna Residence 5 (modelled on the project render) drawn from the ground up,
    with live CondoMate events pinned to the places they happen. */

export type Marker = { key: string; label: string };
type MarkerSpot = { key: string; pos: Vector3 };

const FLOOR = 1.1;
const LOBBY = 1.6;
const FLOORS = 7; // lobby + 6 residential floors, as at Punna Residence 5
const TOP = LOBBY + (FLOORS - 1) * FLOOR;

class Lines {
  pts: number[] = [];
  seg(a: [number, number, number], b: [number, number, number]) {
    this.pts.push(...a, ...b);
  }
  rectXY(x0: number, y0: number, x1: number, y1: number, z: number) {
    this.seg([x0, y0, z], [x1, y0, z]); this.seg([x1, y0, z], [x1, y1, z]);
    this.seg([x1, y1, z], [x0, y1, z]); this.seg([x0, y1, z], [x0, y0, z]);
  }
  rectZY(z0: number, y0: number, z1: number, y1: number, x: number) {
    this.seg([x, y0, z0], [x, y0, z1]); this.seg([x, y0, z1], [x, y1, z1]);
    this.seg([x, y1, z1], [x, y1, z0]); this.seg([x, y1, z0], [x, y0, z0]);
  }
  rectXZ(x0: number, z0: number, x1: number, z1: number, y: number) {
    this.seg([x0, y, z0], [x1, y, z0]); this.seg([x1, y, z0], [x1, y, z1]);
    this.seg([x1, y, z1], [x0, y, z1]); this.seg([x0, y, z1], [x0, y, z0]);
  }
  box(x0: number, y0: number, z0: number, x1: number, y1: number, z1: number) {
    this.rectXZ(x0, z0, x1, z1, y0); this.rectXZ(x0, z0, x1, z1, y1);
    for (const [x, z] of [[x0, z0], [x1, z0], [x1, z1], [x0, z1]] as const) this.seg([x, y0, z], [x, y1, z]);
  }
  geometry() {
    const g = new BufferGeometry();
    g.setAttribute('position', new Float32BufferAttribute(this.pts, 3));
    return g;
  }
}

function levels(floors: number) {
  const ys = [0];
  for (let f = 1; f <= floors; f++) ys.push(LOBBY + (f - 1) * FLOOR);
  return ys;
}

function tower(l: Lines, x0: number, x1: number, z0: number, z1: number, floors: number, opts: { balconies?: boolean; lobby?: boolean }) {
  const ys = levels(floors);
  const top = ys[ys.length - 1];
  ys.forEach(y => l.rectXZ(x0, z0, x1, z1, y));
  const bays = Math.round((x1 - x0) / 2.5);
  const bw = (x1 - x0) / bays;
  for (let b = 0; b <= bays; b++) {
    const x = x0 + b * bw;
    l.seg([x, 0, z1], [x, top, z1]);
    l.seg([x, 0, z0], [x, top, z0]);
  }
  const sideBays = Math.max(1, Math.round((z1 - z0) / 3));
  const sw = (z1 - z0) / sideBays;
  for (let b = 1; b < sideBays; b++) {
    const z = z0 + b * sw;
    l.seg([x0, 0, z], [x0, top, z]);
    l.seg([x1, 0, z], [x1, top, z]);
  }
  for (let f = 1; f < ys.length - 1; f++) {
    const y = ys[f];
    for (let b = 0; b < bays; b++) {
      const bx = x0 + b * bw;
      l.rectXY(bx + 0.35, y + 0.22, bx + bw - 0.35, y + FLOOR - 0.28, z1);
      if (opts.balconies && (b + f) % 2 === 0) {
        l.rectXZ(bx + 0.2, z1, bx + bw - 0.2, z1 + 0.75, y);
        l.seg([bx + 0.2, y + 0.45, z1 + 0.75], [bx + bw - 0.2, y + 0.45, z1 + 0.75]);
        l.seg([bx + 0.2, y, z1 + 0.75], [bx + 0.2, y + 0.45, z1 + 0.75]);
        l.seg([bx + bw - 0.2, y, z1 + 0.75], [bx + bw - 0.2, y + 0.45, z1 + 0.75]);
      }
    }
    for (let b = 0; b < sideBays; b++) {
      const bz = z0 + b * sw;
      l.rectZY(bz + 0.45, y + 0.22, bz + sw - 0.45, y + FLOOR - 0.28, x1);
    }
  }
  if (opts.lobby) {
    l.rectXY(x0 + bw + 0.3, 0, x0 + 2 * bw - 0.3, LOBBY - 0.25, z1);
    l.seg([x0 + 1.5 * bw, 0, z1], [x0 + 1.5 * bw, LOBBY - 0.25, z1]);
    l.box(x0 + bw - 0.2, LOBBY - 0.12, z1, x0 + 2 * bw + 0.2, LOBBY, z1 + 1.4);
  }
  l.rectXZ(x0, z0, x1, z1, top + 0.35);
  for (const [x, z] of [[x0, z0], [x1, z0], [x1, z1], [x0, z1]] as const) l.seg([x, top, z], [x, top + 0.35, z]);
  return top;
}

function site() {
  const l = new Lines();
  for (let x = -24; x <= 22; x += 1.5) l.seg([x, 0, -16], [x, 0, 20]);
  for (let z = -16; z <= 20; z += 1.5) l.seg([-24, 0, z], [22, 0, z]);
  return l;
}

/** The long residential bar, the deeper east wing with its floating roof, the roof terrace and the ground-floor canopies. */
function punna() {
  const l = new Lines();
  tower(l, -13, 5, -3, 3, FLOORS, { balconies: true, lobby: true });
  tower(l, 5, 12, -6, 5, FLOORS, {});
  // Vertical fins on the long facade.
  for (let x = -13 + 18 / 7; x < 5; x += (18 / 7) * 2) {
    l.seg([x, LOBBY, 3], [x, LOBBY, 3.8]); l.seg([x, LOBBY, 3.8], [x, TOP, 3.8]); l.seg([x, TOP, 3.8], [x, TOP, 3]);
  }
  // Floating roof over the east wing.
  l.box(4.4, TOP + 0.75, -6.6, 12.6, TOP + 1.05, 5.6);
  for (const [x, z] of [[5, -6], [12, -6], [12, 5], [5, 5]] as const) l.seg([x, TOP + 0.35, z], [x, TOP + 0.75, z]);
  // Roof terrace pergola on the west end, plus the stair core.
  const pt = TOP + 1.7;
  for (const x of [-13, -10.5, -8]) for (const z of [-3, 3]) l.seg([x, TOP + 0.35, z], [x, pt, z]);
  l.rectXZ(-13, -3, -8, 3, pt);
  for (let x = -12.4; x < -8; x += 0.6) l.seg([x, pt, -3], [x, pt, 3]);
  l.box(-4.5, TOP + 0.35, -2, -1.5, TOP + 1.5, 1);
  // Sloped canopies along the ground floor.
  for (let x = -12.6; x < 4; x += 2.6) {
    const a: [number, number, number] = [x, 1.5, 3], b: [number, number, number] = [x + 2.1, 1.5, 3];
    const c: [number, number, number] = [x + 2.1, 1.15, 4.8], d: [number, number, number] = [x, 1.15, 4.8];
    l.seg(a, b); l.seg(b, c); l.seg(c, d); l.seg(d, a);
  }
  return l;
}

/** Pool deck on the west, car park on the east. */
function grounds() {
  const l = new Lines();
  l.rectXZ(-18, 5.6, -6, 12, 0.04);
  l.rectXZ(-16.8, 6.8, -7.4, 10.8, 0.06);
  l.rectXZ(-16.4, 7.2, -7.8, 10.4, 0.06);
  for (let i = 0; i < 4; i++) l.rectXZ(-17.6 + i * 1.3, 11.1, -16.8 + i * 1.3, 11.8, 0.05);
  l.rectXZ(-3, 6, 17, 13.4, 0.03);
  const cars = new Set([1, 2, 5, 9, 11]);
  let k = 0;
  for (let x = -3; x <= 17.01; x += 1.6, k++) {
    l.seg([x, 0.03, 6], [x, 0.03, 8.4]);
    l.seg([x, 0.03, 11], [x, 0.03, 13.4]);
    if (cars.has(k) && x + 1.6 <= 17) l.box(x + 0.3, 0.03, 6.4, x + 1.3, 0.75, 8.1);
    if (cars.has(k + 3) && x + 1.6 <= 17) l.box(x + 0.3, 0.03, 11.3, x + 1.3, 0.75, 13);
  }
  return l;
}

const vert = /* glsl */ `
  uniform float uHeight;
  varying float vY;
  varying float vDepth;
  void main() {
    vY = position.y / uHeight;
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    vDepth = -mv.z;
    gl_Position = projectionMatrix * mv;
  }
`;
const frag = /* glsl */ `
  uniform vec3 uColor;
  uniform vec3 uHot;
  uniform float uReveal;
  uniform float uOpacity;
  uniform float uNear;
  uniform float uFar;
  varying float vY;
  varying float vDepth;
  void main() {
    if (vY > uReveal) discard;
    float edge = smoothstep(0.06, 0.0, uReveal - vY) * step(uReveal, 0.999);
    float fog = smoothstep(uFar, uNear, vDepth);
    vec3 col = mix(uColor, uHot, edge);
    gl_FragColor = vec4(col, uOpacity * fog + edge * 0.6);
  }
`;

function lineMaterial(height: number, opacity: number) {
  return new ShaderMaterial({
    vertexShader: vert,
    fragmentShader: frag,
    transparent: true,
    depthWrite: false,
    uniforms: {
      uHeight: { value: height },
      uColor: { value: new Color('#e6e8ea') },
      uHot: { value: new Color('#00adb5') },
      uReveal: { value: 0 },
      uOpacity: { value: opacity },
      uNear: { value: 34 },
      uFar: { value: 80 },
    },
  });
}

export function mountBuilding(container: HTMLElement, markers: Marker[], reduced: boolean) {
  let renderer: WebGLRenderer;
  try {
    renderer = new WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'low-power' });
  } catch {
    container.classList.add('no-webgl');
    return { setScroll() {}, setMarkers() {}, destroy() {} };
  }
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
  renderer.setClearColor(0x000000, 0);
  const canvas = renderer.domElement;
  canvas.setAttribute('aria-hidden', 'true');
  container.prepend(canvas);

  const scene = new Scene();
  const camera = new PerspectiveCamera(32, 1, 0.1, 200);

  const height = TOP + 1.7;
  const mMain = lineMaterial(height, 0.6);
  const mBack = lineMaterial(height, 0.38);
  const mSite = lineMaterial(1, 0.1);
  mSite.uniforms.uReveal.value = 1;
  scene.add(new LineSegments(site().geometry(), mSite));
  scene.add(new LineSegments(grounds().geometry(), mBack));
  scene.add(new LineSegments(punna().geometry(), mMain));

  const spots: MarkerSpot[] = [
    { key: 'repair', pos: new Vector3(-5.3, LOBBY + 4 * FLOOR + 0.55, 3.05) },
    { key: 'parcel', pos: new Vector3(-9.2, 0.8, 4.2) },
    { key: 'booking', pos: new Vector3(-12, 0.3, 8.8) },
    { key: 'finance', pos: new Vector3(8.5, LOBBY + 1 * FLOOR + 0.55, 5.05) },
  ];
  const layer = document.createElement('div');
  layer.className = 'twin-markers';
  container.append(layer);
  const els = new Map<string, HTMLElement>();
  const setMarkers = (list: Marker[]) => {
    list.forEach(m => {
      let el = els.get(m.key);
      if (!el) {
        el = document.createElement('div');
        el.className = 'twin-marker';
        el.innerHTML = '<div class="mk"><i></i><span></span></div>';
        layer.append(el);
        els.set(m.key, el);
      }
      el.querySelector('span')!.textContent = m.label;
    });
  };
  setMarkers(markers);

  let w = 0, h = 0;
  const resize = () => {
    w = container.clientWidth; h = container.clientHeight;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    // On narrow screens pull back so the whole building fits.
    camera.fov = w < 700 ? 52 : 32;
    camera.updateProjectionMatrix();
  };
  resize();
  const ro = new ResizeObserver(resize);
  ro.observe(container);

  let reveal = reduced ? 1 : 0;
  let scroll = 0;
  let angle = -0.5;
  let pointerX = 0, pointerY = 0;
  const onPointer = (e: PointerEvent) => {
    pointerX = (e.clientX / window.innerWidth - 0.5) * 2;
    pointerY = (e.clientY / window.innerHeight - 0.5) * 2;
  };
  window.addEventListener('pointermove', onPointer, { passive: true });

  const target = new Vector3(-1.5, 3, 3);
  const tmp = new Vector3();
  let visible = true;
  let raf = 0;
  const start = performance.now();

  const frame = (now: number) => {
    const t = (now - start) / 1000;
    if (!reduced) {
      reveal = Math.min(1, t / 2.8);
      angle += 0.0009;
    }
    const eased = 1 - Math.pow(1 - reveal, 3);
    mMain.uniforms.uReveal.value = eased;
    mBack.uniforms.uReveal.value = Math.min(1, eased * 1.15);

    const radius = 50 - scroll * 12;
    const a = angle + scroll * 0.55 + pointerX * 0.05;
    camera.position.set(target.x + Math.sin(a) * radius, 21 - scroll * 6 + pointerY * 0.8, target.z + Math.cos(a) * radius);
    // Keep the building right of centre on wide screens so the headline has room.
    const wide = w >= 1000;
    camera.setViewOffset(w, h, wide ? -w * 0.17 : 0, wide ? h * 0.02 : h * 0.24, w, h);
    camera.lookAt(target);
    renderer.render(scene, camera);

    const markersOn = eased > 0.97;
    spots.forEach((s, i) => {
      const el = els.get(s.key);
      if (!el) return;
      tmp.copy(s.pos).project(camera);
      const x = (tmp.x * 0.5 + 0.5) * w;
      const y = (-tmp.y * 0.5 + 0.5) * h;
      const narrow = w < 700;
      // On phones the headline owns the lower half: markers live only in the top band and never flip off-screen.
      const clear = !narrow || y < h * 0.33;
      el.style.transform = `translate3d(${(narrow ? Math.min(x, w - 16) : x).toFixed(1)}px, ${y.toFixed(1)}px, 0)`;
      el.classList.toggle('is-on', clear && markersOn && (reduced || t > 3 + i * 0.35));
      el.classList.toggle('flip', !narrow && x > w - 260);
      el.classList.toggle('clamp', narrow && x > w * 0.5);
    });
    if (visible && !reduced) raf = requestAnimationFrame(frame);
  };

  const io = new IntersectionObserver(([e]) => {
    visible = e.isIntersecting;
    cancelAnimationFrame(raf);
    if (visible) raf = requestAnimationFrame(frame);
  });
  io.observe(container);
  raf = requestAnimationFrame(frame);

  return {
    setScroll(p: number) {
      scroll = Math.max(0, Math.min(1, p));
      if (reduced) requestAnimationFrame(frame);
    },
    setMarkers(list: Marker[]) {
      setMarkers(list);
      if (reduced) requestAnimationFrame(frame);
    },
    destroy() {
      cancelAnimationFrame(raf);
      io.disconnect();
      ro.disconnect();
      window.removeEventListener('pointermove', onPointer);
      renderer.dispose();
      scene.traverse(o => { if (o instanceof LineSegments) { o.geometry.dispose(); (o.material as ShaderMaterial).dispose(); } });
      canvas.remove();
      layer.remove();
    },
  };
}
