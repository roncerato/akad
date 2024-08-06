"use client"

import Link from "next/link";
import T2 from "./template/texts/t2";


export default function NavItem({ name, href, setIsOpen }: { name: string, href: string, setIsOpen: React.Dispatch<React.SetStateAction<boolean | undefined>> }) {
    return (

        <li
            className="nav-item"
            onClick={() => { 
                setIsOpen(false) 
            }}>
            <Link href={href} >
                <T2>
                    {name}
                </T2>
            </Link>
        </li>
    )
}