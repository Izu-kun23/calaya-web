'use client';

import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const groups = [
  { title: 'Company', links: [['About us', '/about'], ['Projects', '/projects'], ['Certifications', '/certifications'], ['Contact', '/contact']] },
  { title: 'Services', links: [['Well services', '/services/well-services'], ['Inspection', '/services/inspection'], ['Pipeline construction', '/services/pipeline-construction'], ['Procurement', '/services/procurement']] },
  { title: 'Standards', links: [['OHS policy', '/policies/ohs'], ['Quality policy', '/policies/quality'], ['Products & partners', '/products']] },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__cta">
        <div><p>Have an operational challenge?</p><h2>Ready to put our expertise to work?</h2></div>
        <div><Link href="/contact" className="button button--red">Start a conversation</Link><Link href="/projects" className="button button--ghost">View our work</Link></div>
      </div>
      <div className="site-footer__grid">
        <div className="site-footer__identity">
          <img src="/assets/images/calaya_logo_wc.png" alt="Calaya Engineering" />
          <p>Plot 194B, 23 Fiddil Avenue, Off Ordinance Road, Trans-Amadi, Port Harcourt, Rivers State, Nigeria.</p>
          <a href="mailto:info@calayaengineering.com">info@calayaengineering.com</a>
        </div>
        {groups.map((group) => (
          <div className="site-footer__group" key={group.title}>
            <h3>{group.title}</h3>
            {group.links.map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}
          </div>
        ))}
      </div>
      <div className="site-footer__bottom">
        <p>© {new Date().getFullYear()} Calaya Engineering Services Limited.</p>
        <div className="site-footer__socials">
          <a href="https://www.linkedin.com/company/calaya-engineering-services-limited/" aria-label="LinkedIn"><Linkedin size={16} /></a>
          <a href="https://x.com/calayaeng2005" aria-label="X"><Twitter size={16} /></a>
          <a href="https://www.instagram.com/calaya_ltd/" aria-label="Instagram"><Instagram size={16} /></a>
          <a href="https://www.facebook.com/Calayaengineeringservices" aria-label="Facebook"><Facebook size={16} /></a>
        </div>
      </div>
    </footer>
  );
}
