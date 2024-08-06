import H3 from "../template/headings/h3";
import T2 from "../template/texts/t2";
import Image from "next/image";

export default function WhatWeDo() {

    const list = [
        {
            id: 1,
            item: "Stunning on all screens"
        },
        {
            id: 2,
            item: "Easy to customize"
        },
        {
            id: 3,
            item: "Make a difference"
        },
        {
            id: 4,
            item: "Imagine and create"
        },
        {
            id: 5,
            item: "Unlimited possibilities"
        },
        {
            id: 6,
            item: "Remarkable style",
        },
        {
            id: 7,
            item: "Captivating presentations",
        },
        {
            id: 8,
            item: "Make your portfolio pop",
        },
        {
            id: 9,
            item: "Words that matter",
        },
        {
            id: 10,
            item: "Satisfied clients",
        },
    ]

    return (
        <section className="wwd-section">
            <div className="wwd-container container">
                <H3>What We Do</H3>
                <T2>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </T2>
                <div className="wwd-main">
                    <div className="wwd-text-section">
                        <T2>
                            Erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan.
                        </T2>

                        <ul className="wwd-list">

                            {list.map(item => (
                                <li className="wwd-list-item" key={Math.random().toString(36).slice(2)}>
                                    <T2>
                                        {item.item}
                                    </T2>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="wwd-img-section">
                        <Image src={"/jpg/wwd-image.jpg"} alt={"image"} fill />
                    </div>
                </div>
            </div>
        </section>
    )
}