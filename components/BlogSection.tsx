import Link from "next/link"
import Image from "next/image";

const BlogSection = () => {
  return (
    <section>
        <div className="flex justify-between">
            <p className="text-pop text-base text-primary">Read our Blog posts</p>
            <Link href="/blog" className="text-pop text-base text-primary">
                Go to Blog
                <Image 
                    className="ml-2"
                    src='/green-left-arrow.svg'
                    alt='arrow'
                    width={7}
                    height={3}
                />  
            </Link>
        </div>
        <div className="bg-blog">

        </div>
    </section>
  )
}

export default BlogSection