import Link from "next/link";
import T2 from "./template/texts/t2";


export default function NavItem({ name, href }: { name: string, href: string }) {
    return (

        <li className="nav-item">
            <Link href={href}>
                <T2>
                    {name}
                </T2>
            </Link>
        </li>
    )
}