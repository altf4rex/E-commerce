import { createContext, useState } from 'react';
import { Product } from '@/types';

interface CartContextType {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
}

export const CartContext = createContext<CartContextType | undefined>(undefined);

export default function CartProvider({children}: {children: React.ReactNode}) {

  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCart([...cart, product]);
  };

  // Функция для удаления товара из корзины
  const removeFromCart = (productId: number) => {
    const updatedCart = cart.filter((product) => product.collectionId !== productId.toString());
    setCart(updatedCart);
  };

  // Здесь можно добавить другие функции для работы с корзиной

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};