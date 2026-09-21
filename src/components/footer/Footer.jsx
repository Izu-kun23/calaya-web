import Link from 'next/link';
import { ArrowUpRight, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const links = [
  ['Our work', '/projects'], ['Services', '/services/inspection'], ['Products & partners', '/products'],
  ['About us', '/about'], ['Certifications', '/certifications'], ['Contact', '/contact'],
];

export default function Footer() {
  return (
    <footer className="bg-[#0B0E12] px-4 pb-5 text-white sm:px-6 lg:px-10">
      <div className="mx-auto max-w-[1500px] border-t border-white/15 pt-14 md:pt-20">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <img src="/assets/images/calaya_logo_wc.png" alt="Calaya Engineering" className="h-11 w-auto" />
            <p className="mt-7 max-w-sm text-sm leading-relaxed text-white/55">Integrated engineering, inspection, construction and field services for the energy industry.</p>
            <a href="mailto:info@calayaengineering.com" className="mt-6 inline-flex items-center gap-2 text-sm underline decoration-white/30 underline-offset-4 transition hover:decoration-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D9272E]">info@calayaengineering.com <ArrowUpRight className="size-4" /></a>
          </div>
          <nav className="grid grid-cols-2 gap-x-8 lg:col-span-3" aria-label="Footer navigation">
            {links.map(([label, href]) => <Link href={href} key={href} className="border-t border-white/15 py-3 text-sm text-white/70 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D9272E]">{label}</Link>)}
          </nav>
          <div className="lg:col-span-4 lg:pl-10">
            <p className="text-xs text-white/40">Nigeria office</p>
            <address className="mt-3 max-w-sm text-sm not-italic leading-relaxed text-white/70">Plot 194B, 23 Fiddil Avenue, Off Ordinance Road, Trans-Amadi, Port Harcourt, Rivers State.</address>
          </div>
        </div>
        <div className="mt-16 flex flex-col gap-5 border-t border-white/15 pt-5 text-[11px] text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Calaya Engineering Services Limited.</p>
          <div className="flex items-center gap-2">
            {[[Linkedin, 'https://www.linkedin.com/company/calaya-engineering-services-limited/', 'LinkedIn'], [Twitter, 'https://x.com/calayaeng2005', 'X'], [Instagram, 'https://www.instagram.com/calaya_ltd/', 'Instagram'], [Facebook, 'https://www.facebook.com/Calayaengineeringservices', 'Facebook']].map(([Icon, href, label]) => <a key={label} href={href} aria-label={label} className="grid size-10 place-items-center rounded-full border border-white/15 text-white transition hover:border-[#D9272E] hover:text-[#D9272E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D9272E]"><Icon className="size-4" /></a>)}
          </div>
        </div>
      </div>
    </footer>
  );
}
