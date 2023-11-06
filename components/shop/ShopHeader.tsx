import React from 'react';
import WrapContent from '../shared/WrapContent';
import FeaturedCategories from './pages/homepage/FeaturedCategories';

function ShopHeader({ shop_name, desc }: { shop_name: string; desc: string }) {
  return (
    <div>
      <WrapContent>
        <div className='flex flex-col items-center gap-5 pt-20'>
          <h1 className='text-center text-4xl font-bold md:text-5xl'>
            {shop_name}
          </h1>
          <span className='max-w-md text-center text-xs text-gray-600 dark:text-gray-300 md:text-lg'>
            {desc}
          </span>
          <div className='w-full py-10'>
            <FeaturedCategories />
          </div>
        </div>
      </WrapContent>
    </div>
  );
}

export default ShopHeader;
