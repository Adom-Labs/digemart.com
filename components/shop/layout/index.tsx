import React, { ReactNode } from 'react';
import ShopNav from '../nav/ShopNav';
import ShopFooter from '../nav/ShopFooter';
import { ShopProvider } from '@/providers/ShopProvider';
import { CartProvider } from '@/providers/CartContext';

function VendorShopLayout({ children }: { children: ReactNode }) {
  return (
    <ShopProvider>
      <CartProvider>
        <ShopNav />
        <div className='pb-[45px]'>{children}</div>
        <ShopFooter />
      </CartProvider>
    </ShopProvider>
  );
}

export default VendorShopLayout;
