import React from 'react';
import ShopProduct from '../product/ShopProduct';
import WrapContent from '@/components/shared/WrapContent';
import SectionHeading from '@/components/shared/SectionHeading';
import useShop from '@/providers/ShopProvider';
import AlertWithIcon from '@/components/alerts/AlertWithIcon';
import { MdOutlineHourglassEmpty } from 'react-icons/md';

function ProductListTemplate() {
  const { products } = useShop();
  return (
    <div className='py-10'>
      <WrapContent>
        <SectionHeading mb='25px'>Products for you!</SectionHeading>
        <div className='grid grid-cols-1 gap-10 sm:grid-cols-2  lg:grid-cols-3'>
          {products.map((product) => (
            <ShopProduct key={product.id} product={product} />
          ))}
        </div>
        <AlertWithIcon Icon={MdOutlineHourglassEmpty}>
          No products found.
        </AlertWithIcon>
      </WrapContent>
    </div>
  );
}

export default ProductListTemplate;
