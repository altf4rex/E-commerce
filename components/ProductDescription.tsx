
const ProductDescription = ({origins, recipe}: {origins?: string, recipe?: string}) => {
  return (
    <div className='flex flex-col p-4 my-4 bg-primaryBg rounded-2xl max-w-[502px]'>
        <div className="mb-8">
            <h3 className='text-pop text-lg text-primary max-sm:text-base'>Origins</h3>
            <p className='mt-2 text-sans text-base text-primary max-sm:text-sm'>{origins}</p> 
        </div>
        <div className="mb-4">
            <h3 className='text-pop text-lg text-primary max-sm:text-base'>Recipe</h3>
            <p className='mt-2 text-sans text-base text-primary max-sm:text-sm'>{recipe}</p> 
        </div>
       
    </div>
  )
}

export default ProductDescription
