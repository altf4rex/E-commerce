import {footerLinks} from "@/constants"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="py-16">
        <div className="flex justify-between max-md:flex-col">
        {footerLinks.map((m) => (
            <div className="flex flex-col max-md:mb-8 max-md:items-center ">
                <h3 className="text-pop text-lg text-primary">{m.header}</h3>
                {m.array.map((a) => (
                    <Link href="/" key={a} className="text-sans mt-4 text-sm text-secondary hover:text-primaryLight">
                        {a}
                    </Link>
                ))}
            </div>
        )) }
        </div>
        <p className="text-sans mt-12 text-sm text-primary">Copyright © 2020 petrbilek.com</p>
    </footer>
  )
}

export default Footer