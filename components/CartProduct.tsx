import { Product } from "@/types"
import Image from "next/image"
import Rating from '@mui/material/Rating';
import {CartContext} from "@/components/cart-provider.tsx"
import {useContext} from "react"
const CartProduct = ({p}: {p: Product}) => {
const { cart, addToCart, removeFromCart } = useContext(CartContext);
  return (
    <div className="flex mx-5 mb-8">
        <div>
            <div className="w-[100px] h-[67px] rounded-2xl bg-primaryBg"></div>
            <div onClick={() => removeFromCart(`${p.id}`)}>
                <Image 
                    src="/close.svg"
                    width={12}
                    height={12}
                    alt="remove"
                />
                <p className="text-sans text-sm ml-2 text-primaryBg ">Remove</p>
            </div>
        </div>
        <div>
            <h3 className="text-pop text-base text-primary">{ p?.name }</h3>
            <p>Delivery:</p><p>{p.delivery}</p>
            <p>Delivery area:</p><p>{p.deliveryArea}</p>
            <Rating name="read-only" value={Number(`${p.rating}`)} readOnly />
        </div>
    </div>
  )
}

export default CartProduct