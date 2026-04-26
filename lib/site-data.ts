export const studio = {
  name: 'Zen House',
  tagline: 'Still. Clear. Present.',
  description: 'Portland\'s home for meditation, breathwork and mindfulness — a quiet refuge from the noise of modern life.',
  phone: '+1 (503) 555-0183',
  email: 'hello@zenhouse.com',
  address: {
    street: '310 NW 11th Ave',
    city: 'Portland',
    state: 'OR',
    zip: '97209',
  },
  hours: {
    'Mon–Fri': '6 AM – 8 PM',
    Saturday: '7 AM – 6 PM',
    Sunday: '8 AM – 4 PM',
  },
  social: {
    instagram: 'https://instagram.com/zenhouse',
    youtube: '',
  },
} as const;

export const instructors = [
  {
    name: 'Mei Tanaka',
    specialty: 'Vipassana · Silent Sitting',
    bio: "Mei trained for six years at a Burmese Vipassana center before bringing her practice to Portland. She teaches with patience and with silence.",
    years: 14,
    image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=600&h=750&fit=crop&q=80',
  },
  {
    name: 'Daniel Park',
    specialty: 'Breathwork · Pranayama',
    bio: 'Daniel holds advanced certifications in Holotropic Breathwork and Pranayama. His sessions are simple, effective and grounding.',
    years: 9,
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&h=750&fit=crop&q=80',
  },
  {
    name: 'Clara Stevens',
    specialty: 'MBSR · Mindfulness Teaching',
    bio: 'Clara completed her MBSR teacher training at the Center for Mindfulness and has guided hundreds of students toward more present lives.',
    years: 7,
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&h=750&fit=crop&q=80',
  },
] as const;

export const testimonials = [
  {
    quote: 'The first time I sat in a session here, I realized I had not been truly quiet in years. Zen House gave me that back.',
    name: 'Emma R.',
    title: 'Member since 2022',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=120&h=120&fit=crop&q=80',
  },
  {
    quote: "Mei's Vipassana sessions changed my relationship with my own mind. There is no other place like this in Portland.",
    name: 'Thomas B.',
    title: 'Weekly practitioner',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&h=120&fit=crop&q=80',
  },
  {
    quote: 'I come here when the world becomes too loud. Every single time, I leave lighter.',
    name: 'Sara M.',
    title: 'Monthly member',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&h=120&fit=crop&q=80',
  },
] as const;

export const koriva = {
  gymSlug: 'zen-house',
  widgetKey: 'demo',
  baseUrl: 'https://app.codegyms.com',
} as const;
