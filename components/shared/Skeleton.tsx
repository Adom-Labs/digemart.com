import React from 'react';

function Skeleton({ h, w }: { h: string; w: string }) {
  return <div style={{ height: h, width: w }} className='skeleton'></div>;
}

export default Skeleton;
