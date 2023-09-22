import Link from "next/link";

export default function TopHeader(){
    return (
        <nav className="flex justify-between border-b py-4">
            <div className="text-sans flex space-x-8 text-sm">
                <Link href="/" className="text-secondary">Chat with us</Link>
                <p className="text-primary">+420 336 775 664</p>
                <p className="text-primary">info@freshnesecom.com</p>
            </div>
            <div className="text-sans flex space-x-9 text-secondary text-sm">
                <Link href="/blogs">Blogs</Link>
                <Link href="/">About Us</Link>
                <Link href="/">Careers</Link>
            </div>
        </nav>
    )
  }
