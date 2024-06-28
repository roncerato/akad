import { Open_Sans } from "next/font/google";
import "@/styles/global.scss"

const openSans = Open_Sans({ subsets: ["latin", "cyrillic"] });


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={openSans.className}>{children}</body>
        </html>
    );
}
