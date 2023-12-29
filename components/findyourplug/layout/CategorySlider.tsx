import WrapContent from '@/components/shared/WrapContent';
import React from 'react';
import { IoRestaurantOutline } from 'react-icons/io5';
import { MdOutlineIron, MdOutlineShoppingBag } from 'react-icons/md';
import { VscCoffee } from 'react-icons/vsc';
import { GiWeightLiftingUp } from 'react-icons/gi';
import { PiBeerBottleFill } from 'react-icons/pi';
import Link from 'next/link';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import { BiCategory } from 'react-icons/bi';

function CategorySlider() {
  const categories = [
    {
      type: 'Dry cleaners',
      Icon: MdOutlineIron,
    },
    {
      type: 'Restaurants',
      Icon: IoRestaurantOutline,
    },
    {
      type: 'Coffee & Tea',
      Icon: VscCoffee,
    },
    {
      type: 'Fitness',
      Icon: GiWeightLiftingUp,
    },
    {
      type: 'Shopping',
      Icon: MdOutlineShoppingBag,
    },
    {
      type: 'Nightlife',
      Icon: PiBeerBottleFill,
    },
  ];
  return (
    <div className='bg-gray-100'>
      <WrapContent>
        <div className='py-12 flex gap-10 overflow-x-scroll md:overflow-x-hidden md:flex-wrap '>
          <div
            className='rounded-full block bg-gray-50 shadow-base '
            style={{ minWidth: '160px', minHeight: '160px' }}
          >
            <div className=' flex h-full flex-col items-center justify-center'>
              <div className='text-lg relative text-right'>
                <BiCategory className='text-3xl ml-auto' />
                <p className='poppins font-semibold'>Some</p>
                <p className='poppins font-semibold'>categories</p>
                {/* <p className='poppins font-semibold'>include : </p> */}
              </div>
            </div>
          </div>
          {categories.map((cat, i) => {
            const { Icon, type } = cat;
            return (
              <Link
                href=''
                className='rounded-full block bg-gray-50 shadow '
                style={{ minWidth: '160px', minHeight: '160px' }}
                key={i + 'cat'}
              >
                <div className=' flex h-full flex-col gap-3 items-center justify-center'>
                  <div className='text-5xl'>
                    <Icon />
                  </div>
                  <p className='font-semibold raleway text-sm'>{type}</p>
                </div>
              </Link>
            );
          })}

          <div
            className='rounded-full block bg-gray-50 shadow-sm '
            style={{ minWidth: '160px', minHeight: '160px' }}
          >
            <div className=' flex h-full flex-col gap-0 items-center justify-center'>
              <p className='raleway'>More</p>
              <HiOutlineDotsHorizontal className='text-4xl' />
            </div>
          </div>
        </div>
      </WrapContent>
    </div>
  );
}

export default CategorySlider;
