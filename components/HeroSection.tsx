import Image from 'next/image';
import Link from 'next/link';
import { Reveal } from '@/components/Reveal';
import { studio } from '@/lib/site-data';

export function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: 'var(--bg-fog)' }}
    >
      {/* Background image — low opacity */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1508672019048-805c876b67e2?w=1600&h=1067&fit=crop&q=70"
          alt={studio.name}
          fill
          className="object-cover"
          style={{ opacity: 0.12 }}
          priority
          sizes="100vw"
        />
      </div>

      {/* Top border */}
      <div className="absolute top-0 inset-x-0" style={{ height: 1, backgroundColor: 'var(--border)' }} />

      <div className="relative z-10 container-tight py-40 md:py-52">
        <Reveal>
          <p className="eyebrow mb-10">{studio.address.city}, Oregon</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h1
            className="font-heading text-ink leading-none mb-8"
            style={{ fontSize: 'clamp(3.5rem, 9vw, 9rem)', letterSpacing: '-0.02em' }}
          >
            {studio.tagline.split('. ').map((word, i) => (
              <span key={word}>
                {i > 0 && <br />}
                {word.replace('.', '')}
                {i < studio.tagline.split('. ').length - 1 && (
                  <span className="italic" style={{ color: 'var(--blue)', marginRight: '0.05em' }}>
                    .
                  </span>
                )}
              </span>
            ))}
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p
            className="font-body leading-relaxed text-muted max-w-sm mb-14"
            style={{ fontSize: '1rem' }}
          >
            {studio.description}
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="flex flex-wrap gap-4">
            <Link href="#classes" className="btn-primary">
              Explore Sessions
            </Link>
            <Link href="#teachers" className="btn-ghost-dark">
              Meet the Teachers
            </Link>
          </div>
        </Reveal>

        {/* Thin bottom line */}
        <div
          className="absolute bottom-0 left-6 right-6 md:left-12 md:right-12"
          style={{ height: 1, backgroundColor: 'var(--border)' }}
        />
      </div>
    </section>
  );
}
