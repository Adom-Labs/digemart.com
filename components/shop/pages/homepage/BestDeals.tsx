import React from 'react';
import ShopProduct from '../../product/ShopProduct';
import useShop from '@/providers/ShopProvider';
import SectionHeading from '@/components/shared/SectionHeading';
import WrapContent from '@/components/shared/WrapContent';

function BestDeals() {
  const { deals } = useShop();
  return (
    <div>
      <WrapContent>
        <SectionHeading mb='25px'>Top deals for you!</SectionHeading>
        <div className='grid grid-cols-1 gap-10 sm:grid-cols-2  lg:grid-cols-3'>
          {deals.map((deal) => (
            <ShopProduct key={deal.id} product={deal} />
          ))}
        </div>
      </WrapContent>
    </div>
  );
}

export default BestDeals;
