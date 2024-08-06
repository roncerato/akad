interface IProps {
    children: React.ReactNode
}

export default function T1({ children }: IProps) {
    return (
        <p className="t-1">
            {children}
        </p>
    )
}