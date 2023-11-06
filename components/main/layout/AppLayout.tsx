import React, { PropsWithChildren } from 'react';
import TopNav from '../navigation/TopNav';
import AppFooter from '../navigation/AppFooter';
import Headers from '@/components/seo/Headers';

type LayoutProps = PropsWithChildren & {
  title: string;
};

function AppLayout({ children, title }: LayoutProps) {
  return (
    <div>
      <Headers title={title} />
      <TopNav />
      <main className='min-h-[90vh]'>{children}</main>
      <AppFooter />
    </div>
  );
}

export default AppLayout;
