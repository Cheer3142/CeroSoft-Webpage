import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

const NAV_OFFSET = -88;
const ease = 'expo.out';

/** Smooth scroll, the hero type-in and the word-by-word statement reveal. Returns a cleanup. */
export function setupMotion(root: HTMLElement) {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const cleanups: (() => void)[] = [];

  let lenis: Lenis | null = null;
  if (!reduce) {
    lenis = new Lenis({ lerp: 0.12 });
    lenis.on('scroll', ScrollTrigger.update);
    const raf = (t: number) => lenis?.raf(t * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);
    cleanups.push(() => { gsap.ticker.remove(raf); lenis?.destroy(); });
  }

  const onClick = (e: MouseEvent) => {
    const a = (e.target as HTMLElement).closest<HTMLAnchorElement>('a[href^="#"]');
    if (!a) return;
    const id = a.getAttribute('href')!.slice(1);
    const el = id ? document.getElementById(id) : null;
    if (!el) return;
    e.preventDefault();
    if (lenis) lenis.scrollTo(el, { offset: id === 'home' ? 0 : NAV_OFFSET, duration: 1.2 });
    else window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY + (id === 'home' ? 0 : NAV_OFFSET) });
    history.replaceState(null, '', `#${id}`);
    if (id === 'main-content') el.focus({ preventScroll: true });
  };
  root.addEventListener('click', onClick);
  cleanups.push(() => root.removeEventListener('click', onClick));

  // The nav capsule turns solid once the hero has scrolled away.
  const nav = root.querySelector<HTMLElement>('.nav');
  const st = ScrollTrigger.create({ trigger: '.hero', start: 'bottom top+=96', end: 'max', onToggle: self => nav?.classList.toggle('is-solid', self.isActive) });
  cleanups.push(() => st.kill());

  const ctx = gsap.context(() => {
    if (reduce) return;

    // Hero headline types itself in on load; the copy follows.
    const tl = gsap.timeline({ delay: 0.35 });
    tl.from('.hero .l1 .ch', { opacity: 0, duration: 0.01, stagger: 0.045 })
      .from('.hero .l2 .ch', { opacity: 0, duration: 0.01, stagger: 0.045 }, '+=0.15')
      .from('.hero-copy > p, .hero-actions', { y: 24, opacity: 0, duration: 1, ease, stagger: 0.1 }, '-=0.3');

    // Statement: every word starts readable in grey and darkens as you read down.
    const words = gsap.utils.toArray<HTMLElement>('.reveal-text .w');
    if (words.length) {
      gsap.fromTo(words, { color: 'var(--muted-2)' }, {
        color: 'var(--ink)', stagger: 0.08, ease: 'none',
        scrollTrigger: { trigger: '.reveal-text', start: 'top 80%', end: 'bottom 45%', scrub: true },
      });
    }

    // Cards settle into place (always visible; only position moves).
    gsap.utils.toArray<HTMLElement>('.path-card, .stages li, .about-card').forEach((el, i) => {
      gsap.from(el, { y: 36, duration: 1, ease, delay: (i % 3) * 0.06, scrollTrigger: { trigger: el, start: 'top 90%' } });
    });
  }, root);

  const refresh = () => ScrollTrigger.refresh();
  window.addEventListener('load', refresh);
  document.fonts?.ready.then(refresh);
  cleanups.push(() => window.removeEventListener('load', refresh));

  return () => {
    ctx.revert();
    cleanups.forEach(fn => fn());
  };
}
