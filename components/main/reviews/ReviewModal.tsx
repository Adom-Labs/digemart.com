import React, { useState } from 'react';
import { ReviewType } from './ReviewItem';
import Image from 'next/image';
import SelectReviewStars from './SelectReviewStars';

function ReviewModal({ review }: { review: ReviewType | null }) {
  const [selectedRating, setSelectedRating] = useState(0);
  return (
    <dialog id='review-modal' className='modal'>
      <div className='modal-box min-h-[400px]'>
        <form method='dialog'>
          <button className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'>
            ✕
          </button>
        </form>
        <h3 className='font-bold text-lg'>Rate and Review</h3>
        <p className='py-4'>Select the stars to rate this product</p>
        <div className='grid grid-cols-6 lg:grid-cols-12 gap-2'>
          <div className='relative w-full min-h-[120px] h-full col-span-2 lg:col-span-4'>
            {review ? (
              <Image
                src={review!.image}
                fill
                alt={review!.product_name}
                className='object-cover rounded-l-xl  h-full'
              />
            ) : (
              ''
            )}
          </div>

          <div className='col-span-4 lg:col-span-8  w-full'>
            <div className='flex flex-col p-2 gap-5 justify-between'>
              <p className='poppins capitalize'>{review?.product_name}</p>
              <SelectReviewStars
                selectedRating={selectedRating}
                setSelectedRating={setSelectedRating}
              />
            </div>
          </div>
        </div>
        <div>
          <p className='py-4'>Leave a review</p>
          <div className=''>
            <div className='flex justify-between items-center flex-col md:flex-row gap-3'>
              <div className='form-control w-full'>
                <label className='label'>
                  <span className='label-text'>Review title</span>
                </label>
                <input
                  type='text'
                  placeholder='wonderful, just as advertised'
                  className='input input-bordered w-full'
                />
              </div>
              {/* review title */}
              <div className='form-control w-full'>
                <label className='label'>
                  <span className='label-text'>Your name</span>
                </label>
                <input
                  type='text'
                  placeholder='name'
                  className='input input-bordered w-full'
                />
              </div>
              {/* name end */}
            </div>

            <div className='form-control w-full'>
              <label className='label'>
                <span className='label-text'>Detailed review</span>
              </label>
              <textarea
                placeholder='review'
                className='rounded-lg w-full resize-none h-[200px] input input-bordered'
              />
            </div>
            {/* detail end */}

            <button className='btn w-full bg-purple-700 text-white hover:bg-purple-500 hover:text-white'>
              Submit review
            </button>
          </div>
        </div>
      </div>
    </dialog>
  );
}

export default ReviewModal;
