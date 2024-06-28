import H6 from "./headings/h6"

interface IProps {
    children: React.ReactNode
    isColored?: boolean
}

export default function Button({ children, isColored = false }: IProps) {
    return (
        <button className={isColored ? 'btn-colored' : 'btn'}>
            <H6>
                {children}
            </H6>
        </button>
    )
}