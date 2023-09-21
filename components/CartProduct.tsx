import { Product } from "@/types"
import Image from "next/image"
import Rating from '@mui/material/Rating';
import {CartContext} from "@/components/cart-provider.tsx"
import {useContext} from "react"
import CountProduct from "./CountProduct";
import toUrl from "@/utils/toUrl";
const CartProduct = ({p}: {p: Product}) => {
const { cart, addToCart, removeFromCart, productCounts } = useContext(CartContext);
  return (
    <div className="flex mx-4 mb-6 mt-1 p-2 pl-6 bg-primaryBg border border-slate-200 rounded-xl">
        <div className="mr-5">
            <Image
          className="mb-4 mt-2 rounded-2xl bg-primaryBg"
          src={toUrl(p.img, p.id)}
          alt='product'
          width={150}
          height={100}
          />
            <div className="flex w-max px-2 mt-4 rounded-xl cursor-pointer hover:bg-slate-200" onClick={() => removeFromCart(`${p.id}`)}>
                <Image 
                    src="/close.svg"
                    width={12}
                    height={12}
                    alt="remove"
                />
                <p className="text-sans text-base ml-2 text-primary">Remove</p>
            </div>
        </div>
        <div >
            <h3 className="mb-2 mt-1 text-pop text-lg text-primary">{ p?.name }</h3>
            <div className="flex  mb-1 ">
                <p className="mr-2 text-sans text-base text-primaryLight">Delivery:</p>
                <p className="text-sans text-base text-primary">{p.delivery}</p>
            </div>
            <div className="flex">
                <p className="mr-2 text-sans text-base text-primaryLight">Delivery area:</p>
                <p className="text-sans text-base text-primary">{p.deliveryArea}</p>
            </div>
            <Rating name="read-only" color="black" value={Number(`${p.rating}`)} readOnly className="mt-3"/>
            <div  className="flex justify-between items-center">
                <div className="mr-6">
                    <p className="text-pop text-2xl text-secondary">{p.price}USD</p>
                    {p.discountPrice !== p.price && <p className="text-pop text-base line-through text-primaryLight">{p.discountPrice}USD</p>}
                </div>
                <div>
                    <CountProduct product={p}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartProduct