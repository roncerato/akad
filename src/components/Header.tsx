"use client"

import Link from "next/link";
import H4 from "./template/headings/h4";
import Navigation from "./Navigation";
import Image from "next/image";
import close from "public/svg/close.svg"
import { useState } from "react";
import { useOutsideClick } from "./hooks/useOutsideClick";

export default function Header() {
    const [isOpen, setIsOpen] = useState<boolean | undefined>(undefined)
    const topNavRef = useOutsideClick(() => { setIsOpen(false) })

    return (
        <>
            <header className="header">
                <div className="header-container container">
                    <div className="header-logo animate__animated animate__fadeInLeft">
                        <Link href={"/"}>
                            <H4>
                                AKAD.
                            </H4>
                        </Link>
                    </div>
                    <button className="header-burger-btn" onClick={() => { setIsOpen(true) }}>
                        <span className={`animate__animated ${isOpen ? "animate__fadeOutRight" : "animate__fadeInRight"}`}></span>
                        <span className={`animate__animated ${isOpen ? "animate__fadeOutRight" : "animate__fadeInRight"}`}></span>
                        <span className={`animate__animated ${isOpen ? "animate__fadeOutRight" : "animate__fadeInRight"}`}></span>
                    </button>

                </div>
            </header>

            <div className={`top-navigation ${isOpen ? "opacity-1" : "opacity-0"}`}>
                <div ref={topNavRef} className={`top-navigation-container animate__animated ${isOpen ? "animate__fadeInRight" : "animate__fadeOutRight"}`}>
                    <button className="hide-nav-btn" onClick={() => { setIsOpen(false) }}>
                        <Image src={close} alt={"close"} />
                    </button>
                    <Navigation setIsOpen={setIsOpen}/>
                </div>
            </div>
        </>
    )
}