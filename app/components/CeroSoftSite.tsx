import { SyntheticEvent, useEffect, useId, useMemo, useRef, useState } from 'react';
import { ArrowRight, ArrowUpRight, ArrowDownRight, Check, CircleAlert, Menu, Phone, Plus, X } from 'lucide-react';
import { copy, PHONE, PHONE_HREF, navIds, type Lang } from './content';
import { setupMotion } from './motion';
import type { Focus } from './building';

const logo = '/icon-192.png';
const year = new Date().getFullYear();
const thb = (n: number, lang: Lang) => Math.round(n).toLocaleString(lang === 'th' ? 'th-TH' : 'en-US');

function Brand() {
  return (
    <a href="#home" className="brand" aria-label="CeroSoft">
      <img src={logo} alt="" width={32} height={32} />
      <b>Cero<span>Soft</span></b>
    </a>
  );
}

function Navbar({ lang, onLang }: { lang: Lang; onLang: () => void }) {
  const [open, setOpen] = useState(false);
  const c = copy[lang];
  useEffect(() => {
    if (!open) return;
    const esc = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', esc);
    return () => window.removeEventListener('keydown', esc);
  }, [open]);
  return (
    <header className="nav">
      <div className="capsule">
        <Brand />
        <nav className="nav-links" aria-label={c.menu}>
          {navIds.map(id => <a key={id} href={`#${id}`}>{c.nav[id]}</a>)}
        </nav>
        <div className="nav-actions">
          <button className="chip lang" type="button" onClick={onLang} lang={lang === 'th' ? 'en' : 'th'}>
            <span aria-hidden="true">{lang === 'th' ? 'EN' : 'TH'}</span>
            <span className="sr-only">{c.langLabel}</span>
          </button>
          <a className="chip cta" href="#contact">{c.talk}</a>
          <button className="chip menu-toggle" type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu" aria-label={c.menu}>
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </div>
      <nav id="mobile-menu" className="mobile-menu" aria-label={c.menu} hidden={!open}>
        {navIds.map(id => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{c.nav[id]}<ArrowRight aria-hidden="true" /></a>)}
        <a href={PHONE_HREF} onClick={() => setOpen(false)}>{c.footer.call} {PHONE}<Phone aria-hidden="true" /></a>
        <a href="#contact" onClick={() => setOpen(false)}>{c.talk}<ArrowRight aria-hidden="true" /></a>
      </nav>
    </header>
  );
}

/** Splits a line into graphemes (Thai vowels and tone marks stay with their consonant) so the hero can type itself in. */
const graphemes = (text: string) => {
  const seg = typeof Intl !== 'undefined' && 'Segmenter' in Intl ? new Intl.Segmenter(undefined, { granularity: 'grapheme' }) : null;
  return seg ? Array.from(seg.segment(text), s => s.segment) : Array.from(text);
};

function Typed({ text, className, accent = false }: { text: string; className?: string; accent?: boolean }) {
  const chars = graphemes(text);
  let last = -1;
  if (accent) for (let i = chars.length - 1; i >= 0; i--) if (/\p{L}/u.test(chars[i])) { last = i; break; }
  return (
    <span className={`typed ${className ?? ''}`}>
      <span className="sr-only">{text}</span>
      {chars.map((ch, i) => (
        <span key={i} aria-hidden="true" className={i === last ? 'ch last' : 'ch'}>{ch === ' ' ? ' ' : ch}</span>
      ))}
    </span>
  );
}

