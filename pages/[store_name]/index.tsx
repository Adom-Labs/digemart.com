import ShopTemplateLayout from '@/components/shop/layout/ShopTemplateLayout';
import HomepageTemplate from '@/components/shop/templates/HomepageTemplate';
import React from 'react';

function StorePage() {
  return (
    <ShopTemplateLayout>
      <HomepageTemplate />
    </ShopTemplateLayout>
  );
}

export default StorePage;
