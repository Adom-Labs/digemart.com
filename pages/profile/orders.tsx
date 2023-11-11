import AppLayout from '@/components/main/layout/AppLayout';
import DashboardLayout from '@/components/main/layout/DashboardLayout';
import OrderViewModal from '@/components/main/orders/OrderViewModal';
import SectionHeading from '@/components/shared/SectionHeading';
import WrapContent from '@/components/shared/WrapContent';
import React, { useState } from 'react';
import { BsDot } from 'react-icons/bs';
import { FaExternalLinkAlt } from 'react-icons/fa';

export type OrderType = {
  id: string;
  status: string;
  date: string;
  price: number | string;
};

function Orders() {
  const [current, SetCurrent] = useState<OrderType | null>(null);

  const OpenViewModal = (order: OrderType) => {
    SetCurrent(order);
    let modal = document.getElementById(
      'order-view-modal'
    ) as HTMLDialogElement;
    modal.showModal();
  };
  return (
    <AppLayout title='My Order history | Digemart account page'>
      <DashboardLayout>
        <WrapContent>
          <SectionHeading>Orders</SectionHeading>
          <small className=' poppins relative top-[-10px] uppercase'>
            20 items
          </small>
          <div className='flex flex-col gap-8 w-full'>
            <OrderItem
              id='Order#45668'
              status='shipped'
              price='$300'
              date='23-08-2023'
              viewOrder={OpenViewModal}
            />
            <OrderItem
              id='Order#45458'
              status='cancelled'
              price='$300'
              date='23-08-2023'
              viewOrder={OpenViewModal}
            />
            <OrderItem
              id='Order#45068'
              status='pending'
              price='$300'
              date='23-08-2023'
              viewOrder={OpenViewModal}
            />
            <OrderItem
              id='Order#45268'
              status='cancelled'
              price='$300'
              date='23-08-2023'
              viewOrder={OpenViewModal}
            />
            <OrderItem
              id='Order#45168'
              status='shipped'
              price='$300'
              date='23-08-2023'
              viewOrder={OpenViewModal}
            />
          </div>
          <OrderViewModal order={current} />
        </WrapContent>
      </DashboardLayout>
    </AppLayout>
  );
}

export default Orders;

function OrderItem({
  id,
  status,
  price,
  date,
  viewOrder,
}: OrderType & { viewOrder: (o: OrderType) => void }) {
  return (
    <div className='rounded-xl border dim-borders p-4'>
      <div className='grid grid-cols-2 gap-y-3 md:grid-cols-3'>
        <div>
          <h2 className='font-light text-xl md:text-3xl mb-1'>{id}</h2>
          <small
            onClick={() => {
              viewOrder({
                id,
                status,
                price,
                date,
              });
            }}
            className='cursor-pointer text-purple-800 flex text-xs md:text-lg   items-center gap-2'
          >
            view order <FaExternalLinkAlt className='text-[9px] md:text-sm' />
          </small>
        </div>
        <div className='flex items-center justify-end'>
          <span className='text-2xl '>
            <BsDot
              className={
                status === 'shipped'
                  ? 'text-green-500'
                  : status === 'cancelled'
                  ? 'text-red-500'
                  : 'text-gray-600'
              }
            />
          </span>
          <small className='poppins md:text-lg'>{status}</small>
        </div>
        <div className='flex text-neutral-400 items-center md:justify-end'>
          <div>
            <span>
              <small>cost :</small>
              <p className='poppins text-sm font-semibold md:text-lg'>
                {price}
              </p>
            </span>
            <span>
              <small>created on:</small>
              <p className='poppins text-sm font-semibold md:text-lg'>{date}</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
