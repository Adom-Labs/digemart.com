import SectionHeading from '@/components/shared/SectionHeading';
import WrapContent from '@/components/shared/WrapContent';
import DeliveryInformation from '@/components/shop/checkout/DeliveryInformation';
import VendorShopLayout from '@/components/shop/layout';
import { ShippingDataType } from '@/types/checkoutTypes';
import React, { PropsWithChildren, useState } from 'react';

function Checkout() {
  const [data, setData] = useState({
    address: '',
    shippingType: '',
    shippingFee: '',
    total: '',
  });
  function setDeliveryInfo(d: ShippingDataType) {
    setData((prev) => {
      return {
        ...prev,
        shippingFee: d.fee,
        shippingType: d.shippingType,
      };
    });
  }
  return (
    <VendorShopLayout title='Checkout'>
      <div className='py-10'>
        <WrapContent>
          <SectionHeading>Checkout</SectionHeading>
          <div className='flex flex-col gap-5'>
            <StoreAlert>
              <h1>Things you should know: </h1>
              <ul>
                <li className='flex items-center gap-2'>
                  <span>1. Delivery options : </span>
                  <span className='badge poppins'>Pickup</span>
                  <span className='badge poppins'>Delivery</span>
                </li>
                <li className='flex items-center gap-2'>
                  <span>2. Return policy : </span>
                  <span className='poppins'>no returns after 2 days</span>
                </li>
                <li className='flex items-center gap-2'>
                  <span>3. Delivers to : </span>
                  <span className='font-semibold poppins'>Uyo, Lagos</span>
                </li>
              </ul>
            </StoreAlert>
            <DeliveryInformation setDeliveryinfo={setDeliveryInfo} />
          </div>
        </WrapContent>
      </div>
    </VendorShopLayout>
  );
}

export default Checkout;

function StoreAlert({ children }: PropsWithChildren) {
  return (
    <section className='alert block text-left'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        className='stroke-info shrink-0 w-6 h-6'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
        ></path>
      </svg>
      <span className='flex flex-col gap-2'>{children}</span>
    </section>
  );
}
