import StarRating from '@/components/shared/StarRating';
import WrapContent from '@/components/shared/WrapContent';
import generateTestProducts from '@/providers/generateTestData';
import ProductType from '@/types/ProductType';
import Image from 'next/image';
import Link from 'next/link';
import React, { useRef } from 'react';
import { ScrollerButton } from './SampleStores';

function SampleProducts() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -310,
        behavior: 'smooth',
      });
    }
  };

  const handleScrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 310,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className='pb-10 pt-20'>
      <WrapContent>
        <h2 className='text-3xl md:text-4xl'>Featured Products</h2>
        <div className='relative'>
          <div
            ref={scrollRef}
            id='product-shop'
            className='overflow-auto  no-scrollbar group'
          >
            <ScrollerButton dir='left' handler={handleScrollLeft} />
            <ScrollerButton dir='right' handler={handleScrollRight} />

            <div className='w-fit flex gap-5 min-w-[100vw]  py-5'>
              {generateTestProducts().map((product) => {
                return <SampleProductCard key={product.id} product={product} />;
              })}
            </div>
          </div>
        </div>
      </WrapContent>
    </div>
  );
}

export default SampleProducts;

function SampleProductCard({ product }: { product: ProductType }) {
  return (
    <div className='w-[310px]'>
      <div className='relative min-h-[225px] rounded-xl bg-gray-100'>
        <Image
          fill
          src={product.image}
          alt={product.product_name}
          className='object-contain p-2'
          suppressHydrationWarning
        />
        <div className='badge badge-accent absolute top-5 right-5'>Uyo</div>
      </div>
      <div className='flex flex-col gap-2 pt-5'>
        <div className='flex items-center justify-between gap-5 text-lg md:text-xl'>
          <p className='poppins font-semibold' suppressHydrationWarning>
            {product.product_name}
          </p>
          <p className=' font-light' suppressHydrationWarning>
            <sup>{product.currency}</sup>
            {product.price} <sup>.00</sup>
          </p>
        </div>
        <div>
          <small className='poppins' suppressHydrationWarning>
            {product.short_description}
          </small>
        </div>
        <Link href='/storelink' className='flex gap-1'>
          <small className='font-bold'>Dynamos Stores</small>
        </Link>
      </div>
    </div>
  );
}
