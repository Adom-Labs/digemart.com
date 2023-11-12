import React from 'react';
import { FaSave } from 'react-icons/fa';

function UpdatePersonalDetails() {
  return (
    <div className='border dim-borders p-4 rounded-xl'>
      <h2>Update Personal details</h2>
      <div className='pt-3'>
        <div className='flex justify-between items-center flex-col md:flex-row gap-3'>
          <div className='form-control w-full'>
            <label className='label' htmlFor='firstname'>
              <span className='label-text'>First Name</span>
            </label>
            <input
              type='text'
              id='firstname'
              name='firstname'
              placeholder='John'
              className='input input-bordered w-full'
            />
          </div>
          <div className='form-control w-full'>
            <label className='label' htmlFor='lastname'>
              <span className='label-text'>First Name</span>
            </label>
            <input
              type='text'
              id='lastname'
              name='lastname'
              placeholder='Doe'
              className='input input-bordered w-full'
            />
          </div>
          {/* first & second name */}
        </div>

        {/* email and phone begin */}
        <div className='flex justify-between items-center flex-col md:flex-row gap-3'>
          <div className='form-control w-full'>
            <label className='label' htmlFor='email'>
              <span className='label-text'>Email Address</span>
            </label>
            <input
              type='text'
              id='email'
              name='email'
              placeholder='johndoe@email.c...'
              className='input input-bordered w-full'
            />
          </div>
          <div className='form-control w-full'>
            <label className='label' htmlFor='phone'>
              <span className='label-text'>Phone Number</span>
            </label>
            <input
              type='text'
              id='phone'
              name='phone'
              placeholder='+222 094...'
              className='input input-bordered w-full'
            />
          </div>
          {/* first & second name */}
        </div>

        <button className='btn w-full md:w-[180px] bg-purple-700 text-white hover:bg-purple-500 hover:text-white'>
          Save <FaSave />
        </button>
      </div>
    </div>
  );
}

export default UpdatePersonalDetails;
