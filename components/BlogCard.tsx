import Image from "next/image";
import Link from "next/link";

 const BlogCard = ({title, img}: {title: string, img: string}) => {
  return (
    <Link href='/blogs/blog' className="w-[269px] mb-8 mr-6  max-sm:mr-0 max-sm:mb-6">
        <Image 
        className="rounded-2xl"
            src={`${img}`}
            alt='blog'
            width={269}
            height={180}
        />
        <p className="mt-10 text-pop text-lg text-primary">{title}</p>
        <div className="flex mt-4 text-sans text-sm text-primary">
            <p>Author</p>
            <p>15. 6. 2020</p>
        </div>
    </Link>
  )
}

export default BlogCard;