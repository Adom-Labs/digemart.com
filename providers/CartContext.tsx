import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from 'react';
import { toast } from 'react-hot-toast';

export type CartItemType = {
  id: string;
  count: number;
  price: number;
  image: string;
  name: string;
  store?: string;
  merchant?: string;
};

const CartContext = createContext<{
  total: number;
  products: CartItemType[];
  addToCart?: (product: any) => void;
  removeFromCart?: (product: any) => void;
  updatePrice?: (products: any[]) => number;
  incrementItem?: (id: string) => void;
  decrementItem?: (id: string) => void;
  clearCart?: () => void;
}>({
  total: 0,
  products: [],
});

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartState, setCartState] = useState<{
    total: number;
    products: CartItemType[];
  }>({
    total: 200,
    products: [],
  });

  const addToCart = (product: CartItemType) => {
    let IDS = cartState.products.map((m) => m.id);
    if (!IDS.includes(product.id)) {
      const updatedCart = cartState.products.concat(product);
      saveCartState(updatedCart);

      setCartState((prev) => {
        return {
          ...prev,
          total: updatePrice(updatedCart),
          products: updatedCart,
        };
      });
      toast.success('Added to cart', { position: 'bottom-right' });
    } else {
      toast.error('Already in cart', { position: 'bottom-right' });
    }
  };

  const removeFromCart = (id: string) => {
    const updatedCart = cartState.products.filter(
      (currentProduct: any) => currentProduct.id !== id
    );

    saveCartState(updatedCart);

    setCartState((prev) => {
      return {
        ...prev,
        total: updatePrice(updatedCart),
        products: updatedCart,
      };
    });
  };

  const updatePrice = (products: any[]) => {
    let total = 0;
    products.forEach((product) => (total += product.price));

    return total;
  };
  const incrementItem = (id: string) => {
    let oldProducts = [...cartState.products];
    let itemIndex = oldProducts.findIndex((item) => item.id === id);
    oldProducts[itemIndex].count++;

    saveCartState(oldProducts);

    setCartState((prev) => {
      return {
        ...prev,
        products: oldProducts,
      };
    });
  };
  const decrementItem = (id: string) => {
    let oldProducts = [...cartState.products];
    let itemIndex = oldProducts.findIndex((item) => item.id === id);
    if (oldProducts[itemIndex].count > 1) {
      oldProducts[itemIndex].count--;
    }
    saveCartState(oldProducts);

    setCartState((prev) => {
      return {
        ...prev,
        products: oldProducts,
      };
    });
  };

  const clearCart = () => {
    saveCartState([]);

    setCartState({
      total: 0,
      products: [],
    });
  };

  const saveCartState = (cart: CartItemType[]) => {
    localStorage.setItem('_dgmcrts_', JSON.stringify(cart));
  };
  const destroyCartState = (cart: CartItemType[]) => {
    localStorage.removeItem('_dgmcrts_');
  };

  const getLocalCartState = useCallback(() => {
    // const ls = localStorage.getItem('_dgmcrts_');
    const ls = JSON.stringify([
      { price: 200, count: 1, id: 'fhfhf', image: 'image', name: 'iphone' },
    ]);
    if (ls) {
      setCartState((prev) => {
        return {
          ...prev,
          products: JSON.parse(ls),
        };
      });
    }
  }, []);

  useEffect(() => {
    getLocalCartState();
  }, [getLocalCartState]);

  const value = {
    total: cartState.total,
    products: cartState.products,
    addToCart,
    removeFromCart,
    updatePrice,
    incrementItem,
    decrementItem,
    clearCart,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

const useCart = () => {
  const context = useContext(CartContext);

  if (context === undefined) {
    throw new Error('useCart must be used within CartContext');
  }

  return context;
};

export default useCart;
