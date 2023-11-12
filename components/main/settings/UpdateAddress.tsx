import React from 'react';
import { FaPlus, FaTrash } from 'react-icons/fa';

function UpdateAddress() {
  return (
    <div className=''>
      <h2 pb-3>Add or remove addresses</h2>
      <AddressList />
      <div className='divider'></div>
      <div className='mt-4 max-w-md'>
        <div className=''>
          <p className='poppins font-light '>Add a new address:</p>
        </div>
        <div className=' pt-3 max-w-md'>
          <div className='flex justify-between items-center flex-col md:flex-row gap-3'>
            <div className='form-control w-full'>
              <label className='label' htmlFor='address'>
                <span className='label-text'>Address</span>
              </label>
              <input
                type='text'
                id='address'
                name='address'
                placeholder='John'
                className='input input-bordered w-full'
              />
            </div>
          </div>
          <button className='btn w-full md:w-[180px] bg-purple-700 text-white hover:bg-purple-500 hover:text-white'>
            Add <FaPlus />
          </button>
        </div>
      </div>
    </div>
  );
}

export default UpdateAddress;

function AddressList() {
  return (
    <div className='max-w-md '>
      <div className=' pt-3'>
        <p className='poppins font-light '>Existing addresses:</p>
      </div>
      <ul>
        <li className='py-2 flex items-center justify-between gap-4'>
          <span>1. Adress line 1 here with all details</span>
          <div className='btn btn-sm hover:text-red-400'>
            <FaTrash />
          </div>
        </li>
        <li className='py-2 flex items-center justify-between gap-4'>
          <span>2. Adress line 2 here with all details</span>
          <div className='btn btn-sm hover:text-red-400'>
            <FaTrash />
          </div>
        </li>
        <li className='py-2 flex items-center justify-between gap-4'>
          <span>2. Adress line 3 here with all details</span>
          <div className='btn btn-sm hover:text-red-400'>
            <FaTrash />
          </div>
        </li>
      </ul>
    </div>
  );
}
