// @ts-nocheck

import { colors } from '@/styles/theme';
import React from 'react';
import { FaArrowCircleRight } from 'react-icons/fa';

function Hero() {
  return (
    <div className='md:h-[80vh] '>
      <div className='grid grid-cols-1 gap-5 lg:gap-0 lg:grid-cols-2  h-full'>
        <div className='flex justify-center flex-col p-4 gap-5'>
          <h1 className='text-5xl md:text-6xl lg:text-7xl pt-10 lg:pt-0 lg:w-[90%] xl:w-[80%]'>
            Webinar software for the modern marketer
          </h1>
          <p className='text-lg md:text-2xl py-5'>
            lorem ipsum lorem ipsum lorem ipsum
          </p>
          <button
            style={{
              background: colors.brand[100],
            }}
            className='btn btn-lg  text-white sm:self-start px-20 '
          >
            Start Selling!
            <FaArrowCircleRight className='ml-3 text-xl' />
          </button>
        </div>
        {/* <div className='bg-black h-[38vh] md:h-[40vh] md:w-[80%] lg:w-full pl-10 lg:h-full md:ml-auto  rounded-l-full py-5  flex items-center  justify-start lg:justify-end '>
          <div className='relative w-full sm:w-[50%] lg:w-full h-full'>
            <Image
              className='object-contain w-[90%] h-[90%]'
              src='/images/shop.gif'
              fill
              alt='shop illustration'
            />
          </div>
        </div> */}

        <div className='flex items-center'>
          <video
            width='320'
            height='240'
            controls=''
            className='w-full rounded-l-full'
            loop
            autoPlay
            muted
          >
            <source src='/test.mp4' type='video/mp4' />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
}

export default Hero;
