import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

const NAV_OFFSET = -64;
const ease = 'expo.out';

function prepDraw(el: SVGGeometryElement) {
  const len = Math.ceil(el.getTotalLength());
  el.style.strokeDasharray = `${len}`;
  return len;
}

/** Wires smooth scroll, the drawing motion and the pinned CondoMate stage. Returns a cleanup. */
export function setupMotion(root: HTMLElement) {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const cleanups: (() => void)[] = [];

  let lenis: Lenis | null = null;
  if (!reduce) {
    lenis = new Lenis({ lerp: 0.12, wheelMultiplier: 1 });
    lenis.on('scroll', ScrollTrigger.update);
    const raf = (t: number) => lenis?.raf(t * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);
    cleanups.push(() => { gsap.ticker.remove(raf); lenis?.destroy(); });
  }

  const scrollTo = (target: HTMLElement | number) => {
    if (lenis) lenis.scrollTo(target, { offset: typeof target === 'number' ? 0 : NAV_OFFSET, duration: 1.2 });
    else if (typeof target === 'number') window.scrollTo({ top: target });
    else window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY + NAV_OFFSET });
  };

  const onClick = (e: MouseEvent) => {
    const a = (e.target as HTMLElement).closest<HTMLAnchorElement>('a[href^="#"]');
    if (!a) return;
    const id = a.getAttribute('href')!.slice(1);
    const el = id ? document.getElementById(id) : null;
    if (!el) return;
    e.preventDefault();
    scrollTo(el);
    history.replaceState(null, '', `#${id}`);
    if (id === 'main-content') el.focus({ preventScroll: true });
  };
  root.addEventListener('click', onClick);
  cleanups.push(() => root.removeEventListener('click', onClick));

  const ctx = gsap.context(() => {
    if (reduce) return;

    // A-00: the plan plots itself. Default state is the finished drawing; we animate from blank.
    const hero = root.querySelector<SVGSVGElement>('.hero-plan');
    if (hero) {
      const tl = gsap.timeline({ defaults: { ease }, delay: 0.25 });
      tl.from(hero.querySelectorAll('.as-is rect, .as-is .glyph, .as-is text'), { opacity: 0, y: 8, stagger: 0.06, duration: 0.7 })
        .from(hero.querySelectorAll('.as-is .link'), { opacity: 0, duration: 0.6, stagger: 0.08 }, '-=0.4');
      const cloud = hero.querySelector<SVGPathElement>('[data-cloud]');
      if (cloud) {
        const len = prepDraw(cloud);
        tl.fromTo(cloud, { strokeDashoffset: len }, { strokeDashoffset: 0, duration: 1.1, ease: 'power2.inOut' }, '-=0.2')
          .from(hero.querySelector('.note-cloud'), { opacity: 0, duration: 0.4 }, '-=0.5');
      }
      hero.querySelectorAll<SVGGeometryElement>('[data-draw]').forEach((el, i) => {
        const len = prepDraw(el);
        tl.fromTo(el, { strokeDashoffset: len }, { strokeDashoffset: 0, duration: 1.2, ease: 'power3.inOut' }, i === 0 ? '+=0.1' : '<0.12');
      });
      tl.from(hero.querySelectorAll('.joint, .system-mark, .as-built text'), { opacity: 0, scale: 0.6, transformOrigin: '50% 50%', stagger: 0.05, duration: 0.6 }, '-=0.5')
        .to(hero.querySelectorAll('.as-is, .cloud, .note-cloud'), { opacity: 0.62, duration: 0.8 }, '<')
        .from(hero.querySelector('[data-live]'), { opacity: 0, scale: 0, transformOrigin: '544px 290px', duration: 0.7, ease: 'back.out(3)' }, '-=0.2');
      gsap.from(root.querySelectorAll('.hero .h1-line, .hero-copy > p, .hero-actions'), { yPercent: 40, opacity: 0, duration: 1.1, ease, stagger: 0.08 });
    }


    // Revision cloud around the friction step.
    root.querySelectorAll<SVGPathElement>('.survey [data-cloud]').forEach(cloud => {
      const len = prepDraw(cloud);
      gsap.fromTo(cloud, { strokeDashoffset: len }, { strokeDashoffset: 0, duration: 1.4, ease: 'power2.inOut', scrollTrigger: { trigger: cloud.closest('li') ?? cloud, start: 'top 70%' } });
    });

    // Legacy lettering: the dashes keep running while the section is in view.
    gsap.utils.toArray<SVGTextElement>('[data-march]').forEach((t, i) => {
      gsap.fromTo(t, { strokeDashoffset: 0 }, { strokeDashoffset: i % 2 ? 120 : -120, ease: 'none', scrollTrigger: { trigger: t.closest('.legacy') ?? t, start: 'top bottom', end: 'bottom top', scrub: true } });
    });

    // Services schedule rows rule in.
    gsap.from('.schedule tbody tr', { y: 14, stagger: 0.07, duration: 0.8, ease, scrollTrigger: { trigger: '.schedule', start: 'top 78%' } });

    // A-04: the section line is drawn solid as you read through the stages.
    const line = root.querySelector<HTMLElement>('.stages');
    if (line) {
      const nodes = gsap.utils.toArray<HTMLElement>('.stages li');
      const paint = (p: number) => {
        line.style.setProperty('--p', p.toFixed(3));
        nodes.forEach((n, i) => n.classList.toggle('is-built', p >= i / (nodes.length - 1) - 0.02));
      };
      const st = ScrollTrigger.create({ trigger: line, start: 'top 75%', end: 'bottom 55%', scrub: 0.6, onUpdate: self => paint(self.progress) });
      paint(st.progress);
    }


    // A-03: one screen holds the viewport; scroll cuts to the next.
    const mm = gsap.matchMedia();
    mm.add('(min-width: 1000px)', () => {
      const stage = root.querySelector<HTMLElement>('.stage');
      if (!stage) return;
      const items = stage.querySelectorAll<HTMLElement>('.screen');
      const n = items.length;
      stage.classList.add('is-pinned');
      const setActive = (i: number) => {
        if (stage.dataset.active === String(i)) return;
        stage.dataset.active = String(i);
        items.forEach((it, k) => it.classList.toggle('is-active', k === i));
        stage.querySelectorAll('.stage-index button').forEach((b, k) => b.setAttribute('aria-current', k === i ? 'true' : 'false'));
      };
      setActive(0);
      const st = ScrollTrigger.create({
        trigger: stage, start: 'top top', end: () => `+=${(n - 1) * window.innerHeight * 0.9}`, pin: true, anticipatePin: 1,
        onUpdate: self => setActive(Math.min(n - 1, Math.round(self.progress * (n - 1)))),
      });
      const buttons = Array.from(stage.querySelectorAll<HTMLButtonElement>('.stage-index button'));
      const handlers = buttons.map((b, i) => {
        const h = () => scrollTo(st.start + ((st.end - st.start) * i) / (n - 1) + 2);
        b.addEventListener('click', h);
        return () => b.removeEventListener('click', h);
      });
      return () => {
        handlers.forEach(off => off());
        stage.classList.remove('is-pinned');
        items.forEach(it => it.classList.remove('is-active'));
        delete stage.dataset.active;
      };
    });
  }, root);

  // Images and fonts change layout; refresh triggers once they settle.
  const refresh = () => ScrollTrigger.refresh();
  window.addEventListener('load', refresh);
  document.fonts?.ready.then(refresh);
  cleanups.push(() => window.removeEventListener('load', refresh));

  return () => {
    ctx.revert();
    cleanups.forEach(fn => fn());
  };
}
