import { OrderType } from '@/pages/profile/orders';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

function NftReceipt({
  showOrder,
  id,
}: {
  showOrder: (o: OrderType) => void;
  id: string;
}) {
  return (
    <div className=' bg-white dark:bg-slate-800 rounded-xl'>
      ,
      <div className='relative h-[150px] md:h-[200px] lg:h-[250px]'>
        <Image
          src='/shop/images/f_pants.jpg'
          alt=''
          fill
          className='rounded-t-xl object-cover'
        />
      </div>
      <div className='p-4'>
        <h3
          onClick={() => {
            return showOrder({
              id,
              status: 'loading',
              date: 'loading',
              price: 'loading',
            });
          }}
          className='text-sm md:text-lg cursor-pointer hover:text-sky-500'
        >
          Order#4568
        </h3>
        <Link href='##'>
          <span className='text-purple-500 flex items-center gap-2'>
            view <FaExternalLinkAlt className='text-xs' />
          </span>{' '}
        </Link>
      </div>
    </div>
  );
}

export default NftReceipt;
