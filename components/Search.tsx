"use client"
import { useRouter, useSearchParams } from 'next/navigation';
import { FormEvent } from 'react'
import SearchIcon from '@mui/icons-material/Search';

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
    <form onSubmit={onSubmit} className='flex bg-primaryBg border border-gray-300 rounded-2xl'>
      <input id="search" type="search" name="search" className='w-[262px] p-3 text-sans text-sm text-gray-500 bg-primaryBg rounded-2xl outline-none' defaultValue={defaultSearcchParams} placeholder='Search Products, categories ...'/>
      <button type="submit" className='pr-2'><SearchIcon /></button>
    </form>
  )
}
