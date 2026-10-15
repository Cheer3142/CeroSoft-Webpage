import { SyntheticEvent, useEffect, useId, useRef, useState } from 'react';
import { ArrowRight, ArrowDownRight, Check, CircleAlert, Menu, X } from 'lucide-react';
import { copy, sheetIds, type Lang, type SheetId } from './content';
import { cloudPath, DashedWord, Dimension, HeroPlan } from './drawings';
import { setupMotion } from './motion';

const logo = '/icon-192.png';
const year = new Date().getFullYear();

function Brand({ className = '' }: { className?: string }) {
  return (
    <a href="#home" className={`brand ${className}`} aria-label="CeroSoft">
      <img src={logo} alt="" width={36} height={36} />
      <b>Cero<span>Soft</span></b>
    </a>
  );
}

/** The title-block band that opens every sheet of the set. */
function SheetBand({ id, lang, tone = 'film' }: { id: SheetId; lang: Lang; tone?: 'film' | 'ink' }) {
  const s = copy[lang].sheets[id];
  return (
    <div className={`sheet-band ${tone}`} aria-hidden="true">
      <span className="band-no">{s.no}</span>
      <span className="band-title">{s.title}</span>
      <span className="band-meta">CeroSoft · {year}</span>
    </div>
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
      <div className="frame nav-inner">
        <Brand />
        <nav className="nav-index" aria-label={c.menu}>
          {sheetIds.map(id => (
            <a key={id} href={`#${id}`}><small>{c.sheets[id].no}</small>{c.sheets[id].title}</a>
          ))}
        </nav>
        <button className="lang-toggle" type="button" onClick={onLang} lang={lang === 'th' ? 'en' : 'th'}>
          <span aria-hidden="true">{lang === 'th' ? 'EN' : 'TH'}</span>
          <span className="sr-only">{c.langLabel}</span>
        </button>
        <a className="cell-cta nav-cta" href="#contact">{c.talk}<ArrowRight aria-hidden="true" /></a>
        <button className="menu-toggle" type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="sheet-menu" aria-label={c.menu}>
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>
      <nav id="sheet-menu" className={`sheet-menu ${open ? 'open' : ''}`} aria-label={c.menu} hidden={!open}>
        {sheetIds.map(id => (
          <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>
            <small>{c.sheets[id].no}</small>{c.sheets[id].title}<ArrowRight aria-hidden="true" />
          </a>
        ))}
      </nav>
    </header>
  );
}

function Hero({ lang }: { lang: Lang }) {
  const c = copy[lang].hero;
  return (
    <section id="home" className="hero sheet" aria-labelledby="hero-title">
      <div className="frame hero-grid">
        <div className="hero-copy">
          <h1 id="hero-title">{c.title}</h1>
          <p>{c.text}</p>
          <div className="hero-actions">
            <a className="cell-cta" href="#contact">{c.primary}<ArrowRight aria-hidden="true" /></a>
            <a className="ink-link" href="#condomate">{c.secondary}<ArrowDownRight aria-hidden="true" /></a>
          </div>
        </div>
        <div className="hero-drawing">
          <HeroPlan lang={lang} />
        </div>
      </div>
      <div className="frame title-block" aria-hidden="true">
        <span><small>{lang === 'th' ? 'แผ่นที่' : 'Sheet'}</small>A-00</span>
        <span className="tb-wide"><small>{lang === 'th' ? 'ชื่อแผ่นงาน' : 'Title'}</small>{c.sheetTitle}</span>
        <span><small>{lang === 'th' ? 'มาตราส่วน' : 'Scale'}</small>1 : 1</span>
        <span><small>{lang === 'th' ? 'ปี' : 'Year'}</small>{year}</span>
      </div>
    </section>
  );
}

