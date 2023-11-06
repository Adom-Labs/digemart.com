import Center from '@/components/Center';
import React from 'react';

function Loader() {
  return (
    <Center className='h-[100vh] w-full'>
      <div className='lds-ellipsis'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </Center>
  );
}

export default Loader;
