import CategorySlider from '@/components/findyourplug/homepage/CategorySlider';
import PlugFaq from '@/components/findyourplug/homepage/PlugFAQ';
import SampleBusiness from '@/components/findyourplug/homepage/SampleBusiness';
import PlugHeader from '@/components/findyourplug/layout/PlugHeader';
import PlugLayout from '@/components/findyourplug/layout/PlugLayout';
import React from 'react';

function FindYourPlug() {
  return (
    <PlugLayout>
      <PlugHeader />
      <SampleBusiness />
      <CategorySlider />
      <PlugFaq />
    </PlugLayout>
  );
}

export default FindYourPlug;
