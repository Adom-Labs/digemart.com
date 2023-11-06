type ProductType = {
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
};

export default ProductType;
