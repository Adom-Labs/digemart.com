import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { CiShop } from 'react-icons/ci';
import { BiUserCircle } from 'react-icons/bi';
import { BsCartCheck } from 'react-icons/bs';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import useShop from '@/providers/ShopProvider';

function ShopNav() {
  const { asPath } = useRouter();
  const { shopUrl } = useShop();
  function isSamePath(pathname: string) {
    return pathname !== '/'
      ? shopUrl + pathname + '/' === asPath
      : shopUrl + '/' === asPath;
  }

  const linkStyle =
    'shop-footer-box flex items-center  justify-center py-3 flex flex-col items-center gap-1';

  return (
    <div className='sticky bottom-0 z-20 bg-white shadow-lg md:hidden'>
      <div className='grid grid-cols-4 items-center  shadow-2xl '>
        <Link
          href={shopUrl + '/'}
          style={{ color: isSamePath('/') ? '#a855f8' : 'initial' }}
          className={linkStyle}
        >
          <CiShop className='text-2xl' />
          <small className=' text-xs '>Home</small>
        </Link>
        <Link
          style={{
            color: isSamePath('/products') ? '#a855f8' : 'initial',
          }}
          href={shopUrl + '/products'}
          className={linkStyle}
        >
          <HiOutlineShoppingBag className='text-2xl' />
          <small className=' text-xs '>Products</small>
        </Link>
        <Link
          style={{
            color: isSamePath('/orders') ? '#a855f8' : 'initial',
          }}
          href={shopUrl + '/orders'}
          className={linkStyle}
        >
          <BsCartCheck className='text-2xl' />
          <small className=' text-xs '>Orders</small>
        </Link>
        <Link
          style={{
            color: isSamePath('/profile') ? '#a855f8' : 'initial',
          }}
          href={shopUrl + '/profile'}
          className={linkStyle}
        >
          <BiUserCircle className='text-2xl' />
          <small className=' text-xs'>Profile</small>
        </Link>
      </div>
    </div>
  );
}

export default ShopNav;
