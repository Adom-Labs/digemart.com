import React from 'react';
import ShopHeader from '../../ShopHeader';
import BestDeals from './BestDeals';
import useShop from '@/providers/ShopProvider';

function ShopHomepage() {
  const { shop_name, desc } = useShop();
  return (
    <div className='pb-10'>
      <ShopHeader shop_name={shop_name} desc={desc} />
      <BestDeals />
    </div>
  );
}

export default ShopHomepage;