function Hero({ lang }: { lang: Lang }) {
  const c = copy[lang].hero;
  const twin = useRef<HTMLDivElement>(null);
  const api = useRef<{ setScroll(p: number): void; setMarkers(m: { key: string; label: string }[]): void; destroy(): void } | null>(null);
  const markers = useMemo(() => Object.entries(c.markers).map(([key, label]) => ({ key, label })), [c.markers]);

  const markersRef = useRef(markers);
  useEffect(() => { markersRef.current = markers; api.current?.setMarkers(markers); }, [markers]);

  useEffect(() => {
    let alive = true;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    import('./building').then(({ mountBuilding }) => {
      if (!alive || !twin.current) return;
      api.current = mountBuilding(twin.current, markersRef.current, reduced);
      const onScroll = () => {
        const el = twin.current;
        if (!el) return;
        api.current?.setScroll(window.scrollY / Math.max(1, el.offsetHeight));
      };
      window.addEventListener('scroll', onScroll, { passive: true });
      cleanupScroll = () => window.removeEventListener('scroll', onScroll);
    });
    let cleanupScroll = () => {};
    return () => { alive = false; cleanupScroll(); api.current?.destroy(); api.current = null; };
  }, []);

  return (
    <section id="home" className="hero dark" aria-labelledby="hero-title">
      <div className="twin" ref={twin} aria-hidden="true" />
      <p className="sr-only">{c.canvasLabel}</p>
      <div className="hero-copy wrap">
        <h1 id="hero-title">
          <Typed text={c.line1} className="l1" />
          <Typed text={c.line2} className="l2" accent />
        </h1>
        <p>{c.text}</p>
        <div className="hero-actions">
          <a className="btn primary" href="#contact">{c.primary}<ArrowRight aria-hidden="true" /></a>
          <a className="btn ghost" href="#condomate">{c.secondary}<ArrowDownRight aria-hidden="true" /></a>
        </div>
        <p className="data-note"><i className="live-dot static" />{c.dataNote}</p>
      </div>
      <div className="notch" aria-hidden="true" />
    </section>
  );
}

function Statement({ lang }: { lang: Lang }) {
  const c = copy[lang].statement;
  const words = c.text.split(/(?<=\s)/);
  return (
    <section className="statement light" aria-labelledby="statement-title">
      <div className="wrap narrow">
        <h2 id="statement-title" className="statement-title">{c.sub}</h2>
        <p className="reveal-text">{words.map((w, i) => <span key={i} className="w">{w}</span>)}</p>
      </div>
    </section>
  );
}

function PathDiagram({ kind }: { kind: 'one' | 'few' | 'all' }) {
  return (
    <svg viewBox="0 0 240 140" className="path-diagram" aria-hidden="true">
      {kind === 'one' && (
        <>
          <rect x="96" y="46" width="48" height="48" rx="6" className="node hot" />
          <path d="M60 70h36M144 70h36" className="link dashed" />
          <rect x="24" y="58" width="36" height="24" rx="4" className="node" />
          <rect x="180" y="58" width="36" height="24" rx="4" className="node" />
        </>
      )}
      {kind === 'few' && (
        <>
          <rect x="20" y="16" width="44" height="28" rx="4" className="node" />
          <rect x="20" y="56" width="44" height="28" rx="4" className="node" />
          <rect x="20" y="96" width="44" height="28" rx="4" className="node" />
          <path d="M64 30h40v40M64 70h40M64 110h40V70" className="link" />
          <rect x="104" y="48" width="48" height="44" rx="6" className="node hot" />
          <path d="M152 70h40" className="link" />
          <rect x="192" y="56" width="36" height="28" rx="4" className="node" />
        </>
      )}
      {kind === 'all' && (
        <>
          <rect x="94" y="44" width="52" height="52" rx="8" className="node hot" />
          {[[24, 14], [24, 98], [182, 14], [182, 98], [103, 4], [103, 112]].map(([x, y], i) => (
            <rect key={i} x={x} y={y} width="34" height={i > 3 ? 24 : 28} rx="4" className="node" />
          ))}
          <path d="M58 28h36v16M58 112h36V96M182 28h-36v16M182 112h-36V96M120 28v16M120 112V96" className="link" />
        </>
      )}
    </svg>
  );
}

function Paths({ lang }: { lang: Lang }) {
  const c = copy[lang].paths;
  return (
    <section className="paths light" aria-labelledby="paths-title">
      <div className="wrap">
        <div className="center-head">
          <h2 id="paths-title">{c.title}</h2>
          <p>{c.text}</p>
        </div>
        <ul className="path-cards">
          {c.items.map(p => (
            <li key={p.key} className="path-card">
              <PathDiagram kind={p.key} />
              <h3>{p.title}</h3>
              <p>{p.text}</p>
              <span className="tag">{p.service}</span>
            </li>
          ))}
        </ul>
        <div className="center-cta"><a className="btn outline" href="#contact">{c.cta}<ArrowRight aria-hidden="true" /></a></div>
      </div>
    </section>
  );
}

