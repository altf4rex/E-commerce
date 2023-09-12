'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navigation = () => {

    const pathname = usePathname();

    return (
        <nav className='flex py-4 text-sans text-sm text-gray-400'>
            <Link href="/" >Homepage</Link>
            {pathname.split("/").map((p, index, pathParts) => (
                <div key={p}>
                    <Link href={pathParts.slice(0, index + 1).join("/")} 
                    className={(index === pathParts.length - 1)? "text-primary mx-2" : " text-gray-400 mx-2"}>
                        {p}
                    </Link>
                    {index < pathParts.length - 1 && " / "}
                </div>
            ))}
        </nav>
    )
}

export default Navigation