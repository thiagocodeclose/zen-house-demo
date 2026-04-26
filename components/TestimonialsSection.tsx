import Image from 'next/image';
import { Reveal } from '@/components/Reveal';
import { testimonials } from '@/lib/site-data';

export function TestimonialsSection() {
  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--bg-fog)' }}>
      <div className="container-tight">
        <div className="text-center mb-20">
          <Reveal>
            <p className="eyebrow mb-5">What members say</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2
              className="font-heading text-ink"
              style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', letterSpacing: '-0.01em', lineHeight: 1.05 }}
            >
              Voices of{' '}
              <span className="italic" style={{ color: 'var(--blue)' }}>
                stillness
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="divider mt-6" />
          </Reveal>
        </div>

        <div className="space-y-0">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={0.08 * i}>
              <div
                className={`flex flex-col md:flex-row items-start gap-10 md:gap-20 py-14 border-t ${
                  i % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
                style={{ borderColor: 'var(--border)' }}
              >
                <div className="shrink-0">
                  <div className="relative w-12 h-12 overflow-hidden rounded-none">
                    <Image
                      src={t.image}
                      alt={t.name}
                      fill
                      className="object-cover grayscale"
                      sizes="48px"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <div
                    className="font-heading italic mb-4"
                    style={{ fontSize: '3rem', lineHeight: 0.7, color: 'var(--blue)', opacity: 0.2 }}
                  >
                    "
                  </div>
                  <blockquote
                    className="font-heading text-ink italic leading-snug mb-6"
                    style={{ fontSize: 'clamp(1.2rem, 2.2vw, 2rem)', lineHeight: 1.35 }}
                  >
                    {t.quote}
                  </blockquote>
                  <p className="font-body text-ink text-sm font-semibold tracking-wide">{t.name}</p>
                  <p className="font-body text-muted text-xs tracking-widest uppercase mt-1">{t.title}</p>
                  <div
                    className="flex gap-1 mt-2 text-xs"
                    style={{ color: 'var(--blue)', opacity: 0.6 }}
                  >
                    {'★★★★★'.split('').map((s, j) => <span key={j}>{s}</span>)}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
