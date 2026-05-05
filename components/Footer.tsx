'use client';
import { useState, useEffect } from 'react';

import Link from 'next/link';
import { Instagram } from 'lucide-react';
import { studio } from '@/lib/site-data';
import { useSiteData } from '@/components/SiteDataProvider';

export function Footer() {
  const [integrations, setIntegrations] = useState({
    booking_enabled: false,
    portal_enabled: false,
    booking_url: '#',
    portal_url: '#',
  });

  const siteData = useSiteData();
  const gymName = siteData?.gym?.name?.toUpperCase() || 'ZEN HOUSE';
  const instagram = siteData?.brand?.instagram_url || siteData?.gym?.instagram || studio.social.instagram;

  useEffect(() => {
    function handleBrandIntegrations(e: Event) {
      const d = (e as CustomEvent).detail as Record<string, unknown>;
      const slug = (d.gym_slug as string) || '';
      const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://app.codegyms.com';
      setIntegrations(prev => ({
        booking_enabled: d.booking_enabled !== undefined ? !!(d.booking_enabled) : prev.booking_enabled,
        portal_enabled: d.portal_enabled !== undefined ? !!(d.portal_enabled) : prev.portal_enabled,
        booking_url: slug ? `${baseUrl}/schedule/${slug}` : prev.booking_url,
        portal_url: (d.portal_url as string) || (slug ? `${baseUrl}/member-login/${slug}` : prev.portal_url),
      }));
    }
    window.addEventListener('koriva:brand', handleBrandIntegrations);
    return () => window.removeEventListener('koriva:brand', handleBrandIntegrations);
  }, []);

  return (
    <footer style={{ backgroundColor: 'var(--bg-fog)', borderTop: '1px solid var(--border)' }}>
      <div className="container-wide py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          <div className="md:col-span-2">
            <Link href="/">
              <span
                className="font-heading text-ink tracking-widest"
                style={{ fontSize: '0.75rem', letterSpacing: '0.3em' }}
              >
                {gymName}
              </span>
            </Link>
            <p className="font-body text-muted text-sm leading-relaxed max-w-xs mt-5">
              {studio.description}
            </p>
            <div className="flex gap-5 mt-6">
              {instagram && (
                <a href={instagram} className="text-muted hover:text-ink transition-colors" aria-label="Instagram">
                  <Instagram size={16} />
                </a>
              )}
            </div>
          </div>

          <div>
            <p className="font-body text-ink text-xs uppercase tracking-widest mb-6">Navigate</p>
            <ul className="space-y-4">
              {[
                { label: 'Sessions', href: '#classes' },
                { label: 'Teachers', href: '#teachers' },
                { label: 'Our Space', href: '#studio' },
                { label: 'Membership', href: '#pricing' },
                { label: 'Book Free Session', href: '#contact' },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="font-body text-muted hover:text-ink text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-body text-ink text-xs uppercase tracking-widest mb-6">Find Us</p>
            <address className="not-italic space-y-3">
              <p className="font-body text-muted text-sm leading-relaxed">
                {studio.address.street}<br />
                {studio.address.city}, {studio.address.state} {studio.address.zip}
              </p>
              <div className="space-y-1 pt-2">
                {Object.entries(studio.hours).map(([day, hours]) => (
                  <div key={day} className="flex justify-between gap-4 text-xs font-body">
                    <span className="text-stone-400 uppercase tracking-widest">{day}</span>
                    <span className="text-muted">{hours}</span>
                  </div>
                ))}
              </div>
            </address>
          </div>
        </div>
      </div>

      <div style={{ borderTop: '1px solid var(--border)' }}>
        <div className="container-wide py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-muted text-xs">
            © {new Date().getFullYear()} Zen House. All rights reserved.
          </p>
          <a
            href="https://codegyms.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-muted hover:text-ink text-xs transition-colors"
            style={{ color: 'var(--blue)', opacity: 0.5 }}
          >
            Powered by Koriva
          </a>
        </div>
      </div>
    
      {/* Integration CTAs */}
      {(integrations.booking_enabled || integrations.portal_enabled) && (
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="container-wide py-4 flex flex-wrap items-center justify-center gap-4">
            {integrations.booking_enabled && (
              <a
                href={integrations.booking_url}
                className="font-body text-xs tracking-widest uppercase font-semibold px-5 py-2.5 transition-all hover:opacity-80"
                style={{ border: '1px solid var(--primary, #fff)', color: 'var(--primary, #fff)', borderRadius: '2px' }}
              >
                Book a Class →
              </a>
            )}
            {integrations.portal_enabled && (
              <a
                href={integrations.portal_url}
                className="font-body text-xs tracking-widest uppercase font-semibold px-5 py-2.5 transition-all hover:opacity-80"
                style={{ border: '1px solid rgba(255,255,255,0.25)', color: 'rgba(255,255,255,0.55)', borderRadius: '2px' }}
              >
                Member Login →
              </a>
            )}
          </div>
        </div>
      )}
    </footer>
  );
}