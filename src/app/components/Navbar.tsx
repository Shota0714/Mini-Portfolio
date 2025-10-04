'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    // get current url and set link class
    const pathname = usePathname();
    const getLinkClass = (href: string) => {
        if (pathname === href || pathname.startsWith(href + '/')) {
            return 'activelink';
        }
        else {
            return 'inactivelink';
        }
    }

    return (
        <nav>
            <ul className="navLinks">
                <li>
                    <Link href="/" className={getLinkClass('/')}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="/bio" className={getLinkClass('/bio')}>
                        Bio
                    </Link>
                </li>
                <li>
                    <Link href="/contact" className={getLinkClass('/contact')}>
                        Contact
                    </Link>
                </li>
                <li>
                    <Link href="/projects" className={getLinkClass('/projects')}>
                        Projects
                    </Link>
                </li>
                <li>
                    <Link href="/skills" className={getLinkClass('/skills')}>
                        Skills
                    </Link>
                </li>
            </ul>
        </nav>
    )
}