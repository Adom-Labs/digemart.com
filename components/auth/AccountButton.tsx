import useAuth from '@/providers/useAuth';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import { BiUserCircle } from 'react-icons/bi';

function AccountButton() {
  const { user } = useAuth();
  const { push } = useRouter();
  return (
    <>
      {user ? (
        <div title='profile'>
          <Link href={'/profile'} className='hover:text-purple-500'>
            <BiUserCircle className='md:text-4xl text-3xl' />
          </Link>
        </div>
      ) : (
        <button
          aria-label='sign in'
          onClick={() => push('/signin')}
          className='btn btn-sm brand-bg-hover brand-bg text-white'
        >
          Sign in
        </button>
      )}
    </>
  );
}

export default AccountButton;
