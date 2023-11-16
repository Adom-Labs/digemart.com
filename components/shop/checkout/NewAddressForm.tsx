function NewAddressForm() {
  return (
    <div>
      <h2>Enter delivery address :</h2>

      <div className='form-control w-full max-w-lg'>
        <label className='label' htmlFor='address'>
          <span className='label-text'>Street address</span>
        </label>
        <input
          type='text'
          name='address'
          id='address'
          placeholder='enter street address'
          className='input input-bordered w-full input-lg '
        />
      </div>
      <div className='grid grid-cols-2 gap-5 max-w-lg'>
        <div className='form-control max-w-md '>
          <label className='label' htmlFor='city'>
            <span className='label-text'>Town/City</span>
          </label>
          <input
            type='text'
            name='city'
            id='city'
            placeholder='enter town/city'
            className='input input-bordered w-full input-lg '
          />
        </div>
        <div className='form-control max-w-md'>
          <label className='label' htmlFor='state'>
            <span className='label-text'>State</span>
          </label>
          <input
            type='text'
            name='state'
            id='state'
            placeholder='enter state'
            className='input input-bordered w-full input-lg '
          />
        </div>
      </div>
    </div>
  );
}

export default NewAddressForm;
