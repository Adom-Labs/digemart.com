import Image from 'next/image';
import React, { ChangeEvent, useState } from 'react';
import { FaPenAlt, FaSave } from 'react-icons/fa';

function UpdateProfilePic() {
  const [selectedimage, setSelectedImage] = useState<File | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;

    if (files && files.length > 0) {
      const selected = files[0];
      setSelectedImage(selected);
      // You can perform additional actions with the selected file here
    }
  };

  return (
    <div className='border dim-borders p-4 rounded-xl shadow-sm'>
      <div className='form-control w-full max-w-xs'>
        <label
          className=' border  dim-borders label relative  rounded-full bg-gray-100 h-[150px] w-[150px]'
          htmlFor='dp'
        >
          <span className='label-text bg-gray-200 dark:bg-slate-700 rounded-full p-2 text-purple-600 text-xl right-0 bottom-0 cursor-pointer absolute z-[5]'>
            <FaPenAlt />
          </span>

          <Image
            fill
            src={
              selectedimage
                ? URL.createObjectURL(selectedimage)
                : '/images/upload_placeholder.png'
            }
            alt='select dp'
            className='rounded-full object-cover'
          />
        </label>
        <input
          id='dp'
          type='file'
          name='dp'
          onChange={handleFileChange}
          accept='image/*'
          className='input input-bordered w-full max-w-xs hidden'
        />
      </div>
      <button
        disabled={!selectedimage}
        className='btn px-10 w-[150px]  bg-purple-700 text-white hover:bg-purple-500 hover:text-white'
      >
        Save <FaSave />{' '}
      </button>
    </div>
  );
}

export default UpdateProfilePic;
