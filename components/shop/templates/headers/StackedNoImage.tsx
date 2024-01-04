import WrapContent from '@/components/shared/WrapContent';
import useShop from '@/providers/ShopProvider';
import React from 'react';

function StackedNoImage() {
  const { header, fonts } = useShop();
  const headingStyle = { fontFamily: fonts.heading };
  const bodyStyle = { fontFamily: fonts.body };
  return (
    <div>
      <WrapContent>
        <div className='flex pb-10 flex-col items-center gap-5 pt-20'>
          <h1
            style={headingStyle}
            className='text-center text-4xl font-bold md:text-5xl'
          >
            {header.lineOne}
            <br />
            {header.lineTwo}
          </h1>
          <span
            style={bodyStyle}
            className='max-w-md text-center text-xs text-gray-600 dark:text-gray-300 md:text-lg'
          >
            {header.smallText}
          </span>
        </div>
      </WrapContent>
    </div>
  );
}

export default StackedNoImage;
