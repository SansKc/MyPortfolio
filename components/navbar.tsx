'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

const links = [
  { href: '/#about', label: 'about' },
  { href: '/#projects', label: 'projects' },
  { href: '/#contact', label: 'contact' },
  { href: '/gallery', label: 'gallery' },
];

export function Navbar() {
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const scrollArea = document.getElementById('page-scroll');
    const workSection = document.getElementById('workflows');
    const contactSection = document.getElementById('contact');

    if (!scrollArea || !workSection || !contactSection) return;

    const updateNavbar = () => {
      const workBounds = workSection.getBoundingClientRect();
      const isViewingWork = workBounds.top <= 80 && workBounds.bottom > 80;
      setIsHidden(isViewingWork || contactSection.getBoundingClientRect().top <= 80);
    };

    updateNavbar();
    scrollArea.addEventListener('scroll', updateNavbar, { passive: true });
    return () => scrollArea.removeEventListener('scroll', updateNavbar);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 flex items-center justify-between border-b border-black/10 bg-white px-6 py-5 transition-transform duration-300 sm:px-10 ${
        isHidden ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <Link
        href="/"
        aria-label="Sanskar Kc home"
        className="flex h-11 w-11 items-center justify-center rounded-full border border-black font-[family-name:var(--font-anon-pro)] text-sm font-bold transition-opacity hover:opacity-60"
      >
        SK
      </Link>
      <nav
        aria-label="Main navigation"
        className="flex items-center gap-4 font-[family-name:var(--font-anon-pro)] text-sm sm:gap-10"
      >
        {links.map((link) => (
          <Link key={link.href} href={link.href} className="transition-opacity hover:opacity-60">
            {link.label}
          </Link>
        ))}
        <Link href="/account" aria-label="Account" className="transition-opacity hover:opacity-60">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5Zm0 2c-4.42 0-9 2.24-9 5v2h18v-2c0-2.76-4.58-5-9-5Z" />
          </svg>
        </Link>
      </nav>
    </header>
  );
}
