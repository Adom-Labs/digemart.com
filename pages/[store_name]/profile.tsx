import SectionHeading from '@/components/shared/SectionHeading';
import WrapContent from '@/components/shared/WrapContent';
import VendorShopLayout from '@/components/shop/layout';
import React from 'react';
import { MdOutlinePendingActions } from 'react-icons/md';
import { BsClipboardCheck } from 'react-icons/bs';
import PurchaseHistory from '@/components/shop/profile/PurchaseHistory';
import InfoAlert from '@/components/shared/InfoAlert';

function Profile() {
  return (
    <VendorShopLayout title='Checkout'>
      <div className='py-10'>
        <WrapContent>
          <SectionHeading>Profile</SectionHeading>
          <div className='flex flex-col gap-8'>
            <div className='shadow-sm dark:bg-slate-800 bg-gray-100 rounded-xl p-4 max-w-xl'>
              <h1 className='font-bold text-2xl pb-2'>
                <span className='font-light'>Welcome</span> User,
              </h1>
              <p>
                ...you have made 0 purchases with <b>teststorename</b>
              </p>
            </div>

            <section>
              <div className='grid gap-8 max-w-xl md:grid-cols-2'>
                <div className='rounded-xl flex gap-5 items-center bg-gray-100 dark:bg-slate-800 p-4'>
                  <MdOutlinePendingActions className='text-5xl p-2 bg-neutral-200 dark:bg-slate-900 text-brand-purple rounded-full' />
                  <div>
                    <span className='small-caps'>Pending orders</span>
                    <p className='font-light text-4xl'>200</p>
                  </div>
                </div>
                <div className='rounded-xl flex gap-5 items-center bg-gray-100 dark:bg-slate-800 p-4'>
                  <BsClipboardCheck className='text-5xl p-2 bg-neutral-200 dark:bg-slate-900 text-brand-purple rounded-full' />
                  <div>
                    <span className='small-caps'>Completed orders</span>
                    <p className='font-light text-4xl'>20</p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h1 className='font-semibold text-lg'>Pending orders</h1>
              <div className='max-w-xl pt-5'>
                <InfoAlert>
                  No pending orders at the moment, continue shopping!
                </InfoAlert>
              </div>
            </section>
            <section>
              <h1 className='font-semibold text-lg'>Purchase History</h1>
              <div className='max-w-xl'>
                <PurchaseHistory />
              </div>
            </section>
          </div>
        </WrapContent>
      </div>
    </VendorShopLayout>
  );
}

export default Profile;
