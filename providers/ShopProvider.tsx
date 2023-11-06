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

type ShopDataType = {
  state: string;
  shop_name: string;
  desc: string;
  logo: string;
  featured_categories: any[];
};

const initialValues = {
  logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsScmzZ7JYuGBtaHkHS4gbYHLHQd7jly-5oA&usqp=CAU',
  desc: "We sell fashion for every style and budget. Whether you're looking for a new outfit for a special occasion or just want to update your everyday wardrobe, we have something for you",
  state: 'Port Harcourt',
  shop_name: 'Lorem ipsum test name here',
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
};

const ShopContext = createContext<
  ShopDataType & { shopUrl: string; deals: any[] }
>({
  ...initialValues,
  shopUrl: '',
  deals: [],
});

export const ShopProvider = ({ children }: { children: React.ReactNode }) => {
  const { asPath } = useRouter();

  const shopUrl = '/' + asPath.split('/')[1];

  const [shopData, setShopState] = useState<ShopDataType>({
    ...initialValues,
  });
  const [deals, setDeals] = useState<ProductType[]>([]);

  const getShopData = useCallback(() => {}, []);
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
