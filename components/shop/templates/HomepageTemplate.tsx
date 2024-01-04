import Image from 'next/image';
import React from 'react';
import TemplateHeader from './TemplateHeader';
import Headers from '@/components/seo/Headers';
import useShop from '@/providers/ShopProvider';
import FeaturedCategories from '../pages/homepage/FeaturedCategories';
import ProductListTemplate from './ProductListTemplate';
import Skeleton from '@/components/shared/Skeleton';
import SectionHeading from '@/components/shared/SectionHeading';

function HomepageTemplate() {
  const { storeName, header, storeDesc } = useShop();

  return (
    <div>
      <Headers title={storeName} desc={storeDesc} />
      {storeName === 'loading' ? (
        <div className='grid grid-cols-2  pt-20 px-5'>
          <div className='flex flex-col gap-3'>
            <Skeleton h='30px' w='70%' />
            <Skeleton h='20px' w='50%' />
            <Skeleton h='5px' w='60%' />
            <Skeleton h='5px' w='60%' />
          </div>

          <Skeleton h='100px' w='100%' />
        </div>
      ) : (
        <TemplateHeader />
      )}

      {storeName !== 'loading' && header.arrangement === 'stacked_no_image' && (
        <FeaturedCategories />
      )}

      {storeName === 'loading' ? (
        <div className='pt-10 px-5'>
          <SectionHeading>Products</SectionHeading>
          <div className='grid grid-cols-2 '>
            <div className='flex flex-col gap-3'>
              <Skeleton h='100px' w='80%' />
              <Skeleton h='20px' w='70%' />
              <Skeleton h='5px' w='60%' />
              <Skeleton h='5px' w='60%' />
            </div>
            <div className='flex flex-col gap-3'>
              <Skeleton h='100px' w='80%' />
              <Skeleton h='20px' w='70%' />
              <Skeleton h='5px' w='60%' />
              <Skeleton h='5px' w='60%' />
            </div>
          </div>
        </div>
      ) : (
        <ProductListTemplate />
      )}
    </div>
  );
}

export default HomepageTemplate;
