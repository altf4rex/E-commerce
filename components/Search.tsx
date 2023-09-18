"use client"
import { useRouter, useSearchParams } from 'next/navigation';
import { FormEvent } from 'react'

export default function Search(){
 const router = useRouter();
const searchParams = useSearchParams();
const defaultSearcchParams = searchParams.get("search") ?? "";

   function onSubmit(event: FormEvent<HTMLFormElement>) {
      event.preventDefault()
      const formData = new FormData(event.currentTarget);
      const searchQuery = formData.get('search');
      router.replace(`/products/search?search=${searchQuery}`);
  }

  return (
    <form onSubmit={onSubmit}>
      <input id="search" type="search" name="search" className='w-100 bg-red-200' defaultValue={defaultSearcchParams}/>
      <button type="submit">Submit</button>
    </form>
  )
}
