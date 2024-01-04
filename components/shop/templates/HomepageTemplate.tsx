import Image from 'next/image';
import React from 'react';
import TemplateHeader from './TemplateHeader';
import Headers from '@/components/seo/Headers';
import useShop from '@/providers/ShopProvider';
import FeaturedCategories from '../pages/homepage/FeaturedCategories';

function HomepageTemplate() {
  const { storeName, header, storeDesc } = useShop();

  return (
    <div>
      <Headers title={storeName} desc={storeDesc} />
      <TemplateHeader />
      <FeaturedCategories />
      {header.arrangement === 'stacked_no_image' && <FeaturedCategories />}
    </div>
  );
}

export default HomepageTemplate;
