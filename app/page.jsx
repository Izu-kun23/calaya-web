'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') gsap.registerPlugin(ScrollTrigger, useGSAP);

const services = [
  { title: 'Well services', text: 'Complete well lifecycle support, from completion and intervention to maintenance.', image: '/assets/well_services/well_intervention5.jpeg', href: '/services/well-services' },
  { title: 'Inspection services', text: 'Manual and advanced NDT programs built around asset integrity.', image: '/assets/images/service_images/inspection_image.jpg', href: '/services/inspection' },
  { title: 'Pipeline construction', text: 'Pipeline laying, fabrication, installation and hot tapping.', image: '/assets/images/service_images/pipeline.jpg', href: '/services/pipeline-construction' },
  { title: 'Corrosion management', text: 'Monitoring, cathodic protection, survey and repair services.', image: '/assets/images/service_images/corrosion.jpg', href: '/services/corrosion-management' },
  { title: 'Facilities management', text: 'Maintenance and operational support for critical facilities.', image: '/assets/images/service_images/facilities.jpg', href: '/services/facilities-management' },
  { title: 'Procurement', text: 'Strategic sourcing and supply chain support across operations.', image: '/assets/images/service_images/procurement.jpg', href: '/services/procurement' },
];

const projects = [
  { title: 'Pipeline integrity', client: 'Asset inspection', image: '/assets/images/Useable_Images/image12.jpg' },
  { title: 'Wellhead maintenance', client: 'Field operations', image: '/assets/wellhead_maintenance/01bdc545-9a3f-4a00-9cfc-f91685bd523f.JPG' },
  { title: 'Civil engineering', client: 'Infrastructure', image: '/civil1.JPG' },
  { title: 'Offshore support', client: 'Production services', image: '/assets/images/banner_images/offshore.jpg' },
];

const news = [
  { title: 'Calaya at Africa Energy Week 2024', image: '/assets/news/latest_news1.jpeg', href: '/news/africa-energy-week-2024' },
  { title: 'Advanced sound-wave inspection technology', image: '/assets/news/latest_news4.jpeg', href: '/news/sound-wave-inspection-system' },
];

const heroProjects = [
  { title: 'Pipeline integrity', text: 'Inspection and integrity support for critical production assets.', image: '/assets/images/Useable_Images/image5.jpg', href: '/projects' },
  { title: 'Wellhead maintenance', text: 'Field-led maintenance delivered around safe, controlled execution.', image: '/assets/wellhead_maintenance/01bdc545-9a3f-4a00-9cfc-f91685bd523f.JPG', href: '/services/well-services' },
  { title: 'Offshore support', text: 'Specialist engineering capability for demanding offshore operations.', image: '/assets/images/banner_images/offshore.jpg', href: '/projects' },
];

