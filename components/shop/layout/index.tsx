import React, { ReactNode } from 'react';
import ShopFooter from '../nav/ShopFooter';
import { ShopProvider } from '@/providers/ShopProvider';
import { CartProvider } from '@/providers/CartContext';
import Headers from '@/components/seo/Headers';

function VendorShopLayout({
  children,
  title,
  desc,
}: {
  children: ReactNode;
  title?: string;
  desc?: string;
}) {
  return (
    <ShopProvider>
      <Headers desc={desc} title={title} />
      <CartProvider>
        <div className='pb-[45px]'>{children}</div>
        <ShopFooter />
      </CartProvider>
    </ShopProvider>
  );
}

export default VendorShopLayout;
