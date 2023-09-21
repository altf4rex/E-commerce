"use client"
import * as React from "react"
import Box from '@mui/joy/Box';
import Drawer from '@mui/joy/Drawer';
import Image from "next/image";
import {CartContext} from "@/components/cart-provider.tsx"
import {useContext} from "react"
import { Product } from '@/types';
import CartProduct from "./CartProduct";
import Link from "next/link";
 
export default function Cart() {
  const { cart, addToCart, removeFromCart, productCounts, cartCount, totalCartPrice } = useContext(CartContext);
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
      <Drawer className="relative" open={open} anchor='right' onClose={() => setOpen(false)}>
        <div className='m-4 flex justify-between'>
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
        <div className="absolute bottom-2 p-4 divide-y-2">
          <div className="pb-2">
            <h4 className='mb-2 text-pop text-sm text-primary'>Subtotal</h4>
            <span className='text-pop text-2xl text-primary'>
              {totalCartPrice}USD
            </span>
          </div>
          <div className="flex items-center pt-4 ">
            <button onClick={() => setOpen(false)} className='py-3 px-4 mb-2 mr-8 text-pop text-base text-primary hover:bg-slate-200 rounded-2xl'>Continue shopping</button>
            <Link href="/checkout" className='py-3 px-4 text-pop text-base text-white bg-secondary border border-secondaryBgDark rounded-2xl hover:bg-secondaryHover'>Go to Checkout</Link>
          </div>
        </div>
      </Drawer>
    </Box>
  );
}