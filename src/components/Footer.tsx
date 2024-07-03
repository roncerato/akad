import Image from "next/image";
import Link from "next/link";
import Navigation from "./Navigation";
import T2 from "./template/texts/t2";

export default function Footer() {

    const social = [
        {

            id: "1",
            name: "FACEBOOK",
            url: "www.facebook.com",
            imgHref: "/social/fb.png"
        },
        {
            id: "1",
            name: "TWITTER",
            url: "www.twitter.com",
            imgHref: "/social/twitter.png"
        },
        {
            id: "1",
            name: "YOUTUBE",
            url: "www.youtube.com",
            imgHref: "/social/yt.png"
        },
        {
            id: "1",
            name: "LinkedIn",
            url: "www.linkedin.com",
            imgHref: "/social/linkedln.png"
        },
        {
            id: "1",
            name: "TIKTOK",
            url: "www.tiktok.com",
            imgHref: "/social/tt.png"
        },
        {
            id: "1",
            name: "INSTAGRAM",
            url: "www.INSTAGRAM.com",
            imgHref: "/social/inst.png"
        },
    ]

    return (
        <footer className="footer">
            <div className="footer-container container">
                <Navigation />
                <div className="footer-copyrights">
                    <T2>
                        Created by akhouad 2016. All Rights Reserved
                    </T2>
                </div>
                <div className="footer-social">
                    <ul className="footer-social-list">

                        {social.map(item => (
                            <li className="footer-social-item" key={item.id}>
                                <a href={item.url}>
                                    <Image src={item.imgHref} alt={item.name} fill />
                                </a>
                            </li>
                        ))


                        }
                    </ul>
                </div>
            </div>

        </footer>
    )
}