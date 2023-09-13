import {categories} from "@/constants";
import Link from "next/link";
export default function CategoryMenu() {
  return (
    <div className="flex justify-between py-4 px-[45px] mx-[-45px]  bg-primaryBg">
        {categories.map((c) => (
                <Link href={`/products/${c.categorySlug}`} className="text-pop text-base">{c.category}</Link>
            )
        )}
    </div>
  )
}
 