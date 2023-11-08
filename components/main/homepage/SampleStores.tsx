import WrapContent from '@/components/shared/WrapContent';
import Image from 'next/image';
import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

function SampleStores() {
  function FORWARD() {
    const elem = document.querySelector('#slider-shop');
    elem?.scrollTo(0, elem.scrollWidth + 300);
  }
  function BACK() {
    const elem = document.querySelector('#slider-shop');
    elem?.scrollTo(0, elem.scrollWidth - 300);
  }

  return (
    <div className='pb-10'>
      <WrapContent>
        <h2 className='text-3xl md:text-4xl'>Featured Stores</h2>
        <div
          id='slider-shop'
          className='overflow-auto  no-scrollbar relative group'
        >
          <div className='group-hover:flex hidden transition-all duration-300 ease btn btn-circle bg-base-200  hover:text-white hover:bg-success absolute top-[50%] z-10 left-0 shadow-md border-none '>
            <FaArrowLeft className='text-3xl ' />
          </div>
          <div className='group-hover:flex hidden transition-all duration-300 ease btn btn-circle bg-base-200  hover:text-white hover:bg-success absolute top-[50%] z-10 right-0 shadow-md border-none '>
            <FaArrowRight className='text-3xl ' />
          </div>
          <div className='w-fit flex gap-5 min-w-[100vw]  py-5'>
            <SampleStoreCard />
            <SampleStoreCard />
            <SampleStoreCard />
            <SampleStoreCard />
            <SampleStoreCard />
            <SampleStoreCard />
            <SampleStoreCard />
            <SampleStoreCard />
            <SampleStoreCard />
          </div>
        </div>
      </WrapContent>
    </div>
  );
}

export default SampleStores;

function SampleStoreCard() {
  return (
    <div className='card rounded-2xl w-fit shadow pt-6 bg-base-100 dark:bg-slate-800'>
      <div className='pr-6 pl-6 pb-5'>
        <p className='poppins card-title text-2xl font-semibold'>
          Name of store here
        </p>
        <p>short description</p>
      </div>
      <div className='relative h-[310px] w-[310px]'>
        <Image
          src={'/shop/images/f_pants.jpg'}
          alt='sample store'
          unoptimized
          fill
          className='object-cover rounded-b-xl'
        />
      </div>
    </div>
  );
}
