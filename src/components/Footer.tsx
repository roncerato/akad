import Image from "next/image";
import Link from "next/link";
import Navigation from "./Navigation";
import T2 from "./template/texts/t2";
import T3 from "./template/texts/t3";
import FooterNavigation from "./FooterNavigation";
import Facebook from "public/svg/social/facebook.svg"
import Inst from "public/svg/social/inst.svg"
import LinkedIn from "public/svg/social/linkedin.svg"
import TikTok from "public/svg/social/tiktok.svg"
import Twitter from "public/svg/social/twitter.svg"
import Youtube from "public/svg/social/youtube.svg"

export default function Footer() {

    const social = [
        {

            id: "1",
            name: "FACEBOOK",
            url: "https://www.facebook.com",
            Img: Facebook
        },
        {
            id: "1",
            name: "TWITTER",
            url: "https://www.twitter.com",
            Img: Twitter
        },
        {
            id: "1",
            name: "YOUTUBE",
            url: "https://www.youtube.com",
            Img: Youtube
        },
        {
            id: "1",
            name: "LinkedIn",
            url: "https://www.linkedin.com",
            Img: LinkedIn
        },
        {
            id: "1",
            name: "TIKTOK",
            url: "https://www.tiktok.com",
            Img: TikTok
        },
        {
            id: "1",
            name: "INSTAGRAM",
            url: "https://www.INSTAGRAM.com",
            Img: Inst
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
                                    <item.Img fill="#989898" width={20} height={20}/>
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