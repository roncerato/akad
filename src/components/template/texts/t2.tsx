interface IProps {
    children: React.ReactNode
}

export default function T2({ children }: IProps) {
    return (
        <p className="t-2">
            {children}
        </p>
    )
}