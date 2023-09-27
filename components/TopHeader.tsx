import Link from "next/link";

export default function TopHeader(){
    return (
        <nav className="flex justify-between border-b py-4 max-lg:hidden">
            <div className="text-sans flex space-x-8 text-sm">
                <Link href="/" className="text-secondary hover:text-primaryLight">Chat with us</Link>
                <p className="text-primary">+440 226 225 664</p>
                <p className="text-primary">info@ecommerce.com</p>
            </div>
            <div className="text-sans flex space-x-9 text-sm">
                <Link href="/blogs" className="text-secondary hover:text-primaryLight">Blogs</Link>
                <Link href="/" className="text-secondary hover:text-primaryLight">About Us</Link>
                <Link href="/" className="text-secondary hover:text-primaryLight">Careers</Link>
            </div>
        </nav>
    )
  }
