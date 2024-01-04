import Image from 'next/image';
import React from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';

function CartItem() {
  return (
    <li className='py-2 grid grid-cols-12 gap-3 shadow-sm'>
      <div className='relative col-span-3 h-[60px] w-[60px] bg-neutral-300 rounded-xl'>
        <Image
          src='/shop/images/f_pants.jpg'
          alt='cart item'
          fill
          className='onject-contain rounded-xl'
        />
      </div>
      <div className='col-span-9'>
        <div className='flex justify-between'>
          <small className='poppins font-semibold'>Name tthth tjtjd</small>
          <small className='poppins font-bold'>$500</small>
        </div>
        <small className='poppins'>$70 per unit</small>
        <div className='flex justify-end'>
          <div className='flex items-center poppins'>
            <span className=' rounded-none rounded-l-full btn btn-sm md:btn-md '>
              <span className=''>
                <FaMinus />
              </span>
            </span>
            <span className='text-lg rounded-none btn btn-sm md:btn-md pointer-events-none'>
              2
            </span>
            <span className='rounded-none rounded-r-full btn btn-sm md:btn-md '>
              <span className=''>
                <FaPlus />
              </span>
            </span>
          </div>
          <small className='mt-2 btn-ghost btn btn-sm poppins'>REMOVE</small>
        </div>
      </div>
    </li>
  );
}

export default CartItem;
