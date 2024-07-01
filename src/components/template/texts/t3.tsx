interface IProps {
    children: React.ReactNode
}

export default function T3({ children }: IProps) {
    return (
        <p className="t-3">
            {children}
        </p>
    )
}