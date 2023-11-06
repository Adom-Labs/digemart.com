import React from 'react';
import Link from 'next/link';
import { linkStyle } from '@/styles/theme';
import { BiUserCircle } from 'react-icons/bi';

import WrapContent from '@/components/shared/WrapContent';
import AppLogo from '@/components/shared/AppLogo';
import ThemeToggle from '@/components/shared/theme/ThemeToggle';
import { useTheme } from '@/providers/ThemeProvider';

function TopNav() {
  const { theme } = useTheme();
  return (
    <div className='sticky top-0 z-20 bg-white dark:bg-slate-800 dark:shadow-2xl '>
      <WrapContent>
        <div className='flex items-center justify-between  py-3 shadow-sm '>
          <AppLogo logoType={theme === 'night' ? 'n' : 'd'} />
          <div className='flex items-center gap-5 '>
            <div className='hidden md:block'>
              <NavLink title='Start Selling' path='#sell' />
            </div>
            <div className='hidden md:block'>
              <NavLink title='Become an Agent' path='/agents' />
            </div>
            <div className='hidden md:block'>
              <NavLink title='FAQ' path='#FAQ' />
            </div>

            <div title='profile'>
              <Link href={'/profile'} className='hover:text-purple-500'>
                <BiUserCircle className='text-4xl' />
              </Link>
            </div>
            <div title='profile'>
              <ThemeToggle />
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
