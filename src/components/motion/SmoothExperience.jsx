'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function SmoothExperience() {
  const pathname = usePathname();

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return undefined;

    const lenis = new Lenis({
      duration: 1.05,
      smoothWheel: true,
      wheelMultiplier: 0.85,
      touchMultiplier: 1.05,
      autoRaf: true,
      anchors: true,
      autoResize: true,
      overscroll: true,
      respectReducedMotion: true,
    });

    lenis.on('scroll', ScrollTrigger.update);
    lenis.start();

    const revealTargets = gsap.utils.toArray('main section:not([data-gsap-ready])');
    revealTargets.forEach((section) => {
      section.dataset.gsapReady = 'true';
      const targets = Array.from(section.querySelectorAll('h1, h2, h3, p, article')).slice(0, 6);
      if (!targets.length) return;
      gsap.fromTo(
        targets,
        { y: 22, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.75,
          stagger: 0.06,
          ease: 'power3.out',
          scrollTrigger: { trigger: section, start: 'top 84%', once: true },
        }
      );
    });

    ScrollTrigger.refresh();
    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [pathname]);

  return null;
}
