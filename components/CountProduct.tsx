"use client"
import * as React from 'react';
import Box from '@mui/joy/Box';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import Add from '@mui/icons-material/Add';
import Remove from '@mui/icons-material/Remove';
import {CartContext} from "@/components/cart-provider.tsx"
import {useContext} from "react"
import { Product } from '@/types';
const CountProduct = ({product}: {product: Product} ) => {
  const { cart, addToCart, removeFromCart, productCounts, reduceCount} = useContext(CartContext);
  // const [count, setCount] = React.useState(0);
  return (
    <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 2,
          pt: 2,
          mb: 2,
        }}
      >
        <IconButton
          size="sm"
          variant="outlined"
          onClick={() => reduceCount(product.id)}
        >
          <Remove />
        </IconButton>
        <Typography fontWeight="md" textColor="text.secondary">
          {productCounts[product.id]}
        </Typography>
        <IconButton
          size="sm"
          variant="outlined"
          onClick={() => addToCart(product)}
        >
         <Add />
        </IconButton>
      </Box>
  );
}

export default CountProduct