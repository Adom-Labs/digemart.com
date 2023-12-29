import { DashLink } from '@/components/main/layout/components/DashSidebar';
import React from 'react';
import { BiLogOutCircle, BiUserCircle } from 'react-icons/bi';
import { FiSettings } from 'react-icons/fi';

function PlugSidebar() {
  return (
    <aside className='sticky top-0 shadow-base z-2 py-2 border-r dark:border-r-gray-700'>
      <div className='flex w-full h-[90%] flex-col justify-between'>
        <div className='grid grid-rows-4 px-1 items-center  '>
          <DashLink path='/' title='overview'>
            <BiUserCircle />
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

export default PlugSidebar;
