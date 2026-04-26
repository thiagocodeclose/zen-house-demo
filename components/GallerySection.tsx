import Image from 'next/image';
import { Reveal } from '@/components/Reveal';

const photos = [
  { src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&h=1200&fit=crop&q=80', alt: 'Meditation room' },
  { src: 'https://images.unsplash.com/photo-1508672019048-805c876b67e2?w=900&h=600&fit=crop&q=80', alt: 'Breathwork session' },
  { src: 'https://images.unsplash.com/photo-1530822847156-5df684ec5605?w=900&h=600&fit=crop&q=80', alt: 'Zen garden courtyard' },
  { src: 'https://images.unsplash.com/photo-1600618528240-fb9fc964b853?w=1800&h=600&fit=crop&q=80', alt: 'Zen House interior' },
];

export function GallerySection() {
  return (
    <section id="studio" className="section-padding" style={{ backgroundColor: 'var(--bg-fog)' }}>
      <div className="container-wide">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <Reveal>
              <p className="eyebrow mb-6">The Space</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2
                className="font-heading text-ink"
                style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', letterSpacing: '-0.01em', lineHeight: 1.05 }}
              >
                A quiet{' '}
                <span className="italic" style={{ color: 'var(--blue)' }}>
                  refuge
                </span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="font-body text-muted text-sm text-right">
              310 NW 11th Ave · Portland, OR
            </p>
          </Reveal>
        </div>

        {/* Grid: [tall left] [2 stacked right] then full-width */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-px" style={{ backgroundColor: 'var(--border)' }}>
          <Reveal className="md:col-span-5 relative h-72 md:h-full min-h-64" delay={0}>
            <div className="relative w-full h-full min-h-64">
              <Image src={photos[0].src} alt={photos[0].alt} fill className="object-cover grayscale-[40%] hover:grayscale-0 transition-all duration-500" sizes="(max-width:768px) 100vw, 40vw" />
            </div>
          </Reveal>
          <div className="md:col-span-7 flex flex-col gap-px">
            {[photos[1], photos[2]].map((p, i) => (
              <Reveal key={p.alt} className="relative h-52 md:h-auto md:flex-1" delay={0.1 * (i + 1)}>
                <div className="relative w-full h-full min-h-52">
                  <Image src={p.src} alt={p.alt} fill className="object-cover grayscale-[40%] hover:grayscale-0 transition-all duration-500" sizes="(max-width:768px) 100vw, 60vw" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <Reveal delay={0.15}>
          <div className="relative h-48 md:h-64 mt-px overflow-hidden" style={{ backgroundColor: 'var(--border)' }}>
            <Image src={photos[3].src} alt={photos[3].alt} fill className="object-cover grayscale-[40%] hover:grayscale-0 transition-all duration-500" sizes="100vw" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center" style={{ background: 'rgba(248,247,244,0.3)' }}>
              <p className="font-heading text-ink italic" style={{ fontSize: '1.2rem' }}>
                Stillness lives here.
              </p>
              <p className="font-body text-muted text-xs mt-2 tracking-widest uppercase">Portland Pearl District</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
