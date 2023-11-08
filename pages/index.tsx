import CallToAction from '@/components/main/homepage/CallToAction';
import Faq from '@/components/main/homepage/Faq';
import Hero from '@/components/main/homepage/Hero';
import Overview from '@/components/main/homepage/Overview';
import Reviews from '@/components/main/homepage/Reviews';
import SampleProducts from '@/components/main/homepage/SampleProducts';
import SampleStores from '@/components/main/homepage/SampleStores';
import AppLayout from '@/components/main/layout/AppLayout';
import { seo } from '@/helpers/text_display';

export default function Home() {
  return (
    <AppLayout title={seo.homepage.title}>
      <Hero />
      <Overview />
      <SampleStores />
      <Reviews />
      <SampleProducts />
      <Faq />
      <CallToAction />
    </AppLayout>
  );
}
