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
  storeName: 'loading',
  storeDesc: '',
  logo: '',
  mobileNavType: 'loading',

  products: [],
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
  acceptedDeliveryMethods: {
    pickup: { available: false, cost: '0' },
    delivery: { available: false, cost: '0' },
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

  products: [],
  header: {
    backgroundColor: '#3498db',
    lineOne: 'Welcome to',
    lineTwo: 'Beauty Shop Lorem',
    textColor: '#3498db',
    smallText: 'small description text',
    arrangement: 'stacked_image',
    image:
      'https://source.unsplash.com/random?restaurants,barber-shop,coffee-shop,restaurant,boutique,',
  },
  primaryColor: '#3498db',
  secondaryColor: '#2ecc71',
  fonts: {
    heading: 'Raleway, sans-serif',
    body: 'Nunito, sans-serif',
  },
  acceptedDeliveryMethods: {
    pickup: { available: true, cost: 'free' },
    delivery: { available: true, cost: 400 },
  },
};

const ShopContext = createContext<ShopApiDataType & { shopUrl: string }>({
  shopUrl: '',
  ...initialValues,
});

export const ShopProvider = ({ children }: { children: React.ReactNode }) => {
  const { asPath } = useRouter();
  const shopUrl = '/' + asPath.split('/')[1];

  const [shopData, setShopData] = useState<ShopApiDataType>({
    ...initialValues,
  });

  const getShopData = useCallback(() => {
    setTimeout(() => {
      const testproducts = generateTestProducts();
      // const testproducts: any = [];

      setShopData({ ...exampleApiData, products: testproducts });
    }, 3000);
  }, []);

  useEffect(() => {
    getShopData();
  }, [getShopData]);

  const value = {
    ...shopData,
    shopUrl,
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
