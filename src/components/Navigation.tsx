import Link from "next/link"
import T2 from "./template/texts/t2"
import NavItem from "./NavItem"

export interface INavList {
    name: string,
    id: number,
    href: string
}



export default function Navigation({setIsOpen}: {setIsOpen: React.Dispatch<React.SetStateAction<boolean | undefined>>}) {

    const navList: INavList[] = [
        {
            name: "Home",
            id: 1,
            href: "/"
        },
        {
            name: "About us",
            id: 2,
            href: "/about"
        },
        {
            name: "Blog",
            id: 3,
            href: "/blog"
        },
        {
            name: "Contacts",
            id: 4,
            href: "/contacts"
        },
        {
            name: "Services",
            id: 5,
            href: "/services"
        },
    ]

    return (
        <nav className="navigation">
            <ul className="nav-list">
                {navList.map(item => (
                    <NavItem key={"h"+Math.random().toString(36).slice(2)} name={item.name} href={item.href} setIsOpen={setIsOpen}/>
                ))}
            </ul>
        </nav>
    )
}