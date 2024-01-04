import React from 'react';
import ShopLogo from '../ShopLogo';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { BiUserCircle } from 'react-icons/bi';
import useShop from '@/providers/ShopProvider';
import WrapContent from '@/components/shared/WrapContent';
import ThemeToggle from '@/components/shared/theme/ThemeToggle';
import CartButton from '../cart/CartButton';
import MobileDropdown from './MobileDropdown';
import NavLink from './NavLink';
import Skeleton from '@/components/shared/Skeleton';

function ShopNav({
  toggle,
}: {
  toggle: (toSet?: boolean | undefined) => void;
}) {
  const { asPath } = useRouter();
  const { shopUrl, logo, mobileNavType, storeName } = useShop();
  return (
    <div className='sticky max-h-[65px] top-0 z-20 bg-white dark:bg-slate-800'>
      <WrapContent>
        <div className='flex items-center justify-between   py-2 shadow-sm '>
          {storeName === 'loading' ? (
            <Skeleton h='35px' w='80px' />
          ) : (
            <ShopLogo url={logo} />
          )}
          <div className='flex items-center gap-3  '>
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
              <CartButton toggle={toggle} />
            </div>
            <ThemeToggle />
            {mobileNavType === 'dropdown' && <MobileDropdown asPath={asPath} />}
          </div>
        </div>
      </WrapContent>
    </div>
  );
}

export default ShopNav;
