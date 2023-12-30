"use client"
import Link from "next/link";
import Image from "next/image"
import { usePathname } from 'next/navigation'

const Navbar = () => { // Shift + Supr elimina una linea de code

    const pathname = usePathname();
    const inactiveLink = 'text-white px-2 py-1'
    const activeLink = `${inactiveLink} bg-blue-900 rounded-lg`

    return (
        <nav className="bg-gray-800 p-4 flex items-center justify-between">
            {/* Logotype */}
            <Link href="/" className="flex items-center gap-2">
                <Image
                    width={40}
                    height={40}
                    src="https://img.icons8.com/ios/100/galaxy.png"
                    alt="galaxy"
                />
                <span className="text-white font-bold text-lg">Galaxy Store</span>
            </Link>

            {/* Enlaces */}
            <div className="flex gap-4">
                <Link href="/about" className={pathname.includes('/about') ? activeLink : inactiveLink + ' hover:text-blue-500'}>
                    <span className="text-lg">About</span>
                </Link>
                <Link href="/products" className={pathname.includes('/products') ? activeLink : inactiveLink + ' hover:text-blue-500'}>
                    <span className="text-lg">Products</span>
                </Link>
                <Link href="/posts" className={pathname.includes('/posts') ? activeLink : inactiveLink + ' hover:text-blue-500'}>
                    <span className="text-lg">Posts</span>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar