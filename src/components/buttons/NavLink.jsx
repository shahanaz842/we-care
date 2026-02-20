"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavLink = ({ href, children }) => {
    const path = usePathname();
    // Exact match for home, startsWith for others
    const isActive = href === "/" ? path === "/" : path.startsWith(href);

    return (
        <Link 
            href={href} 
            className={`${isActive ? "text-primary font-bold" : "text-neutral/70 hover:text-primary"} 
            font-medium transition-colors duration-200 text-sm tracking-wide`}
        >
            {children}
        </Link>
    );
};

export default NavLink;