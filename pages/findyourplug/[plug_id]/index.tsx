/* eslint-disable @next/next/no-img-element */
import PlugLayout from '@/components/findyourplug/layout/PlugLayout';
import SectionHeading from '@/components/shared/SectionHeading';
import StarRating from '@/components/shared/StarRating';
import WrapContent from '@/components/shared/WrapContent';
import Link from 'next/link';
import React from 'react';
import { IconType } from 'react-icons';
import {
  FaEnvelope,
  FaExternalLinkAlt,
  FaMap,
  FaPhoneAlt,
} from 'react-icons/fa';

function SinglePlugPage() {
  return (
    <PlugLayout title='single plug account | Digemart'>
      <WrapContent>
        <div className='py-20 flex flex-col gap-3'>
          <h1 className='text-3xl md:text-5xl py-3 font-semibold'>
            Sample Store name here
          </h1>
          <div className='gap-3 flex flex-col'>
            <StarRating numChecked={5} />
            <div className='flex gap-3 items-center font-semibold text-gray-600'>
              <h2>City</h2>
              <div className='divider divider-vertical'></div>
              <h2>State</h2>
            </div>
            <div className='flex gap-3 items-center font-semibold text-gray-600'>
              <h2>Food, Barbecue, other CategoriesTags</h2>
            </div>
            <div className='flex gap-3 items-center font-semibold text-gray-600'>
              <h3>Open</h3> <div>10pm - 9am</div>
            </div>
          </div>
          <div>
            <div className='divider'></div>
            <div className='flex w-fit gap-5 items-center'>
              <IconBox Icon={FaPhoneAlt} title='Call' />
              <IconBox Icon={FaExternalLinkAlt} title='Website' />
              <IconBox Icon={FaEnvelope} title='Email' />
              <IconBox Icon={FaMap} title='Directions' />
            </div>
            <div className='divider'></div>

            <div className=' h-full pt-6 sm:pt-8 lg:pt-12'>
              <div className='mx-auto max-w-screen-2xl'>
                <div className='mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12'>
                  <div className='flex items-center gap-12'>
                    <h2 className='text-2xl font-bold text-gray-800 lg:text-3xl dark:text-white'>
                      Gallery
                    </h2>

                    <p className='hidden max-w-screen-sm text-gray-500 dark:text-gray-300 md:block'>
                      Images added by the business owner:
                    </p>
                  </div>

                  <a href='#' className='btn btn-sm md:btn-md capitalize'>
                    More
                  </a>
                </div>

                <div className='grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8'>
                  {/* <!-- image - start --> */}
                  <a
                    href='#'
                    className='group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80'
                  >
                    <img
                      src='https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600'
                      loading='lazy'
                      alt='Photo by Minh Pham'
                      className='absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110'
                    />

                    <div className='pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50'></div>

                    <span className='relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg'>
                      VR
                    </span>
                  </a>
                  {/* <!-- image - end --> */}

                  {/* <!-- image - start --> */}
                  <a
                    href='#'
                    className='group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80'
                  >
                    <img
                      src='https://images.unsplash.com/photo-1542759564-7ccbb6ac450a?auto=format&q=75&fit=crop&w=1000'
                      loading='lazy'
                      alt='Photo by Magicle'
                      className='absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110'
                    />

                    <div className='pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50'></div>

                    <span className='relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg'>
                      Tech
                    </span>
                  </a>
                  {/* <!-- image - end --> */}

                  {/* <!-- image - start --> */}
                  <a
                    href='#'
                    className='group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80'
                  >
                    <img
                      src='https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=1000'
                      loading='lazy'
                      alt='Photo by Martin Sanchez'
                      className='absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110'
                    />

                    <div className='pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50'></div>

                    <span className='relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg'>
                      Dev
                    </span>
                  </a>
                  {/* <!-- image - end --> */}

                  {/* <!-- image - start --> */}
                  <a
                    href='#'
                    className='group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80'
                  >
                    <img
                      src='https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&q=75&fit=crop&w=600'
                      loading='lazy'
                      alt='Photo by Lorenzo Herrera'
                      className='absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110'
                    />

                    <div className='pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50'></div>

                    <span className='relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg'>
                      Retro
                    </span>
                  </a>
                  {/* <!-- image - end --> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </WrapContent>
    </PlugLayout>
  );
}

export default SinglePlugPage;

function IconBox({ Icon, title }: { Icon: IconType; title: string }) {
  return (
    <Link
      href=''
      className='flex hover:text-violet-700 text-gray-500 gap-1 items-center  justify-center flex-col'
    >
      <Icon className='text-xl md:text-2xl' />
      <span className='nunito text-sm md:text-md'>{title}</span>
    </Link>
  );
}
