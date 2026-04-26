import Image from 'next/image';
import { Reveal } from '@/components/Reveal';
import { instructors } from '@/lib/site-data';

export function TeachersSection() {
  return (
    <section id="teachers" className="section-padding" style={{ backgroundColor: 'var(--bg)' }}>
      <div className="container-wide">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <Reveal>
              <p className="eyebrow mb-6">Practitioners</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2
                className="font-heading text-ink"
                style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', letterSpacing: '-0.01em', lineHeight: 1.05 }}
              >
                The{' '}
                <span className="italic" style={{ color: 'var(--blue)' }}>
                  teachers
                </span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="font-body text-muted text-sm max-w-xs leading-relaxed">
              Each teacher brings decades of practice and a deep commitment to holding space.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ backgroundColor: 'var(--border)' }}>
          {instructors.map((t, i) => (
            <Reveal key={t.name} delay={0.1 * i}>
              <div
                className="group relative overflow-hidden bg-bg"
                style={{ backgroundColor: 'var(--bg)' }}
              >
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={t.image}
                    alt={t.name}
                    fill
                    className="object-cover grayscale transition-transform duration-700 group-hover:scale-103"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div
                    className="absolute bottom-0 inset-x-0 h-1/2"
                    style={{
                      background: 'linear-gradient(to top, rgba(248,247,244,0.95), transparent)',
                    }}
                  />
                </div>
                <div className="p-6">
                  <p className="font-heading text-ink text-lg">{t.name}</p>
                  <p
                    className="font-body text-xs uppercase tracking-widest mt-1 mb-4"
                    style={{ color: 'var(--blue)', letterSpacing: '0.18em' }}
                  >
                    {t.specialty}
                  </p>
                  <p className="font-body text-muted text-sm leading-relaxed">{t.bio}</p>
                  <p
                    className="font-body text-xs mt-4"
                    style={{ color: 'var(--stone)', letterSpacing: '0.1em' }}
                  >
                    {t.years} years teaching
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
