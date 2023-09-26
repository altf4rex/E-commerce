import Image from "next/image";
import Link from "next/link";

 const BlogCard = ({title, img}: {title: string, img: string}) => {
  return (
    <Link href='/blogs/blog' className="w-[269px] mb-10 ml-6  max-sm:mr-0 max-sm:mb-8">
        <Image 
        className="rounded-2xl hover:scale-105 duration-300"
            src={`${img}`}
            alt='blog'
            width={269}
            height={180}
        />
        <div className="flex mt-4 text-sans text-sm text-primary">
            <p>Author</p>
            <p>15. 6. 2020</p>
        </div>
        <p className="mt-1 text-pop text-lg text-primary">{title}</p>
    </Link>
  )
}

export default BlogCard;