import useCart from '@/providers/CartContext';
import React from 'react';
import { FaCartPlus } from 'react-icons/fa';

function CartButton({
  toggle,
}: {
  toggle: (toSet?: boolean | undefined) => void;
}) {
  const { products } = useCart();

  return (
    <div
      onClick={() => toggle()}
      className='btn-outline btn-sm btn h-fit rounded-full border-purple-500 pr-0 hover:bg-purple-800 drawer-button'
    >
      {products.length}
      <div className='rounded-full bg-purple-800'>
        <div className=' p-2 text-white'>
          <FaCartPlus />
        </div>
      </div>
    </div>
  );
}

export default CartButton;
