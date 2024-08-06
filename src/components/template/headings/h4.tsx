import { Montserrat } from "next/font/google";

interface Props {
    children: React.ReactNode
}

const montserrat = Montserrat({ weight: "700", subsets: ["latin", "cyrillic"] })

export default function H4({ children }: Props) {
    return (
        <h4 className={montserrat.className}>
            {children}
        </h4>
    )
}