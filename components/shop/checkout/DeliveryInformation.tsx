import useShop from '@/providers/ShopProvider';
import { ShippingDataType } from '@/types/checkoutTypes';
import React, { ChangeEvent, useState } from 'react';
import NewAddressForm from './NewAddressForm';
import SavedAddressList from './SavedAddressList';
import PickupAddresses from './PickupAddresses';
import SummaryAndPayModal from './SummaryAndPayModal';

type MethodState = { fee: string | number; shippingType: string };

function DeliveryInformation({
  setDeliveryinfo,
}: {
  setDeliveryinfo: (d: ShippingDataType) => void;
}) {
  const { acceptedDeliveryMethods } = useShop();

  const [method, setMethod] = useState<MethodState>({
    fee: '',
    shippingType: '',
  });

  const handleChange = (method: { cost: string | number; type: string }) => {
    setMethod({ fee: method.cost, shippingType: method.type });
  };

  return (
    <div className='flex flex-col gap-5'>
      <section>
        <h1 className='font-semibold text-lg'>1. Delivery method</h1>
        <div role='radiogroup' className='flex flex-col gap-5 pt-4'>
          <div className='flex items-start gap-4'>
            <input
              type='radio'
              name='deliveryType'
              id='delivery'
              className='radio accent-blue-700'
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                handleChange({
                  cost: acceptedDeliveryMethods.delivery.cost,
                  type: e.target.value,
                })
              }
              value='delivery'
            />{' '}
            <label htmlFor='delivery'>
              <h2>Delivery</h2>
              <span className='text-neutral-500 font-light'>
                fee: ${acceptedDeliveryMethods.delivery.cost}
              </span>
            </label>
          </div>
          <div className='flex items-start gap-4'>
            <input
              type='radio'
              name='deliveryType'
              id='pickup'
              className='radio accent-blue-700'
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                handleChange({
                  cost: acceptedDeliveryMethods.delivery.cost,
                  type: e.target.value,
                })
              }
              value='pickup'
            />{' '}
            <label htmlFor='pickup'>
              <h2>Pickup</h2>
              <span className='text-neutral-500 font-light'>
                fee: {acceptedDeliveryMethods.pickup.cost}
              </span>
            </label>
          </div>
        </div>
      </section>

      <section>
        <h1 className='font-semibold text-lg'>
          {method.shippingType ? (
            <span className='poppins'>
              2.{' '}
              <span className='capitalize poppins'>{method.shippingType}</span>{' '}
              address
            </span>
          ) : (
            '2. Where will you get this?'
          )}
        </h1>
        {method.shippingType === 'delivery' ? (
          <div className='animate-slideIn'>
            <SavedAddressList />
            <div className='divider'>OR</div>
            <NewAddressForm />
          </div>
        ) : (
          <div className='animate-slideIn'>
            <PickupAddresses />
          </div>
        )}

        <section className='py-5'>
          <div
            onClick={() => {
              let d = document.getElementById(
                'summary_pay'
              ) as HTMLDialogElement;
              d?.showModal();
            }}
            className='btn btn-lg hover:bg-green-600 bg-brand-purple text-white rounded-full w-full poppins max-w-md'
          >
            Complete checkout
          </div>
        </section>
      </section>
      <SummaryAndPayModal />
    </div>
  );
}

export default DeliveryInformation;
