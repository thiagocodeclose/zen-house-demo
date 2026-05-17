'use client';

import { useEffect, useState } from 'react';
import { Reveal } from '@/components/Reveal';
import { garrison365 } from '@/lib/site-data';

export function PricingSection() {
  const [iframeHeight, setIframeHeight] = useState(520);

  useEffect(() => {
    const handler = (e: MessageEvent) => {
      if (e.origin !== garrison365.baseUrl) return;
      const d = e.data;
      if (d?.source === 'codegym-widget' && d?.type === 'widget:resize' && d?.widget === 'pricing') {
        setIframeHeight(d.payload.height + 24);
      }
    };
    window.addEventListener('message', handler);
    return () => window.removeEventListener('message', handler);
  }, []);

  const src = `${garrison365.baseUrl}/widgets/pricing/${garrison365.gymSlug}?embed=1&cg_primary=8BA3B0&cg_bg=F8F7F4&cg_text=2C2C2A&cg_radius=0&cg_mode=light`;

  return (
    <section id="pricing" className="section-padding" style={{ backgroundColor: 'var(--bg)' }}>
      <div className="container-tight">
        <div className="text-center mb-16">
          <Reveal>
            <p className="eyebrow mb-5">Membership</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2
              className="font-heading text-ink"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', letterSpacing: '-0.01em', lineHeight: 1.05 }}
            >
              Simple,{' '}
              <span className="italic" style={{ color: 'var(--blue)' }}>
                honest
              </span>{' '}
              pricing
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="divider mt-6 mb-2" />
          </Reveal>
          <Reveal delay={0.2}>
            <p className="font-body text-muted text-sm max-w-sm mx-auto leading-relaxed">
              Your first session is free. After that, choose the plan that fits your practice.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <iframe
            src={src}
            title="Zen House Membership"
            className="garrison365-widget-frame"
            style={{ height: `${iframeHeight}px` }}
            allow="clipboard-write"
            loading="lazy"
          />
        </Reveal>

        <Reveal delay={0.2}>
          <div className="flex flex-wrap justify-center gap-8 mt-12">
            {['✦ First session free', '✦ No commitment', '✦ Pause anytime'].map((item) => (
              <span key={item} className="font-body text-muted text-xs tracking-wide">
                {item}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
