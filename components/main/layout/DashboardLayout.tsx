import React, { PropsWithChildren } from 'react';
import DashSidebar from './components/DashSidebar';
import PlugSidebar from '@/components/findyourplug/layout/PlugSidebar';

function DashboardLayout({
  children,
  plug = false,
}: PropsWithChildren & { plug?: boolean }) {
  return (
    <div className=''>
      <div className='flex h-[91vh]'>
        {!plug && <DashSidebar />}
        {plug && <PlugSidebar />}
        <div className='overflow-y-auto w-full no-scrollbar'>
          <div className='py-8 '>{children}</div>
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
