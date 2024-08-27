"use client"

import React from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Image from "next/image";
import T2 from "../template/texts/t2";
import H6 from "../template/headings/h6";

export default function TestimonialsSlider() {
    const settings: Settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        customPaging: i => (
            <div
                style={{
                    backgroundColor: "rgb(96, 96, 110)",
                    width: "16px",
                    height: "5px",
                }}
            >

            </div>
        )

    };
    return (

        <Slider {...settings}>
            {
                ['1', '2', '3'].map(item => (
                    <div key={"slider"+Math.random().toString(36).slice(2)}>
                        <div className="slide" >
                            <div className="testimonial-img-wrap">
                                <Image src={"/webp/about/testimonial.webp"} alt={"test"} fill />
                            </div>
                            <T2>
                                Quisque iaculis lorem vestibulum eros vehicula, non congue elit dictum. Donec mollis aliquet lorem, eu porttitor sapien semper in. Duis ac erat luctus, gravida lectus sit amet, consectetur orci. Suspendisse libero mauris.
                            </T2>
                            <H6>
                                Monica Doe
                            </H6>
                        </div>
                    </div>
                ))
            }
        </Slider>

    );
}



