'use client';

import { useEffect, useState } from 'react';
import { Reveal } from '@/components/Reveal';
import { koriva } from '@/lib/site-data';
import { useKorivaElement } from '@/hooks/useKorivaElement';

export function CTASection() {
  
  const ctaEyebrow = useKorivaElement('cta_eyebrow',
    { content: 'Begin', visible: true },
    { section: 'CTA', label: 'Eyebrow', type: 'eyebrow' });

  const ctaHeadline = useKorivaElement('cta_headline',
    { content: 'Begin at Zen House', visible: true },
    { section: 'CTA', label: 'Headline', type: 'text' });

  const ctaSubtitle = useKorivaElement('cta_subtitle',
    { content: 'First session complimentary.', visible: true },
    { section: 'CTA', label: 'Subtitle', type: 'text' });

const [iframeHeight, setIframeHeight] = useState(320);

  useEffect(() => {
    const handler = (e: MessageEvent) => {
      if (e.origin !== koriva.baseUrl) return;
      const d = e.data;
      if (d?.source === 'codegym-widget' && d?.type === 'widget:resize' && d?.widget === 'lead') {
        setIframeHeight(d.payload.height + 24);
      }
    };
    window.addEventListener('message', handler);
    return () => window.removeEventListener('message', handler);
  }, []);

  const src = `${koriva.baseUrl}/widgets/lead_capture/${koriva.gymSlug}?embed=1&cg_primary=8BA3B0&cg_bg=F0EDE8&cg_text=2C2C2A&cg_radius=0&cg_mode=light`;

  return (
    <section
      id="contact"
      className="section-padding"
      style={{ backgroundColor: 'var(--bg-fog)', borderTop: '1px solid var(--border)' }}
    >
      <div className="container-tight text-center">
        <Reveal>
          <p className="eyebrow mb-10" {...ctaEyebrow.editProps}>{ctaEyebrow.content || "Start your practice"}</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2
            className="font-heading text-ink leading-none mb-4"
            style={{ fontSize: 'clamp(2.5rem, 7vw, 7rem)', letterSpacing: '-0.02em' }}
           {...ctaHeadline.editProps}>
            Begin with
            <br />
            <span className="italic" style={{ color: 'var(--blue)' }}>
              one breath.
            </span>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="divider mb-12" />
        </Reveal>
        <Reveal delay={0.25}>
          <p className="font-body text-muted text-sm max-w-xs mx-auto mb-14 leading-relaxed">
            Your first session at Zen House is complimentary.
            Leave your details and we will be in touch.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="max-w-md mx-auto">
            <iframe
              src={src}
              title="Begin at Zen House"
              className="koriva-widget-frame"
              style={{ height: `${iframeHeight}px` }}
              allow="clipboard-write"
              loading="lazy"
            />
          </div>
        </Reveal>

        <Reveal delay={0.35}>
          <p className="font-body text-muted text-xs mt-10 tracking-widest uppercase">
            No spam. Just stillness.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
