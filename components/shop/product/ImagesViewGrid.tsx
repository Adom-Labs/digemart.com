import Image from 'next/image';
import React, { useState } from 'react';

function ImagesViewGrid({ images, name }: { images: any[]; name: string }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  return (
    <div className='h-[88%]'>
      <div className='h-full dark:bg-slate-800 bg-gray-100w-full rounded-xl'>
        <div className='relative h-full'>
          <Image
            src={images && images[activeImageIndex]?.image}
            alt={name}
            fill
            className='object-cover rounded-xl'
          />
        </div>
      </div>
      <div className='flex items-center gap-2 py-2'>
        {images &&
          images.map((image, indx) => {
            return (
              <div
                onClick={() => setActiveImageIndex(indx)}
                key={indx + 'ii'}
                className='w-[50px] h-[50px] rounded-xl relative border hover:border-green.500'
                style={{
                  borderColor: indx === activeImageIndex ? 'green' : 'gray',
                }}
              >
                <Image
                  src={image.image}
                  alt={'secondary image for ' + name}
                  fill
                  className='object-cover rounded-xl'
                />
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default ImagesViewGrid;
