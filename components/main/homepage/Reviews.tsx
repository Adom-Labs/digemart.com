import WrapContent from '@/components/shared/WrapContent';
import Image from 'next/image';
import React from 'react';

function Reviews() {
  return (
    <div id='review-div' className='bg-base-200 py-10'>
      <WrapContent>
        <div className='py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6'>
          <div className='mx-auto max-w-screen-sm'>
            <h2 className='mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white'>
              Testimonials
            </h2>
            <p className='mb-8 font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400'>
              Explore the whole collection of open-source web components and
              elements built with the utility classes from Tailwind
            </p>
          </div>
          <ReviewCard />
        </div>
      </WrapContent>
    </div>
  );
}

export default Reviews;

function ReviewCard() {
  return (
    <section className='bg-white dark:bg-gray-900 rounded-2xl'>
      <div className='max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6'>
        <figure className='max-w-screen-md mx-auto'>
          <svg
            className='h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600'
            viewBox='0 0 24 27'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z'
              fill='currentColor'
            />
          </svg>
          <blockquote>
            <p className='text-2xl font-medium text-gray-900 dark:text-white'>
              &quot;Flowbite is just awesome. It contains tons of predesigned
              components and pages starting from login screen to complex
              dashboard. Perfect choice for your next SaaS application.&quot;
            </p>
          </blockquote>
          <figcaption className='flex items-center justify-center mt-6 space-x-3'>
            <Image
              width='150'
              height='150'
              className='w-6 h-6 rounded-full'
              src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png'
              alt='profile picture'
            />
            <div className='flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700'>
              <div className='pr-3 font-medium text-gray-900 dark:text-white'>
                Micheal Gough
              </div>
              <div className='pl-3 text-sm font-light text-gray-500 dark:text-gray-400'>
                CEO at Google
              </div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
