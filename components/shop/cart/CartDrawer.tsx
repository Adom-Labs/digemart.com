import useCart from '@/providers/CartContext';
import useShop from '@/providers/ShopProvider';
import Link from 'next/link';
import React from 'react';
import { BsCart, BsListCheck } from 'react-icons/bs';
import { FaCaretRight } from 'react-icons/fa';
import CartItem from './CartItem';

import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';

function CartDrawer({
  isOpen,
  toggle,
}: {
  isOpen: boolean;
  toggle: (toSet?: boolean | undefined) => void;
}) {
  const { products } = useCart();
  const { shopUrl } = useShop();
  return (
    <Drawer
      open={isOpen}
      enableOverlay
      onClose={() => toggle()}
      direction='right'
      size={300}
    >
      <div
        className='block p-4 overflow-hidden
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

          <ul className='h-fit flex flex-col gap-2 pt-4 pb-10'>
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
    </Drawer>
  );
}

export default CartDrawer;
