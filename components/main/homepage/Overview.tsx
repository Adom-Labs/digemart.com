import WrapContent from '@/components/shared/WrapContent';
import React from 'react';
import { BiSolidStore } from 'react-icons/bi';

function Overview() {
  const features = [
    {
      title: 'Create Store',
      desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Verotenetur atque aliquam eum. Alias, non!',
      Icon: <BiSolidStore />,
    },
    {
      title: 'Buy from nearby vendors',
      desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Verotenetur atque aliquam eum. Alias, non!',
      Icon: <BiSolidStore />,
    },
    {
      title: 'Crypto payments',
      desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Verotenetur atque aliquam eum. Alias, non!',
      Icon: <BiSolidStore />,
    },
  ];

  return (
    <div className='py-20'>
      <WrapContent>
        <div className='grid grid-cols-1 pb-10 md:grid-cols-2'>
          <div>
            <div>
              <h2 className='text-3xl md:text-4xl'>Features</h2>
              <small>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero
                tenetur atque aliquam eum. Alias, non! Commodi velit sint totam
                iure labore nam est laborum. Dolorum, ut! Dolorum hic corrupti
                ea.
              </small>
            </div>
          </div>
        </div>
        <div className=' grid grid-cols-1 rounded-lg text-white lg:grid-cols-3 md:grid-cols-3 bg-black'>
          {features.map((feature, i) => {
            return (
              <div
                key={feature.title}
                className={`${
                  i === 1
                    ? 'border-t md:border-t-0  border-b md:border-b-0 md:border-l md:border-r border-dotted border-t-gray-400 border-l-gray-400 border-r-gray-400'
                    : ''
                }  flex flex-col items-center justify-center gap-5 py-20 px-5`}
              >
                <span className='text-7xl'>{feature.Icon}</span>
                <h3 className='text-2xl text-center'>{feature.title}</h3>
                <p className='text-center'>{feature.desc}</p>
              </div>
            );
          })}
        </div>
      </WrapContent>
    </div>
  );
}

export default Overview;
