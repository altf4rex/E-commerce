import {categories} from "@/constants";
import Link from "next/link";
export default function CategoryMenu() {
  return (
    <div className="flex py-2 justify-between px-[45px] mx-[-45px]  bg-primaryBg">
        {categories.map((c) => (
                <Link href={`/products/${c.categorySlug}`} className="py-2 px-1 text-pop text-base hover:bg-gray-200 rounded-lg">{c.category}</Link>
            )
        )}
    </div>
  )
}
 