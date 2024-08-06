import { Montserrat } from "next/font/google";

interface Props {
    children: React.ReactNode
}

const montserrat = Montserrat({ weight: "700", subsets: ["latin", "cyrillic"] })

export default function H5({ children }: Props) {
    return (
        <h5 className={montserrat.className}>
            {children}
        </h5>
    )
}