import WrapContent from '@/components/shared/WrapContent';
import Link from 'next/link';
import React from 'react';

function ShopFooter() {
  return (
    <div className='py-4 bg-purple-50 dark:bg-slate-900'>
      <WrapContent>
        <div className='text-sm text-center text-gray-600'>
          Powered by{' '}
          <Link className='text-violet-800' href='/'>
            Digemart.com
          </Link>
        </div>
      </WrapContent>
    </div>
  );
}

export default ShopFooter;
