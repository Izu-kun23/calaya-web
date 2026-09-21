'use client';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="relative isolate flex min-h-screen items-end overflow-hidden bg-[#0B0E12] px-4 pb-16 pt-32 text-white sm:px-6 md:pb-24 lg:px-10">
      <div aria-hidden="true" className="ambient-glow-a absolute -right-1/3 -top-1/2 -z-10 size-[80vw] rounded-full bg-[#D9272E]/20 blur-[130px]" />
      <div className="mx-auto grid w-full max-w-[1500px] gap-12 border-t border-white/20 pt-8 md:grid-cols-12 md:items-end">
        <div className="md:col-span-8">
          <p className="mb-6 text-xs text-white/50">Error 404</p>
          <h1 className="font-display text-[clamp(4.5rem,12vw,12rem)] font-normal leading-[.78] tracking-[-.06em]">Page not found.</h1>
        </div>
        <div className="md:col-span-4">
          <p className="max-w-sm text-base leading-relaxed text-white/60">The page may have moved, or the address may be incorrect. Return to the homepage to continue.</p>
          <Link href="/" className="mt-7 inline-flex min-h-12 items-center gap-3 rounded-full bg-[#D9272E] px-6 text-xs font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white hover:text-[#0B0E12] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">
            Return home <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
