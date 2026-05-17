'use client';

import { useEffect, useState } from 'react';
import { Reveal } from '@/components/Reveal';
import { garrison365 } from '@/lib/site-data';

export function ClassesSection() {
  const [iframeHeight, setIframeHeight] = useState(540);

  useEffect(() => {
    const handler = (e: MessageEvent) => {
      if (e.origin !== garrison365.baseUrl) return;
      const d = e.data;
      if (d?.source === 'codegym-widget' && d?.type === 'widget:resize' && d?.widget === 'schedule') {
        setIframeHeight(d.payload.height + 24);
      }
    };
    window.addEventListener('message', handler);
    return () => window.removeEventListener('message', handler);
  }, []);

  const src = `${garrison365.baseUrl}/widgets/schedule/${garrison365.gymSlug}?embed=1&cg_primary=8BA3B0&cg_bg=F8F7F4&cg_text=2C2C2A&cg_radius=0&cg_mode=light`;

  const offerings = [
    { num: '01', name: 'Silent Sitting', desc: 'Vipassana-inspired — 45 & 90 min' },
    { num: '02', name: 'Breathwork Journey', desc: 'Pranayama & Holotropic — 60 min' },
    { num: '03', name: 'MBSR Course', desc: '8-week Mindfulness-Based Stress Reduction' },
    { num: '04', name: 'Guided Visualization', desc: 'Restorative imagery practice — 30 min' },
    { num: '05', name: 'Body Scan', desc: 'Progressive relaxation — 45 min' },
  ];

  return (
    <section id="classes" className="section-padding" style={{ backgroundColor: 'var(--bg)' }}>
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <Reveal>
              <p className="eyebrow mb-6">Offerings</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2
                className="font-heading text-ink mb-14"
                style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', letterSpacing: '-0.01em', lineHeight: 1.05 }}
              >
                Practices for{' '}
                <span className="italic" style={{ color: 'var(--blue)' }}>
                  stillness
                </span>
              </h2>
            </Reveal>
            <div className="space-y-0">
              {offerings.map((o, i) => (
                <Reveal key={o.num} delay={0.06 * i}>
                  <div
                    className="flex gap-6 py-5 border-b"
                    style={{ borderColor: 'var(--border)' }}
                  >
                    <span
                      className="font-body shrink-0"
                      style={{ fontSize: '0.55rem', letterSpacing: '0.2em', color: 'var(--blue)', opacity: 0.5, marginTop: '0.4rem' }}
                    >
                      {o.num}
                    </span>
                    <div>
                      <p className="font-heading text-ink text-base">{o.name}</p>
                      <p className="font-body text-muted text-sm mt-1">{o.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal delay={0.1}>
            <iframe
              src={src}
              title="Zen House Schedule"
              className="garrison365-widget-frame"
              style={{ height: `${iframeHeight}px` }}
              allow="clipboard-write"
              loading="lazy"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
