// @ts-nocheck
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { ServicesBar } from '@/components/ServicesBar';
import { ClassesSection } from '@/components/ClassesSection';
import { ManifestoSection } from '@/components/ManifestoSection';
import { TeachersSection } from '@/components/TeachersSection';
import { GallerySection } from '@/components/GallerySection';
import { PricingSection } from '@/components/PricingSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { CTASection } from '@/components/CTASection';
import { Footer } from '@/components/Footer';
import { GlobalWidgets } from '@/components/GlobalWidgets';
import { JsonLd } from '@/components/JsonLd';
import { AIChatWidget } from '@/components/AIChatWidget';

export default function HomePage() {
  return (
    <>
      <JsonLd />
      <GlobalWidgets />
      <Header />
      <main>
        <HeroSection />
        <ServicesBar />
        <ClassesSection />
        <ManifestoSection />
        <TeachersSection />
        <GallerySection />
        <PricingSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
      <AIChatWidget />
    </>
  );
}
