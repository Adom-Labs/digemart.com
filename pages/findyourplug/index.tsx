import CategorySlider from '@/components/findyourplug/layout/CategorySlider';
import PlugHeader from '@/components/findyourplug/layout/PlugHeader';
import PlugLayout from '@/components/findyourplug/layout/PlugLayout';
import React from 'react';

function FindYourPlug() {
  return (
    <PlugLayout>
      <PlugHeader />
      <CategorySlider />
    </PlugLayout>
  );
}

export default FindYourPlug;
