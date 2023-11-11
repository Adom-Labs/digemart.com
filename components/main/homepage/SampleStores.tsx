import WrapContent from '@/components/shared/WrapContent';
import Image from 'next/image';
import React, { useRef } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

function SampleStores() {
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
    <div className='pb-10'>
      <WrapContent>
        <h2 className='text-3xl md:text-4xl'>Featured Stores</h2>
        <div className='relative'>
          <div
            id='slider-shop'
            ref={scrollRef}
            className='overflow-auto no-scrollbar  group'
          >
            <ScrollerButton dir='left' handler={handleScrollLeft} />
            <ScrollerButton dir='right' handler={handleScrollRight} />

            <div className='w-fit flex gap-5 min-w-[100vw]   py-5'>
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

export function ScrollerButton({
  dir,
  handler,
}: {
  dir: 'left' | 'right';
  handler: () => void;
}) {
  const base =
    'group-hover:flex hidden  transition-all duration-300 ease btn btn-circle bg-base-200  hover:text-white hover:bg-success absolute top-[50%] z-10  shadow-md border-none';
  return (
    <div
      onClick={handler}
      className={base + ' ' + (dir === 'left' ? 'left-0' : 'right-0')}
    >
      {dir === 'left' ? (
        <FaArrowLeft className='text-3xl ' />
      ) : (
        <FaArrowRight className='text-3xl ' />
      )}
    </div>
  );
}
