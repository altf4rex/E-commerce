import BlogCard from "@/components/BlogCard"
import BlogLgCard from "@/components/BlogLgCard"
import {blogPosts} from "@/constants";

const blog = [
  {
    title: 'Our chef tips for a great and tasty dinner ready in 20 minutes',
    img: '/Blog-1.jpg'
  },
  {
    title: "This is a space for your blog headline, it can be long don’t worry about that",
    img: "/Blog-2.jpg"
  },
]


const page = () => {
  return (
    <div>
        <h1 className="text-pop text-4xl text-primary mt-7  max-sm:block">Blogs</h1>
        <div className="flex justify-around flex-wrap my-12 max-xl:my-0">
            <BlogLgCard key={blog[0].title} title={blog[0].title} img={blog[0].img}/>
            <BlogLgCard key={blog[1].title} title={blog[1].title} img={blog[1].img}/>
        </div>
        <h2 className="hidden text-pop text-2xl text-primary mt-7 max-sm:block">More Blogs:</h2>
        <div className="flex justify-between my-12 ">
            <div className="w-[269px] mr-6 max-md:hidden">
                <div>
                    <h4 className="mb-4 text-pop text-lg text-primary">Archives</h4>
                    <p className="text-sans underline mb-3 text-secondary text-sm">March 2022</p>
                    <p className="text-sans underline mb-3 text-secondary text-sm">February 2022</p>
                    <p className="text-sans underline mb-3 text-secondary text-sm">January 2022</p>
                    <p className="text-sans underline mb-3 text-secondary text-sm">November 2022</p>
                    <p className="text-sans underline text-secondary text-sm">December 2022</p>
                </div>
                <div className="mt-12">
                    <h4 className="mb-4 text-pop text-lg text-primary">Join our list</h4>
                    <p className="mb-4 text-sans text-base text-gray-400">Signup to be the first to hear about exclusive deals, special offers, recepies from our masters and others.</p>
                    <form className='flex bg-primaryBg border border-gray-300 rounded-2xl'>
                        <input id="search" type="search" name="search" className=' p-3 text-sans text-sm text-gray-500 bg-primaryBg rounded-2xl outline-none' placeholder='Your email address'/>
                        <button type="submit" className='pr-2'>Subscribe</button>
                    </form>
                </div>
            </div> 
            <div className="flex flex-wrap justify-start max-xl:justify-around">
            {
                blogPosts.map((post) => (<BlogCard key={post.title} title={post.title} img={post.img}/>))
            }
            </div>
        </div>
    </div>
  )
}

export default page