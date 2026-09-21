'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') gsap.registerPlugin(ScrollTrigger, useGSAP);

const heroRail = [
  { src: '/assets/images/Useable_Images/image5.jpg', alt: 'Calaya engineer inspecting field equipment', className: 'md:mt-24' },
  { src: '/assets/wellhead_maintenance/01bdc545-9a3f-4a00-9cfc-f91685bd523f.JPG', alt: 'Wellhead maintenance work in progress', className: '' },
  { src: '/assets/images/banner_images/offshore.jpg', alt: 'Offshore production facility at sea', className: 'md:mt-14' },
  { src: '/calaya_image.png', alt: 'Calaya Engineering field operations', className: 'md:mt-32' },
];

const services = [
  ['01', 'Well services', 'Completion, intervention and maintenance support for producing assets.', '/services/well-services'],
  ['02', 'Inspection services', 'Manual and advanced NDT programs built around asset integrity.', '/services/inspection'],
  ['03', 'Pipeline construction', 'Fabrication, installation, hot tapping and delivery-line construction.', '/services/pipeline-construction'],
  ['04', 'Corrosion management', 'Monitoring, cathodic protection, survey and targeted repair services.', '/services/corrosion-management'],
  ['05', 'Facilities management', 'Operational maintenance for critical onshore and offshore facilities.', '/services/facilities-management'],
  ['06', 'Procurement', 'Strategic sourcing and supply-chain support for demanding operations.', '/services/procurement'],
];

const projects = [
  { title: 'Pipeline integrity', summary: 'Inspection and integrity support for critical production assets.', tags: ['Inspection', 'Asset integrity'], image: '/assets/images/Useable_Images/image12.jpg', className: 'lg:col-span-7', media: 'aspect-[4/3]' },
  { title: 'Wellhead maintenance', summary: 'Field-led maintenance delivered around safe, controlled execution.', tags: ['Well services', 'Maintenance'], image: '/assets/wellhead_maintenance/01bdc545-9a3f-4a00-9cfc-f91685bd523f.JPG', className: 'lg:col-span-5 lg:mt-28', media: 'aspect-[4/5]' },
  { title: 'Offshore production support', summary: 'Specialist engineering capability for complex offshore operations.', tags: ['Offshore', 'Technical support'], image: '/assets/images/banner_images/offshore.jpg', className: 'lg:col-span-5', media: 'aspect-[4/5]' },
  { title: 'Field construction', summary: 'Disciplined teams delivering infrastructure in live operating environments.', tags: ['Construction', 'Execution'], image: '/assets/images/Useable_Images/image10.jpeg', className: 'lg:col-span-7 lg:mt-28', media: 'aspect-[4/3]' },
];

const clientLogos = [
  ['/assets/clients/total_logo.png', 'TotalEnergies'], ['/assets/clients/chevron_logo.jpg', 'Chevron'],
  ['/assets/clients/Shell_nigeria.png', 'Shell Nigeria'], ['/assets/clients/naoc_logo.jpg', 'NAOC'],
  ['/assets/clients/nlng.png', 'NLNG'], ['/assets/clients/saipem.png', 'Saipem'],
  ['/assets/clients/Dangote_Group_Logo.svg.png', 'Dangote'], ['/assets/clients/Tenaris_Logo.png', 'Tenaris'],
];

const steps = [
  ['01', 'Understand', 'We clarify the operating need, site conditions, constraints and success measures before defining the scope.', ['Site review', 'Risk context', 'Technical scope']],
  ['02', 'Engineer', 'We assemble the right specialists, methods and controls around the realities of the asset.', ['Method planning', 'Team selection', 'HSE controls']],
  ['03', 'Deliver', 'We execute in the field, verify the result and leave a clear technical record for the next decision.', ['Field execution', 'Quality assurance', 'Reporting']],
];

const latestNews = [
  {
    number: '01',
    type: 'Company news',
    title: 'Distinguished Visitors at Africa Energy Week',
    summary: 'Conversations with industry leaders around new energy-sector opportunities and collaboration.',
    image: '/assets/heroes/africa-energy-week-1-4k.jpg',
    href: '/news/africa-energy-week-2024',
  },
  {
    number: '02',
    type: 'Company news',
    title: 'Welcoming Nigeria’s Petroleum Ministers',
    summary: 'A forward-looking exchange on Nigeria’s energy future, local content and sector collaboration.',
    image: '/assets/heroes/nigerian-ministers-2-4k.jpg',
    href: '/news/nigerian-ministers-visit',
  },
  {
    number: '03',
    type: 'Technology',
    title: 'Sound Wave Inspection System',
    summary: 'A next-generation solution designed to accelerate tube inspections across materials and geometries.',
    image: '/assets/heroes/sound-wave-system-4k.jpg',
    href: '/news/sound-wave-inspection-system',
  },
  {
    number: '04',
    type: 'Project update',
    title: 'Venus Pipeline Inspection',
    summary: 'A closer look at pipeline inspection technology and its field application for integrity assurance.',
    image: '/assets/heroes/inspection-4k.jpg',
    href: '/news/venus-pipeline-inspection',
  },
];

