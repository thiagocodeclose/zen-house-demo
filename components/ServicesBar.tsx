export function ServicesBar() {
  const items = [
    'Meditation',
    'Breathwork',
    'Mindfulness',
    'Vipassana',
    'Pranayama',
    'MBSR',
    'Silent Sitting',
  ];
  return (
    <div
      className="border-t border-b overflow-hidden"
      style={{ borderColor: 'var(--border)', backgroundColor: 'var(--bg)' }}
    >
      <div className="container-wide py-5 flex flex-wrap gap-x-10 gap-y-2 justify-center md:justify-start">
        {items.map((item, i) => (
          <span
            key={item}
            className="font-body text-muted"
            style={{ fontSize: '0.6rem', letterSpacing: '0.25em', textTransform: 'uppercase' }}
          >
            {item}
            {i < items.length - 1 && (
              <span className="ml-10 opacity-30" style={{ color: 'var(--blue)' }}>·</span>
            )}
          </span>
        ))}
      </div>
    </div>
  );
}
