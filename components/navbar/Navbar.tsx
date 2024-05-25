import { HomeIcon } from "@primer/octicons-react";
import Link from "next/link";
import { ActiveLink } from "../active/ActiveLink";

const navItems = [
    { path: '/about', text: 'About' },
    { path: '/contact', text: 'Contact' },
    { path: '/pricing', text: 'Pricing' },
]

// 'use client'; asi le decimos a next que este archivo es del lado del cliente, de base next asume que es del lado del servidor
const Navbar = () => {
    return (
        <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
            <Link href="/" className="flex items-center">
                <HomeIcon className="mr-2" />
                <span>Home</span>
            </Link>
            <div className="flex flex-1"></div>
            {navItems.map(navItem => (
                // <ActiveLink key={navItem.path} path={navItem.path} text={navItem.text} />
                <ActiveLink key={navItem.path} {...navItem}/> // se puede simplificar haciendo spread de navItem
            ))}
        </nav>
    )
}

export default Navbar