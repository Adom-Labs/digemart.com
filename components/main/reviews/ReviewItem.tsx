import Image from 'next/image';
import React from 'react';
export type ReviewType = {
  id: string;
  product_name: string;
  delivered_on: string;
  order_id: string;
  image: string;
};

function ReviewItem({
  review,
  openModal,
}: {
  review: ReviewType;
  openModal: (r: ReviewType) => void;
}) {
  return (
    <div>
      <div className='rounded-xl shadow-sm bg-white dark:bg-slate-800'>
        <div className='grid grid-cols-6 lg:grid-cols-12 gap-2'>
          <div className='relative w-full min-h-[120px] h-full col-span-2 lg:col-span-4'>
            <Image
              src={review.image}
              fill
              alt={review.product_name}
              className='object-cover rounded-l-xl  h-full'
            />
          </div>

          <div className='flex justify-between flex-col col-span-4 lg:col-span-8 sm:flex-row  w-full'>
            <div className='flex flex-col p-2 justify-between capitalize'>
              <p className='poppins'>{review.product_name}</p>
              <span>
                <small className='block'>order id: {review.order_id}</small>
                <small className='text-xs text-sky-800'>
                  delivered on: {review.delivered_on}
                </small>
              </span>
            </div>
            <div className='p-2 sm:text-right'>
              <button
                onClick={() => {
                  return openModal(review);
                }}
                className='btn text-purple-500 uppercase btn-outline btn-xs sm:btn-sm'
              >
                Rate product
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewItem;
