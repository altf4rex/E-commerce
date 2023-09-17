"use client"
import Button from '@mui/joy/Button';
import Add from '@mui/icons-material/Add';
import { useContext } from 'react';
import {CartContext} from "@/components/cart-provider.tsx"
import { Product } from '@/types';
const ButtonAddCart = ({product}: {product: Product}) => {
const { cart, addToCart, removeFromCart } = useContext(CartContext);

  return (
    <div> 
        <Button 
        
        color="success"
        className='hover:bg-secondaryHover'
        startDecorator={<Add />} 
        onClick={() => addToCart(product)}
        >
            Add to cart
        </Button>
    </div>
  )
}

export default ButtonAddCart