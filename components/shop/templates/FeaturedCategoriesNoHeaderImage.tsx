import useShop from '@/providers/ShopProvider';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function FeaturedCategoriesNoHeaderImage() {
  const { featured_categories, fonts } = useShop();
  const headingStyle = { fontFamily: fonts.heading };
  const bodyStyle = { fontFamily: fonts.body };
  return (
    <section className='w-full'>
      <div className='grid grid-cols-1 gap-5 gap-y-[50px] sm:grid-cols-2 md:gap-8 lg:grid-cols-4'>
        {featured_categories.map((c) => (
          <div style={headingStyle} key={c.name} className='mt-[50px] w-full'>
            <div className='card m-auto h-full w-full max-w-[450px]  bg-base-100 dark:bg-slate-800 shadow-xl'>
              <div className='card-body relative  flex flex-col justify-between pt-[120px] text-center'>
                <div className='absolute right-0 top-[-50px]  flex w-full justify-center '>
                  <div className='relative h-[145px] w-[145px] rounded-full shadow-xl'>
                    <Image
                      fill
                      src={c.image}
                      alt={c.name}
                      className='rounded-full'
                    />
                  </div>
                </div>
                <h2 className='text-center text-lg font-bold'>{c.name}</h2>
                <hr />
                <p style={bodyStyle} className='text-sm '>
                  {c.description}
                </p>
                <hr />
                <button style={headingStyle} className='btn-sm btn'>
                  See all
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='pt-20'>
        <Link
          href='#explore'
          className=' m-auto block w-fit text-center hover:text-purple-500'
        >
          Explore Products
        </Link>
      </div>
    </section>
  );
}

export default FeaturedCategoriesNoHeaderImage;
