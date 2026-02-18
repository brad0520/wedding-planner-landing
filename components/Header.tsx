'use client';

import { useState } from 'react';
import Link from 'next/link';

const navItems = [
  { name: '홈', href: '/' },
  { name: '소개', href: '/about' },
  { name: '서비스', href: '/services' },
  { name: '갤러리', href: '/gallery' },
  { name: '후기', href: '/reviews' },
  { name: '문의', href: '/contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-rosegold/10">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="font-serif text-2xl text-rosegold tracking-wide">
            Blossom Wedding
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-dark/70 hover:text-rosegold transition-colors text-sm tracking-wide"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Link href="/contact" className="btn-primary text-sm">
              무료 상담 예약
            </Link>
          </div>

          <button
            className="lg:hidden w-11 h-11 flex items-center justify-center"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? '메뉴 닫기' : '메뉴 열기'}
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-16 md:top-20 bg-white z-40">
          <nav className="flex flex-col items-center justify-center h-full gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-2xl font-serif text-dark/80 hover:text-rosegold transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="btn-primary mt-4 text-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              무료 상담 예약
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
