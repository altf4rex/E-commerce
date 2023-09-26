
const Question = () => {
  return (
    <div className='flex flex-col p-4 my-4 bg-primaryBg rounded-2xl'>
        <div className='flex flex-wrap justify-between items-center'>
            <h3  className='text-pop text-lg text-primary max-sm:text-base'>Guest</h3>
            <div className='flex'>
                <p className='mr-3 text-sans text-base text-gray-400 max-sm:text-sm'>September 12th</p>
            </div>
        </div>
        <p className='mt-2 text-sans text-base text-primary max-sm:text-sm'>Highly recommended?</p>
    </div>
  )
}

export default Question