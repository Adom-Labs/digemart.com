import React from 'react';
import { BsDot } from 'react-icons/bs';

const payments = [
  {
    id: 'abc123',
    order_id: 'Order#12345',
    amount: 350,
    date: '2023-11-15',
    status: 'successful',
  },
  {
    id: 'def456',
    order_id: 'Order#67890',
    amount: 220,
    date: '2023-11-16',
    status: 'failed',
  },
  {
    id: 'ghi789',
    order_id: 'Order#54321',
    amount: 150,
    date: '2023-11-17',
    status: 'successful',
  },
  {
    id: 'jkl012',
    order_id: 'Order#98765',
    amount: 410,
    date: '2023-11-18',
    status: 'successful',
  },
  {
    id: 'mno345',
    order_id: 'Order#23456',
    amount: 290,
    date: '2023-11-19',
    status: 'failed',
  },
  {
    id: 'pqr678',
    order_id: 'Order#87654',
    amount: 180,
    date: '2023-11-20',
    status: 'successful',
  },
  {
    id: 'stu901',
    order_id: 'Order#43210',
    amount: 320,
    date: '2023-11-21',
    status: 'failed',
  },
  {
    id: 'vwx234',
    order_id: 'Order#10987',
    amount: 270,
    date: '2023-11-22',
    status: 'successful',
  },
  {
    id: 'yza567',
    order_id: 'Order#65432',
    amount: 190,
    date: '2023-11-23',
    status: 'failed',
  },
  {
    id: 'bcd890',
    order_id: 'Order#21098',
    amount: 400,
    date: '2023-11-24',
    status: 'successful',
  },
];

function PurchaseHistory() {
  return (
    <div>
      {' '}
      <div className='overflow-x-auto pt-5'>
        <table className='table'>
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Order</th>
              <th>Amount</th>
              <th className='px-10'>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment, idx) => {
              return (
                <tr className='hover' key={payment.id}>
                  <th>{idx + 1}</th>
                  <td>{payment.order_id}</td>
                  <td>{payment.amount}</td>
                  <td>{payment.date}</td>
                  <td>
                    <span className='flex items-center'>
                      <BsDot
                        className={
                          payment.status === 'successful'
                            ? 'text-green-500 text-2xl'
                            : payment.status === 'failed'
                            ? 'text-red-500 text-2xl'
                            : 'text-gray-600 text-2xl'
                        }
                      />
                      {payment.status}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PurchaseHistory;
