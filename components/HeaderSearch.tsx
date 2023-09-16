import Link from "next/link";
import Search from "./Search";
import Image from "next/image";
import Cart from "./Cart";

export default function HeaderSearc() {
    return (
        <nav className="flex justify-between items-center py-10">
            <Link href="/">
                    <Image
                        src='/logo.svg'
                        alt='user'
                        width={177}
                        height={50}
                    />
                </Link>
            <Search />  
            <div className="flex ">
                <Link href="/" className="mr-10">
                    <Image
                        src='/user.svg'
                        alt='user'
                        width={24}
                        height={24}
                    />
                </Link>
                <Cart/>
            </div>
        </nav>
    )
}