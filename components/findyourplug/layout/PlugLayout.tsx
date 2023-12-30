import React, { PropsWithChildren } from 'react';
import AppFooter from '@/components/main/navigation/AppFooter';
import PlugNavbar from './PlugNavbar';
import Headers from '@/components/seo/Headers';

function PlugLayout({
  children,
  title = '',
}: PropsWithChildren & { title?: string }) {
  return (
    <div>
      <Headers title={title} />

      <PlugNavbar />
      <main>{children}</main>
      <AppFooter />
    </div>
  );
}

export default PlugLayout;
