import AppLayout from '@/components/main/layout/AppLayout';
import DashboardLayout from '@/components/main/layout/DashboardLayout';
import OrderViewModal from '@/components/main/orders/OrderViewModal';
import NftReceipt from '@/components/main/receipts/NftReceipt';
import SectionHeading from '@/components/shared/SectionHeading';
import WrapContent from '@/components/shared/WrapContent';
import React, { useState } from 'react';
import { OrderType } from './orders';

function Receipts() {
  const [current, SetCurrent] = useState<OrderType | null>(null);

  const OpenViewModal = (order: OrderType) => {
    SetCurrent(order);
    let modal = document.getElementById(
      'order-view-modal'
    ) as HTMLDialogElement;
    modal.showModal();
  };
  return (
    <AppLayout title='My Profile | Digemart account page'>
      <DashboardLayout>
        <WrapContent>
          <SectionHeading>Your Receipts</SectionHeading>
          <div className='grid grid-cols-2 pt-10 md:grid-cols-3 gap-3 md:gap-8 lg:grid-cols-4'>
            <NftReceipt id='Order#00987' showOrder={OpenViewModal} />
            <NftReceipt id='Order#09j87' showOrder={OpenViewModal} />
            <NftReceipt id='Order#j0987' showOrder={OpenViewModal} />
            <NftReceipt id='Order#0987' showOrder={OpenViewModal} />
            <NftReceipt id='Order#k0987' showOrder={OpenViewModal} />
            <NftReceipt id='Order#09l7' showOrder={OpenViewModal} />
            <NftReceipt id='Order#0o987' showOrder={OpenViewModal} />
            <NftReceipt id='Order#09827' showOrder={OpenViewModal} />
          </div>
          <OrderViewModal order={current} />
        </WrapContent>
      </DashboardLayout>
    </AppLayout>
  );
}

export default Receipts;
