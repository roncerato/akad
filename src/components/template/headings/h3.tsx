import { Montserrat } from "next/font/google";

interface Props {
    children: React.ReactNode
    decoration?: boolean
}

const montserrat = Montserrat({ weight: "700", subsets: ["latin", "cyrillic"] })

export default function H3({ children, decoration = true }: Props) {
    return (
        <h3 className={`${montserrat.className} ${decoration ? "h3-decor" : ""}`}>
            {children}
        </h3>
    )
}