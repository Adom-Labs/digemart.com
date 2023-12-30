import React from 'react';
import Link from 'next/link';
import { linkStyle } from '@/styles/theme';
import { BiUserCircle } from 'react-icons/bi';
import WrapContent from '@/components/shared/WrapContent';
import AppLogo from '@/components/shared/AppLogo';
import ThemeToggle from '@/components/shared/theme/ThemeToggle';
import { useTheme } from '@/providers/ThemeProvider';
import { FaRegQuestionCircle } from 'react-icons/fa';
import { RiMenu3Line } from 'react-icons/ri';

function PlugNavbar() {
  const { theme } = useTheme();
  return (
    <div className='sticky top-0 z-20 bg-white dark:bg-slate-800 dark:shadow-2xl '>
      <WrapContent>
        <div className='flex items-center justify-between  py-3 shadow-sm '>
          <AppLogo logoType={theme === 'night' ? 'n' : 'd'} />
          <div className='flex items-center gap-0 md:gap-5 '>
            <Link
              title='back to digemart'
              href='/'
              className={
                linkStyle + 'hidden text-lg md:flex items-center gap-1 mr-3'
              }
            >
              Home
            </Link>
            <Link
              title='find people to buy things from'
              href='/createplug'
              className={
                linkStyle + 'hidden text-lg sm:flex items-center gap-1 mr-3'
              }
            >
              Add Your Business
            </Link>

            <div className='hidden md:flex items-center gap-1'>
              <NavLink title='FAQ' path='#plugFAQ' />
              <FaRegQuestionCircle />
            </div>

            <div title='profile'>
              <Link
                href={'/findyourplug/profile'}
                className='hover:text-purple-500'
              >
                <BiUserCircle className='md:text-4xl text-3xl' />
              </Link>
            </div>
            <div title='toggle theme'>
              <ThemeToggle />
            </div>
            <div className='md:hidden'>
              <div title='toggle menu'>
                <div>
                  <details className='dropdown dropdown-end'>
                    <summary className='m-1 btn btn-xs w-fit px-0 bg-transparent hover:bg-transparent outline-none border-0'>
                      <RiMenu3Line className='text-3xl hover:text-purple-500 cursor-pointer ' />
                    </summary>
                    <ul className='p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52'>
                      <li>
                        <Link
                          title='find people to buy things from'
                          href='/'
                          className={
                            linkStyle + ' text-sm flex items-center gap-1'
                          }
                        >
                          Home
                        </Link>
                      </li>

                      <li>
                        <Link
                          title='find people to buy things from'
                          href='/createplug'
                          className={
                            linkStyle + ' text-sm flex items-center gap-1'
                          }
                        >
                          Add your business
                        </Link>
                      </li>
                      <li>
                        <div className='flex items-center gap-1'>
                          <NavLink title='Plug FAQ' path='#plugFAQ' />
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

export default PlugNavbar;

function NavLink({ path, title }: { path: string; title: string }) {
  return (
    <Link className={linkStyle + 'text-sm md:text-lg md:block'} href={path}>
      {title}
    </Link>
  );
}
