import { OrderType } from '@/pages/profile/orders';
import Image from 'next/image';
import React from 'react';
import { BsDot } from 'react-icons/bs';

function OrderViewModal({ order }: { order: OrderType | null }) {
  return (
    <dialog id='order-view-modal' className='modal modal-bottom '>
      <div className='modal-box min-h-[60vh] md:w-[80%]'>
        <form method='dialog'>
          <button className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'>
            ✕
          </button>
        </form>
        <div>
          {order && (
            <div>
              <h3 className='font-bold text-lg'>{order.id}</h3>
              <div className='flex items-center '>
                <span className='text-2xl py-3'>
                  <BsDot
                    className={
                      order.status === 'shipped'
                        ? 'text-green-500'
                        : order.status === 'cancelled'
                        ? 'text-red-500'
                        : 'text-gray-600'
                    }
                  />
                </span>
                <small className='poppins md:text-lg'>{order.status}</small>
              </div>
              <div className='grid grid-cols-3 gap-4 rounded-xl border dim-borders p-4  items-center'>
                <span>
                  <small>cost :</small>
                  <p className='poppins text-sm font-semibold md:text-lg'>
                    {order.price}
                  </p>
                </span>
                <span>
                  <small>created on:</small>
                  <p className='poppins text-sm font-semibold md:text-lg'>
                    {order.date}
                  </p>
                </span>
                <span>
                  <small>discount:</small>
                  <p className='poppins text-sm font-semibold md:text-lg'>
                    nil
                  </p>
                </span>
                <span>
                  <small>paid via:</small>
                  <p className='poppins text-sm font-semibold md:text-lg'>
                    Bitcoin
                  </p>
                </span>
              </div>
              {/* end of grid */}

              <div className='pt-10'>
                <div className='border dim-borders rounded-xl'>
                  <header className='p-4 border-b dim-borders'>
                    <h3 className='uppercase font-semibold'>Items in order:</h3>
                  </header>
                  <div className=' dim-borders flex flex-col gap-5'>
                    <OrderViewItem />
                    <OrderViewItem />
                    <OrderViewItem />
                    <OrderViewItem />
                    <OrderViewItem />
                  </div>
                  <footer className='p-4 border-t dim-borders poppins text-neutral-500'>
                    20 Items
                  </footer>
                </div>
              </div>
            </div>
          )}
          {!order && (
            <div>
              <div className='alert alert-warning'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='stroke-current shrink-0 h-6 w-6'
                  fill='none'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z'
                  />
                </svg>
                <span>Something went amiss! Please try again.</span>
              </div>
            </div>
          )}
          <div className='modal-action'></div>
        </div>
      </div>
    </dialog>
  );
}

export default OrderViewModal;

function OrderViewItem() {
  return (
    <div className='shadow-sm dark:shadow-md p-4 flex items-center justify-between gap-5'>
      <div>
        <h4 className='text-lg'>Product name here</h4>
        <span>
          <small>quantity:</small>
          <p className='poppins text-sm font-semibold md:text-lg'>5 items</p>
        </span>
        <span>
          <small>cost:</small>
          <p className='poppins text-sm font-semibold md:text-lg'>$45</p>
        </span>
      </div>
      <div className='relative h-[120px] flex items-center justify-center w-[100px] md:w-[120px] border bg-neutral-100 dark:bg-neutral-900 rounded-xl dim-borders'>
        <Image
          fill
          src='/shop/images/p_shoes.png'
          alt='product image'
          className='object-contain'
        />
      </div>
    </div>
  );
}
