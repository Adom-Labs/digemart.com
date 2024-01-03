import ConnectButton from '@/components/auth/ConnectButton';
import AppLogo from '@/components/shared/AppLogo';
import { useTheme } from '@/providers/ThemeProvider';
import Link from 'next/link';
import React from 'react';

function Signup() {
  const { theme } = useTheme();
  return (
    <div className='min-h-screen flex justify-center'>
      <div className='bg-white dark:bg-slate-900 shadow sm:rounded-lg flex justify-center flex-1'>
        <div className='lg:w-1/2 xl:w-5/12 sm:p-12'>
          <div className='flex items-center justify-center'>
            <AppLogo logoType={theme === 'light' ? 'd' : 'n'} />
          </div>
          <div className='mt-12 flex flex-col items-center'>
            <h1 className='text-2xl xl:text-3xl dark:text-gray-300 font-extrabold'>
              Sign up
            </h1>
            <div className='w-full flex-1 mt-8'>
              <div className='flex flex-col items-center'>
                <ConnectButton text='Sign up with Wallet' />
              </div>

              <div className='my-12 divider text-center'>
                <div className='leading-none raleway px-2 inline-block text-sm text-gray-600 dark:text-gray-500 tracking-wide font-medium'>
                  Or sign up with e-mail
                </div>
              </div>

              <div className='mx-auto max-w-xs flex flex-col gap-5'>
                <div className='relative bg-inherit'>
                  <input
                    type='text'
                    id='fullname'
                    name='fullname'
                    className='input peer w-full px-4 py-4 rounded-full font-medium border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400'
                    placeholder=''
                  />
                  <label
                    htmlFor='fullname'
                    className='absolute cursor-text left-0 -top-2 text-sm text-gray-500 bg-white mx-3 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-2 peer-focus:text-sky-600 peer-focus:text-sm transition-all'
                  >
                    Full Name
                  </label>
                </div>

                <div className='relative bg-inherit'>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    className='input peer w-full px-4 py-4 rounded-full font-medium border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400'
                    placeholder=''
                  />
                  <label
                    htmlFor='email'
                    className='absolute cursor-text left-0 -top-2 text-sm text-gray-500 bg-white mx-3 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-2 peer-focus:text-sky-600 peer-focus:text-sm transition-all'
                  >
                    Email
                  </label>
                </div>
                <div className='relative bg-inherit'>
                  <input
                    type='text'
                    inputMode='tel'
                    id='number'
                    name='number'
                    className='input peer w-full px-4 py-4 rounded-full font-medium border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400'
                    placeholder=''
                  />
                  <label
                    htmlFor='number'
                    className='absolute cursor-text left-0 -top-2 text-sm text-gray-500 bg-white mx-3 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-2 peer-focus:text-sky-600 peer-focus:text-sm transition-all'
                  >
                    Phone number
                  </label>
                </div>
                <div className='relative bg-inherit'>
                  <input
                    type='password'
                    id='text'
                    name='text'
                    className='input peer w-full px-4 py-4 rounded-full font-medium border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400'
                    placeholder=''
                  />
                  <label
                    htmlFor='text'
                    className='absolute cursor-text left-0 -top-2 text-sm text-gray-500 bg-white mx-3 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-2 peer-focus:text-sky-600 peer-focus:text-sm transition-all'
                  >
                    Password
                  </label>
                </div>

                <button className='mt-5 tracking-wide font-semibold brand-bg brand-bg-hover text-gray-100 w-full py-4 rounded-lg  transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none'>
                  <svg
                    className='w-6 h-6 -ml-2'
                    fill='none'
                    stroke='currentColor'
                    stroke-width='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  >
                    <path d='M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2' />
                    <circle cx='8.5' cy='7' r='4' />
                    <path d='M20 8v6M23 11h-6' />
                  </svg>
                  <span className='ml-3'>Sign Up</span>
                </button>
                <p className='mt-6 text-xs text-gray-600 text-center'>
                  I agree to abide by Digemart&apos;s
                  <a
                    href='#'
                    className='border-b px-2 border-gray-500 border-dotted'
                  >
                    Terms of Service
                  </a>
                  and its
                  <a
                    href='#'
                    className='border-b px-2 border-gray-500 border-dotted'
                  >
                    Privacy Policy
                  </a>
                  <br />
                  <br />
                  Already have an account?
                  <Link
                    href='/signin'
                    className='border-b pl-1 border-gray-500 border-dotted'
                  >
                    Sign in instead
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='flex-1 bg-indigo-100 text-center hidden lg:flex'>
          <div
            className='w-full bg-cover bg-center bg-no-repeat bg-blend-overlay bg-black/40'
            style={{
              backgroundImage: 'url(/images/sign_in_bg.jpg)',
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
