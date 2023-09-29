import {RecepiesBanner}  from "@/types";
import Link from "next/link";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export default function RecepiesBanner({baner, header}: RecepiesBanner){
    return (
      <div className='flex items-start flex-col w-[420px] h-[280px] mr-4 bg-secondaryBgLight rounded-2xl'>
        <div className="bg-[url('/baner-bg.svg')] w-[420px] h-[100%] pb-8">
        <h3 className="text-pop text-sm text-secondary font-semibold mt-12 ml-[33px]">{baner}</h3>
        <h2 className="text-pop text-xl font-semibold mt-2 ml-[33px]">{header}</h2>
        <Link href="/blogs" className="text-pop text-base w-fit flex items-center py-3 px-4 mt-[94px] ml-[33px] text-sm font-semibold border-2 rounded-2xl border-secondaryBgDark hover:bg-secondary hover:text-white hover:border-secondaryBgLight">
            Read recepies
            <ChevronRightIcon
            className="ml-2 text-lg"
            /> 
            </Link>
          </div>
      </div>
    )
  }