"use client"
import * as React from "react"
import Box from '@mui/joy/Box';
import Drawer from '@mui/joy/Drawer';
import Image from "next/image";
import {CartContext} from "@/components/cart-provider.tsx"
import {useContext} from "react"
import { Product } from '@/types';
import CartProduct from "./CartProduct";
 
export default function Cart() {
  const { cart, addToCart, removeFromCart, productCounts, cartCount } = useContext(CartContext);
  const [open, setOpen] = React.useState(false);

  return (
    <Box sx={{ display: 'flex' }}>
      <button 
      className="flex relative"
      onClick={() => setOpen(true)}
      >
        <Image
            src='/basket.svg'
            alt='basket'
            width={24}
            height={24}
        />
        <div className="basket-circle">{cartCount ? cartCount : 0}</div>
        </button>
      <Drawer open={open}  anchor='right' onClose={() => setOpen(false)}>
        <div className='m-4 flex justify-between ='>
          <h1 className='text-pop text-2xl text-primary'>Shopping cart</h1>
          <Image
            className='hover:bg-slate-200'
            src="/close.svg"
            width={30}
            height={22}
            alt="close"
            onClick={() => setOpen(false)}
          />
        </div>
        {
          cart?.map((p: Product) => (
            <CartProduct key={p.id} p={p}/>
          ))
        }
      </Drawer>
    </Box>
  );
}