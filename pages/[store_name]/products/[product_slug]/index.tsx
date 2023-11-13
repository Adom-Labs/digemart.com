import StarRating from '@/components/shared/StarRating';
import WrapContent from '@/components/shared/WrapContent';
import VendorShopLayout from '@/components/shop/layout';
import ImagesViewGrid from '@/components/shop/product/ImagesViewGrid';
import React from 'react';
import { FaShuttleVan } from 'react-icons/fa';

function SingleProduct() {
  //   const product = {
  //     id: '0.0059728021305916245',
  //     product_name: 'Adidas Ultraboost',
  //     price: '156.25',
  //     currency: '₦',
  //     image: 'https://source.unsplash.com/600x400/?phones',
  //     short_description: 'Compact and easy to fly',
  //     rating: {
  //       rating: 1,
  //       count: 34,
  //     },
  //   };

  const sampleImages = [
    {
      image: '/shop/images/f_pants.jpg',
    },
    {
      image: '/shop/images/f_shoes.jpg',
    },
    {
      image: '/shop/images/f_tees.jpg',
    },
    {
      image: '/shop/images/f_ties.jpg',
    },
    {
      image: '/shop/images/p_shoes.png',
    },
  ];

  return (
    <VendorShopLayout>
      <div className='py-10'>
        <WrapContent>
          <div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
              <div className=' p-1  rounded-xl  min-h-[350px] '>
                <ImagesViewGrid name='name' images={sampleImages} />
              </div>
              <div className=''>
                <p className='poppins font-semibold text-2xl md:text-3xl'>
                  {/* {product.product_name} */}
                  Prodhdbinjskjsjks
                </p>
                <div>
                  {/* <small className='poppins'>{product.short_description}</small> */}
                  <small className='poppins'>jjjdjdhddhdhdd</small>
                </div>
                <div className='flex gap-1'>
                  {/* <StarRating numChecked={product.rating.rating} /> */}
                  <StarRating numChecked={3} />
                  {/* <small>({product.rating.count})</small> */}
                  (230)
                </div>
                <div className='divider'></div>
                <p className=' text-xl font-semibold poppins'>
                  {/* {product.currency} */}
                  {/* {product.price}.00 */}
                  $540.00
                </p>
                <div className='divider'></div>
                {/*  */}
                <div className='flex items-center poppins'>
                  <span className='text-xl rounded-none rounded-l-full btn '>
                    <span className='text-3xl px-2'>-</span>
                  </span>
                  <span className='text-xl rounded-none btn pointer-events-none'>
                    2
                  </span>
                  <span className='text-xl rounded-none rounded-r-full btn '>
                    <span className='text-3xl px-2'>+</span>
                  </span>
                </div>
                {/*  */}
                <div className='grid grid-cols-2 max-w-md py-5 gap-5'>
                  <button className='btn btn-success'>Buy now</button>
                  <button className='btn btn-outline'>Add to cart</button>
                </div>
                {/*  */}
                <div>
                  <div className='flex items-start gap-2'>
                    <FaShuttleVan className='text-yellow-600 mt-1' />
                    <div>
                      <p>Free Delivery</p>
                      <small>
                        This product is availble for free deliveries
                      </small>
                    </div>
                  </div>
                  <div className='flex items-start gap-2 pt-5'>
                    <FaShuttleVan className='text-yellow-600 mt-1' />
                    <div>
                      <p>Return Policy</p>
                      <small>This product is not available for returns</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </WrapContent>
      </div>
    </VendorShopLayout>
  );
}

export default SingleProduct;
