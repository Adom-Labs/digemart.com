import AppLayout from '@/components/main/layout/AppLayout';
import DashboardLayout from '@/components/main/layout/DashboardLayout';
import UpdateAddress from '@/components/main/settings/UpdateAddress';
import UpdatePersonalDetails from '@/components/main/settings/UpdatePersonalDetails';
import UpdateProfilePic from '@/components/main/settings/UpdateProfilePic';
import SectionHeading from '@/components/shared/SectionHeading';
import WrapContent from '@/components/shared/WrapContent';
import React from 'react';

function Settings() {
  return (
    <AppLayout title='Account settings | Digemart account page'>
      <DashboardLayout>
        <WrapContent>
          <SectionHeading>Settings</SectionHeading>
          <div className='pt-5 flex flex-col gap-8'>
            <div>
              <UpdateProfilePic />
            </div>
            <div className='divider'></div>

            <div>
              <UpdatePersonalDetails />
            </div>
            <div className='divider'></div>

            <div>
              <UpdateAddress />
            </div>
          </div>
        </WrapContent>
      </DashboardLayout>
    </AppLayout>
  );
}

export default Settings;
