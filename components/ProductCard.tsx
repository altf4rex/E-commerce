import Image from "next/image"
import {Product} from "@/types"
import Link from "next/link"
import ButtonAddCart from "./ButtonAddCart"
import Rating from '@mui/material/Rating';
import toUrl from "@/utils/toUrl"

const ProductCard = ({p}: {p: Product}) => {
  console.log(toUrl(p.id, p?.img))
  return (
    <div className="p-4 mb-4 ml-4 rounded-2xl border border-solid text-gray-400 h-min">
        <Link href={`/product/${p.slug}`} className="hover:brightness-75">
          <Image
          className="w-[238px] h-[170px] mb-4 bg-primaryBg rounded-xl object-fill hover:scale-105 duration-300"
          src={toUrl(p.id, p?.img)}
          alt='product'
          width={237}
          height={170}
          />
        </Link>
        <div className="w-[237px]">
        <Link href={`/product/${p.slug}`}>
          <h3 className="text-pop mb-1 text-base text-primary hover:text-primaryLight">{p.name}</h3> 
        </Link>
          <p className="mb-2 text-sans text-xs text-primaryLight">{p.description}</p>
          <Rating name="read-only" size="small" value={Number(`${p.rating}`)} readOnly />
          <div className="flex justify-between mt-1 ">
            <div className="flex flex-col justify-center">
              <p className="text-pop text-lg text-primary">{p.price}USD</p>
              {p.discountPrice !== p.price && <p className="text-pop text-base line-through text-primaryLight">{p.discountPrice}USD</p>}
            </div>
            <ButtonAddCart product={p}/>
         </div> 
        </div>
        
    </div>
  )
}

export default ProductCard