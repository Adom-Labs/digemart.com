import ProductType from '@/types/ProductType';
import { useRouter } from 'next/router';
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from 'react';
import generateTestProducts from './generateTestData';
import ShopApiDataType from '@/types/ShopApiDataType';

const initialValues: ShopApiDataType = {
  storeName: '',
  storeDesc: '',
  logo: '',
  mobileNavType: 'loading',

  products: [{ id: '', name: '', price: 0, imageUrl: '' }],
  header: {
    backgroundColor: '',
    lineOne: '',
    lineTwo: '',
    smallText: '',
    textColor: '',
    arrangement: 'stacked_no_image',
    image: '',
  },
  featured_categories: [],
  primaryColor: '',
  secondaryColor: '',
  fonts: {
    heading: '',
    body: '',
  },
};

//example data from api
const exampleApiData: ShopApiDataType = {
  storeName: 'My Awesome Store',
  storeDesc: 'description  of my awesome store',
  logo: '/logoipsum.svg',
  mobileNavType: 'dropdown',
  featured_categories: [
    {
      name: 'Shoes',
      image: '/shop/images/f_shoes.jpg',
      description: 'for men, women, and children',
    },
    {
      name: 'Trousers',
      image: '/shop/images/f_pants.jpg',
      description: 'jeans, khaki, sports pants',
    },
    {
      name: 'Tshirts',
      image: '/shop/images/f_tees.jpg',
      description: 'tshirts of all sizes, plain, coloured',
    },
    {
      name: 'Ties',
      image: '/shop/images/f_ties.jpg',
      description: 'ties for official wears in all sizes',
    },
  ],

  products: [
    { id: 1, name: 'Product 1', price: 20.99, imageUrl: 'product1.jpg' },
    { id: 2, name: 'Product 2', price: 34.99, imageUrl: 'product2.jpg' },
    // ... more product data
  ],
  header: {
    backgroundColor: '#3498db',
    lineOne: 'Welcome to',
    lineTwo: 'Beauty Shop Lorem',
    textColor: '#3498db',
    smallText: 'small description text',
    arrangement: 'text_left_image_right',
    image:
      'https://source.unsplash.com/random?restaurants,barber-shop,coffee-shop,restaurant,boutique,',
  },
  primaryColor: '#3498db',
  secondaryColor: '#2ecc71',
  fonts: {
    heading: 'Raleway, sans-serif',
    body: 'Nunito, sans-serif',
  },
};

// const initialValues = {
//   logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsScmzZ7JYuGBtaHkHS4gbYHLHQd7jly-5oA&usqp=CAU',
//   desc: "We sell fashion for every style and budget. Whether you're looking for a new outfit for a special occasion or just want to update your everyday wardrobe, we have something for you",
//   state: 'Port Harcourt',
//   shop_name: 'Lorem ipsum test name here',

//   acceptedDeliveryMethods: {
//     pickup: { available: true, cost: 'free' },
//     delivery: { available: true, cost: 400 },
//   },
// };

const ShopContext = createContext<
  ShopApiDataType & { shopUrl: string; deals: any[] }
>({
  shopUrl: '',
  deals: [],
  ...initialValues,
});

export const ShopProvider = ({ children }: { children: React.ReactNode }) => {
  const { asPath } = useRouter();

  const shopUrl = '/' + asPath.split('/')[1];

  const [shopData, setShopData] = useState<ShopApiDataType>({
    ...initialValues,
  });
  const [deals, setDeals] = useState<ProductType[]>([]);

  const getShopData = useCallback(() => {
    setTimeout(() => {
      setShopData(exampleApiData);
    }, 2000);
  }, []);

  const setTestDeals = useCallback(() => {
    const testdeals = generateTestProducts();
    setDeals(testdeals);
  }, []);

  useEffect(() => {
    getShopData();
    setTestDeals();
  }, [getShopData, setTestDeals]);

  const value = {
    ...shopData,
    shopUrl,
    deals,
  };
  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

const useShop = () => {
  const context = useContext(ShopContext);

  if (context === undefined) {
    throw new Error('useShop must be used within ShopContext');
  }

  return context;
};

export default useShop;