function ArrowLink({ href, children, className = '' }) {
  return (
    <Link href={href} className={`group inline-flex min-h-11 items-center gap-3 rounded-full border border-[#0B0E12]/15 px-5 py-3 text-xs font-semibold text-[#0B0E12] transition duration-500 ease-[cubic-bezier(.16,1,.3,1)] hover:-translate-y-0.5 hover:border-[#0B0E12] hover:bg-[#0B0E12] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B0E12] focus-visible:ring-offset-2 ${className}`}>
      {children}<ArrowUpRight className="size-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
    </Link>
  );
}

export default function HomePage() {
  const page = useRef(null);
  const latestSection = useRef(null);
  const latestPin = useRef(null);
  const latestStage = useRef(null);

  useGSAP(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const intro = gsap.timeline({ defaults: { ease: 'power3.out' } });
    intro.from('[data-hero-line]', { yPercent: 110, duration: 0.9, stagger: 0.09 })
      .from('[data-hero-support]', { y: 18, opacity: 0, duration: 0.65, stagger: 0.08 }, '-=.45')
      .from('[data-hero-card]', { y: 50, opacity: 0, duration: 0.85, stagger: 0.07 }, '-=.5');

    gsap.utils.toArray('[data-reveal]').forEach((element) => {
      gsap.from(element, { y: 42, opacity: 0, duration: 0.9, ease: 'power3.out', scrollTrigger: { trigger: element, start: 'top 86%', once: true } });
    });
    gsap.utils.toArray('[data-count]').forEach((element) => {
      const target = Number(element.dataset.count);
      const value = { current: 0 };
      gsap.to(value, { current: target, duration: 1.5, ease: 'power2.out', scrollTrigger: { trigger: element, start: 'top 90%', once: true }, onUpdate: () => { element.textContent = `${Math.round(value.current)}${element.dataset.suffix || ''}`; } });
    });

    const media = gsap.matchMedia();

    media.add('(min-width: 768px)', () => {
      const cards = gsap.utils.toArray('[data-latest-card]');
      const cardWidth = () => cards[0].offsetWidth;
      const cardGap = () => Math.max(56, window.innerWidth * 0.075);

      gsap.set(cards, {
        xPercent: -50,
        x: (index) => index * (cardWidth() + cardGap()),
        scale: 1,
        filter: 'brightness(1)',
        transformOrigin: '50% 50%',
        force3D: true,
      });

      const stack = gsap.timeline({
        defaults: { ease: 'none' },
        scrollTrigger: {
          trigger: latestSection.current,
          start: 'top top',
          end: () => `+=${(cards.length - 1) * Math.max(window.innerWidth * 0.9, window.innerHeight * 1.1)}`,
          pin: latestPin.current,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      cards.slice(1).forEach((card, index) => {
        const incomingIndex = index + 1;
        const position = index;

        stack.to(cards.slice(0, incomingIndex), {
          x: (cardIndex) => -18 * (incomingIndex - cardIndex),
          scale: (cardIndex) => 1 - 0.025 * (incomingIndex - cardIndex),
          filter: (cardIndex) => `brightness(${1 - 0.12 * (incomingIndex - cardIndex)})`,
          duration: 1,
        }, position);
        stack.to(card, { x: 0, duration: 1 }, position);
      });

      return () => stack.kill();
    });

    return () => media.revert();
  }, { scope: page });

  return (
    <div ref={page} className="home-page editorial-page overflow-clip bg-white text-[#0B0E12]">
      <section className="px-4 pb-16 pt-32 sm:px-6 md:pb-24 md:pt-44 lg:px-10 lg:pt-48">
        <div className="mx-auto max-w-[1500px]">
          <p data-hero-support className="mb-7 flex items-center gap-2 text-xs font-medium"><span className="size-1.5 rounded-full bg-[#0B0E12]" aria-hidden="true" />Engineering for critical operations</p>
          <h1 className="max-w-[1240px] font-display text-[clamp(3.65rem,8.3vw,8.75rem)] font-normal leading-[.84] tracking-[-.055em]">
            <span className="block overflow-hidden"><span data-hero-line className="block">Built for the field.</span></span>
            <span className="block overflow-hidden"><span data-hero-line className="block">Proven under pressure.</span></span>
          </h1>
          <div className="mt-10 grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-5">
            <p data-hero-support className="max-w-[510px] text-base leading-[1.55] text-[#0B0E12]/65 lg:col-span-5 lg:text-lg">Calaya delivers engineering, inspection, construction and field services for energy infrastructure across Africa and beyond.</p>
            <div data-hero-support className="flex flex-wrap gap-3 lg:col-span-5 lg:col-start-8 lg:justify-end">
              <ArrowLink href="/projects">Explore our work</ArrowLink>
              <Link href="#capabilities" className="inline-flex min-h-11 items-center gap-2 px-2 text-xs font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B0E12]">Our capabilities <ArrowDown className="size-4" aria-hidden="true" /></Link>
            </div>
          </div>
        </div>
      </section>

      <section aria-label="Calaya projects" className="pb-24 md:pb-36">
        <div className="flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-4 sm:px-6 md:grid md:grid-cols-4 md:items-start md:gap-4 md:overflow-visible md:px-10">
          {heroRail.map((item) => <div data-hero-card key={item.src} className={`group min-w-[78vw] snap-start overflow-hidden rounded-[18px] bg-[#F4F5F2] sm:min-w-[46vw] md:min-w-0 ${item.className}`}><img src={item.src} alt={item.alt} className="aspect-[3/4] size-full object-cover transition-transform duration-1000 ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-[1.025]" /></div>)}
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 md:py-32 lg:px-10">
        <div className="mx-auto max-w-[1500px]" data-reveal>
          <p className="mb-8 flex items-center gap-2 text-xs font-medium"><span className="size-1.5 rounded-full bg-[#0B0E12]" />Calaya at a glance</p>
          <h2 className="max-w-[1250px] font-display text-[clamp(2.75rem,5.6vw,6rem)] font-normal leading-[.94] tracking-[-.045em]">One engineering partner from technical review to controlled field execution.</h2>
          <div className="mt-10 grid gap-8 border-t border-[#0B0E12]/15 pt-6 md:grid-cols-12">
            <p className="max-w-lg text-base leading-relaxed text-[#0B0E12]/65 md:col-span-5 md:col-start-7">Since 2005, our multidisciplinary teams have helped operators maintain integrity, extend asset life and complete complex scopes safely. We combine local field knowledge with international technologies and standards.</p>
            <ArrowLink href="/about" className="self-start md:col-span-2 md:justify-self-end">About Calaya</ArrowLink>
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-[#163D7A] py-20 text-white md:py-28">
        <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-10" data-reveal>
          <p className="text-xs text-white/60">Trusted in demanding operating environments</p>
          <h2 className="mt-5 max-w-4xl font-display text-[clamp(2.8rem,5vw,5.6rem)] font-normal leading-[.94] tracking-[-.04em]">Chosen by teams responsible for critical assets.</h2>
        </div>
        <div className="mt-14 overflow-hidden"><div className="marquee-track flex w-max items-center gap-14 pr-14 md:gap-20 md:pr-20">{[...clientLogos, ...clientLogos].map(([src, alt], index) => <div key={`${alt}-${index}`} className="flex h-24 w-52 items-center justify-center px-4 py-3 md:h-28 md:w-64"><img src={src} alt={index < clientLogos.length ? alt : ''} className="client-logo-mark max-h-16 max-w-full object-contain md:max-h-20" /></div>)}</div></div>
      </section>

      <section className="px-4 py-24 sm:px-6 md:py-36 lg:px-10">
        <div className="mx-auto max-w-[1500px]">
          <div className="grid gap-8 md:grid-cols-12 md:items-end" data-reveal><div className="md:col-span-8"><p className="mb-5 text-xs text-[#0B0E12]/60">Selected work</p><h2 className="font-display text-[clamp(3.1rem,6vw,6.5rem)] font-normal leading-[.9] tracking-[-.05em]">Proof lives in the work.</h2></div><p className="max-w-md text-sm leading-relaxed text-[#0B0E12]/60 md:col-span-4">A sample of the inspection, maintenance, construction and production-support capability our teams bring to site.</p></div>
          <div className="mt-16 grid gap-x-4 gap-y-20 lg:grid-cols-12">
            {projects.map((project) => <article key={project.title} className={project.className} data-reveal><div className={`group overflow-hidden rounded-[18px] bg-[#F4F5F2] ${project.media}`}><img src={project.image} alt={`${project.title} project by Calaya Engineering`} className="size-full object-cover transition-transform duration-1000 ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-[1.03]" loading="lazy" /></div><div className="mt-5 flex items-start justify-between gap-5"><div><h3 className="font-display text-3xl font-normal leading-none tracking-[-.03em] md:text-4xl">{project.title}</h3><p className="mt-3 max-w-lg text-sm leading-relaxed text-[#0B0E12]/60">{project.summary}</p><ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-[11px] font-medium text-[#0B0E12]/55">{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul></div><ArrowUpRight className="mt-1 size-5 shrink-0" aria-hidden="true" /></div></article>)}
          </div>
          <Link href="/projects" className="group mt-24 block overflow-hidden border-y border-[#0B0E12]/15 py-7 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B0E12] md:mt-32 md:py-10"><span className="flex items-center justify-between font-display text-[clamp(4rem,14vw,13rem)] font-normal leading-[.78] tracking-[-.055em]">All work <ArrowUpRight className="size-[.18em] transition-transform duration-500 group-hover:translate-x-2 group-hover:-translate-y-2" /></span></Link>
        </div>
      </section>

      <section id="capabilities" className="scroll-mt-24 bg-[#F4F5F2] px-4 py-24 sm:px-6 md:py-36 lg:px-10">
        <div className="mx-auto max-w-[1500px]">
          <div className="grid gap-8 md:grid-cols-12" data-reveal><p className="text-xs text-[#0B0E12]/60 md:col-span-3">What we do</p><h2 className="max-w-4xl font-display text-[clamp(3rem,5.7vw,6rem)] font-normal leading-[.92] tracking-[-.045em] md:col-span-9">Specialist capability across the asset lifecycle.</h2></div>
          <div className="mt-16 border-b border-[#0B0E12]/15">{services.map(([number, title, text, href]) => <Link key={title} href={href} className="group grid gap-3 border-t border-[#0B0E12]/15 py-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B0E12] md:grid-cols-12 md:items-start md:gap-5 md:py-8"><span className="text-xs tabular-nums text-[#0B0E12]/45 md:col-span-1">{number}</span><h3 className="font-display text-4xl font-normal leading-none tracking-[-.035em] md:col-span-4 md:text-5xl lg:text-6xl">{title}</h3><p className="max-w-lg text-sm leading-relaxed text-[#0B0E12]/60 md:col-span-5 md:col-start-7">{text}</p><ArrowUpRight className="hidden size-5 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 md:col-start-12 md:block" aria-hidden="true" /></Link>)}</div>
        </div>
      </section>

      <section className="px-4 py-24 sm:px-6 md:py-36 lg:px-10">
        <div className="mx-auto grid max-w-[1500px] gap-16 lg:grid-cols-12">
          <div className="lg:sticky lg:top-32 lg:col-span-5 lg:self-start" data-reveal><p className="mb-5 text-xs text-[#0B0E12]/60">How we work</p><h2 className="font-display text-[clamp(3.4rem,6vw,6.8rem)] font-normal leading-[.88] tracking-[-.05em]">Clarity before activity.</h2></div>
          <div className="space-y-24 lg:col-span-6 lg:col-start-7">{steps.map(([number, title, text, tags]) => <article key={title} className="border-t border-[#0B0E12]/15 pt-6" data-reveal><span className="text-xs tabular-nums text-[#0B0E12]/45">{number}</span><h3 className="mt-8 font-display text-5xl font-normal leading-none tracking-[-.04em] md:text-7xl">{title}</h3><p className="mt-6 max-w-lg text-base leading-relaxed text-[#0B0E12]/60">{text}</p><ul className="mt-7 flex flex-wrap gap-2">{tags.map((tag) => <li key={tag} className="rounded-full border border-[#0B0E12]/15 px-4 py-2 text-xs">{tag}</li>)}</ul></article>)}</div>
        </div>
      </section>

      <section ref={latestSection} data-gsap-ready="true" className="relative bg-[#0B0E12] text-white">
        <div ref={latestPin} className="flex min-h-svh flex-col justify-center overflow-hidden px-4 py-20 sm:px-6 md:py-14 lg:px-10">
          <div className="mx-auto w-full max-w-[1500px]">
            <div className="grid gap-7 md:grid-cols-12 md:items-end">
              <div className="md:col-span-8">
                <p className="flex items-center gap-3 text-xs font-medium text-white/60">
                  <span className="h-4 w-0.5 bg-[#D9272E]" aria-hidden="true" />
                  Latest from Calaya
                </p>
                <h2 className="mt-5 max-w-[1000px] font-display text-[clamp(3rem,5.2vw,5.8rem)] font-normal leading-[.9] tracking-[-.05em]">Stay Updated with Our Latest News</h2>
              </div>
              <p className="max-w-md text-sm leading-relaxed text-white/60 md:col-span-4 md:pb-2">Discover our recent achievements, project updates, and industry insights.</p>
            </div>

            <div ref={latestStage} className="latest-news-stage mt-12 h-[64vh] min-h-[480px] md:mt-10 md:h-[52vh] md:min-h-[400px] md:max-h-[620px]">
              {latestNews.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  data-latest-card
                  className="latest-news-card group block overflow-hidden rounded-[18px] bg-[#24272c] shadow-[0_-1px_0_rgba(255,255,255,.18),0_30px_80px_rgba(0,0,0,.34)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D9272E] focus-visible:ring-offset-4 focus-visible:ring-offset-[#0B0E12]"
                  style={{ zIndex: index + 1 }}
                >
                  <img src={item.image} alt="" className="absolute inset-0 size-full object-cover transition-transform duration-1000 ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-[1.025]" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0E12] via-[#0B0E12]/18 to-black/10" aria-hidden="true" />
                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-8 md:p-10 lg:p-12">
                    <div className="mb-5 flex items-center justify-between gap-4">
                      <span className="rounded-full bg-[#D9272E] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[.12em] text-white">{item.type}</span>
                      <span className="text-xs tabular-nums text-white/60">{item.number} / 04</span>
                    </div>
                    <div className="flex items-end justify-between gap-5">
                      <div>
                        <h3 className="max-w-[18ch] font-display text-3xl font-normal leading-[.95] tracking-[-.04em] sm:text-5xl md:text-6xl lg:text-7xl">{item.title}</h3>
                        <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/70 sm:text-base">{item.summary}</p>
                      </div>
                      <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[#D9272E] text-white transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 md:size-12" aria-hidden="true"><ArrowUpRight className="size-4" /></span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-5 flex items-center justify-between text-[10px] uppercase tracking-[.14em] text-white/40">
              <span>Scroll to move sideways</span>
              <span>01 — 04</span>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#0B0E12]/15 px-4 sm:px-6 lg:px-10"><div className="mx-auto grid max-w-[1500px] grid-cols-2 md:grid-cols-4">{[['20+', '20', '+', 'Years established'], ['9+', '9', '+', 'Countries reached'], ['100%', '100', '%', 'Delivery commitment'], ['2', '2', '', 'ISO management systems']].map(([fallback, count, suffix, label], index) => <article key={label} className={`py-10 md:py-14 ${index % 2 ? 'border-l' : ''} ${index > 1 ? 'border-t md:border-t-0' : ''} border-[#0B0E12]/15 px-5 md:border-l md:px-8 md:first:border-l-0`}><strong data-count={count} data-suffix={suffix} className="font-display text-[clamp(3rem,5vw,5.5rem)] font-normal leading-none tracking-[-.05em]">{fallback}</strong><p className="mt-3 max-w-[16ch] text-xs leading-relaxed text-[#0B0E12]/55">{label}</p></article>)}</div></section>

      <section className="relative isolate overflow-hidden bg-[#0B0E12] px-4 py-24 text-white sm:px-6 md:py-40 lg:px-10">
        <div aria-hidden="true" className="ambient-glow-a absolute -left-1/4 -top-1/2 -z-10 size-[75vw] rounded-full bg-[#D9272E]/25 blur-[120px]" /><div aria-hidden="true" className="ambient-glow-b absolute -bottom-1/2 -right-1/4 -z-10 size-[70vw] rounded-full bg-cyan-500/15 blur-[140px]" />
        <div className="mx-auto max-w-[1500px]" data-reveal><p className="mb-8 text-xs text-white/60">Bring us the operational challenge</p><h2 className="max-w-[1100px] font-display text-[clamp(3.7rem,7.5vw,8rem)] font-normal leading-[.86] tracking-[-.055em]">Let’s put the right team on it.</h2><Link href="/contact" className="mt-10 inline-flex min-h-12 items-center gap-3 rounded-full bg-[#D9272E] px-7 py-3 text-xs font-semibold text-white transition duration-500 hover:-translate-y-0.5 hover:bg-white hover:text-[#0B0E12] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0E12]">Start a conversation <ArrowUpRight className="size-4" /></Link></div>
      </section>
    </div>
  );
}
