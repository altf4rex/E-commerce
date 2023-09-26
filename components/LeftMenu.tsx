import { LeftMenuProps } from "@/types"
import Image from "next/image"
import Link from "next/link"

export default function LeftMenu({header, array, slug, button, link}: LeftMenuProps){
    return (
      <div className='flex flex-col items-start w-[269px] max-xl:w-[100%]'>
        <h3 className="text-pop mb-4 text-lg font-semibold max-xl:hidden">{header}</h3>
        <div className="flex flex-col max-xl:hidden">
        {
            slug.map((p, index) => (
                <Link href={`/products/${p}`} className="text-sans underline mb-3 text-secondary text-sm hover:text-primaryLight">{array[index]}</Link>
            ))
        }
        </div>
        <Link href={`/products/${link}`} className="text-pop flex mt-6 px-4 py-3 rounded-3xl text-lg font-bold bg-primaryBg max-xl:hidden hover:bg-gray-200">
          {button}
          <Image 
            className="ml-2"
            src='/green-left-arrow.svg'
            alt='arrow'
            width={7}
            height={3}
          /> 
          </Link>
        <Link href={`/products/${link}`} className="hidden text-pop flex mt-6 px-4 py-3 rounded-3xl text-lg font-bold max-xl:flex bg-primaryBg max-xl:mb-2 max-xl:text-lg  max-xl:bg-white max-xl:hover:bg-primaryBg">
          {header}
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