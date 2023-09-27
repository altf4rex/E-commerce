"use client"
import { createContext, useState } from 'react';
import { Product } from '@/types';

interface CartContextType {
  cartCount: number;
  totalCartPrice: number;
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  reduceCount: (productId: string) => void;
  reset: () => void;
  productCounts: { [productId: string]: number };
}

export const CartContext = createContext<CartContextType | undefined>(undefined);

export default function CartProvider({children}: {children: React.ReactNode}) {

  const [cart, setCart] = useState<Product[]>([]);
  const [productCounts, setProductCounts] = useState<{ [productId: string]: number }>({});

  const addToCart = (product: Product) => {
  
     const isProductInCart = cart?.some((item) => item?.id === product.id);
  
    if (!isProductInCart) {
      setCart([...cart, product]);
    }

    setProductCounts((prevCounts) => ({
      ...prevCounts,
      [product.id]: (prevCounts[product.id] || 0) + 1,
    }));
    
  };

  const removeFromCart = (productId: string) => {

    const updatedCart = cart.filter((product) => product.id !== productId);
    setCart(updatedCart);

    setProductCounts(prevCounts => ({
      ...prevCounts,
      [productId]: (prevCounts[productId] || 0) - 1
    }));
  };

  const reduceCount = (productId: string) => {
    if(productCounts[productId] > 1){
      setProductCounts(prevCounts => ({
        ...prevCounts,
        [productId]: (prevCounts[productId] || 0) - 1
      }));
    }
    
    if(productCounts[productId] === 1){
      removeFromCart(productId)
    }
  };

  const count = () => {
    if(Object.keys(productCounts).length !== 0) {
      return Object.values(productCounts).reduce((accumulatedValue , currentValue ) => accumulatedValue + currentValue );
    } else return 0
  }

  const calculateTotal = () => {
    const total = Object.keys(productCounts).reduce((acc, productId) => {
      const productCount = productCounts[productId];
      const product = cart.find((item) => item.id === productId);
      if (product && productCount > 0) {
        return acc + productCount * product.price;
      }
      return acc;
    }, 0);
    return Number(total.toFixed(2)); 
  };

  const reset = () => {
    setCart([]);
    setProductCounts({});
  } 

  const cartCount: number = count();
  const totalCartPrice: number = calculateTotal();
  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        productCounts,
        reduceCount,
        cartCount,
        totalCartPrice,
        reset, 
      }}
    >
      {children}
    </CartContext.Provider>
  );
}