import Rating from '@mui/material/Rating';
const Reviews = ({rating}: {rating:string}) => {
  return (
    <div className='flex flex-col p-4 my-4 bg-primaryBg rounded-2xl'>
        <div className='flex flex-wrap justify-between items-center'>
            <h3  className='text-pop text-lg text-primary'>Guest</h3>
            <div className='flex'>
                <p className='mr-3 text-sans text-base text-gray-400'>September 10th</p>
                <Rating name="read-only" value={Number(`${rating}`)} readOnly />
            </div>
        </div>
        <p className='mt-5 text-sans text-base text-primary'>Highly recommended!</p>
    </div>
  )
}

export default Reviews