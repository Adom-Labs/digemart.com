import React from 'react';

function Loader() {
  return (
    <div className='h-[100vh] w-full flex items-center justify-center'>
      <div className='lds-ellipsis'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Loader;
