'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useSiteData } from '@/components/SiteDataProvider';

const navLinks = [
  { label: 'Sessions', href: '#classes' },
  { label: 'Teachers', href: '#teachers' },
  { label: 'Space', href: '#studio' },
  { label: 'Membership', href: '#pricing' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const siteData = useSiteData();
  const gymName = siteData?.gym?.name?.toUpperCase() || 'ZEN HOUSE';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        backgroundColor: scrolled ? 'rgba(248,247,244,0.92)' : 'transparent',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        backdropFilter: scrolled ? 'blur(14px)' : 'none',
      }}
    >
      <div className="container-wide">
        <div
          className="flex items-center justify-between transition-all duration-500"
          style={{ height: scrolled ? '4rem' : '5.5rem' }}
        >
          <Link href="/">
            <span
              className="font-heading text-ink tracking-widest"
              style={{ fontSize: '0.75rem', letterSpacing: '0.3em' }}
            >
              {gymName}
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="font-body text-muted hover:text-ink transition-colors duration-300"
                style={{ fontSize: '0.6rem', letterSpacing: '0.22em', textTransform: 'uppercase' }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Link href="#pricing" className="btn-primary">
              Book Free Session
            </Link>
          </div>

          <button
            className="md:hidden text-muted hover:text-ink transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div style={{ backgroundColor: 'var(--bg)', borderTop: '1px solid var(--border)' }}>
          <div className="container-wide py-8 flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-body text-muted hover:text-ink transition-colors"
                style={{ fontSize: '0.6rem', letterSpacing: '0.22em', textTransform: 'uppercase' }}
              >
                {link.label}
              </Link>
            ))}
            <Link href="#pricing" onClick={() => setMenuOpen(false)} className="btn-primary mt-2 text-center">
              Book Free Session
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
