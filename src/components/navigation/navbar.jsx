'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowUpRight, ChevronDown, Menu, X } from 'lucide-react';

const services = [
  ['Well services', '/services/well-services'], ['Corrosion management', '/services/corrosion-management'],
  ['Inspection services', '/services/inspection'], ['Pipeline construction', '/services/pipeline-construction'],
  ['Technical manpower', '/services/technical-manpower'], ['Facilities management', '/services/facilities-management'],
  ['Civil engineering', '/services/civil-engineering'], ['Procurement services', '/services/procurement'],
];

const RollLabel = ({ children }) => (
  <span className="h-4 overflow-hidden"><span className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:-translate-y-1/2 group-focus-visible:-translate-y-1/2"><span className="h-4">{children}</span><span aria-hidden="true" className="h-4">{children}</span></span></span>
);

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [whoOpen, setWhoOpen] = useState(false);
  const menuButton = useRef(null);

  useEffect(() => { setOpen(false); setServicesOpen(false); setWhoOpen(false); }, [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onKeyDown = (event) => { if (event.key === 'Escape') { setOpen(false); setServicesOpen(false); setWhoOpen(false); menuButton.current?.focus(); } };
    window.addEventListener('keydown', onKeyDown);
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', onKeyDown); };
  }, [open]);

  const navLink = 'group inline-flex min-h-11 items-center text-xs font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B0E12] focus-visible:ring-offset-2';
  const isActive = (href) => pathname === href || pathname.startsWith(`${href}/`);
  const servicesActive = isActive('/services');
  const productsActive = isActive('/products') || isActive('/partners');
  const whoActive = isActive('/about') || isActive('/certifications') || isActive('/policies');
  const topLink = (active) => `${navLink} relative after:absolute after:inset-x-0 after:bottom-1 after:h-0.5 after:origin-left after:bg-[#D9272E] after:transition-transform after:duration-300 ${active ? 'after:scale-x-100' : 'after:scale-x-0 hover:after:scale-x-100'}`;
  const mobileTopLink = (active) => `border-t border-white/15 py-3 font-display text-[clamp(2.3rem,11vw,4rem)] leading-none tracking-[-.04em] ${active ? 'underline decoration-[3px] decoration-[#D9272E] underline-offset-8' : ''}`;
  const mobileSubLink = (active, className = '') => `${className} ${active ? 'bg-[#D9272E] text-white' : ''}`;

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 lg:px-6">
      <nav className="relative mx-auto flex h-[68px] max-w-[1700px] items-center justify-between rounded-full border border-black/5 bg-white/95 px-4 shadow-[0_8px_30px_rgba(11,14,18,.08)] backdrop-blur-xl lg:h-[72px] lg:px-5" aria-label="Primary navigation">
        <Link href="/" className="shrink-0 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B0E12]" aria-label="Calaya Engineering home"><img src="/assets/images/calaya_logo_1.png" alt="" className="h-8 w-auto lg:h-10" /></Link>

        <div className="hidden items-center gap-7 lg:flex xl:gap-9">
          <Link href="/" className={topLink(pathname === '/')} aria-current={pathname === '/' ? 'page' : undefined}><RollLabel>Home</RollLabel></Link>
          <Link href="/projects" className={topLink(isActive('/projects'))} aria-current={isActive('/projects') ? 'page' : undefined}><RollLabel>Our work</RollLabel></Link>
          <div className="relative">
            <button className={`${topLink(servicesActive)} gap-1`} onClick={() => { setServicesOpen((value) => !value); setWhoOpen(false); }} aria-expanded={servicesOpen} aria-controls="services-menu" aria-current={servicesActive ? 'page' : undefined}><RollLabel>Services</RollLabel><ChevronDown className={`size-3.5 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} /></button>
          </div>
          <Link href="/products" className={topLink(productsActive)} aria-current={productsActive ? 'page' : undefined}><RollLabel>Products & partners</RollLabel></Link>
          <div className="relative">
            <button className={`${topLink(whoActive)} gap-1`} onClick={() => { setWhoOpen((value) => !value); setServicesOpen(false); }} aria-expanded={whoOpen} aria-controls="who-we-are-menu" aria-current={whoActive ? 'page' : undefined}><RollLabel>Who We Are</RollLabel><ChevronDown className={`size-3.5 transition-transform ${whoOpen ? 'rotate-180' : ''}`} /></button>
          </div>
          <Link href="/contact" className={topLink(isActive('/contact'))} aria-current={isActive('/contact') ? 'page' : undefined}><RollLabel>Contact</RollLabel></Link>
        </div>

        <Link href="/contact" className="group hidden min-h-11 items-center gap-2 rounded-full bg-[#0B0E12] px-5 text-xs font-semibold text-white transition duration-500 hover:-translate-y-0.5 hover:bg-[#D9272E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D9272E] focus-visible:ring-offset-2 lg:inline-flex">Start a project <ArrowUpRight className="size-4" /></Link>
        <button ref={menuButton} className="grid size-11 place-items-center rounded-full bg-[#0B0E12] text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D9272E] focus-visible:ring-offset-2 lg:hidden" onClick={() => setOpen(true)} aria-label="Open navigation" aria-expanded={open}><Menu className="size-5" /></button>

        {servicesOpen && <div id="services-menu" className="absolute left-1/2 top-[76px] hidden w-[min(96vw,980px)] -translate-x-1/2 grid-cols-[.75fr_1.5fr] gap-10 rounded-2xl border border-black/10 bg-white p-8 shadow-[0_24px_70px_rgba(11,14,18,.14)] lg:grid"><div><p className="text-xs text-black/50">Engineering services</p><p className="mt-3 max-w-[12ch] font-display text-3xl leading-[.95] tracking-[-.04em]">Built for complex field operations.</p></div><div className="grid grid-cols-2">{services.map(([label, href], index) => { const active = isActive(href); return <Link href={href} key={href} aria-current={active ? 'page' : undefined} className={`group flex items-center gap-3 border-b px-3 py-3 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B0E12] ${active ? 'border-[#D9272E] bg-[#D9272E] text-white' : 'border-black/10'}`}><span className={`text-[10px] tabular-nums ${active ? 'text-white/70' : 'text-black/40'}`}>{String(index + 1).padStart(2, '0')}</span><span className="transition-transform duration-300 group-hover:translate-x-1">{label}</span></Link>; })}</div></div>}
        {whoOpen && <div id="who-we-are-menu" className="absolute left-1/2 top-[76px] hidden w-[min(96vw,980px)] -translate-x-1/2 grid-cols-3 gap-3 rounded-2xl border border-black/10 bg-white p-5 shadow-[0_24px_70px_rgba(11,14,18,.14)] lg:grid">
          <Link href="/about" aria-current={isActive('/about') ? 'page' : undefined} className={`group rounded-xl border p-5 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B0E12] ${isActive('/about') ? 'border-[#D9272E] bg-[#D9272E] text-white' : 'border-black/10 hover:bg-[#F4F5F2]'}`}><span className="flex items-center justify-between font-display text-2xl tracking-[-.035em]">About Us <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></span><span className={`mt-3 block text-xs leading-relaxed ${isActive('/about') ? 'text-white/70' : 'text-black/55'}`}>Learn about our company history and mission</span></Link>
          <Link href="/certifications" aria-current={isActive('/certifications') ? 'page' : undefined} className={`group rounded-xl border p-5 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B0E12] ${isActive('/certifications') ? 'border-[#D9272E] bg-[#D9272E] text-white' : 'border-black/10 hover:bg-[#F4F5F2]'}`}><span className="flex items-center justify-between font-display text-2xl tracking-[-.035em]">Our Certifications <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></span><span className={`mt-3 block text-xs leading-relaxed ${isActive('/certifications') ? 'text-white/70' : 'text-black/55'}`}>View our industry certifications and standards</span></Link>
          <div className="rounded-xl bg-[#0B0E12] p-5 text-white"><p className="font-display text-2xl tracking-[-.035em]">Our Policies</p><p className="mt-3 text-xs text-white/55">OHS and Quality policies</p><div className="mt-5 flex flex-wrap gap-2"><Link href="/policies/ohs" aria-current={isActive('/policies/ohs') ? 'page' : undefined} className={`rounded-full border px-3 py-2 text-xs transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D9272E] ${isActive('/policies/ohs') ? 'border-[#D9272E] bg-[#D9272E] text-white' : 'border-white/20 hover:border-[#D9272E] hover:text-[#D9272E]'}`}>OHS policy</Link><Link href="/policies/quality" aria-current={isActive('/policies/quality') ? 'page' : undefined} className={`rounded-full border px-3 py-2 text-xs transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D9272E] ${isActive('/policies/quality') ? 'border-[#D9272E] bg-[#D9272E] text-white' : 'border-white/20 hover:border-[#D9272E] hover:text-[#D9272E]'}`}>Quality policy</Link></div></div>
        </div>}
      </nav>

      <div className={`fixed inset-0 z-[60] bg-[#0B0E12] text-white transition duration-500 ease-[cubic-bezier(.16,1,.3,1)] lg:hidden ${open ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-4 opacity-0'}`} aria-hidden={!open}>
        <div className="flex h-full flex-col px-4 py-4 sm:px-6">
          <div className="flex items-center justify-between"><img src="/assets/images/calaya_logo_wc.png" alt="Calaya Engineering" className="h-9 w-auto" /><button onClick={() => { setOpen(false); menuButton.current?.focus(); }} className="grid size-11 place-items-center rounded-full border border-white/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D9272E]" aria-label="Close navigation"><X className="size-5" /></button></div>
          <div className="mt-12 flex flex-1 flex-col overflow-y-auto">
            {[['Home', '/'], ['Our work', '/projects'], ['Products & partners', '/products'], ['Contact', '/contact']].map(([label, href]) => { const active = href === '/' ? pathname === '/' : href === '/products' ? productsActive : isActive(href); return <Link key={href} href={href} aria-current={active ? 'page' : undefined} className={mobileTopLink(active)}>{label}</Link>; })}
            <p className="mt-8 text-xs text-white/45">Who We Are</p>
            <div className="mt-3 grid gap-0 sm:grid-cols-2">
              <Link href="/about" aria-current={isActive('/about') ? 'page' : undefined} className={mobileSubLink(isActive('/about'), 'border-t border-white/15 px-3 py-3 pr-5')}><span className="block text-base font-medium">About Us</span><span className="mt-1 block text-xs leading-relaxed text-white/60">Learn about our company history and mission</span></Link>
              <Link href="/certifications" aria-current={isActive('/certifications') ? 'page' : undefined} className={mobileSubLink(isActive('/certifications'), 'border-t border-white/15 px-3 py-3 pr-5')}><span className="block text-base font-medium">Our Certifications</span><span className="mt-1 block text-xs leading-relaxed text-white/60">View our industry certifications and standards</span></Link>
              <div className="border-t border-white/15 py-3 pr-5"><span className="block text-base font-medium">Our Policies</span><span className="mt-1 block text-xs text-white/45">OHS and Quality policies</span><div className="mt-3 flex gap-2"><Link href="/policies/ohs" aria-current={isActive('/policies/ohs') ? 'page' : undefined} className={`rounded-full border px-3 py-2 text-xs ${isActive('/policies/ohs') ? 'border-[#D9272E] bg-[#D9272E] text-white' : 'border-white/20'}`}>OHS policy</Link><Link href="/policies/quality" aria-current={isActive('/policies/quality') ? 'page' : undefined} className={`rounded-full border px-3 py-2 text-xs ${isActive('/policies/quality') ? 'border-[#D9272E] bg-[#D9272E] text-white' : 'border-white/20'}`}>Quality policy</Link></div></div>
            </div>
            <p className="mt-8 text-xs text-white/45">Services</p>
            <div className="mt-3 grid grid-cols-1 sm:grid-cols-2">{services.map(([label, href]) => { const active = isActive(href); return <Link href={href} key={href} aria-current={active ? 'page' : undefined} className={mobileSubLink(active, 'border-t border-white/15 px-3 py-3 text-sm text-white/75')}>{label}</Link>; })}</div>
          </div>
          <Link href="/contact" className="mt-5 flex min-h-12 items-center justify-between rounded-full bg-[#D9272E] px-6 text-sm font-semibold text-white">Start a project <ArrowUpRight className="size-4" /></Link>
        </div>
      </div>
    </header>
  );
}
