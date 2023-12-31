import Link from "next/link"
import Image from "next/image";
import BlogLgCard from "./BlogLgCard";
import BlogCard from "./BlogCard";


const BlogSection = () => {
  const title = "Our chef tips for a great and tasty dinner ready in 20 minutes";
  const img = '/Blog-1.jpg'; 
  const smBlog = [
    {
      title: "Dessert Delights: Satisfy Your Sweet Tooth",
      img: "/blog-sm-8.jpg"
    },
    {
      title: "Healthier Choices, Tastier Bites",
      img: "/blog-sm-4.jpg"
    },
]

  return (
    <section>
        <div className="flex justify-between items-center mb-8 max-sm:flex-col max-xl:mt-16">
            <p className="text-pop text-xl text-primary max-sm:text-md">Read our Blog posts</p>
            <Link href="/blogs" className="flex p-3 text-pop text-xl text-primary hover:bg-primaryBg rounded-xl max-sm:text-base">
                Go to Blogs
                <Image 
                    className="ml-2"
                    src='/green-left-arrow.svg'
                    alt='arrow'
                    width={7}
                    height={3}
                />  
            </Link>
        </div>
        <div className="flex justify-between max-sm:flex-wrap max-sm:justify-around">
          <BlogLgCard title={title} img={img}/>
          <BlogCard title={smBlog[0].title} img={smBlog[0].img}/> 
          <BlogCard title={smBlog[1].title} img={smBlog[1].img}/> 
        </div>
        
    </section>
   
  )
}

export default BlogSection