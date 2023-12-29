import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { ReactNode } from 'react';
import { BiLogOutCircle, BiUserCircle } from 'react-icons/bi';
import { BsCartCheck } from 'react-icons/bs';
import { CiReceipt } from 'react-icons/ci';
import { FiSettings } from 'react-icons/fi';
import { AiOutlineTransaction } from 'react-icons/ai';
import { MdOutlineRateReview } from 'react-icons/md';

export const linkStyle =
  'font-semibold text-lg flex flex-col items-center flex-center py-2 md:gap-2 ';
const baseUrl = '/profile';

function DashSidebar() {
  return (
    <aside className='sticky top-0 shadow-base z-2 py-2 border-r dark:border-r-gray-700'>
      <div className='flex w-full h-[90%] flex-col justify-between'>
        <div className='grid grid-rows-4 px-1 items-center  '>
          <DashLink path='/' title='overview'>
            <BiUserCircle />
          </DashLink>
          <DashLink path='/orders' title='orders'>
            <BsCartCheck />
          </DashLink>
          <DashLink path='/receipts' title='receipts'>
            <CiReceipt />
          </DashLink>
          <DashLink path='/reviews' title='reviews'>
            <MdOutlineRateReview />
          </DashLink>
          <DashLink path='/payments' title='Payments'>
            <AiOutlineTransaction />
          </DashLink>

          <DashLink path='/settings' title='settings'>
            <FiSettings />
          </DashLink>
        </div>
        <div
          className={
            'font-semibold text-lg flex flex-col items-center flex-center py-2 md:gap-2  hover:text-red-600 cursor-pointer'
          }
        >
          <span className='w-fit text-2xl'>
            <BiLogOutCircle />
          </span>
          <small className=' text-[9px] md:text-sm poppins capitalize'>
            Logout
          </small>
        </div>
      </div>
    </aside>
  );
}

export default DashSidebar;

export function DashLink({
  path,
  title,
  children,
}: {
  path: string;
  title: string;
  children: ReactNode;
}) {
  const { asPath } = useRouter();
  function isSamePath(pathname: string) {
    return pathname !== '/'
      ? baseUrl + pathname + '/' === asPath
      : baseUrl + '/' === asPath;
  }

  return (
    <Link
      style={{
        color: isSamePath(path) ? '#a855f8' : 'initial',
      }}
      href={baseUrl + path}
      className={linkStyle}
    >
      <span className='w-fit text-2xl'>{children}</span>
      <small className=' text-[9px] md:text-sm poppins capitalize'>
        {title}
      </small>
    </Link>
  );
}
