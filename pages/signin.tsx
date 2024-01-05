import ConnectButton from '@/components/auth/ConnectButton';
import AppLogo from '@/components/shared/AppLogo';
import { useTheme } from '@/providers/ThemeProvider';
import Link from 'next/link';
import React, { ChangeEvent, useState } from 'react';

function Signin() {
  const { theme } = useTheme();
  const [data, setData] = useState<{ email: string; password: string }>({
    email: '',
    password: '',
  });
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    let v = e.target.value;
    setData((prev) => {
      return { ...prev, [e.target.name]: v };
    });
  };

  //todo: write submit function

  return (
    <div className='min-h-screen flex justify-center'>
      <div className='bg-white dark:bg-slate-900 shadow sm:rounded-lg flex justify-center flex-1'>
        <div className='lg:w-1/2 xl:w-5/12 sm:p-12'>
          <div className='flex items-center justify-center'>
            <AppLogo logoType={theme === 'light' ? 'd' : 'n'} />
          </div>
          <div className='mt-12 flex flex-col items-center'>
            <h1 className='text-2xl xl:text-3xl dark:text-gray-300 font-extrabold'>
              Sign in
            </h1>
            <div className='w-full flex-1 mt-8'>
              <div className='flex flex-col items-center'>
                <ConnectButton text='Sign in with Wallet' />
              </div>

              <div className='my-12 divider text-center'>
                <div className='leading-none raleway px-2 inline-block text-sm text-gray-600 dark:text-gray-500 tracking-wide font-medium'>
                  Or sign in with e-mail
                </div>
              </div>

              <div className='mx-auto max-w-xs'>
                <input
                  className='input w-full px-8 py-4 rounded-full font-medium border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400'
                  type='email'
                  name='email'
                  value={data.email}
                  onChange={handleChange}
                  placeholder='Email'
                />
                <input
                  className='input w-full px-8 py-4 rounded-full font-medium border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 mt-5'
                  type='password'
                  name='password'
                  value={data.password}
                  onChange={handleChange}
                  placeholder='Password'
                />
                <button className='mt-5 tracking-wide font-semibold brand-bg brand-bg-hover text-gray-100 w-full py-4 rounded-lg  transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none'>
                  <svg
                    className='w-6 h-6 -ml-2'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  >
                    <path d='M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2' />
                    <circle cx='8.5' cy='7' r='4' />
                    <path d='M20 8v6M23 11h-6' />
                  </svg>
                  <span className='ml-3'>Sign In</span>
                </button>
                <p className='mt-6 text-xs  text-center'>
                  <a
                    href='#'
                    className='border-b  mb-2 border-gray-500 border-dotted'
                  >
                    Forgot password?
                  </a>
                  <br />
                  <br />
                  Don&apos;t have an account?
                  <Link
                    href='/signup'
                    className='border-b pl-1 border-gray-500 border-dotted'
                  >
                    Sign up instead
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

export default Signin;
