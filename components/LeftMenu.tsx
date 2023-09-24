import { LeftMenuProps } from "@/types"
import Image from "next/image"
import Link from "next/link"

export default function LeftMenu({header, array, slug, button}: LeftMenuProps){
    return (
      <div className='flex flex-col items-start w-[269px] max-xl:w-fit'>

        <h3 className="text-pop mb-4 text-lg font-semibold">{header}</h3>
        <div className="flex flex-col max-xl:hidden">
        {
            slug.map((p, index) => (
                <Link href={`/products/${p}`} className="text-sans underline mb-3 text-secondary text-sm">{array[index]}</Link>
            ))
        }
        </div>
        <Link href="/products/bakery" className="text-pop flex mt-6 px-4 py-3 rounded-3xl text-lg font-bold bg-primaryBg">
          {button}
          <Image 
            className="ml-2"
            src='/green-left-arrow.svg'
            alt='arrow'
            width={7}
            height={3}
          /> 
          </Link>
      </div>
    )
  }