import { Open_Sans } from "next/font/google";
import "@/styles/global.scss"
import Header from "@/components/Header";
import "animate.css"
import Footer from "@/components/Footer";

const openSans = Open_Sans({ subsets: ["latin", "cyrillic"] });


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={openSans.className}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