export default function HomePage() {
  const page = useRef(null);
  const [heroProject, setHeroProject] = useState(0);

  useGSAP(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.from('.hero__visual', { scale: 1.08, duration: 1.8 })
      .from('.hero__title span', { yPercent: 110, stagger: 0.07, duration: 0.8 }, 0.22)
      .from('.hero__lead', { y: 22, opacity: 0, duration: 0.65 }, 0.52)
      .from('.hero__proof', { x: 45, opacity: 0, duration: 0.8 }, 0.7);

    gsap.to('.hero__visual', {
      yPercent: 12,
      ease: 'none',
      scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true },
    });

    gsap.utils.toArray('[data-count]').forEach((element) => {
      const target = Number(element.dataset.count);
      const value = { current: 0 };
      gsap.to(value, {
        current: target,
        duration: 1.5,
        ease: 'power2.out',
        scrollTrigger: { trigger: element, start: 'top 88%', once: true },
        onUpdate: () => { element.textContent = `${Math.round(value.current)}${element.dataset.suffix || ''}`; },
      });
    });
  }, { scope: page });

  return (
    <div ref={page} className="home-page">
      <section className="hero" data-gsap-ready="true">
        <img className="hero__visual" src="/assets/images/Useable_Images/about_hero.jpeg" alt="Calaya field team preparing for operations" />
        <div className="hero__shade" />
        <div className="hero__content">
          <h1 className="hero__title"><span>Complex</span><span>operations.</span><span>Engineered with</span><span>confidence.</span></h1>
        </div>
        <div className="hero__lead">
          <p className="hero__copy">Calaya delivers integrated engineering, inspection, construction and field services across the oil and gas value chain.</p>
          <Link href="/products" className="button button--red">Explore our capabilities</Link>
        </div>
        <div className="hero__proof">
          <Link href={heroProjects[heroProject].href} className="hero__proof-main">
            <img src={heroProjects[heroProject].image} alt="" />
            <span>
              <strong>{heroProjects[heroProject].title}</strong>
              <small>{heroProjects[heroProject].text}</small>
              <em>See project</em>
            </span>
            <b>{String(heroProject + 1).padStart(2, '0')}/03</b>
          </Link>
          <div className="hero__proof-controls">
            <button onClick={() => setHeroProject((heroProject + 1) % heroProjects.length)} aria-label="Next project"><ArrowRight size={20} /></button>
            <button onClick={() => setHeroProject((heroProject - 1 + heroProjects.length) % heroProjects.length)} aria-label="Previous project"><ArrowLeft size={20} /></button>
          </div>
        </div>
      </section>

      <section className="intro section-frame">
        <div className="section-label">Calaya Engineering</div>
        <div className="intro__grid">
          <h2>Built for business-critical operations.</h2>
          <div><p>We are a multinational engineering company serving major international operators across nine countries. Since 2005, our teams have delivered technical work where safety, quality and reliability are non-negotiable.</p><Link href="/about" className="text-link">Discover who we are <ArrowRight size={16} /></Link></div>
        </div>
      </section>

      <section className="home-metrics section-frame">
        <div className="metrics__grid">
          <article className="metric-card metric-card--image"><img src="/assets/images/Useable_Images/personnel.png" alt="Calaya Engineering team" /><span>One connected team</span></article>
          <article className="metric-card metric-card--red"><span>Project delivery</span><strong data-count="100" data-suffix="%">0%</strong><p>Committed to accountable execution.</p></article>
          <article className="metric-card metric-card--image"><img src="/assets/images/Useable_Images/image5.jpg" alt="Engineer carrying out field work" /><span>On-site capability</span></article>
          <article className="metric-card metric-card--blue"><span>Operating reach</span><strong data-count="9" data-suffix="+">0+</strong><p>Countries across Africa and beyond.</p></article>
        </div>
      </section>

      <section className="services section-frame">
        <div className="section-head"><div><span>What we do</span><h2>Specialist services for every stage of an asset’s life.</h2></div><p>From new infrastructure to maintenance and integrity, Calaya connects skilled people, proven methods and specialist technologies.</p></div>
        <div className="service-rail">
          {services.map((service, index) => (
            <Link href={service.href} className="service-card" key={service.title}>
              <div className="service-card__image"><img src={service.image} alt="" /><span>{String(index + 1).padStart(2, '0')}</span></div>
              <h3>{service.title}</h3><p>{service.text}</p><span className="service-card__link">Explore service <ArrowRight size={15} /></span>
            </Link>
          ))}
        </div>
      </section>

      <section className="approach section-frame">
        <div className="approach__image"><img src="/assets/images/Useable_Images/image10.jpeg" alt="Calaya engineer working on industrial equipment" /><span>Real teams. Real sites.</span></div>
        <div className="approach__content">
          <span>How we work</span><h2>From first review to field execution.</h2><p>Our teams plan around the operating reality of each asset, aligning technical scope, safety controls and delivery responsibilities before work begins.</p>
          {['Understand the operational need', 'Build the right technical team', 'Deliver with controlled execution', 'Verify, report and improve'].map((item, i) => <div className="approach__step" key={item}><span>{String(i + 1).padStart(2, '0')}</span><strong>{item}</strong></div>)}
          <Link href="/contact" className="text-link">Discuss your scope <ArrowRight size={16} /></Link>
        </div>
      </section>

      <section className="project-band">
        <div className="section-frame">
          <div className="project-band__head"><div><span>Selected capability</span><h2>Real projects.<br />Measurable impact.</h2></div><p>Our work spans integrity, construction, maintenance and specialized operational support.</p></div>
          <div className="project-rail">
            {projects.map((project, index) => <article className="project-card" key={project.title}><img src={project.image} alt="" /><span>{project.client}</span><h3>{project.title}</h3><small>{String(index + 1).padStart(2, '0')}</small></article>)}
          </div>
          <Link href="/projects" className="button button--red project-band__button">View all projects <ArrowRight size={16} /></Link>
        </div>
      </section>

      <section className="impact section-frame">
        <div className="section-head"><div><span>Why Calaya</span><h2>Driving operational confidence through engineering.</h2></div><p>Disciplined systems and field experience keep quality, safety and performance aligned.</p></div>
        <div className="impact__rows">
          <article><span>01</span><h3>Established experience</h3><strong data-count="20" data-suffix="+ years">0+ years</strong></article>
          <article><span>02</span><h3>International reach</h3><strong data-count="9" data-suffix="+ countries">0+ countries</strong></article>
          <article><span>03</span><h3>Certified management systems</h3><strong>ISO 9001 & 45001</strong></article>
        </div>
      </section>

      <section className="news section-frame">
        <div className="section-head"><div><span>From the field</span><h2>Latest insights from Calaya.</h2></div><Link href="/projects" className="text-link">See our work <ArrowRight size={16} /></Link></div>
        <div className="news__grid">
          {news.map((item) => <Link href={item.href} className="news-card" key={item.title}><img src={item.image} alt="" /><div><span>Company news</span><h3>{item.title}</h3><span className="text-link">Read story <ArrowRight size={15} /></span></div></Link>)}
        </div>
      </section>

      <section className="closing-note section-frame"><p>Our teams work across disciplines and borders with one shared standard: complete the work safely, responsibly and well.</p><Link href="/about" aria-label="About Calaya"><ArrowRight /></Link></section>
    </div>
  );
}
