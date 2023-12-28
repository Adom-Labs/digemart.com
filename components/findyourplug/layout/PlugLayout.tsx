import React, { PropsWithChildren } from 'react';
import PlugHeader from './PlugHeader';
import AppFooter from '@/components/main/navigation/AppFooter';
import PlugNavbar from './PlugNavbar';

function PlugLayout({ children }: PropsWithChildren) {
  return (
    <div>
      <PlugNavbar />
      <PlugHeader />
      <main>{children}</main>
      <AppFooter />
    </div>
  );
}

export default PlugLayout;
