import WrapContent from '@/components/shared/WrapContent';
import Image from 'next/image';
import React from 'react';

type Plug = {
  name: string;
  category: string;
  reviews: string;
  rating: string;
  location: string;
  joined: string;
  image: string;
};

function SampleBusiness() {
  const plugs = [
    {
      name: 'Plug name here',
      category: 'Food',
      reviews: '20',
      rating: '4',
      location: 'town, city',
      joined: '2 months ago',
      image:
        'https://source.unsplash.com/random?restaurants,barber-shop,coffee-shop,restaurant,boutique,',
    },
    {
      name: 'New Culinary Hub',
      category: 'Food',
      reviews: '15',
      rating: '4.5',
      location: 'downtown, city',
      joined: '1 month ago',
      image:
        'https://source.unsplash.com/random?restaurants,barber-shop,coffee-shop,restaurant,boutique,',
    },
    {
      name: 'Gourmet Delight',
      category: 'Food',
      reviews: '25',
      rating: '4.2',
      location: 'suburb, city',
      joined: '3 months ago',
      image:
        'https://source.unsplash.com/random?restaurants,barber-shop,coffee-shop,restaurant,boutique,',
    },
    {
      name: 'Urban Bites',
      category: 'Food',
      reviews: '18',
      rating: '4.3',
      location: 'city center, city',
      joined: '2.5 months ago',
      image:
        'https://source.unsplash.com/random?restaurants,barber-shop,coffee-shop,restaurant,boutique,',
    },
    {
      name: 'Savor Haven',
      category: 'Food',
      reviews: '22',
      rating: '4.1',
      location: 'outskirts, city',
      joined: '1.5 months ago',
      image:
        'https://source.unsplash.com/random?restaurants,barber-shop,coffee-shop,restaurant,boutique,',
    },
  ];

  return (
    <div>
      <WrapContent>
        <div className='py-10'>
          <h2 className='text-center text-2xl'>Hot Plugs near you!</h2>
          <div className='pt-10 grid grid-cols-1 md:grid-cols-2 gap-10 '>
            {plugs.map((plug, i) => {
              return <BusinessCard {...plug} key={i + 'plug'} />;
            })}
          </div>
        </div>
      </WrapContent>
    </div>
  );
}

export default SampleBusiness;

function BusinessCard({
  category,
  image,
  joined,
  location,
  name,
  rating,
  reviews,
}: Plug) {
  return (
    <article className=' flex flex-wrap md:flex-nowrap shadow-lg mx-auto w-full group cursor-pointer transform duration-500 hover:-translate-y-1 rounded-b-xl'>
      <div className='relative h-[200px] md:h-full w-full md:w-[40%]'>
        <Image
          fill
          className='w-full max-h-[400px] object-cover md:w-52 rounded-t-xl'
          src='https://i.ibb.co/Kr4b0zJ/152013403-10158311889099633-8423107287930246533-o.jpg'
          alt=''
        />
      </div>
      <div className='w-full md:w-[60%]'>
        <div className='p-5 pb-10'>
          <h1 className='text-2xl font-semibold text-gray-800 mt-4'>{name}</h1>
          <p className='text-xl text-gray-400 mt-2 leading-relaxed'>
            Located in : {location}
          </p>
        </div>
        <div className='bg-blue-50 p-5 rounded-b-xl'>
          <div className='sm:flex sm:justify-between'>
            <div>
              <div className='text-lg text-gray-700'>
                <span className='text-gray-900 font-bold'>196 km</span> from
                Dhaka
              </div>
              <div className='flex items-center'>
                <div className='flex'>
                  <svg
                    className='w-4 h-4 mx-px fill-current text-green-600'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 14 14'
                  >
                    <path d='M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z'></path>
                  </svg>
                  <svg
                    className='w-4 h-4 mx-px fill-current text-green-600'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 14 14'
                  >
                    <path d='M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z'></path>
                  </svg>
                  <svg
                    className='w-4 h-4 mx-px fill-current text-green-600'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 14 14'
                  >
                    <path d='M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z'></path>
                  </svg>
                  <svg
                    className='w-4 h-4 mx-px fill-current text-green-600'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 14 14'
                  >
                    <path d='M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z'></path>
                  </svg>
                  <svg
                    className='w-4 h-4 mx-px fill-current text-green-600'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 14 14'
                  >
                    <path d='M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z'></path>
                  </svg>
                </div>
                <div className='text-gray-600 ml-2 text-sm md:text-base mt-1'>
                  {reviews} reviews
                </div>
              </div>
            </div>
          </div>
          <div className='mt-3 text-gray-600 text-sm md:text-sm'>
            *Places to visit:
          </div>
        </div>
      </div>
    </article>
  );
}
