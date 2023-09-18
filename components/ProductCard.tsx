import Image from "next/image"
import {Product} from "@/types"
import Link from "next/link"
import ButtonAddCart from "./ButtonAddCart"
import Rating from '@mui/material/Rating';

const ProductCard = ({p}: {p: Product}) => {
  return (
    <div className="p-4 mb-4 mr-4 rounded-2xl border border-solid text-gray-400 h-min">
        <Link href={`/product/${p.slug}`}>
          <div className="w-[237px] h-[170px] bg-primaryBg mb-4">
          </div>
        </Link>
        <div className="w-[237px]">
        <Link href={`/product/${p.slug}`}>
          <h3 className="text-pop mb-1 text-base text-primary">{p.name}</h3> 
        </Link>
          <p className="mb-2 text-sans text-xs text-primaryLight">{p.description}</p>
          <Rating name="read-only" size="small" value={Number(`${p.rating}`)} readOnly />
          <div className="flex justify-between mt-1 ">
            <div className="flex flex-col justify-center">
              <p className="text-pop text-lg text-primary">{p.price}USD</p>
              {p.discountPrice !== p.price && <p className="text-pop text-base line-through text-primaryLight">{p.discountPrice}USD</p>}
            </div>
            <ButtonAddCart product={p}/>
            {/* <button className="text-pop px-3 py-3 text-white rounded-2xl bg-secondary border border-solid border-secondaryBgDark">Add to Cart</button> */}
         </div> 
        </div>
        
    </div>
  )
}

export default ProductCard