import useShop from '@/providers/ShopProvider';
import Image from 'next/image';
import React from 'react';

function TextLeftImageRight() {
  const { header, fonts } = useShop();
  const headingStyle = { fontFamily: fonts.heading };
  const bodyStyle = { fontFamily: fonts.body };

  return (
    <section className='px-3 py-5 bg-gray-100 dark:bg-slate-800 lg:py-10'>
      <div className='grid lg:grid-cols-2 items-center justify-items-center gap-5'>
        <div
          style={headingStyle}
          className='order-2 lg:order-1 flex flex-col justify-center items-center'
        >
          <p style={headingStyle} className='text-4xl font-bold md:text-7xl '>
            {header.lineOne}
          </p>
          <p style={headingStyle} className='text-4xl font-bold md:text-7xl'>
            {header.lineTwo}
          </p>
          <p style={bodyStyle} className='mt-2 text-sm md:text-lg'>
            {header.smallText}
          </p>
          <button
            style={headingStyle}
            className='text-lg md:text-2xl bg-black text-white py-2 px-5 mt-10 hover:bg-zinc-800'
          >
            Shop Now
          </button>
        </div>
        <div className='order-1 lg:order-2'>
          <div className='relative h-80 w-80 object-cover lg:w-[500px] lg:h-[500px]'>
            <Image
              src={header.image}
              alt={header.lineOne}
              className='object-cover'
              fill
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default TextLeftImageRight;
