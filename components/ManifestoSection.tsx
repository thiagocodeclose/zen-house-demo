import { Reveal } from '@/components/Reveal';

const pillars = [
  {
    num: 'I',
    title: 'Arrive as you are',
    body: 'There is nothing to fix. There is nothing to perform. You are already enough.',
  },
  {
    num: 'II',
    title: 'Sit without agenda',
    body: 'We do not come here for results. We come here to be present with what is.',
  },
  {
    num: 'III',
    title: 'Leave with nothing',
    body: 'The practice does not ask you to carry anything out. You leave lighter than you arrived.',
  },
];

export function ManifestoSection() {
  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--bg-fog)' }}>
      <div
        className="container-tight border-t border-b py-16 md:py-24"
        style={{ borderColor: 'var(--border)' }}
      >
        <div className="max-w-lg mx-auto text-center mb-20">
          <Reveal>
            <p className="eyebrow mb-8">Philosophy</p>
          </Reveal>
          <Reveal delay={0.1}>
            <blockquote
              className="font-heading text-ink italic leading-tight"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 3.2rem)', letterSpacing: '-0.01em' }}
            >
              "The quieter you become,
              <br />
              the more you can hear."
            </blockquote>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="divider mt-8" />
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {pillars.map((p, i) => (
            <Reveal key={p.num} delay={0.08 * i}>
              <div className="space-y-4">
                <span
                  className="font-heading italic"
                  style={{ fontSize: '1.5rem', color: 'var(--blue)', opacity: 0.4 }}
                >
                  {p.num}
                </span>
                <p className="font-heading text-ink" style={{ fontSize: '1.15rem' }}>{p.title}</p>
                <p className="font-body text-muted text-sm leading-relaxed">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
