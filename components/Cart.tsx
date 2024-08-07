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
  const cartContext = useContext(CartContext);
  const [open, setOpen] = React.useState(false);

  return (
    <Box  className="flex max-lg:mt-1 max-lg:mr-6 max-sm:mr-2 max-sm:ml-2">
      <button 
      className="flex relative w-12 h-12 hover:bg-primaryHover rounded-full p-3"
      onClick={() => setOpen(true)}
      >
        <Image
            src='/basket.svg'
            alt='basket'
            width={24}
            height={24}
        />
        <div className="basket-circle">{cartContext?.cartCount ? cartContext?.cartCount : 0}</div>
      </button>
      <Drawer open={open} anchor='right' onClose={() => setOpen(false)}>
      <Box sx={{
            margin: 0,
            minHeight: "100%",
            display: "grid",
            gridTemplateRows: "auto 1fr auto",
          }}>
        <div className='m-4 flex justify-between'>
          <h1 className='text-pop text-2xl text-primary max-sm:text-xl'>Shopping cart</h1>
          <Image
            className='hover:bg-slate-200'
            src="/close.svg"
            width={30}
            height={22}
            alt="close"
            onClick={() => setOpen(false)}
          />
        </div>
        <div>
        {
          cartContext?.cart?.map((p: Product) => (
            <CartProduct key={p.id} p={p}/>
          ))
        }
        </div>
        {
        cartContext?.totalCartPrice ?
        (
        <div className="relative bottom-0 p-4 divide-y-2">
          <div className="pb-2">
            <h4 className='mb-2 text-pop text-sm text-primary'>Subtotal</h4>
            <span className='text-pop text-2xl text-primary'>
              {cartContext?.totalCartPrice}USD
            </span>
          </div>
          <div className="flex items-center pt-4 ">
            <button onClick={() => setOpen(false)} className='py-3 px-4 mb-2 mr-8 text-pop text-base text-primary hover:bg-slate-200 rounded-2xl max-sm:mr-6 max-sm:text-sm'>Continue shopping</button>
            <Link href="/success#success" onClick={
              () => {
                setOpen(false)
                cartContext?.reset()
              }} 
              className='py-3 px-4 text-pop text-base text-white bg-secondary border border-secondaryBgDark rounded-2xl hover:bg-secondaryHover max-sm:text-sm'>Go to Checkout</Link>
          </div>
        </div>
        ) : ""
        }
        </Box>
      </Drawer>
    </Box>
  );
}