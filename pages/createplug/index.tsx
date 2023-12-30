import PlugLayout from '@/components/findyourplug/layout/PlugLayout';
import WrapContent from '@/components/shared/WrapContent';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { IoIosClose } from 'react-icons/io';

const categories = [
  {
    id: 'did1',
    category: 'Food',
  },
  {
    id: 'did2',
    category: 'Water',
  },
  {
    id: 'did3',
    category: 'Meat',
  },
  {
    id: 'did1',
    category: 'Fashion',
  },
];
function CreatePlug() {
  const [selected, setSelected] = useState<
    {
      id: string;
      category: string;
    }[]
  >([]);

  const handleDelete = (i: string) => {
    setSelected(selected.filter((s) => s.id !== i));
  };

  function HandleKeyPress(r: HTMLInputElement) {
    let value = r.value;

    if (value.trim() === '') return;
    if (
      selected.filter(
        (i) => i.category.trim().toLowerCase() === value.trim().toLowerCase()
      ).length > 0
    )
      return;

    setSelected((prev) => {
      return [
        ...prev,
        { id: value.trim().toLowerCase(), category: value.trim() },
      ];
    });

    r.value = '';
    r.focus();
  }

  return (
    <PlugLayout title='Create a business account | Digemart'>
      <div className='h-full bg-gray-100 dark:bg-gray-900'>
        {/* <!-- Container --> */}
        <WrapContent>
          <div className='flex justify-center py-12'>
            {/* <!-- Row --> */}
            <div className='w-full xl:w-3/4 lg:w-11/12 flex'>
              {/* <!-- Col --> */}
              <div
                className='w-full h-auto bg-gray-400 dark:bg-gray-800 hidden md:block md:w-5/12 bg-cover rounded-l-lg'
                style={{
                  backgroundImage:
                    "url('https://source.unsplash.com/random?department-store,restaurant,clothing,cosmetics')",
                }}
              ></div>
              {/* <!-- Col --> */}
              <div className='w-full md:w-7/12 bg-white dark:bg-gray-700 p-5 rounded-lg md:rounded-l-none'>
                <h3 className='py-4 text-2xl text-center text-gray-800 dark:text-white'>
                  List your business on Digemart
                </h3>
                <form className='md:px-8 px-2 pt-6 pb-8 mb-4 bg-white dark:bg-gray-800 rounded flex flex-col gap-5'>
                  {/* business name */}
                  <div className='mb-4 md:mr-2 md:mb-0'>
                    <Label htmlFor='store_name'>
                      The business or shop&apos;s name
                    </Label>
                    <Input
                      id='store_name'
                      type='text'
                      placeholder='store name'
                    />
                  </div>

                  {/* address */}
                  <div className=''>
                    <Label htmlFor='address'>Full Address</Label>
                    <Input
                      id='address'
                      name='address'
                      type='text'
                      placeholder='No. 1, Aza street, Panwan'
                    />
                  </div>

                  {/* city and postal code */}

                  <div className='grid grid-cols-2 gap-2'>
                    <div className=''>
                      <Label htmlFor='city'>City</Label>
                      <Input
                        id='city'
                        name='city'
                        type='text'
                        placeholder='city'
                      />
                    </div>
                    <div className=''>
                      <Label htmlFor='postal_code'>Postal code</Label>
                      <Input
                        id='postal_code'
                        name='postal_code'
                        type='text'
                        inputMode='numeric'
                        placeholder='postal code'
                      />
                    </div>
                  </div>

                  {/* telephone */}
                  <div className=''>
                    <Label htmlFor='telephone'>Phone number</Label>
                    <Input
                      id='telephone'
                      name='telephone'
                      type='text'
                      inputMode='numeric'
                      placeholder='090....'
                    />
                  </div>

                  {/* url */}

                  <div className=''>
                    <Label htmlFor='url'>URL</Label>
                    <Input
                      id='url'
                      name='url'
                      type='text'
                      placeholder='https://digemart.com/store...'
                    />
                  </div>
                  {/* url alert */}
                  <div role='alert' className='alert'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      className='stroke-info shrink-0 w-6 h-6'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                      ></path>
                    </svg>
                    <span className='raleway'>
                      Don&apos;t have a website? Click{' '}
                      <Link href='#!' className='text-blue-500 raleway'>
                        here
                      </Link>{' '}
                      to create one on Digemart
                    </span>
                  </div>
                  {/* url alert ends */}

                  <div className=''>
                    <Label htmlFor=''>Business Hours</Label>
                    <div className='grid grid-cols-2 gap-2'>
                      <div>
                        <Label style={{ fontWeight: '400' }} htmlFor='opening'>
                          Opening
                        </Label>

                        <Input
                          id='opening'
                          name='opening'
                          type='time'
                          placeholder='08:00 am'
                        />
                      </div>
                      <div>
                        <Label style={{ fontWeight: '400' }} htmlFor=''>
                          Closing
                        </Label>
                        <Input
                          id='closing'
                          name='closing'
                          type='time'
                          placeholder='08:00 am'
                        />
                      </div>
                    </div>
                    <i className='text-xs text-gray-400'>
                      You will be able to edit the times for each days and
                      holidays later!
                    </i>
                  </div>

                  {/* categories */}
                  <div>
                    <Label htmlFor=''>Category (choose all that apply)</Label>
                    <div className='relative'>
                      <Input
                        onKeyUp={(e: any) => {
                          if (e.key !== undefined) {
                            if (e.key === 'Enter') {
                              HandleKeyPress(e.target);
                            }
                          } else if (e.keyCode !== undefined) {
                            if (e.keyCode === 13) {
                              HandleKeyPress(e.target);
                            }
                          }
                        }}
                        id='category'
                        name='category'
                        type='test'
                        placeholder='category'
                        list='category_list'
                        style={{
                          paddingRight: '55px',
                        }}
                      />
                      <div
                        onClick={() => {
                          let r = window.document.querySelector(
                            '#category'
                          ) as HTMLInputElement;
                          return HandleKeyPress(r);
                        }}
                        className='btn btn-sm btn-success text-white nunito rounded-full lowercase absolute right-2 top-2 hover:bg-green-800'
                      >
                        add
                      </div>

                      <div className='mt-5'>
                        <i className='text-xs text-gray-400'>
                          {selected.length === 0 && 'no category selected'}
                        </i>
                        <div className='flex flex-wrap gap-3 items-center'>
                          {selected.map((s, i) => {
                            return (
                              <div
                                onClick={() => {
                                  return handleDelete(s.id);
                                }}
                                key={i + 'ctk'}
                                className='badge badge-lg bg-gray-50 gap-2 rounded-full'
                              >
                                {s.category}
                                <IoIosClose />
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                  <datalist id='category_list'>
                    {categories.map((category, i) => (
                      <option value={category.category} key={i + 'catl'} />
                    ))}
                  </datalist>
                  <div className='mb-6 text-center'>
                    <button
                      className='w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 dark:bg-blue-700 dark:text-white dark:hover:bg-blue-900 focus:outline-none focus:shadow-outline'
                      type='button'
                    >
                      Register Account
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </WrapContent>
      </div>
    </PlugLayout>
  );
}

export default CreatePlug;

function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className='input input-bordered w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
    />
  );
}
function Label(props: React.LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label
      {...props}
      className='block mb-2 nunito font-semibold text-gray-700 dark:text-white'
    >
      {props.children}
    </label>
  );
}
