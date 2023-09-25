'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navigation = () => {

    const pathname = usePathname();
    const path = pathname.split("/").slice(-2);

    return (
        <nav className='flex py-4 text-sans text-sm text-gray-400'>
            <Link href="/">Homepage</Link>
            <div className='mx-4'>/</div> 
            <Link href={`${path[1]}`}>{path[1]}</Link>
        </nav>
    )
}

export default Navigation