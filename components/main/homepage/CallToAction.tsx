/* eslint-disable @next/next/no-img-element */
import { colors } from '@/styles/theme';
import React from 'react';

export function OpenAgentModal() {
  let d = document.getElementById('agent_modal') as HTMLDialogElement;

  d.showModal();
}
function CallToAction() {
  return (
    <div className='relative py-16'>
      <div
        aria-hidden='true'
        className='absolute inset-0 h-max w-full m-auto grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20'
      >
        <div className='blur-[106px] h-56 bg-gradient-to-br from-purple-500 to-blue-800 dark:from-blue-300'></div>
        <div className='blur-[106px] h-32 bg-gradient-to-r from-purple-400 to-sky-300 dark:to-indigo-600'></div>
      </div>

      <div className='max-w-7xl mx-auto px-6 md:px-12 xl:px-6'>
        <div className='relative'>
          <div className='flex items-center justify-center -space-x-2'>
            <img
              loading='lazy'
              width='400'
              height='400'
              src='https://randomuser.me/api/portraits/women/12.jpg'
              alt='member photo'
              className='h-8 w-8 rounded-full object-cover'
            />
            <img
              loading='lazy'
              width='200'
              height='200'
              src='https://randomuser.me/api/portraits/women/45.jpg'
              alt='member photo'
              className='h-12 w-12 rounded-full object-cover'
            />
            <img
              loading='lazy'
              width='200'
              height='200'
              src='https://randomuser.me/api/portraits/women/60.jpg'
              alt='member photo'
              className='z-10 h-16 w-16 rounded-full object-cover'
            />
            <img
              loading='lazy'
              width='200'
              height='200'
              src='https://randomuser.me/api/portraits/women/4.jpg'
              alt='member photo'
              className='relative h-12 w-12 rounded-full object-cover'
            />
            <img
              loading='lazy'
              width='200'
              height='200'
              src='https://randomuser.me/api/portraits/women/34.jpg'
              alt='member photo'
              className='h-8 w-8 rounded-full object-cover'
            />
          </div>

          <div className='mt-6 m-auto space-y-6 md:w-8/12 lg:w-7/12'>
            <h1 className='text-center text-4xl font-bold text-gray-800 dark:text-white md:text-5xl'>
              Get Started now
            </h1>
            <p className='text-center text-xl text-gray-600 dark:text-gray-300'>
              Be part of millions people around the world using tailus in modern
              User Interfaces.
            </p>
            <div className='flex flex-wrap justify-center gap-6'>
              <a
                href='#'
                className='relative flex h-12 w-full items-center justify-center px-8 before:absolute before:inset-0 before:rounded-full before:bg-[#170455] before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max'
              >
                <span className='relative text-base font-semibold text-white  dark:text-dark'>
                  Sell on Digemart
                </span>
              </a>
              <a
                href='#!'
                className='relative flex h-12 w-full items-center justify-center px-8 before:absolute before:inset-0 before:rounded-full before:border before:border-[#170455] before:bg-transparent before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-white dark:before:bg-gray-800 sm:w-max'
                onClick={OpenAgentModal}
              >
                <span className='relative text-base font-semibold text-[#170455] dark:text-white'>
                  Become an Agent
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <dialog id='agent_modal' className='modal'>
        <div className='modal-box pb-10'>
          {/* close btn */}
          <form method='dialog'>
            {/* if there is a button in form, it will close the modal */}
            <button className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'>
              ✕
            </button>
          </form>
          {/* end close btn */}
          <h3 className='font-bold text-2xl pb-2'>Agent sign up</h3>
          <p>Complete the form below to continue:</p>
          <div className='flex flex-col gap-6 pt-10'>
            <div>
              <label className='block pb-2 text-xl' htmlFor='name'>
                Full name
              </label>
              <input
                type='text'
                name='name'
                placeholder='Full name here'
                className='input input-bordered w-full '
              />
            </div>
            {/* end full name */}
            <div>
              <label className='block pb-2 text-xl' htmlFor='name'>
                Email address
              </label>
              <input
                type='email'
                name='email'
                placeholder='email@....'
                className='input input-bordered w-full '
              />
            </div>
            {/* end email*/}
            <div>
              <label className='block pb-2 text-xl' htmlFor='name'>
                Phone number
              </label>
              <input
                type='tel'
                name='phone'
                placeholder='+2340 ....'
                className='input input-bordered w-full '
              />
            </div>
            {/* end phone*/}
            <div>
              <label className='block pb-2 text-xl' htmlFor='name'>
                Location <i>(add city/state/town)</i>
              </label>
              <input
                type='text'
                name='location'
                placeholder='eg, Ikeja in Lagos'
                className='input input-bordered w-full '
              />
            </div>
            {/* end location*/}

            <button className='btn bg-[#170455] hover:bg-green-800 hover:text-white text-white text-xl raleway'>
              Submit
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default CallToAction;