function Problem({ lang }: { lang: Lang }) {
  const c = copy[lang].problem;
  return (
    <section id="problem" className="sheet problem" aria-labelledby="problem-title">
      <SheetBand id="problem" lang={lang} />
      <div className="frame split">
        <div>
          <h2 id="problem-title">{c.title}</h2>
          <p className="lede">{c.text}</p>
          <p className="muted">{c.close}</p>
        </div>
        <ol className="survey">
          {c.steps.map((s, i) => (
            <li key={s.n} className={i === 1 ? 'is-friction' : ''}>
              <span className="survey-no">{s.n}</span>
              <div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
              {i === 1 && (
                <svg className="survey-cloud" viewBox="0 0 400 120" preserveAspectRatio="none" aria-hidden="true">
                  <path d={cloudPath(6, 8, 388, 104, 10)} data-cloud vectorEffect="non-scaling-stroke" />
                </svg>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Legacy({ lang }: { lang: Lang }) {
  const c = copy[lang].legacy;
  return (
    <section className="sheet legacy" aria-labelledby="legacy-title">
      <div className="frame">
        <div className="legacy-words">
          {c.words.map((w, i) => <DashedWord key={w} word={w} index={i} />)}
        </div>
        <div className="legacy-foot">
          <h2 id="legacy-title" className="h3">{c.title}</h2>
          <p>{c.text}</p>
          <ul className="line-legend">
            <li><i className="key dashed" />{c.legendOld}</li>
            <li><i className="key solid" />{c.legendNew}</li>
          </ul>
          <a className="ink-link" href="#contact">{c.cta}<ArrowRight aria-hidden="true" /></a>
        </div>
      </div>
    </section>
  );
}

function Services({ lang }: { lang: Lang }) {
  const c = copy[lang].services;
  return (
    <section id="services" className="sheet services" aria-labelledby="services-title">
      <SheetBand id="services" lang={lang} />
      <div className="frame">
        <div className="split head">
          <h2 id="services-title">{c.title}</h2>
          <p className="lede">{c.text}</p>
        </div>
        <table className="schedule">
          <caption className="sr-only">{copy[lang].sheets.services.title}</caption>
          <thead>
            <tr>{c.head.map(h => <th key={h} scope="col">{h}</th>)}</tr>
          </thead>
          <tbody>
            {c.rows.map(r => (
              <tr key={r.code}>
                <td className="code">{r.code}</td>
                <th scope="row">{r.title}</th>
                <td>{r.text}</td>
                <td className="items">{r.items}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function CondoMate({ lang }: { lang: Lang }) {
  const c = copy[lang].condo;
  return (
    <section id="condomate" className="sheet condomate ink" aria-labelledby="condo-title">
      <SheetBand id="condomate" lang={lang} tone="ink" />
      <div className="frame condo-head">
        <div>
          <h2 id="condo-title" className="display">{c.title}</h2>
          <p className="condo-sub">{c.sub}</p>
        </div>
        <div>
          <p className="lede">{c.text}</p>
          <ul className="status-legend">
            <li><i className="live-dot" />{c.live}</li>
            <li><i className="key solid" />{c.resident}</li>
            <li><i className="key double" />{c.management}</li>
          </ul>
        </div>
      </div>

      <div className="stage" data-active="0">
        <div className="frame stage-frame">
          <div className="stage-aside">
            <p className="stage-title">{c.stageTitle}</p>
            <nav className="stage-index" aria-label={c.resident}>
              {c.screens.map((s, i) => (
                <button key={s.src} type="button" aria-current={i === 0 ? 'true' : 'false'}>
                  <small>{String(i + 1).padStart(2, '0')}</small>{s.title}
                </button>
              ))}
            </nav>
            <p className="stage-note">{c.note}</p>
          </div>
          <div className="screens">
            {c.screens.map((s, i) => (
              <article key={s.src} className={`screen ${i === 0 ? 'is-active' : ''}`} aria-labelledby={`screen-${i}`}>
                <div className="screen-caption">
                  <h3 id={`screen-${i}`}>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
                <figure className="device">
                  <span className="dim dim-w" aria-hidden="true"><b>390</b></span>
                  <span className="dim dim-h" aria-hidden="true"><b>844</b></span>
                  <div className="device-glass">
                    <img src={s.src} alt={`CondoMate — ${s.title}`} width={s.w} height={s.h} loading={i === 0 ? 'eager' : 'lazy'} decoding="async" />
                  </div>
                  <ol className="callouts">
                    {s.callouts.map((co, k) => (
                      <li key={co.label} style={{ ['--y' as string]: `${co.y}%`, ['--k' as string]: k }}>
                        <span className="callout-no">{k + 1}</span>
                        <span className="callout-label">{co.label}</span>
                      </li>
                    ))}
                  </ol>
                </figure>
              </article>
            ))}
          </div>
        </div>
      </div>

      <div className="frame more">
        <h3 className="h4">{c.more}</h3>
        <ul className="contact-sheet">
          {c.moreScreens.map((m, i) => (
            <li key={m.src}>
              <div className="thumb"><img src={m.src} alt={`CondoMate — ${m.title}`} width={390} height={844} loading="lazy" decoding="async" /></div>
              <span><small>{String(i + 6).padStart(2, '0')}</small>{m.title}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="frame elevation-wrap">
        <div className="elevation-head">
          <h3>{c.console.title}</h3>
          <p>{c.console.text}</p>
        </div>
        <Dimension label="1366 px" className="on-ink" />
        <div className="elevation">
          {c.console.items.map(it => (
            <figure key={it.name}>
              <div className="plate">
                <picture>
                  <source media="(max-width: 680px)" srcSet={`/portfolio/condomate-${it.name}-mobile.png`} />
                  <img src={`/portfolio/condomate-${it.name}-desktop.png`} alt={`CondoMate — ${it.title}`} width={1366} height={it.name === 'finance' ? 3440 : 2850} loading="lazy" decoding="async" />
                </picture>
              </div>
              <figcaption><b>{it.title}</b>{it.text}</figcaption>
            </figure>
          ))}
        </div>
        <div className="legend-block">
          <h3 className="h4">{c.legend}</h3>
          <ul className="feature-legend">
            {c.features.map(f => <li key={f}><i className="key solid" />{f}</li>)}
          </ul>
          <a className="cell-cta" href="#contact">{c.cta}<ArrowRight aria-hidden="true" /></a>
        </div>
      </div>
    </section>
  );
}

function Process({ lang }: { lang: Lang }) {
  const c = copy[lang].process;
  return (
    <section id="process" className="sheet process" aria-labelledby="process-title">
      <SheetBand id="process" lang={lang} />
      <div className="frame">
        <div className="split head">
          <h2 id="process-title">{c.title}</h2>
          <p className="lede">{c.text}</p>
        </div>
        <ol className="stages" style={{ ['--p' as string]: 1 }}>
          {c.steps.map((s, i) => (
            <li key={s.n} className="is-built">
              <span className="node" aria-hidden="true">{i === c.steps.length - 1 && <i className="live-dot" />}</span>
              <small>{s.n}</small>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              {i === c.steps.length - 1 && <p className="live-note">{c.liveNote}</p>}
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
    <section id="about" className="sheet about" aria-labelledby="about-title">
      <SheetBand id="about" lang={lang} />
      <div className="frame split">
        <div>
          <h2 id="about-title">{c.title}</h2>
          <p className="lede">{c.text}</p>
        </div>
        <div className="notes">
          <h3 className="notes-title">{c.notesTitle}</h3>
          <ol>
            {c.notes.map(n => (
              <li key={n.title}><span><b>{n.title}</b> {n.text}</span></li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

type Status = { kind: 'success' | 'error'; message: string } | null;

function Contact({ lang }: { lang: Lang }) {
  const c = copy[lang].contact;
  const id = useId();
  const [status, setStatus] = useState<Status>(null);
  const [sending, setSending] = useState(false);
  const submit = async (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      setStatus({ kind: 'error', message: c.invalid });
      return;
    }
    setSending(true);
    setStatus(null);
    try {
      const data = Object.fromEntries(new FormData(form).entries());
      const res = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...data, language: lang }) });
      if (!res.ok) throw new Error('send failed');
      setStatus({ kind: 'success', message: c.success });
      form.reset();
    } catch {
      setStatus({ kind: 'error', message: c.failed });
    } finally {
      setSending(false);
    }
  };
  return (
    <section id="contact" className="sheet contact" aria-labelledby="contact-title">
      <SheetBand id="contact" lang={lang} />
      <div className="frame split">
        <div>
          <h2 id="contact-title">{c.title}</h2>
          <p className="lede">{c.text}</p>
          <p className="next"><i className="key solid" />{c.next}</p>
        </div>
        <form className="request" onSubmit={submit} noValidate aria-busy={sending} aria-describedby={`${id}-status`}>
          <p className="request-title">{c.formTitle}</p>
          <label className="hp">{c.honeypot}<input type="text" name="website" tabIndex={-1} autoComplete="off" /></label>
          <div className="cells">
            <label className="cell" htmlFor={`${id}-name`}><span>{c.fields[0]}</span><input id={`${id}-name`} required name="name" autoComplete="name" maxLength={100} /></label>
            <label className="cell" htmlFor={`${id}-company`}><span>{c.fields[1]}</span><input id={`${id}-company`} required name="company" autoComplete="organization" maxLength={150} /></label>
            <label className="cell" htmlFor={`${id}-email`}><span>{c.fields[2]}</span><input id={`${id}-email`} required type="email" name="email" autoComplete="email" maxLength={200} /></label>
            <label className="cell" htmlFor={`${id}-phone`}><span>{c.fields[3]} <em>({c.optional})</em></span><input id={`${id}-phone`} type="tel" name="phone" autoComplete="tel" maxLength={50} /></label>
            <label className="cell wide" htmlFor={`${id}-interest`}><span>{c.fields[4]}</span>
              <select id={`${id}-interest`} required name="interest" defaultValue="">
                <option value="" disabled>{c.select}</option>
                {c.interests.map(x => <option key={x}>{x}</option>)}
              </select>
            </label>
            <label className="cell wide" htmlFor={`${id}-message`}><span>{c.fields[5]}</span><textarea id={`${id}-message`} required name="message" rows={5} maxLength={3000} /></label>
          </div>
          <button className="cell-cta submit" type="submit" disabled={sending}>{sending ? c.sending : c.send}<ArrowRight aria-hidden="true" /></button>
          <output id={`${id}-status`} className={`status ${status?.kind ?? ''}`} aria-live="polite">
            {status && <>{status.kind === 'success' ? <Check aria-hidden="true" /> : <CircleAlert aria-hidden="true" />}{status.message}</>}
          </output>
        </form>
      </div>
    </section>
  );
}

function Footer({ lang }: { lang: Lang }) {
  const c = copy[lang];
  return (
    <footer className="footer ink">
      <div className="frame footer-block">
        <div className="fb-brand">
          <Brand />
          <p className="fb-tagline">{c.footer.tagline}</p>
          <p>{c.footer.line}</p>
        </div>
        <nav className="fb-index" aria-label={c.footer.index}>
          <small>{c.footer.index}</small>
          {sheetIds.map(id => <a key={id} href={`#${id}`}><b>{c.sheets[id].no}</b>{c.sheets[id].title}</a>)}
        </nav>
        <div className="fb-online">
          <small>{c.footer.online}</small>
          <a href="https://cerosoft.net">cerosoft.net</a>
          <a href="mailto:info@cerosoft.net">info@cerosoft.net</a>
        </div>
        <div className="fb-meta">
          <span>© {year} CeroSoft</span>
          <span>{c.footer.city}</span>
          <span>{c.footer.drawn}</span>
        </div>
      </div>
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
        <Problem lang={lang} />
        <Legacy lang={lang} />
        <Services lang={lang} />
        <CondoMate lang={lang} />
        <Process lang={lang} />
        <About lang={lang} />
        <Contact lang={lang} />
      </main>
      <Footer lang={lang} />
    </div>
  );
}
