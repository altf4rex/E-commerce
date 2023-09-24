import {categories} from "@/constants";
import Link from "next/link";

export default function CategoryMenu() {
  return (
    <div className="flex py-2 justify-between px-[45px] mx-[-45px] bg-primaryBg max-xl:mx-2 max-xl:px-2 max-xl:bg-inherit max-xl:flex-wrap max-xl:justify-start max-md:justify-center">
        {categories.map((c) => (
                <Link href={`/products/${c.categorySlug}`} className="py-2 px-5 text-pop text-base hover:bg-gray-200 rounded-lg max-xl:w-[150px] max-xl:bg-primaryBg max-xl:flex max-xl:justify-center max-xl:items-center max-xl:mb-3 max-xl:h-[64px] max-xl:mr-4 max-sm:mr-2">{c.category}</Link>
            )
        )}
    </div>
  )
}
 