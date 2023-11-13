import Image from 'next/image';
import React, { useState } from 'react';

function ImagesViewGrid({ images, name }: { images: any[]; name: string }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  return (
    <div>
      <div className='h-[280px] bg-gray-50 w-full'>
        <div className='relative h-full'>
          <Image
            src={images && images[activeImageIndex]?.image}
            alt={name}
            fill
            className='object-cover'
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
                className='w-[50px] h-[50px] relative border hover:border-green.500'
                style={{
                  borderColor: indx === activeImageIndex ? 'green' : 'gray',
                }}
              >
                <Image
                  src={image.image}
                  alt={'secondary image for ' + name}
                  fill
                  className='object-cover'
                />
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default ImagesViewGrid;
