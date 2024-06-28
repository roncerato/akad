import { Montserrat } from "next/font/google";

interface Props {
    children: React.ReactNode
}

const montserrat = Montserrat({ weight: "700", subsets: ["latin", "cyrillic"] })

export default function H1({ children }: Props) {
    return (
        <h1 className={montserrat.className}>
            {children}
        </h1>
    )
}