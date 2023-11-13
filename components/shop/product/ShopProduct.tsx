import React from 'react';
import AddToCartButton from './AddToCartButton';
import ProductType from '@/types/ProductType';
import Image from 'next/image';
import StarRating from '@/components/shared/StarRating';
import Link from 'next/link';
import useShop from '@/providers/ShopProvider';

function ShopProduct({ product }: { product: ProductType }) {
  const { shopUrl } = useShop();
  return (
    <div>
      <div className='relative min-h-[225px] rounded-xl bg-gray-100 dark:bg-slate-700'>
        <Image
          fill
          src={product.image}
          alt={product.product_name}
          className='object-contain p-2'
        />
      </div>
      <div className='flex flex-col gap-2 pt-5'>
        <div className='flex items-center justify-between gap-5 text-lg md:text-xl'>
          <Link href={shopUrl + '/products/' + product.product_name}>
            <p className='poppins font-semibold'>{product.product_name}</p>
          </Link>
          <p className=' font-semibold'>
            <sup>{product.currency}</sup>
            {product.price} <sup>.00</sup>
          </p>
        </div>
        <div>
          <small className='poppins'>{product.short_description}</small>
        </div>
        <div className='flex gap-1'>
          <StarRating numChecked={product.rating.rating} />
          <small>({product.rating.count})</small>
        </div>
        <div className='pt-2'>
          <AddToCartButton />
        </div>
      </div>
    </div>
  );
}

export default ShopProduct;
