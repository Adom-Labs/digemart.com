import InfoAlert from '@/components/shared/InfoAlert';
import React, { ChangeEvent, useState } from 'react';

function PickupAddresses() {
  const [pickupAddresses, _] = useState<
    { id: string; address: string; city: string; state: string }[]
  >([]);

  const handleChange = () => {};

  return (
    <div className='py-4 '>
      <h2>Pick a saved address :</h2>
      <div role='radiogroup' className='flex flex-col gap-5 pt-4'>
        {pickupAddresses.map((a, i) => {
          return (
            <div key={i + 'addr'} className='flex items-start gap-4'>
              <input
                type='radio'
                name='address'
                id={a.id}
                className='radio accent-blue-700'
                onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange()}
                value={a.id}
              />{' '}
              <label htmlFor={a.id}>
                <h2>{a.address}</h2>
                <span className='text-neutral-500 font-light'>
                  {a.city} {a.state}
                </span>
              </label>
            </div>
          );
        })}

        {pickupAddresses.length === 0 && (
          <InfoAlert>No pickup addresses added by vendor.</InfoAlert>
        )}
      </div>
    </div>
  );
}

export default PickupAddresses;
