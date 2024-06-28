import { Montserrat } from "next/font/google";

interface Props {
    children: React.ReactNode
}

const montserrat = Montserrat({ weight: "700", subsets: ["latin", "cyrillic"] })

export default function H2({ children }: Props) {
    return (
        <h2 className={montserrat.className}>
            {children}
        </h2>
    )
}