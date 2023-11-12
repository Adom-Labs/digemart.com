import React, { PropsWithChildren } from 'react';
import DashSidebar from './components/DashSidebar';

function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <div className=''>
      <div className='flex h-[91vh]'>
        <DashSidebar />
        <div className='overflow-y-auto w-full no-scrollbar'>
          <div className='py-8 '>{children}</div>
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