function Range({ id, label, unit, value, min, max, step, onChange }: { id: string; label: string; unit: string; value: number; min: number; max: number; step: number; onChange: (n: number) => void }) {
  return (
    <div className="range">
      <label htmlFor={id}>{label}</label>
      <div className="range-row">
        <input id={id} type="range" min={min} max={max} step={step} value={value} onChange={e => onChange(Number(e.target.value))} style={{ ['--fill' as string]: `${((value - min) / (max - min)) * 100}%` }} />
        <output htmlFor={id}><b>{value}</b> {unit}</output>
      </div>
    </div>
  );
}

function Calculator({ lang }: { lang: Lang }) {
  const c = copy[lang].calc;
  const id = useId();
  const [people, setPeople] = useState(3);
  const [hours, setHours] = useState(2);
  const [days, setDays] = useState(22);
  const [wage, setWage] = useState(80);
  const hoursYear = people * hours * days * 12;
  const cost = hoursYear * wage;
  return (
    <section className="calc light" aria-labelledby="calc-title">
      <div className="wrap">
        <div className="center-head">
          <h2 id="calc-title">{c.title}</h2>
          <p>{c.text}</p>
        </div>
        <div className="calc-grid">
          <form className="calc-form" onSubmit={e => e.preventDefault()} aria-label={c.formTitle}>
            <h3>{c.formTitle}</h3>
            <Range id={`${id}-p`} label={c.people} unit={c.unitPeople} value={people} min={1} max={30} step={1} onChange={setPeople} />
            <Range id={`${id}-h`} label={c.hours} unit={c.unitHours} value={hours} min={0.5} max={8} step={0.5} onChange={setHours} />
            <Range id={`${id}-d`} label={c.days} unit={c.unitDays} value={days} min={4} max={30} step={1} onChange={setDays} />
            <Range id={`${id}-w`} label={c.wage} unit={c.unitWage} value={wage} min={40} max={500} step={10} onChange={setWage} />
          </form>
          <div className="calc-result dark-card" aria-live="polite">
            <p className="result-title">{c.resultTitle}</p>
            <p className="big"><b>{thb(hoursYear, lang)}</b> {c.hoursYear}</p>
            <p className="big money"><b>฿{thb(cost, lang)}</b> {c.costYear}</p>
            <p className="formula">{c.note}</p>
            <a className="btn primary" href="#contact">{c.cta}<ArrowRight aria-hidden="true" /></a>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Where each CondoMate screen happens on the building: the home screen covers the whole building. */
const panelFocus: Record<(typeof copy)['en']['condo']['screens'][number]['key'], Focus> = {
  home: 'all',
  repairs: 'repair', // VIS-REP-1, room 715
  booking: 'booking',
  finance: 'finance',
  room: 'repair', // the test resident's room 715
};

function CondoMate({ lang }: { lang: Lang }) {
  const c = copy[lang].condo;
  const [active, setActive] = useState(0);
  const [tab, setTab] = useState(0);
  const blocks = useRef<(HTMLElement | null)[]>([]);
  useEffect(() => {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) setActive(Number((e.target as HTMLElement).dataset.i));
      });
    }, { rootMargin: '-45% 0px -45% 0px' });
    blocks.current.forEach(b => b && io.observe(b));
    return () => io.disconnect();
  }, [lang]);

  // Desktop only: a small twin of Punna Residence 5 beside the phone, lit where the current feature happens.
  const twin = useRef<HTMLDivElement>(null);
  const twinApi = useRef<{ focus(key: Focus): void; destroy(): void } | null>(null);
  const focus = panelFocus[c.screens[active].key] ?? 'all';
  const focusRef = useRef(focus);
  useEffect(() => { focusRef.current = focus; twinApi.current?.focus(focus); }, [focus]);
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1000px)');
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let alive = true;
    const unmount = () => { twinApi.current?.destroy(); twinApi.current = null; };
    const sync = () => {
      if (!mq.matches) return unmount();
      if (twinApi.current) return;
      import('./building').then(({ mountPanelTwin }) => {
        if (!alive || !mq.matches || twinApi.current || !twin.current) return;
        twinApi.current = mountPanelTwin(twin.current, reduced);
        twinApi.current.focus(focusRef.current);
      });
    };
    sync();
    mq.addEventListener('change', sync);
    return () => { alive = false; mq.removeEventListener('change', sync); unmount(); };
  }, []);

  return (
    <section id="condomate" className="condomate light" aria-labelledby="condo-title">
      <div className="wrap">
        <div className="center-head">
          <h2 id="condo-title">{c.title}</h2>
          <p className="live-line"><i className="live-dot" />{c.live}</p>
          <p>{c.text}</p>
        </div>
      </div>
      <div className="wrap scroller">
        <div className="scroller-text">
          {c.screens.map((s, i) => (
            <article key={s.src} ref={el => { blocks.current[i] = el; }} data-i={i} className={`step ${i === active ? 'is-active' : ''}`}>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <figure className="inline-phone">
                <img src={s.src} alt={`CondoMate — ${s.title}`} width={s.w} height={s.h} loading="lazy" decoding="async" />
              </figure>
            </article>
          ))}
          <p className="scroller-note">{c.note}</p>
        </div>
        <div className="scroller-panel dark-card" aria-hidden="true">
          <div className="twin panel-twin" ref={twin} />
          <p className="panel-place">Punna Residence 5</p>
          <div className="panel-phone">
            {c.screens.map((s, i) => (
              <img key={s.src} src={s.src} alt="" width={s.w} height={s.h} className={i === active ? 'is-active' : ''} loading={i === 0 ? 'eager' : 'lazy'} decoding="async" />
            ))}
          </div>
          <ul className="panel-labels">
            {c.screens[active].callouts.map(co => <li key={co.label}><i />{co.label}</li>)}
          </ul>
          <p className="panel-count">{String(active + 1).padStart(2, '0')} / {String(c.screens.length).padStart(2, '0')}</p>
        </div>
      </div>

      <div className="wrap console">
        <div className="console-head">
          <h3>{c.console.title}</h3>
          <p>{c.console.text}</p>
        </div>
        <div className="tabs" role="tablist" aria-label={c.console.title}>
          {c.console.tabs.map((t, i) => (
            <button key={t.name} type="button" role="tab" id={`tab-${t.name}`} aria-selected={tab === i} aria-controls={`panel-${t.name}`} tabIndex={tab === i ? 0 : -1} className="chip" onClick={() => setTab(i)}
              onKeyDown={e => { if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') { const n = (i + (e.key === 'ArrowRight' ? 1 : -1) + c.console.tabs.length) % c.console.tabs.length; setTab(n); document.getElementById(`tab-${c.console.tabs[n].name}`)?.focus(); } }}>
              {t.title}
            </button>
          ))}
        </div>
        {c.console.tabs.map((t, i) => (
          <div key={t.name} id={`panel-${t.name}`} role="tabpanel" aria-labelledby={`tab-${t.name}`} hidden={tab !== i} className="console-panel">
            <div className="console-shot">
              <img src={t.src} alt={`CondoMate — ${t.title}`} width={t.w} height={t.h} loading="lazy" decoding="async" />
            </div>
            <p className="console-caption"><b>{t.title}</b> {t.text}</p>
          </div>
        ))}
        <ul className="feature-chips">
          {c.features.map(f => <li key={f}><Check aria-hidden="true" />{f}</li>)}
        </ul>
        <div className="center-cta"><a className="btn primary" href="#contact">{c.cta}<ArrowRight aria-hidden="true" /></a></div>
      </div>
    </section>
  );
}

function Services({ lang }: { lang: Lang }) {
  const c = copy[lang].services;
  const [tab, setTab] = useState(0);
  const s = c.items[tab];
  return (
    <section id="services" className="services dark" aria-labelledby="services-title">
      <div className="notch top" aria-hidden="true" />
      <div className="wrap">
        <div className="center-head">
          <h2 id="services-title">{c.title}</h2>
          <p>{c.text}</p>
        </div>
        <div className="tabs center" role="tablist" aria-label={c.title}>
          {c.items.map((it, i) => (
            <button key={it.title} type="button" role="tab" id={`svc-${i}`} aria-selected={tab === i} aria-controls="svc-panel" tabIndex={tab === i ? 0 : -1} className="chip" onClick={() => setTab(i)}
              onKeyDown={e => { if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') { const n = (i + (e.key === 'ArrowRight' ? 1 : -1) + c.items.length) % c.items.length; setTab(n); document.getElementById(`svc-${n}`)?.focus(); } }}>
              {it.title}
            </button>
          ))}
        </div>
        <div id="svc-panel" role="tabpanel" aria-labelledby={`svc-${tab}`} className="svc-panel" key={tab}>
          <div>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </div>
          <ul>{s.items.map(x => <li key={x}><i className="live-dot static" />{x}</li>)}</ul>
        </div>
      </div>
      <div className="notch" aria-hidden="true" />
    </section>
  );
}

function Process({ lang }: { lang: Lang }) {
  const c = copy[lang].process;
  return (
    <section id="process" className="process light" aria-labelledby="process-title">
      <div className="wrap">
        <div className="center-head">
          <h2 id="process-title">{c.title}</h2>
          <p>{c.text}</p>
        </div>
        <ol className="stages">
          {c.steps.map(s => (
            <li key={s.n}>
              <span className="stage-no">{s.n}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function About({ lang }: { lang: Lang }) {
  const c = copy[lang].about;
  return (
    <section id="about" className="about light" aria-labelledby="about-title">
      <div className="wrap">
        <div className="center-head wide">
          <h2 id="about-title">{c.title}</h2>
          <p>{c.text}</p>
        </div>
        <div className="about-grid">
          <div className="about-card"><h3>{c.mission[0]}</h3><p>{c.mission[1]}</p></div>
          <div className="about-card"><h3>{c.vision[0]}</h3><p>{c.vision[1]}</p></div>
          <div className="about-card values">
            <h3>{c.valuesTitle}</h3>
            <dl>{c.values.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}</dl>
          </div>
        </div>
        <div className="founder" aria-labelledby="founder-title">
          <img className="founder-photo" src="/founder/portrait.webp" alt={c.founder.name} width={600} height={724} loading="lazy" decoding="async" />
          <div className="founder-body">
            <h3 id="founder-title">{c.founder.title}</h3>
            <p className="founder-name"><b>{c.founder.name}</b><span>{c.founder.role} · CeroSoft</span></p>
            <p className="founder-text">{c.founder.text}</p>
            <ul className="founder-exp">
              {c.founder.experience.map(x => (
                <li key={x.org}><b>{x.org}</b><span>{x.role}</span><small>{x.when}</small></li>
              ))}
            </ul>
            <a className="founder-cta" href="https://cheer.cerosoft.net/" target="_blank" rel="noopener">{c.founder.cta}<ArrowUpRight aria-hidden="true" /></a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Faq({ lang }: { lang: Lang }) {
  const c = copy[lang].faq;
  return (
    <section id="faq" className="faq light" aria-labelledby="faq-title">
      <div className="wrap faq-grid">
        <div>
          <h2 id="faq-title">{c.title}</h2>
          <p>{c.text}</p>
        </div>
        <div className="faq-list">
          {c.items.map(f => (
            <details key={f.q}>
              <summary>{f.q}<Plus aria-hidden="true" /></summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

type Status = { kind: 'success' | 'error' | 'failed'; message: string } | null;
type Field = 'name' | 'email' | 'phone' | 'interest' | 'message';
type Errors = Partial<Record<Field, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const digits = (v: string) => v.replace(/\D/g, '').length;

function Contact({ lang }: { lang: Lang }) {
  const c = copy[lang].contact;
  const id = useId();
  const [status, setStatus] = useState<Status>(null);
  const [sending, setSending] = useState(false);
  const [errors, setErrors] = useState<Errors>({});

  const validate = (fd: FormData): Errors => {
    const v = (k: string) => String(fd.get(k) ?? '').trim();
    const out: Errors = {};
    if (!v('name')) out.name = c.errors.name;
    const email = v('email'), phone = v('phone');
    if (!email && !phone) { out.email = c.errors.contact; out.phone = c.errors.contact; }
    if (email && !EMAIL_RE.test(email)) out.email = c.errors.email;
    if (phone && digits(phone) < 9) out.phone = c.errors.phone;
    if (!v('interest')) out.interest = c.errors.interest;
    if (!v('message')) out.message = c.errors.message;
    return out;
  };

  // Clear a field's error as soon as the visitor edits it; email and phone clear together.
  const onInput = (e: SyntheticEvent<HTMLFormElement>) => {
    const name = (e.target as HTMLInputElement).name as Field;
    if (!name || !(name in errors)) return;
    setErrors(prev => {
      const next = { ...prev };
      delete next[name];
      if ((name === 'email' || name === 'phone') && prev.email === c.errors.contact) { delete next.email; delete next.phone; }
      return next;
    });
  };

  const submit = async (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const found = validate(fd);
    setErrors(found);
    const firstBad = (['name', 'email', 'phone', 'interest', 'message'] as Field[]).find(k => found[k]);
    if (firstBad) {
      setStatus({ kind: 'error', message: c.invalid });
      form.querySelector<HTMLElement>(`[name="${firstBad}"]`)?.focus();
      return;
    }
    setSending(true);
    setStatus(null);
    try {
      const data = Object.fromEntries(fd.entries());
      const res = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...data, language: lang }) });
      if (!res.ok) throw new Error('send failed');
      setStatus({ kind: 'success', message: c.success });
      form.reset();
    } catch {
      // The visitor's input stays in the form; the phone number is the way through.
      setStatus({ kind: 'failed', message: c.failed });
    } finally {
      setSending(false);
    }
  };

  const err = (k: Field) => errors[k] ? { 'aria-invalid': true as const, 'aria-describedby': `${id}-${k}-err` } : {};
  const errText = (k: Field) => errors[k] ? <small id={`${id}-${k}-err`} className="field-error">{errors[k]}</small> : null;
  return (
    <section id="contact" className="contact light" aria-labelledby="contact-title">
      <div className="wrap contact-grid">
        <div>
          <h2 id="contact-title">{c.title}</h2>
          <p>{c.text}</p>
          <ul className="bullets">{c.bullets.map(b => <li key={b}><i className="live-dot static" />{b}</li>)}</ul>
          <div className="call">
            <p className="call-title">{c.callTitle}</p>
            <a className="btn outline call-btn" href={PHONE_HREF}><Phone aria-hidden="true" />{PHONE}</a>
            <p className="call-note">{c.callNote}</p>
          </div>
        </div>
        <form className="contact-form dark-card" onSubmit={submit} onInput={onInput} noValidate aria-busy={sending} aria-describedby={`${id}-status`}>
          <label className="hp">{c.honeypot}<input type="text" name="website" tabIndex={-1} autoComplete="off" /></label>
          <div className="fields">
            <label htmlFor={`${id}-name`}><span>{c.fields[0]} *</span><input id={`${id}-name`} name="name" autoComplete="name" maxLength={100} {...err('name')} />{errText('name')}</label>
            <label htmlFor={`${id}-company`}><span>{c.fields[1]} <em>({c.optional})</em></span><input id={`${id}-company`} name="company" autoComplete="organization" maxLength={150} /></label>
            <p className="wide contact-hint" id={`${id}-hint`}>{c.contactHint}</p>
            <label htmlFor={`${id}-email`}><span>{c.fields[2]}</span><input id={`${id}-email`} type="email" inputMode="email" name="email" autoComplete="email" maxLength={200} {...err('email')} />{errText('email')}</label>
            <label htmlFor={`${id}-phone`}><span>{c.fields[3]}</span><input id={`${id}-phone`} type="tel" inputMode="tel" name="phone" autoComplete="tel" maxLength={30} {...err('phone')} />{errText('phone')}</label>
            <label className="wide" htmlFor={`${id}-interest`}><span>{c.fields[4]} *</span>
              <select id={`${id}-interest`} name="interest" defaultValue="" {...err('interest')}>
                <option value="" disabled>{c.select}</option>
                {c.interests.map(x => <option key={x}>{x}</option>)}
              </select>
              {errText('interest')}
            </label>
            <label className="wide" htmlFor={`${id}-message`}><span>{c.fields[5]} *</span><textarea id={`${id}-message`} name="message" rows={4} maxLength={3000} {...err('message')} />{errText('message')}</label>
          </div>
          <button className="btn primary submit" type="submit" disabled={sending}>{sending ? c.sending : c.send}<ArrowRight aria-hidden="true" /></button>
          <output id={`${id}-status`} className={`status ${status?.kind ?? ''}`} aria-live="polite">
            {status && <>{status.kind === 'success' ? <Check aria-hidden="true" /> : <CircleAlert aria-hidden="true" />}<span>{status.message}{status.kind === 'failed' && <> <a href={PHONE_HREF}>{PHONE}</a></>}</span></>}
          </output>
        </form>
      </div>
    </section>
  );
}

function Footer({ lang }: { lang: Lang }) {
  const c = copy[lang];
  return (
    <footer className="footer dark">
      <div className="notch top" aria-hidden="true" />
      <div className="wrap closing">
        <h2>{c.closing.title}</h2>
        <a className="btn primary" href="#contact">{c.closing.cta}<ArrowRight aria-hidden="true" /></a>
      </div>
      <div className="wrap footer-grid">
        <div className="fb-brand">
          <Brand />
          <p>{c.footer.tagline}</p>
          <p className="muted">{c.footer.line}</p>
        </div>
        <nav aria-label={c.footer.menu}>
          <h3>{c.footer.menu}</h3>
          {navIds.map(id => <a key={id} href={`#${id}`}>{c.nav[id]}</a>)}
        </nav>
        <div>
          <h3>{c.footer.services}</h3>
          {c.services.items.map(s => <span key={s.title}>{s.title}</span>)}
        </div>
        <div>
          <h3>{c.footer.contact}</h3>
          <a href={PHONE_HREF}>{c.footer.call} {PHONE}</a>
          <a href="https://cerosoft.net">cerosoft.net</a>
          <a href="https://cheer.cerosoft.net/" target="_blank" rel="noopener">{c.footer.founder}</a>
          <span>{c.footer.city}</span>
        </div>
      </div>
      <div className="wrap copyright">© {year} CeroSoft</div>
    </footer>
  );
}

export default function CeroSoftSite() {
  const [lang, setLang] = useState<Lang>(() => {
    try { return localStorage.getItem('cerosoft-lang') === 'en' ? 'en' : 'th'; } catch { return 'th'; }
  });
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = lang === 'th' ? 'CeroSoft | เริ่มจากศูนย์ สู่โซลูชันที่ใช่' : 'CeroSoft | From Zero to Solution.';
  }, [lang]);

  useEffect(() => {
    if (!root.current) return;
    return setupMotion(root.current);
  }, [lang]);

  const toggle = () => {
    const next = lang === 'en' ? 'th' : 'en';
    setLang(next);
    try { localStorage.setItem('cerosoft-lang', next); } catch { /* storage unavailable */ }
  };

  return (
    <div ref={root} className="site" lang={lang}>
      <a className="skip-link" href="#main-content">{copy[lang].skip}</a>
      <Navbar lang={lang} onLang={toggle} />
      <main id="main-content" tabIndex={-1}>
        <Hero lang={lang} />
        <Statement lang={lang} />
        <Paths lang={lang} />
        <Calculator lang={lang} />
        <CondoMate lang={lang} />
        <Services lang={lang} />
        <Process lang={lang} />
        <About lang={lang} />
        <Faq lang={lang} />
        <Contact lang={lang} />
      </main>
      <Footer lang={lang} />
    </div>
  );
}
