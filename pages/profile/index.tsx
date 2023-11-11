import AppLayout from '@/components/main/layout/AppLayout';
import DashboardLayout from '@/components/main/layout/DashboardLayout';
import SectionHeading from '@/components/shared/SectionHeading';
import WrapContent from '@/components/shared/WrapContent';
import Link from 'next/link';
import React from 'react';

function Profile() {
  return (
    <AppLayout title='My Profile | Digemart account page'>
      <DashboardLayout>
        <WrapContent>
          <SectionHeading>Account Overview</SectionHeading>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <div className='rounded-xl border dim-borders '>
              <h1 className='py-2 px-4 border-b dim-borders uppercase'>
                Account info.
              </h1>
              <div className='px-4'>
                <ul className='list-disc pl-4 pt-2 pb-4'>
                  <li>
                    <small className='poppins'>Email:</small>
                    <p>dummy@gmail.com</p>
                  </li>
                  <span className='divider' />
                  <li>
                    <small className='poppins'>Full name:</small>
                    <p>John Doe</p>
                  </li>
                </ul>
              </div>
            </div>
            {/* delivery location */}
            <div className='rounded-xl border dim-borders '>
              <h1 className='py-2 px-4 border-b dim-borders uppercase'>
                Address Book
              </h1>
              <div className='px-4'>
                <ul className='list-disc pl-4 pt-2 pb-4'>
                  <li>
                    <small className='poppins'>
                      Your default shipping address :
                    </small>
                    <p>
                      15 Ekpenyong Obong Street, Afaha Offot, Uyo Uyo, Akwa Ibom
                    </p>
                  </li>
                  <span className='divider' />
                  <li>
                    <small className='poppins'>Phone:</small>
                    <p>+234 8177552052</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className='py-8'>
            <div className='alert'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                className='stroke-info shrink-0 w-6 h-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                ></path>
              </svg>
              <span>
                Go to{' '}
                <Link href='/profile/settings'>
                  <span className='poppins text-purple-500 dark:text-purple-500'>
                    Settings
                  </span>
                </Link>{' '}
                to edit your details.
              </span>
            </div>
          </div>
        </WrapContent>
      </DashboardLayout>
    </AppLayout>
  );
}

export default Profile;
