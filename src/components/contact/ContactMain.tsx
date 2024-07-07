"use client"

import H6 from "../template/headings/h6"
import T2 from "../template/texts/t2"
import { Montserrat } from "next/font/google";


const montserrat = Montserrat({ weight: "700", subsets: ["latin", "cyrillic"] })

export default function ContactsMain() {
    return (
        <div className="contacts-main">
            <div className="contact-main-container container">
                <form action="" className={`conatcts-form ${montserrat.className}`} onSubmit={(event) => { event.preventDefault() }}>
                    <input type="text" name="" id="" placeholder="YOUR NAME" />
                    <input type="email" name="" id="" placeholder="YOUR EMAIL" />
                    <input type="text" name="" id="" placeholder="OBJECT" />
                    <textarea name="" id="" placeholder="MESSAGE"></textarea>
                    <input type="submit" value="send" className="btn-colored" />
                </form>
                <div className="contacts-info">
                    <H6>
                        <span className={montserrat.className}>
                            Contact Info
                        </span>
                    </H6>
                    <T2>
                        Lorem ipsum dolor sit amet, conse adipisicing elit. Libero incidunt quod ab mollitia quia dolorum conse.
                    </T2>

                    <T2>
                        13D, Functional apartment, Unique colony,
                        Agadir 86360
                    </T2>
                    <T2>
                        <a href="tel:+212124566780">
                            +212 124-566-780
                        </a>
                        <br />
                        <a href="tel:+212124566789">
                            +212 124-566-789
                        </a>
                    </T2>
                    <H6>
                        <a href="mailto:email@website.com" className={montserrat.className}>
                            email@website.com
                        </a>
                    </H6>
                </div>
                <div className="contacts-map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4458.942169347328!2d12.789634022090517!3d48.35470347647451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1720223399890!5m2!1sru!2s" allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>

        </div>
    )
}