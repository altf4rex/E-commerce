"use client"
import { createContext, useState } from 'react';
import { Product } from '@/types';

interface CartContextType {
  cartCount: number;
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  reduceCount: (productId: string) => void;
  productCounts: { [productId: number]: number }; // Включаем productCounts
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
    
    if(productCounts[productId] = 1){
      removeFromCart(productId)
    }
    
  };
  const count = () => {
    if(Object.keys(productCounts).length !== 0) {
      return Object.values(productCounts).reduce((accumulatedValue , currentValue ) => accumulatedValue + currentValue );
    }
  }
  const cartCount: number = count();
  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        productCounts,
        reduceCount,
        cartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}