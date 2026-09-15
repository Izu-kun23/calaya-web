'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, Menu, X } from 'lucide-react';

const services = [
  ['Well services', '/services/well-services'],
  ['Corrosion management', '/services/corrosion-management'],
  ['Inspection services', '/services/inspection'],
  ['Pipeline construction', '/services/pipeline-construction'],
  ['Technical manpower', '/services/technical-manpower'],
  ['Facilities management', '/services/facilities-management'],
  ['Civil engineering', '/services/civil-engineering'],
  ['Procurement services', '/services/procurement'],
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const home = pathname === '/';

  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    const openServices = () => setServicesOpen(true);
    const openMobile = () => setOpen(true);
    window.addEventListener('openWhatWeDoDropdown', openServices);
    window.addEventListener('openMobileMenu', openMobile);
    return () => {
      window.removeEventListener('openWhatWeDoDropdown', openServices);
      window.removeEventListener('openMobileMenu', openMobile);
    };
  }, []);

  return (
    <header className={`site-header ${home ? 'site-header--home' : ''}`}>
      <nav className="site-nav" aria-label="Primary navigation">
        <Link href="/" className="site-nav__brand" aria-label="Calaya Engineering home">
          <img src={home ? '/assets/images/calaya_logo_wc.png' : '/assets/images/calaya_logo_1.png'} alt="Calaya Engineering" />
        </Link>
        <div className="site-nav__links">
          <Link href="/" className={pathname === '/' ? 'is-active' : ''}>Home</Link>
          <Link href="/about" className={pathname === '/about' ? 'is-active' : ''}>Who we are</Link>
          <div className="site-nav__services">
            <button onClick={() => setServicesOpen((value) => !value)} aria-expanded={servicesOpen}>
              What we do <ChevronDown size={14} />
            </button>
            {servicesOpen && (
              <div className="site-nav__mega">
                <div><p>Engineering services</p><h2>Built for complex field operations.</h2></div>
                <div className="site-nav__mega-grid">
                  {services.map(([label, href], index) => (
                    <Link href={href} key={href}><span>{String(index + 1).padStart(2, '0')}</span>{label}</Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          <Link href="/products" className={pathname === '/products' ? 'is-active' : ''}>Products & partners</Link>
          <Link href="/projects" className={pathname === '/projects' ? 'is-active' : ''}>Projects</Link>
        </div>
        <Link href="/contact" className="site-nav__cta">Contact us</Link>
        <button className="site-nav__menu" onClick={() => setOpen(true)} aria-label="Open navigation"><Menu /></button>
      </nav>
      <div className={`mobile-drawer ${open ? 'is-open' : ''}`} aria-hidden={!open}>
        <div className="mobile-drawer__top">
          <img src="/assets/images/calaya_logo_1.png" alt="Calaya Engineering" />
          <button onClick={() => setOpen(false)} aria-label="Close navigation"><X /></button>
        </div>
        <div className="mobile-drawer__links">
          <Link href="/">Home</Link><Link href="/about">Who we are</Link><p>What we do</p>
          {services.map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}
          <Link href="/products">Products & partners</Link><Link href="/projects">Projects</Link>
          <Link href="/contact" className="mobile-drawer__contact">Contact us</Link>
        </div>
      </div>
      {open && <button className="mobile-drawer__backdrop" onClick={() => setOpen(false)} aria-label="Close navigation" />}
    </header>
  );
}
