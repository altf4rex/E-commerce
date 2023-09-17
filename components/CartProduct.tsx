import { Product } from "@/types"
import Image from "next/image"
import Rating from '@mui/material/Rating';
import {CartContext} from "@/components/cart-provider.tsx"
import {useContext} from "react"
import CountProduct from "./CountProduct";
const CartProduct = ({p}: {p: Product}) => {
const { cart, addToCart, removeFromCart, productCounts } = useContext(CartContext);
  return (
    <div className="flex mx-5 mb-8">
        <div>
            <div className="w-[100px] h-[67px] rounded-2xl bg-primaryBg"></div>
            <div className="flex w-max px-1 rounded-xl cursor-pointer hover:bg-slate-200" onClick={() => removeFromCart(`${p.id}`)}>
                <Image 
                    src="/close.svg"
                    width={12}
                    height={12}
                    alt="remove"
                />
                <p className="text-sans text-sm ml-2 text-primary ">Remove</p>
            </div>
        </div>
        <div>
            <h3 className="text-pop text-base text-primary">{ p?.name }</h3>
            <div className="flex"><p>Delivery:</p><p>{p.delivery}</p></div>
            <div className="flex"><p>Delivery area:</p><p>{p.deliveryArea}</p></div>
            <Rating name="read-only" color="black" value={Number(`${p.rating}`)} readOnly />
            <div>
                <p className="text-pop text-2xl text-secondary">{p.price * productCounts[p.id]}USD</p>
                {p.discountPrice !== p.price && <p className="text-pop text-base line-through text-primaryLight">{p.discountPrice}USD</p>}
            </div>
            <div>
                <CountProduct product={p}/>
            </div>
        </div>
    </div>
  )
}

export default CartProduct