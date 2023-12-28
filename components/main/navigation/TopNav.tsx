import React from 'react';
import Link from 'next/link';
import { linkStyle } from '@/styles/theme';
import { BiUserCircle } from 'react-icons/bi';

import WrapContent from '@/components/shared/WrapContent';
import AppLogo from '@/components/shared/AppLogo';
import ThemeToggle from '@/components/shared/theme/ThemeToggle';
import { useTheme } from '@/providers/ThemeProvider';
// import { OpenAgentModal } from '../homepage/CallToAction';
import { FaPlug } from 'react-icons/fa';
import { FaShoppingBag } from 'react-icons/fa';
import { FaRegQuestionCircle } from 'react-icons/fa';
import { RiMenu3Line } from 'react-icons/ri';

function TopNav() {
  const { theme } = useTheme();
  return (
    <div className='sticky top-0 z-20 bg-white dark:bg-slate-800 dark:shadow-2xl '>
      <WrapContent>
        <div className='flex items-center justify-between  py-3 shadow-sm '>
          <AppLogo logoType={theme === 'night' ? 'n' : 'd'} />
          <div className='flex items-center gap-3 md:gap-5 '>
            <Link
              title='find people to buy things from'
              href='/findyourplug'
              className={
                linkStyle + 'hidden text-lg sm:flex items-center gap-1'
              }
            >
              Find Your Plug
              <FaPlug />
            </Link>
            {/* <Link
              title='find people to buy things from'
              href='#!'
              className={
                linkStyle + 'hidden text-lg md:flex items-center gap-1'
              }
            >
              Find Stores
              <FaShoppingBag />
            </Link> */}
            {/* <div className='hidden md:block'>
              <NavLink title='Start Selling' path='#sell' />
            </div> */}
            {/* <div onClick={OpenAgentModal} className='hidden md:block'>
              <a
                title='Become an Agent'
                href='#!'
                className={linkStyle + 'text-lg md:block'}
              >
                Become an Agent
              </a>
            </div> */}
            <div className='hidden md:flex items-center gap-1'>
              <NavLink title='FAQ' path='#FAQ' />
              <FaRegQuestionCircle />
            </div>

            <div title='profile'>
              <Link href={'/profile'} className='hover:text-purple-500'>
                <BiUserCircle className='text-4xl' />
              </Link>
            </div>
            <div title='toggle theme'>
              <ThemeToggle />
            </div>
            <div className='md:hidden'>
              <div title='toggle menu'>
                <div>
                  <details className='dropdown dropdown-end'>
                    <summary className='m-1 btn btn-xs bg-transparent hover:bg-transparent outline-none border-0'>
                      <RiMenu3Line className='text-3xl hover:text-purple-500 cursor-pointer ' />
                    </summary>
                    <ul className='p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52'>
                      <li>
                        <Link
                          title='find people to buy things from'
                          href='/findyourplug'
                          className={
                            linkStyle + ' text-lg flex items-center gap-1'
                          }
                        >
                          Find Your Plug
                          <FaPlug />
                        </Link>
                      </li>

                      <li>
                        <Link
                          title='find people to buy things from'
                          href='#!'
                          className={
                            linkStyle + ' text-lg flex items-center gap-1'
                          }
                        >
                          Find Stores
                          <FaShoppingBag />
                        </Link>
                      </li>
                      <li>
                        <div className='flex items-center gap-1'>
                          <NavLink title='FAQ' path='#FAQ' />
                          <FaRegQuestionCircle />
                        </div>
                      </li>
                    </ul>
                  </details>
                </div>
              </div>
            </div>
          </div>
        </div>
      </WrapContent>
    </div>
  );
}

export default TopNav;

function NavLink({ path, title }: { path: string; title: string }) {
  return (
    <Link className={linkStyle + ' text-lg md:block'} href={path}>
      {title}
    </Link>
  );
}
