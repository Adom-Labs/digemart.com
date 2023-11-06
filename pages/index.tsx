import Hero from '@/components/main/homepage/Hero';
import Overview from '@/components/main/homepage/Overview';
import AppLayout from '@/components/main/layout/AppLayout';
import { seo } from '@/helpers/text_display';

export default function Home() {
  return (
    <AppLayout title={seo.homepage.title}>
      <Hero />
      <Overview />
    </AppLayout>
  );
}
