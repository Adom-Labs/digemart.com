import React, { PropsWithChildren } from 'react';
import AppFooter from '@/components/main/navigation/AppFooter';
import PlugNavbar from './PlugNavbar';

function PlugLayout({ children }: PropsWithChildren) {
  return (
    <div>
      <PlugNavbar />
      <main>{children}</main>
      <AppFooter />
    </div>
  );
}

export default PlugLayout;
