import VendorShopLayout from '@/components/shop/layout';
import ShopHomepage from '@/components/shop/pages/homepage/ShopHomepage';
import TemplateShell from '@/components/shop/templates/TemplateShell';
import React from 'react';

//example data from api
const apiData = {
  storeName: 'My Awesome Store',
  products: [
    { id: 1, name: 'Product 1', price: 20.99, imageUrl: 'product1.jpg' },
    { id: 2, name: 'Product 2', price: 34.99, imageUrl: 'product2.jpg' },
    // ... more product data
  ],
  header: {
    backgroundColor: '#3498db',
    textColor: '#ffffff',
    navigationLinks: [
      { label: 'Home', url: '/' },
      { label: 'Products', url: '/products' },
      { label: 'Contact', url: '/contact' },
    ],
  },
  primaryColor: '#3498db',
  secondaryColor: '#2ecc71',
  fonts: {
    heading: 'Arial, sans-serif',
    body: 'Roboto, sans-serif',
  },
};

function StorePage() {
  const shopdata = { ...apiData };
  return <TemplateShell data={shopdata} />;
}

export default StorePage;
