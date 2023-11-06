const products = [
  'Nike SB Dunk',
  'Adidas Ultraboost',
  'Apple iPhone 13',
  'Sony PlayStation 5',
  'Samsung 4K TV',
  'Bose Noise-Cancelling Headphones',
  'Canon EOS R6',
  'DJI Mavic Air 2',
  'Amazon Echo Dot',
  'Nintendo Switch',
];
const currency = '₦';
const shortDescriptions = [
  'Size 24, unisex for all ages',
  'Limited stock available',
  'Great for sports enthusiasts',
  'High-resolution display',
  'Immersive gaming experience',
  'Premium sound quality',
  'Capture stunning photos and videos',
  'Compact and easy to fly',
  'Voice-controlled smart assistant',
  'Portable gaming console',
];
const imageUrls = [
  'https://source.unsplash.com/600x400/?sneakers',
  'https://source.unsplash.com/600x400/?electronics',
  'https://source.unsplash.com/600x400/?phones',
  'https://source.unsplash.com/600x400/?gaming',
  'https://source.unsplash.com/600x400/?tv',
  'https://source.unsplash.com/600x400/?headphones',
  'https://source.unsplash.com/600x400/?camera',
  'https://source.unsplash.com/600x400/?drone',
  'https://source.unsplash.com/600x400/?smart-speaker',
  'https://source.unsplash.com/600x400/?gaming-console',
];

const generateTestProducts = () => {
  const testDeals: {
    id: string;
    product_name: string;
    price: number | string;
    currency: string;
    image: string;
    short_description: string;
    rating: {
      rating: number;
      count: number;
    };
  }[] = [];

  for (let i = 0; i < 10; i++) {
    const randomProduct = products[Math.floor(Math.random() * products.length)];
    const randomCurrency = currency;
    const randomShortDescription =
      shortDescriptions[Math.floor(Math.random() * shortDescriptions.length)];
    const randomImageUrl =
      imageUrls[Math.floor(Math.random() * imageUrls.length)];
    const randomRating = {
      rating: Math.floor(Math.random() * 5) + 1,
      count: Math.floor(Math.random() * 50) + 10,
    };
    const id = Math.random() * 0.00987654334;

    const deal = {
      id: id.toString(),
      product_name: randomProduct,
      price: (Math.random() * 1000).toFixed(2), // Random price between 0 and 1000
      currency: randomCurrency,
      image: randomImageUrl,
      short_description: randomShortDescription,
      rating: randomRating,
    };

    testDeals.push(deal);
  }

  return testDeals;
};

export default generateTestProducts;
