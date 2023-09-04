import Image from "next/image"
import {ProductCardProps} from "@/types"
import Link from "next/link"

const ProductCard = ({name, category, price, discountPrice, description}: ProductCardProps) => {
  return (
    <div className="p-4 rounded-2xl border border-solid text-gray-400 mr-6">
        <Link href="/" className="">
          <div className="w-[237px] h-[170px] bg-primaryBg mb-4">
            {/* <Image/>  */}
          </div>
        </Link>
        <Link href="/">
          <h3 className="text-pop mb-1 text-base text-primary">{name}</h3> 
        </Link>
          <p className="text-sans text-xs text-primaryLight ">{description}</p>
          <div className="flex justify-between mt-4">
            <div>
              <p className="text-pop text-lg text-primary ">{discountPrice }</p>
              {price && <p className="text-pop text-base line-through text-primaryLight" >{price}</p>}
            </div>
            <button className="text-pop px-3 py-3 text-white rounded-2xl bg-secondary border border-solid border-secondaryBgDark">Add to Cart</button>
         </div>
         
         
    </div>
  )
}

export default ProductCard