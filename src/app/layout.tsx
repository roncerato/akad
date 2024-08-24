import { Open_Sans } from "next/font/google";
import "@/styles/global.scss"
import Header from "@/components/Header";
import "animate.css"
import Footer from "@/components/Footer";
import { Metadata } from "next";
import { headers } from "next/headers";

const openSans = Open_Sans({ subsets: ["latin", "cyrillic"] });


export async function generateMetadata(): Promise<Metadata>{
    const head = headers();
    const pathname = head.get("next-url");
    const page = pathname?.lastIndexOf("/")
    console.log(pathname?.slice(page && page+1))
    return {
        title: `${pathname?.slice(page && page+1).charAt(0).toUpperCase()}${pathname?.slice(page && page+2)} | AKAD.`
    }
}

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
