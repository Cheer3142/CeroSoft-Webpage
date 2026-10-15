import { useLayoutEffect, useRef } from 'react';
import type { Lang } from './content';
import { copy } from './content';

/** Revision cloud: scalloped outline drafters draw around a change. */
export function cloudPath(x: number, y: number, w: number, h: number, r = 14) {
  const edge = (len: number) => Math.max(2, Math.round(len / (r * 1.6)));
  const pts: [number, number][] = [];
  const nx = edge(w), ny = edge(h);
  for (let i = 0; i < nx; i++) pts.push([x + (w * i) / nx, y]);
  for (let i = 0; i < ny; i++) pts.push([x + w, y + (h * i) / ny]);
  for (let i = 0; i < nx; i++) pts.push([x + w - (w * i) / nx, y + h]);
  for (let i = 0; i < ny; i++) pts.push([x, y + h - (h * i) / ny]);
  let d = `M${pts[0][0].toFixed(1)} ${pts[0][1].toFixed(1)}`;
  for (let i = 1; i <= pts.length; i++) {
    const [px, py] = pts[i % pts.length];
    const [ox, oy] = pts[i - 1];
    const rr = Math.hypot(px - ox, py - oy) / 1.7;
    d += ` A${rr.toFixed(1)} ${rr.toFixed(1)} 0 0 1 ${px.toFixed(1)} ${py.toFixed(1)}`;
  }
  return d + 'Z';
}

function Tick({ x, y }: { x: number; y: number }) {
  return <path d={`M${x - 5} ${y + 5}L${x + 5} ${y - 5}`} className="tick" />;
}

export function HeroPlan({ lang }: { lang: Lang }) {
  const p = copy[lang].hero.plan;
  return (
    <svg className="hero-plan" viewBox="0 0 560 520" aria-labelledby="plan-title">
      <title id="plan-title">{lang === 'th' ? 'แผนผัง: Excel แชต LINE และเอกสารกระดาษ เชื่อมเข้าสู่ระบบเดียว' : 'Plan: Excel, LINE chats and paper forms connected into one system'}</title>

      <text x="0" y="12" className="plan-label">{p.asis.toUpperCase()}</text>

      {/* As-is: three disconnected tools, drawn dashed */}
      <g className="as-is">
        <rect x="16" y="40" width="160" height="88" />
        <path d="M34 96h46M34 108h46M34 84h46M50 74v44M66 74v44" className="glyph" />
        <text x="96" y="104" className="node-label">{p.excel}</text>

        <rect x="378" y="28" width="166" height="88" />
        <path d="M396 64h44a8 8 0 0 1 8 8v16a8 8 0 0 1-8 8h-30l-10 9v-9h-4a8 8 0 0 1-8-8V72a8 8 0 0 1 8-8z" className="glyph" />
        <text x="454" y="92" className="node-label small">{p.line}</text>

        <rect x="30" y="392" width="176" height="88" />
        <path d="M48 414h34v46H48zM54 408h34v6M60 426h16M60 436h16M60 446h10" className="glyph" />
        <text x="98" y="444" className="node-label">{p.paper}</text>

        <path d="M176 70C250 40 310 40 378 64" className="link" />
        <path d="M420 116C380 230 260 330 206 420" className="link" />
        <path d="M80 392C60 300 70 200 96 128" className="link" />
      </g>

      <path d={cloudPath(196, 168, 150, 66, 12)} className="cloud" data-cloud />
      <path d="M196 150l6-11 6 11z" className="note-cloud delta" />
      <text x="214" y="150" className="note note-cloud">{p.friction}</text>
      <text x="271" y="206" className="note note-strong">{p.reentry}</text>

      {/* As-built: solid connectors into one system */}
      <g className="as-built">
        <path d="M176 112H360V290" data-draw />
        <path d="M461 116V300" data-draw />
        <path d="M206 452H300V400H330" data-draw />
        <circle cx="360" cy="290" r="3.5" className="joint" />
        <circle cx="461" cy="300" r="3.5" className="joint" />
        <circle cx="330" cy="400" r="3.5" className="joint" />
        <rect x="330" y="290" width="214" height="176" className="system" data-draw />
        <rect x="337" y="297" width="200" height="162" className="system inner" data-draw />
        <image href="/icon-192.png" x="404" y="318" width="66" height="66" className="system-mark" />
        <text x="437" y="420" className="node-label strong">{p.system}</text>
        <text x="437" y="440" className="note center">CeroSoft</text>
      </g>
      <g className="live" data-live>
        <circle cx="544" cy="290" r="6" className="live-dot" />
        <text x="544" y="276" className="live-label">{p.live.toUpperCase()}</text>
      </g>
      <text x="344" y="500" className="plan-label">{p.asbuilt.toUpperCase()}</text>
      <Tick x={334} y={496} />
    </svg>
  );
}

/** Large dashed lettering for the "today" workflow. The viewBox follows the real text box. */
export function DashedWord({ word, index }: { word: string; index: number }) {
  const svg = useRef<SVGSVGElement>(null);
  const text = useRef<SVGTextElement>(null);
  useLayoutEffect(() => {
    const fit = () => {
      if (!svg.current || !text.current) return;
      const b = text.current.getBBox();
      if (b.width) svg.current.setAttribute('viewBox', `${b.x - 4} ${b.y - 4} ${b.width + 8} ${b.height + 8}`);
    };
    fit();
    document.fonts?.ready.then(fit);
  }, [word]);
  return (
    <svg ref={svg} className="dashed-word" viewBox="0 0 400 140" aria-hidden="true" style={{ ['--i' as string]: index }}>
      <text ref={text} x="0" y="110" data-march>{word}</text>
    </svg>
  );
}

/** Horizontal dimension line with arrow ticks and a centred value. */
export function Dimension({ label, className = '' }: { label: string; className?: string }) {
  return (
    <div className={`dimension ${className}`} aria-hidden="true">
      <span className="dimension-line" />
      <span className="dimension-label">{label}</span>
    </div>
  );
}
