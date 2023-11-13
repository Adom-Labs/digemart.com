import { OrderType } from '@/pages/profile/orders';
import { BsDot } from 'react-icons/bs';
import { FaExternalLinkAlt } from 'react-icons/fa';

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
        <div className='flex text-neutral-500 dark:text-neutral-300 items-center md:justify-end'>
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

export default OrderItem;
