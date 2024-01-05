import React, { ReactNode } from 'react';
import { IconType } from 'react-icons';

function AlertWithIcon({
  children,
  Icon,
}: {
  Icon: IconType;
  children: ReactNode;
}) {
  return (
    <div
      className='flex border-1 items-center
     bg-neutral-200 dark:bg-neutral-800 rounded-xl flex-col gap-5 p-5 max-w-xl shadow-base'
    >
      <div>
        <Icon className='text-7xl' />
      </div>
      <div className='text-xl md:text-2xl raleway'>{children}</div>
    </div>
  );
}

export default AlertWithIcon;
