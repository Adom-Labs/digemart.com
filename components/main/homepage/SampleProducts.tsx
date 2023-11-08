import StarRating from '@/components/shared/StarRating';
import WrapContent from '@/components/shared/WrapContent';
import generateTestProducts from '@/providers/generateTestData';
import ProductType from '@/types/ProductType';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

function SampleProducts() {
  function FORWARD() {
    const elem = document.querySelector('#slider-shop');
    elem?.scrollTo(0, elem.scrollWidth + 300);
  }
  function BACK() {
    const elem = document.querySelector('#slider-shop');
    elem?.scrollTo(0, elem.scrollWidth - 300);
  }

  return (
    <div className='pb-10 pt-20'>
      <WrapContent>
        <h2 className='text-3xl md:text-4xl'>Featured Products</h2>
        <div
          id='product-shop'
          className='overflow-auto  no-scrollbar relative group'
        >
          <div className='group-hover:flex hidden transition-all duration-300 ease btn btn-circle bg-base-200  hover:text-white hover:bg-success absolute top-[50%] z-10 left-0 shadow-md border-none '>
            <FaArrowLeft className='text-3xl ' />
          </div>
          <div className='group-hover:flex hidden transition-all duration-300 ease btn btn-circle bg-base-200  hover:text-white hover:bg-success absolute top-[50%] z-10 right-0 shadow-md border-none '>
            <FaArrowRight className='text-3xl ' />
          </div>
          <div className='w-fit flex gap-5 min-w-[100vw]  py-5'>
            {generateTestProducts().map((product) => {
              return <SampleProductCard key={product.id} product={product} />;
            })}
          </div>
        </div>
      </WrapContent>
    </div>
  );
}

export default SampleProducts;

function SampleProductCard({ product }: { product: ProductType }) {
  return (
    <div className='w-[330px]'>
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
