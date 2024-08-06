import Image from "next/image";
import Link from "next/link";
import Navigation from "./Navigation";
import T2 from "./template/texts/t2";
import T3 from "./template/texts/t3";
import FooterNavigation from "./FooterNavigation";

export default function Footer() {

    const social = [
        {

            id: "1",
            name: "FACEBOOK",
            url: "https://www.facebook.com",
            imgHref: "/social/fb.png"
        },
        {
            id: "1",
            name: "TWITTER",
            url: "https://www.twitter.com",
            imgHref: "/social/twitter.png"
        },
        {
            id: "1",
            name: "YOUTUBE",
            url: "https://www.youtube.com",
            imgHref: "/social/yt.png"
        },
        {
            id: "1",
            name: "LinkedIn",
            url: "https://www.linkedin.com",
            imgHref: "/social/linkedln.png"
        },
        {
            id: "1",
            name: "TIKTOK",
            url: "https://www.tiktok.com",
            imgHref: "/social/tt.png"
        },
        {
            id: "1",
            name: "INSTAGRAM",
            url: "https://www.INSTAGRAM.com",
            imgHref: "/social/inst.png"
        },
    ]

    return (
        <footer className="footer">
            <div className="footer-container container">
                <FooterNavigation />
                <div className="footer-copyrights">
                    <T3>
                        Created by akhouad 2016. All Rights Reserved
                    </T3>
                </div>
                <div className="footer-social">
                    <ul className="footer-social-list">

                        {social.map(item => (
                            <li className="footer-social-item" key={"s"+Math.random().toString(36).slice(2)}>
                                <Link href={item.url} target="_blank" rel="noopener noreferrer">
                                    <Image src={item.imgHref} alt={item.name} fill />
                                </Link>
                            </li>
                        ))
                        }
                    </ul>
                </div>
            </div>

        </footer>
    )
}