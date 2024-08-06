import { Montserrat } from "next/font/google";

interface Props {
    children: React.ReactNode
}

const montserrat = Montserrat({ weight: "700", subsets: ["latin", "cyrillic"] })

export default function H6({ children }: Props) {
    return (
        <h6 className={montserrat.className}>
            {children}
        </h6>
    )
}