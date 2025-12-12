import { HomeIcon } from "@primer/octicons-react"
import Link from "next/link"
import { ActiveLink } from "../active-link/ActiveLink"

const navItems = [
    // { path: "/", text: "Home" },
    { path: "/about", text: "About" },
    { path: "/contact", text: "Contact" },
    { path: "/pricing", text: "Pricing" },
]


export const Navbar = () => {
    return (
        <nav className="flex bg-blue-400 bg-opacity-50 p-2 m-2 rounded">

            <Link href="/" className="flex items-center">
                <HomeIcon className="mr-2" />
                Home
            </Link>

            <div className="flex flex-1 justify-end">
                {navItems.map((item) => (
                    <ActiveLink key={item.path} path={item.path} text={item.text} />
                ))}
            </div>
        </nav>
    )
}
