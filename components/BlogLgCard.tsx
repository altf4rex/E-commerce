import Image from 'next/image'
import Link from 'next/link';

 const BlogLgCard = ({title, img}: {title: string, img: string}) => {
  return (
    <Link href='/blog' className="flex relative">
        <Image 
        className='relative z-0'
        src={`${img}`}
          alt='Blog'
          width={530}
          height={400}
        />  
        <div className='max-w-[380px] flex flex-col absolute z-10 bottom-6 left-6'>
            <p className='text-pop text-white text-xl'>{title}</p>
            <div className='mt-2 flex items-center text-sans text-white text-sm' >
                <div className='mr-2 w-8 h-8 bg-primaryBg rounded-3xl'></div>
                <p className='mr-4'>Author</p>
                <p>17. 6. 2020</p> 
            </div>
        </div>
    </Link>
  )
}

export default BlogLgCard;