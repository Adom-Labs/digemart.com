import SectionHeading from '@/components/shared/SectionHeading';
import WrapContent from '@/components/shared/WrapContent';
import VendorShopLayout from '@/components/shop/layout';
import ShopProduct from '@/components/shop/product/ShopProduct';
import useShop from '@/providers/ShopProvider';
import { mockresult } from '@/providers/mockProducts';
import Link from 'next/link';
import React from 'react';

function Products() {
  return (
    <VendorShopLayout>
      <div className='py-10'>
        <WrapContent>
          <div className='flex flex-col items-center gap-5 pt-20'>
            <h1 className='text-center text-4xl font-bold md:text-5xl'>
              Products on TestStoreName
            </h1>
            <span className='max-w-md text-center text-xs text-gray-600 dark:text-gray-300 md:text-lg'>
              Shop only the best products from the categories offered below :
            </span>
          </div>
          <div className='flex flex-col gap-10 pt-10'>
            {mockresult.map((result, idx) => {
              return (
                <div key={result.category}>
                  <SectionHeading mb='25px'>{result.category}</SectionHeading>
                  <div className='grid grid-cols-1 gap-10 sm:grid-cols-2  lg:grid-cols-3'>
                    {result.products.map((deal) => (
                      <ShopProduct key={deal.id} product={deal} />
                    ))}
                  </div>
                  <BrowseMore category={result.category} />
                  {mockresult.length > idx + 1 ? (
                    <div className='divider' />
                  ) : (
                    <></>
                  )}
                </div>
              );
            })}
          </div>
        </WrapContent>
      </div>
    </VendorShopLayout>
  );
}

export default Products;

function BrowseMore({ category }: { category: string }) {
  const { shopUrl } = useShop();
  return (
    <Link
      href={shopUrl + '/category/' + category}
      className=' m-auto pt-10 block w-fit text-center hover:text-purple-500'
    >
      See more {category}
    </Link>
  );
}
