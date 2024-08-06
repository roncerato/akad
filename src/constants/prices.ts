interface IPrices{
    title: "basic" | "advanced" | "smart",
    price: number,
    services: string[]
}

export const prices: IPrices[] = [
    {
        title: "basic",
        price: 35.99,
        services: [
            "Lorem ipsum dolor sit amet",
            "Consectetuer adipiscing elit",
            "Sed diam nonummy",
            "Nibh euismod tincidunt",
            "Ut laoreet dolore",
            "Magna aliquam erat volutpat",
        ]
    },
    {
        title: "advanced",
        price: 55.99,
        services: [
            "Lorem ipsum dolor sit amet",
            "Consectetuer adipiscing elit",
            "Sed diam nonummy",
            "Nibh euismod tincidunt",
            "Ut laoreet dolore",
            "Magna aliquam erat volutpat",
        ]
    },
    {
        title: "smart",
        price: 75.99,
        services: [
            "Lorem ipsum dolor sit amet",
            "Consectetuer adipiscing elit",
            "Sed diam nonummy",
            "Nibh euismod tincidunt",
            "Ut laoreet dolore",
            "Magna aliquam erat volutpat",
        ]
    },
]