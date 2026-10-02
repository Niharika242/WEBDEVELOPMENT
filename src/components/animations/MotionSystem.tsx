import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

export default function MotionSystem() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let lenis: Lenis | undefined;
    const onTick = (time: number) => lenis?.raf(time * 1000);

    try {
      gsap.registerPlugin(ScrollTrigger);
      lenis = new Lenis({ autoRaf: false, smoothWheel: true, lerp: 0.09 });
      lenis.on('scroll', ScrollTrigger.update);
      gsap.ticker.add(onTick);
      gsap.ticker.lagSmoothing(0);

      const context = gsap.context(() => {
        gsap.from('.hero-kicker', { y: 14, autoAlpha: 0, duration: 0.65, stagger: 0.08, ease: 'power2.out', delay: 0.16 });
        gsap.from('.hero-title', { y: 34, autoAlpha: 0, duration: 1, ease: 'power3.out', delay: 0.3 });
        gsap.from('.hero-copy', { y: 16, autoAlpha: 0, duration: 0.75, ease: 'power2.out', delay: 0.58 });
        gsap.from('.hero__portrait', { y: 18, autoAlpha: 0, duration: 0.9, ease: 'power2.out', delay: 0.45 });
        gsap.from('.site-header', { y: -12, autoAlpha: 0, duration: 0.65, ease: 'power2.out' });

        gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((element) => {
          gsap.from(element, {
            y: 24,
            autoAlpha: 0,
            duration: 0.75,
            ease: 'power2.out',
            scrollTrigger: { trigger: element, start: 'top 88%', once: true },
          });
        });
      });

      requestAnimationFrame(() => ScrollTrigger.refresh());
      return () => {
        context.revert();
        gsap.ticker.remove(onTick);
        lenis?.destroy();
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    } catch {
      gsap.ticker.remove(onTick);
      lenis?.destroy();
      return undefined;
    }
  }, []);

  return null;
}
