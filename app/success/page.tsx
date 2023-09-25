import Link from "next/link"

const Succcess = () => {
  return (
    <div className="flex justify-center bg-white absolute top-0 left-0 w-[100%] h-[100%] shadow max-md:items-start">
      <div className="child svg-container flex flex-col justify-center items-center max-md:mt-[40%]">    
      <svg className="ft-green-tick" xmlns="http://www.w3.org/2000/svg" height="100" width="100" viewBox="0 0 48 48" aria-hidden="true">
          <circle className="circle" fill="#5bb543" cx="24" cy="24" r="22"/>
          <path className="tick" fill="none" stroke="#FFF" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M14 27l5.917 4.917L34 17"/>
      </svg>
      <h1 className="mt-4 tex-pop text-4xl text-secondary">Success</h1>
      <p className="mt-3 tex-sans text-xl text-primary text-center">Thank yoy for your purchease!</p>
      <Link href='/' className="mt-4 py-2 px-6 text-center bg-secondary tex-sans text-xl text-white rounded-2xl">Done</Link>
      </div>
    </div>
  )
}

export default Succcess
