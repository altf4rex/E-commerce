"use client"
import Button from '@mui/joy/Button';
import Add from '@mui/icons-material/Add';
import { useContext } from 'react';
import {CartContext} from "@/components/cart-provider.tsx"
import { Product } from '@/types';
import CountProduct from "@/components/CountProduct";
const ButtonAddCart = ({product}: {product: Product}) => {
const { cart, addToCart, removeFromCart, productCounts } = useContext(CartContext);

  return (
    <div> 
        {!!productCounts[product.id] ? <CountProduct product={product}/> :
            <Button 
                color="success"
                className='hover:bg-secondaryHover max-sm:p-0  max-sm:pr-2 '
                startDecorator={<Add />} 
                onClick={() => addToCart(product)}
            >
            Add to cart
            </Button>
        }
        
    </div>
  )
}

export default ButtonAddCart