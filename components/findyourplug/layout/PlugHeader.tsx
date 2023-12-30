import WrapContent from '@/components/shared/WrapContent';
import React from 'react';
import { FaSearch } from 'react-icons/fa';

function PlugHeader() {
  return (
    <div id='plug-header'>
      <WrapContent>
        <div className=''>
          <div className='mx-auto flex flex-col items-center py-20 sm:py-24'>
            <div className='lg:flex justify-center items-center flex-col mb-5 sm:mb-10'>
              <h1 className='text-4xl sm:text-5xl md:text-7xl lg:text-7xl xl:text-8xl text-center text-white font-black '>
                Find
                <span className='text-violet-700 px-2 poppins dark:text-violet-500'>
                  plugs
                </span>{' '}
                <br />
                for everything you need!
              </h1>
              <p className='text-center text-white py-2'>
                Find service providers near you!
              </p>
            </div>
            <div className='flex w-full md:w-8/12 xl:w-6/12 py-3'>
              <div className=' rounded-full w-full join join-horizontal bg-white/20 shadow-lg'>
                <input
                  type='text'
                  id='hero_search'
                  name='q'
                  className='input  no-outline-shadow-border  input-lg w-full p-3 join-item rounded-l-full rounded-r-none border border-2 border-0 placeholder-gray-400  bg-black/10 text-white '
                  placeholder='what are you looking for?'
                />

                <input
                  type='text'
                  id='hero_search'
                  name='location'
                  className='input  no-outline-shadow-border  input-lg min-w-[100px] w-[30%] p-3 join-item rounded-l-full rounded-r-none border border-2 border-0 placeholder-gray-400  bg-black/10 text-white '
                  placeholder='location'
                  list='location_list'
                />

                <datalist id='location_list'>
                  <option className='text-black'>Uyo</option>
                  <option className='text-black'>PH</option>
                  <option className='text-black'>Lagos</option>
                </datalist>
                <span
                  title='search button'
                  className='btn no-outline-shadow-border  btn-lg capitalize inline-flex join-item items-center bg-violet-700  text-white text-lg font-semibold rounded-l-none rounded-r-full border-0 hover:bg-violet-900'
                >
                  <FaSearch className='text-2xl' />
                </span>
              </div>
            </div>
          </div>
        </div>
      </WrapContent>
    </div>
  );
}

export default PlugHeader;
