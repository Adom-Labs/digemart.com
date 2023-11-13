import React, { useState } from 'react';
import OrderItem from './OrderItem';
import WrapContent from '@/components/shared/WrapContent';
import SectionHeading from '@/components/shared/SectionHeading';
import { OrderType } from '@/pages/profile/orders';
import OrderViewModal from './OrderViewModal';

function Orderspage({ orders }: { orders: OrderType[] }) {
  const [current, SetCurrent] = useState<OrderType | null>(null);

  const OpenViewModal = (order: OrderType) => {
    SetCurrent(order);
    let modal = document.getElementById(
      'order-view-modal'
    ) as HTMLDialogElement;
    modal.showModal();
  };
  return (
    <WrapContent>
      <SectionHeading>Orders</SectionHeading>
      <small className=' poppins relative top-[-10px] uppercase'>
        20 items
      </small>
      <div className='flex flex-col gap-8 w-full'>
        {orders.map((order) => {
          return (
            <OrderItem
              key={order.id}
              id='Order#45668'
              status='shipped'
              price='$300'
              date='23-08-2023'
              viewOrder={OpenViewModal}
            />
          );
        })}
      </div>
      <OrderViewModal order={current} />
    </WrapContent>
  );
}

export default Orderspage;
