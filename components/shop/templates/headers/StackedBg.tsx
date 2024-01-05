import useShop from '@/providers/ShopProvider';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function StackedBg() {
  const { header, fonts } = useShop();
  const headingStyle = { fontFamily: fonts.heading };
  const bodyStyle = { fontFamily: fonts.body };
  return (
    <div>
      <div className='relative h-[91vh] text-white overflow-hidden'>
        <div className='absolute inset-0'>
          <div className='relative w-full h-full object-cover'>
            <Image
              src={header.image}
              alt={header.lineOne}
              className='object-cover object-center w-full h-full'
              fill
            />
          </div>

          <div className='absolute inset-0 bg-black opacity-50'></div>
        </div>

        <div className='relative z-10 flex flex-col justify-center items-center h-full text-center'>
          <h1
            style={headingStyle}
            className='text-4xl md:text-5xl font-bold leading-tight mb-4'
          >
            {header.lineOne} {header.lineTwo}
          </h1>
          <p style={bodyStyle} className='text-lg text-gray-300 mb-8'>
            {header.smallText}
          </p>
          <Link
            href='#products'
            style={headingStyle}
            className='btn py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg'
          >
            Start Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}

export default StackedBg;
