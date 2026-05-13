// @ts-nocheck
'use client';
import { useState, useEffect } from 'react';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useKorivaElement } from '@/hooks/useKorivaElement';
import { useSiteData } from '@/components/SiteDataProvider';

/**
 * ZEN HOUSE — Editorial Horizontal Split
 *
 * Structure:
 *   ┌──────────┬──────────────────────────────────────────────────┐
 *   │          │                                                  │
 *   │  ZEN     │                                                  │
 *   │  HOUSE   │   Full-height nature/zen panoramic photo         │
 *   │          │   (75% of viewport width)                        │
 *   │  Still.  │                                                  │
 *   │  Clear.  │   ┌────────────────────────────────────────────┐ │
 *   │  Present │   │  Subtitle + CTAs floating card at bottom   │ │
 *   │          │   └────────────────────────────────────────────┘ │
 *   │  [Book]  │                                                  │
 *   └──────────┴──────────────────────────────────────────────────┘
 *
 * Reference: Japanese zen aesthetic, Insight Timer editorial
 * Japanese-influenced: extreme whitespace, single focal point, minimal color
 * Key difference from Prana: Split layout with DARK left sidebar (not light split)
 *   and image fills right 75% without any overlay text
 */
export function HeroSection() {

  const [bookingIntegration, setBookingIntegration] = useState<{
    booking_enabled: boolean;
    booking_url: string;
  }>({ booking_enabled: false, booking_url: '#' });
  const siteData = typeof useSiteData === 'function' ? useSiteData() : null;

  const eyebrow = useKorivaElement('hero_eyebrow', { content: 'ZEN HOUSE', visible: true }, { section: 'Hero', label: 'Eyebrow', type: 'eyebrow' });
  const hl1 = useKorivaElement('hero_headline_1', { content: 'Zen House', visible: true }, { section: 'Hero', label: 'Headline', type: 'text' });
  const tagline = useKorivaElement('hero_headline_2', { content: 'Still. Clear. Present.', visible: true }, { section: 'Hero', label: 'Tagline', type: 'text' });
  const subtitle = useKorivaElement('hero_subtitle', { content: "Portland's home for meditation, breathwork and mindfulness.", visible: true }, { section: 'Hero', label: 'Description', type: 'text' });
  const cta1 = useKorivaElement('hero_cta_primary', { content: 'Book a Session', visible: true }, { section: 'Hero', label: 'CTA Primary', type: 'button' });
  const cta2 = useKorivaElement('hero_cta_secondary', { content: 'Explore Classes', visible: true }, { section: 'Hero', label: 'CTA Secondary', type: 'button' });
  const heroBg = useKorivaElement('hero_bg', { content: '', mediaType: 'image', visible: true }, { section: 'Hero', label: 'Background Image', type: 'image' });

  const bgImage =
    heroBg.content ||
    siteData?.hero_url ||
    'https://images.unsplash.com/photo-1508672019048-805c876b67e2?w=1920&q=85&auto=format&fit=crop';

  // Parse tagline into words for staggered reveal
  const words = tagline.content.split(/[.\s]+/).filter(Boolean);

  useEffect(() => {
    function handleBrand(e: Event) {
      const d = (e as CustomEvent).detail as Record<string, unknown>;
      if (d.booking_enabled !== undefined || d.gym_slug !== undefined) {
        const slug = (d.gym_slug as string) || '';
        const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://app.codegyms.com';
        setBookingIntegration({
          booking_enabled: !!(d.booking_enabled),
          booking_url: slug ? `${baseUrl}/schedule/${slug}` : '#',
        });
      }
    }
    window.addEventListener('koriva:brand', handleBrand);
    return () => window.removeEventListener('koriva:brand', handleBrand);
  }, []);
  return (
    <section
      style={{
        display: 'grid',
        gridTemplateColumns: '26% 74%',
        minHeight: '100vh',
        overflow: 'hidden',
      }}
    >
      {/* ── Left: Sage-green / fog editorial sidebar ─────────────────── */}
      <div
        style={{
          backgroundColor: 'var(--bg-fog, #EEF2EE)',
          borderRight: '1px solid rgba(74,124,89,0.12)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '2.25rem 1.75rem',
          position: 'relative',
          zIndex: 2,
        }}
      >
        {/* Top: subtle eyebrow */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.1 }}>
          <p style={{ fontSize: eyebrow.fontSize ? `${eyebrow.fontSize}px` : '9px', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--blue, #4A7C59)', fontFamily: 'var(--font-body)', margin: 0, opacity: 0.6 }} {...eyebrow.editProps}>
            {eyebrow.content}
          </p>
        </motion.div>

        {/* Middle: studio name + tagline words staggered */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingTop: '60px', paddingBottom: '60px', gap: '0' }}>
          {/* Large studio name */}
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}>
            <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: hl1.fontSize ? `${hl1.fontSize}px` : 'clamp(1.8rem, 3.2vw, 3.8rem)', lineHeight: 1.0, fontWeight: hl1.fontWeight ? Number(hl1.fontWeight) : 300, color: 'var(--ink, #1C2B1E)', letterSpacing: '-0.02em', margin: '0 0 2rem 0' }} {...hl1.editProps}>
              {hl1.content.split(' ').map((word, i) => (
                <span key={i} style={{ display: 'block' }}>{word}</span>
              ))}
            </h1>
          </motion.div>

          {/* Thin separator */}
          <div style={{ width: '28px', height: '1px', background: 'var(--blue, #4A7C59)', opacity: 0.4, marginBottom: '1.5rem' }} />

          {/* Tagline words — one per line, staggered */}
          <div {...tagline.editProps}>
            {words.map((word, i) => (
              <motion.p
                key={word}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.35 + i * 0.12 }}
                style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(0.85rem, 1.4vw, 1.5rem)', fontWeight: 300, fontStyle: i > 0 ? 'italic' : 'normal', color: 'var(--ink, #1C2B1E)', opacity: i === 0 ? 0.9 : 0.55 - i * 0.05, letterSpacing: '0.01em', margin: '0 0 0.1em 0' }}
              >
                {word}.
              </motion.p>
            ))}
          </div>
        </div>

        {/* Bottom: CTA + stats */}
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <Link href="{bookingIntegration.booking_enabled ? bookingIntegration.booking_url : \'#classes\'}" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '10px 18px', backgroundColor: 'var(--blue, #4A7C59)', color: '#fff', borderRadius: '3px', fontSize: cta1.fontSize ? `${cta1.fontSize}px` : '11px', fontWeight: cta1.fontWeight ? Number(cta1.fontWeight) : 500, letterSpacing: '0.08em', textTransform: 'uppercase', textDecoration: 'none', fontFamily: 'var(--font-body)', width: 'fit-content' }} {...cta1.editProps}>
            {cta1.content}
          </Link>
          <Link href="{bookingIntegration.booking_enabled ? bookingIntegration.booking_url : \'#classes\'}" style={{ fontSize: cta2.fontSize ? `${cta2.fontSize}px` : '11px', color: 'var(--ink, #1C2B1E)', opacity: 0.4, textDecoration: 'underline', textUnderlineOffset: '3px', fontFamily: 'var(--font-body)', width: 'fit-content' }} {...cta2.editProps}>
            {cta2.content}
          </Link>

          {/* Stat row */}
          <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid rgba(74,124,89,0.12)', display: 'flex', flexDirection: 'column', gap: '6px' }}>
            {[['800+', 'Active students'], ['★ 4.8', 'Google rating']].map(([val, lbl]) => (
              <div key={lbl} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1rem', fontWeight: 300, color: 'var(--blue, #4A7C59)' }}>{val}</span>
                <span style={{ fontSize: '10px', color: 'var(--ink, #1C2B1E)', opacity: 0.45, fontFamily: 'var(--font-body)' }}>{lbl}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* ── Right: Panoramic image panel ─────────────────────────────── */}
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <motion.div
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.0, ease: [0.16, 1, 0.3, 1] }}
          style={{ position: 'absolute', inset: 0 }}
        >
          <Image
            src={bgImage}
            alt="Zen House — Portland Meditation & Mindfulness"
            fill
            priority
            className="object-cover"
            style={{ objectPosition: 'center 30%' }}
            sizes="74vw"
          />
          {/* Very subtle left edge blend into sidebar */}
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(238,242,238,0.3) 0%, transparent 8%)' }} />
        </motion.div>

        {/* Floating subtitle card at bottom */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.75 }}
          style={{ position: 'absolute', bottom: '2rem', left: '2rem', right: '2rem', background: 'rgba(238,242,238,0.88)', backdropFilter: 'blur(16px)', borderRadius: '6px', padding: '1.25rem 1.5rem', maxWidth: '380px' }}
        >
          <p style={{ fontSize: subtitle.fontSize ? `${subtitle.fontSize}px` : '13px', lineHeight: 1.6, color: 'var(--ink, #1C2B1E)', fontFamily: 'var(--font-body)', margin: 0, opacity: 0.7 }} {...subtitle.editProps}>
            {subtitle.content}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
