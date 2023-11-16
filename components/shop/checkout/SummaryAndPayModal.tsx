import React from 'react';
import { FaAngleRight } from 'react-icons/fa';

function SummaryAndPayModal() {
  return (
    <dialog id='summary_pay' className='modal'>
      <div className='modal-box min-w-md w-[90vw] max-w-2xl'>
        <form method='dialog'>
          {/* if there is a button in form, it will close the modal */}
          <button className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'>
            ✕
          </button>
        </form>
        <section>
          <h1 className='font-bold text-lg'>Order Summary</h1>
          <small className='poppins'>Total items: 5</small>
          <div className='p-4'>
            <div className='flex justify-between items-center pb-4'>
              <h4 className='font-semibold'>Price :</h4>
              <h4 className='font-semibold'>$490</h4>
            </div>
            <div className='flex justify-between items-center'>
              <h4 className='font-semibold'>Shipping :</h4>
              <h4 className='font-semibold'>$40</h4>
            </div>
            <div className='divider'></div>
            <div className='flex justify-between items-center'>
              <h4 className='font-semibold'>Total :</h4>
              <h4 className='font-semibold'>$490</h4>
            </div>
            <div className='flex justify-end mt-5 items-center'>
              <span className='rounded-full bg-green-500 hover:bg-green-800 text-gray-100 btn '>
                <span className='flex items-center poppins'>
                  Continue <FaAngleRight className='text-lg' />
                </span>
              </span>
            </div>
          </div>
        </section>
      </div>
    </dialog>
  );
}

export default SummaryAndPayModal;
