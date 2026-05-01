// @ts-nocheck
import type { Metadata } from 'next';
import { Libre_Baskerville, Nunito_Sans } from 'next/font/google';
import './globals.css';
import { getKorivaConfig, buildCssVars } from '@/lib/koriva-config';
import { SiteDataProvider } from '@/components/SiteDataProvider';

import { KorivaLivePreview } from '@/components/KorivaLivePreview';
const libreBaskerville = Libre_Baskerville({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-heading',
  display: 'swap',
});

const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  variable: '--font-body',
  display: 'swap',
});

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://zen-house-demo.vercel.app';

const DEFAULT_TITLE = 'Zen House | Meditation & Mindfulness Studio · Portland, OR';
const DEFAULT_DESC = 'Portland\'s dedicated meditation and mindfulness studio. Daily sitting groups, Vipassana intensives, MBSR courses, and breathwork. First session free.';

export async function generateMetadata(): Promise<Metadata> {
  const config = await getKorivaConfig();
  const title = config?.seo?.title || DEFAULT_TITLE;
  const description = config?.seo?.description || DEFAULT_DESC;
  const gymName = config?.gym?.name || 'Zen House';
  const tagline = config?.brand?.tagline || 'Still. Simple. Present.';
  return {
    metadataBase: new URL(BASE_URL),
    title: { default: title, template: `%s | ${gymName}` },
    description,
    keywords: ['meditation Portland', 'breathwork Portland Oregon', 'mindfulness studio Portland', 'Vipassana Portland', 'MBSR Portland', 'silent meditation Portland', 'yoga meditation Portland'],
    openGraph: {
      title, description, url: BASE_URL, siteName: gymName, locale: 'en_US', type: 'website',
      images: [{ url: config?.seo?.og_image || 'https://images.unsplash.com/photo-1508672019048-805c876b67e2?w=1200&h=630&fit=crop&q=85', width: 1200, height: 630, alt: gymName }],
    },
    twitter: { card: 'summary_large_image', title, description },
    alternates: { canonical: BASE_URL },
    robots: { index: true, follow: true },
  };
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const config = await getKorivaConfig();
  const cssVars = buildCssVars(config?.brand);
  return (
    <html lang="en" className={`${libreBaskerville.variable} ${nunitoSans.variable}`} style={cssVars}>
      <body className="font-body antialiased">
        <KorivaLivePreview />
        <SiteDataProvider config={config}>
          {children}
        </SiteDataProvider>
      </body>
    </html>
  );
}
