import Image from "next/image"
import {culinaryJourney} from "@/constants"
import { title } from "process"
const page = () => {
  return (
    <div>
      <div  className='relative '>
      <Image 
        className='relative z-0 my-12 max-lg:my-6 max-lg:h-[400px] max-lg:object-cover max-sm:my-3 max-sm:h-[300px] rounded-2xl blur'
        src="/big-p-blog.jpg"
        width={1169}
        height={480}
        alt="blog"
        />
        <div className='max-w-[1169px] flex flex-col absolute z-10 bottom-6 left-6 rounded-2xl'>
            <h1 className='max-w-[500px] text-pop text-white text-3xl  max-lg:text-xl max-sm:text-sm'>{culinaryJourney.title}</h1>
            <div className='mt-2 flex items-center text-sans text-white text-sm' >
                <p className='mr-4'>Author</p>
                <p>17. 6. 2020</p> 
            </div>
        </div>
        </div>
        <div className="pt-8 max-w-[600px] mx-auto">
          <p className='mb-10 text-sans text-primary text-lg'>{culinaryJourney.introduction}</p>
          {culinaryJourney.sections.map((s) => 
            <>
              <h3 className='mb-3 text-pop text-primary text-xl'>{s.title}</h3>
              <p className='mb-10 text-sans text-primary text-lg'>{s.content}</p>
            </>
            )}
        </div>
    </div>
  )
}

export default page