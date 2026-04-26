import { studio } from '@/lib/site-data';
const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://zen-house-demo.vercel.app';
export function JsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['HealthClub', 'LocalBusiness'],
        '@id': `${BASE_URL}/#business`,
        name: studio.name,
        description: studio.description,
        url: BASE_URL,
        telephone: studio.phone,
        email: studio.email,
        priceRange: '$$',
        image: ['https://images.unsplash.com/photo-1508672019048-805c876b67e2?w=1200&h=630&fit=crop&q=85'],
        address: { '@type': 'PostalAddress', streetAddress: studio.address.street, addressLocality: studio.address.city, addressRegion: studio.address.state, postalCode: studio.address.zip, addressCountry: 'US' },
        geo: { '@type': 'GeoCoordinates', latitude: 45.5249, longitude: -122.6842 },
        sameAs: Object.values(studio.social).filter(Boolean),
        aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '241', bestRating: '5' },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Practices',
          itemListElement: [
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Silent Sitting (Vipassana)' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Breathwork Journey' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'MBSR 8-Week Course' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Guided Visualization' } },
          ],
        },
      },
      { '@type': 'WebSite', '@id': `${BASE_URL}/#website`, url: BASE_URL, name: studio.name, publisher: { '@id': `${BASE_URL}/#business` } },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}
