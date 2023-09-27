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

  const cartContext = useContext(CartContext);

  return (
    <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 2,
          pt: 1,
          mr: 2.4,
        }}
      >
        <IconButton
          size="sm"
          variant="outlined"
          onClick={() => cartContext?.reduceCount(product.id)}
        >
          <Remove />
        </IconButton>
        <Typography fontWeight="md" textColor="text.secondary">
          {cartContext?.productCounts[product.id]}
        </Typography>
        <IconButton
          size="sm"
          variant="outlined"
          onClick={() => cartContext?.addToCart(product)}
        >
         <Add />
        </IconButton>
      </Box>
  );
}

export default CountProduct