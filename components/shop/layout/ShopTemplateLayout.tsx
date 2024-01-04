import { CartProvider } from '@/providers/CartContext';
import { ShopProvider } from '@/providers/ShopProvider';
import React, { PropsWithChildren } from 'react';
import ShopNav from '../nav/ShopNav';
import ShopFooter from '../nav/ShopFooter';
import CartDrawer from '../cart/CartDrawer';
import { useDisclosure } from 'react-use-disclosure';

function ShopTemplateLayout({ children }: PropsWithChildren) {
  const { toggle, isOpen } = useDisclosure();

  return (
    <ShopProvider>
      <CartProvider>
        <ShopNav toggle={toggle} />
        <div className='pb-[45px]'>{children}</div>
        <ShopFooter />
        <CartDrawer isOpen={isOpen} toggle={toggle} />
      </CartProvider>
    </ShopProvider>
  );
}

export default ShopTemplateLayout;
