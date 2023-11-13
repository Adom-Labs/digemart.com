import Orderspage from '@/components/main/orders/Orderspage';
import VendorShopLayout from '@/components/shop/layout';
import React from 'react';

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
    <VendorShopLayout>
      <div className='py-10'>
        <Orderspage orders={orders} />
      </div>
    </VendorShopLayout>
  );
}

export default Orders;
