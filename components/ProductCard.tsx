import Image from "next/image"
import {ProductCardProps} from "@/types"
import Link from "next/link"

const ProductCard = ({name, slug, price, discountPrice, description}: ProductCardProps) => {
  return (
    <div className="p-4 mb-4 mr-4 rounded-2xl border border-solid text-gray-400 h-min">
        <Link href={`/product/${slug}`} className="">
          <div className="w-[237px] h-[170px] bg-primaryBg mb-4">
            {/* <Image/>  */}
          </div>
        </Link>
        <div className="w-[237px]">
        <Link href="/">
          <h3 className="text-pop mb-1 text-base text-primary">{name}</h3> 
        </Link>
          <p className="text-sans text-xs text-primaryLight">{description}</p>
          <div className="flex justify-between mt-4 ">
            <div className="flex flex-col justify-center">
              <p className="text-pop text-lg text-primary">{price}USD</p>
              {discountPrice !== price && <p className="text-pop text-base line-through text-primaryLight">{discountPrice}USD</p>}
            </div>
            <button className="text-pop px-3 py-3 text-white rounded-2xl bg-secondary border border-solid border-secondaryBgDark">Add to Cart</button>
         </div> 
        </div>
        
    </div>
  )
}

export default ProductCard