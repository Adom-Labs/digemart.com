import useCart from '@/providers/CartContext';
import useShop from '@/providers/ShopProvider';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BsCart, BsListCheck } from 'react-icons/bs';
import { FaCaretRight, FaCartPlus, FaMinus, FaPlus } from 'react-icons/fa';

function CartButton() {
  const { products } = useCart();
  const { shopUrl } = useShop();

  return (
    <div className='drawer drawer-end'>
      <input id='cart-drawer' type='checkbox' className='drawer-toggle' />
      <div className='drawer-content'>
        {/* Page content here */}
        <label
          htmlFor='cart-drawer'
          className='btn-outline btn-sm btn h-fit rounded-full border-purple-500 pr-0 hover:bg-purple-800 drawer-button'
        >
          {products.length}
          <div className='rounded-full bg-purple-800'>
            <div className=' p-2 text-white'>
              <FaCartPlus />
            </div>
          </div>
        </label>
      </div>
      <div className='drawer-side'>
        <label
          htmlFor='cart-drawer'
          aria-label='close sidebar'
          className='drawer-overlay'
        ></label>
        <div
          className='block p-4 w-80 md:w-[400px] overflow-hidden 
        h-[100vh] bg-base-200 text-base-content pb-[40px] '
        >
          <div className='overflow-scroll h-[100vh] no-scrollbar'>
            <div className=' pr-4'>
              <h3 className='text-2xl items-center font-semibold flex gap-2'>
                <BsCart /> Cart{' '}
              </h3>
              <small>{products.length} item(s)</small>
            </div>
            <div className='pr-4 pt-4  bottom-0 left-0'>
              <div className='flex justify-between items-center'>
                <h4 className='font-semibold'>Total :</h4>
                <h4 className='font-semibold'>$490</h4>
              </div>
              <div className='flex justify-end mt-5 items-center'>
                <Link href={shopUrl + '/checkout'}>
                  <span className='rounded-full bg-green-500 hover:bg-green-800 text-gray-100 btn btn-sm md:btn-md '>
                    <span className='flex items-center'>
                      Checkout <FaCaretRight />
                    </span>
                  </span>
                </Link>
              </div>
            </div>
            <div className='divider'></div>
            <h3 className='text-xl items-center font-semibold flex gap-2'>
              <BsListCheck /> Items
            </h3>

            <ul className='h-fit flex flex-col gap-2 pt-4'>
              <CartItem />
              <CartItem />
              <CartItem />
              <CartItem />
              <CartItem />
              <CartItem />
              <CartItem />
              <CartItem />
              <CartItem />
              <CartItem />
              <CartItem />
              <CartItem />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartButton;

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
