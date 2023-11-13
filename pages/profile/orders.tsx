import AppLayout from '@/components/main/layout/AppLayout';
import DashboardLayout from '@/components/main/layout/DashboardLayout';
import Orderspage from '@/components/main/orders/Orderspage';
import React from 'react';

export type OrderType = {
  id: string;
  status: string;
  date: string;
  price: number | string;
};

const orders = [
  {
    id: 'Order#45668',
    status: 'shipped',
    price: '$300',
    date: '23-08-2023',
  },
  { id: 'Order#45458', status: 'cancelled', price: '$300', date: '23-08-2023' },
  { id: 'Order#45668', status: 'shipped', price: '$300', date: '23-08-2023' },
  { id: 'Order#45458', status: 'cancelled', price: '$300', date: '23-08-2023' },
  { id: 'Order#45668', status: 'shipped', price: '$300', date: '23-08-2023' },
  { id: 'Order#45458', status: 'cancelled', price: '$300', date: '23-08-2023' },
];

function Orders() {
  return (
    <AppLayout title='My Order history | Digemart account page'>
      <DashboardLayout>
        <Orderspage orders={orders} />
      </DashboardLayout>
    </AppLayout>
  );
}

export default Orders;
