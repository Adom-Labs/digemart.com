import React from 'react';
import ShopLogo from '../ShopLogo';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { linkStyle } from '@/styles/theme';
import { BiUserCircle } from 'react-icons/bi';
import useShop from '@/providers/ShopProvider';
import WrapContent from '@/components/shared/WrapContent';
import ThemeToggle from '@/components/shared/theme/ThemeToggle';
import CartButton from '../cart/CartButton';

function ShopNav() {
  const { asPath } = useRouter();
  const { shopUrl } = useShop();
  return (
    <div className='sticky top-0 z-20 bg-white dark:bg-slate-800'>
      <WrapContent>
        <div className='flex items-center justify-between  py-3 shadow-sm '>
          <ShopLogo />
          <div className='flex items-center gap-5 '>
            <div className='hidden md:block'>
              <NavLink title='Products' asPath={asPath} path='/products' />
            </div>
            <div className='hidden md:block'>
              <NavLink title='Orders' asPath={asPath} path='/orders' />
            </div>

            <div className='hidden md:block' title='profile'>
              <Link
                href={shopUrl + '/profile'}
                className='hover:text-purple-500'
              >
                <BiUserCircle className='text-4xl' />
              </Link>
            </div>

            {/* cart button */}
            <div>
              <CartButton />
            </div>
            <ThemeToggle />
          </div>
        </div>
      </WrapContent>
    </div>
  );
}

export default ShopNav;

function NavLink({
  path,
  asPath,
  title,
}: {
  path: string;
  asPath: string;
  title: string;
}) {
  return (
    <Link
      className={linkStyle + ' text-lg md:block'}
      href={'/' + asPath.split('/')[1] + path}
    >
      {title}
    </Link>
  );
}
