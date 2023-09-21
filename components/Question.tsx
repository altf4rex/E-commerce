
const Question = () => {
  return (
    <div className='flex flex-col p-4 my-4 bg-primaryBg rounded-2xl'>
        <div className='flex flex-wrap justify-between items-center'>
            <h3  className='text-pop text-lg text-primary'>Guest</h3>
            <div className='flex'>
                <p className='mr-3 text-sans text-base text-gray-400'>September 12th</p>
            </div>
        </div>
        <p className='mt-5 text-sans text-base text-primary'>Highly recommended?</p>
    </div>
  )
}

export default Question