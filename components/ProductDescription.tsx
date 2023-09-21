
const ProductDescription = ({origins, recipe}: {origins: string, recipe: string}) => {
  return (
    <div className='flex flex-col p-4 my-4 bg-primaryBg rounded-2xl'>
        <div className="mb-8">
            <h3 className='text-pop text-lg text-primary'>Origins</h3>
            <p className='mt-2 text-sans text-base text-primary'>{origins}</p> 
        </div>
        <div className="mb-4">
            <h3 className='text-pop text-lg text-primary'>Recipe</h3>
            <p className='mt-2 text-sans text-base text-primary'>{recipe}</p> 
        </div>
       
    </div>
  )
}

export default ProductDescription


{/* <div className='flex flex-col p-4 my-4 bg-primaryBg rounded-2xl'>
        <div className='flex flex-wrap justify-between items-center'>
            <h3  className='text-pop text-lg text-primary'>Guest</h3>
            <div className='flex'>
                <p className='mr-3 text-sans text-base text-gray-400'>September 10th</p>
                <Rating name="read-only" value={Number(`${rating}`)} readOnly />
            </div>
        </div>
        <p className='mt-5 text-sans text-base text-primary'>Highly recommended!</p>
    </div> */}