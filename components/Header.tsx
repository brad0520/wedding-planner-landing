'use client';

import { useState, useEffect } from 'react';
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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex flex-col items-center">
            <span
              className={`font-serif text-xl md:text-2xl tracking-[0.15em] transition-colors duration-500 ${
                scrolled ? 'text-champagne' : 'text-white'
              }`}
            >
              BLOSSOM
            </span>
            <span
              className={`text-[10px] tracking-[0.3em] uppercase transition-colors duration-500 ${
                scrolled ? 'text-warm-400' : 'text-white/70'
              }`}
            >
              Wedding
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm tracking-wide transition-colors duration-300 hover:text-champagne ${
                  scrolled ? 'text-warm-600' : 'text-white/90'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className={`px-5 py-2.5 text-sm tracking-wide transition-all duration-300 rounded-sm ${
                scrolled
                  ? 'bg-champagne text-white hover:bg-champagne-dark'
                  : 'border border-white/50 text-white hover:bg-white/10'
              }`}
            >
              상담 예약
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden w-11 h-11 flex items-center justify-center"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? '메뉴 닫기' : '메뉴 열기'}
          >
            {mobileMenuOpen ? (
              <svg
                className={`w-6 h-6 transition-colors ${scrolled ? 'text-warm-800' : 'text-white'}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                className={`w-6 h-6 transition-colors ${scrolled ? 'text-warm-800' : 'text-white'}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-16 md:top-20 bg-white/98 backdrop-blur-sm z-40">
          <nav className="flex flex-col items-center justify-center h-full gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-xl font-serif text-warm-700 hover:text-champagne transition-colors tracking-wide"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="w-8 h-px bg-champagne/30 my-2" />
            <Link
              href="/contact"
              className="btn-primary mt-2 text-base"
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
