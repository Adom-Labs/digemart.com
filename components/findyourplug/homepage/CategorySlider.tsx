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
  const sizes =
    'min-w-[120px]  min-h-[120px]  max-w-[120px]  max-h-[120px]                 md:min-w-[160px]   md:min-h-[160px]  md:max-w-[160px] md:max-h-[160px] ';
  return (
    <div className='bg-gray-100 dark:bg-transparent'>
      <WrapContent>
        <div className='py-12 flex gap-5 md:gap=8 overflow-x-scroll md:overflow-x-hidden md:flex-wrap '>
          <div className={sizes + ' rounded-full block  shadow-base '}>
            <div className=' flex h-full flex-col items-center justify-center'>
              <div className='text-md md:text-lg relative text-right'>
                <BiCategory className='text-3xl ml-auto' />
                <p className='poppins'>Some</p>
                <p className='poppins'>categories</p>
                {/* <p className='poppins font-semibold'>include : </p> */}
              </div>
            </div>
          </div>
          {categories.map((cat, i) => {
            const { Icon, type } = cat;
            return (
              <Link
                href=''
                className={
                  sizes +
                  ' rounded-full block bg-gray-50                  dark:bg-slate-800 shadow'
                }
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
            className={
              sizes +
              ' rounded-full block bg-gray-50 dark:bg-slate-800 shadow-sm cursor-pointer hover:text-violet-800'
            }
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
