import React from 'react';

function SectionHeading({ children, mb = '10px' }: any) {
  return (
    <h2
      className='md:text-3xl text-xl font-bold capitalize'
      style={{ marginBottom: mb }}
    >
      {children}
    </h2>
  );
}

export default SectionHeading;
