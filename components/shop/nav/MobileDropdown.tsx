import React from 'react';
import { RiMenu3Fill } from 'react-icons/ri';
import NavLink from './NavLink';

function MobileDropdown({ asPath }: { asPath: string }) {
  return (
    <div className='md:hidden dropdown dropdown-end'>
      <div
        tabIndex={0}
        aria-label='mobile menu button'
        role='button'
        className='btn px-0 btn-sm btn-ghost brand-text-hover hover:bg-transparent text-2xl'
      >
        <RiMenu3Fill />
      </div>
      <ul
        tabIndex={0}
        className='dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52'
      >
        <li>
          <NavLink title='Products' asPath={asPath} path='/products' />
        </li>
        <li>
          <NavLink title='Orders' asPath={asPath} path='/orders' />
        </li>
        <li>
          <NavLink title='Profile' asPath={asPath} path='/profile' />
        </li>
      </ul>
    </div>
  );
}

export default MobileDropdown;
