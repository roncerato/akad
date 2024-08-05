import Image from "next/image"
import TestimonialsSlider from "./TestimonialsSlider"
import T2 from "../template/texts/t2"
import H6 from "../template/headings/h6"
import { clients } from "@/constants/clients"


export default function TestimonialsClients() {
    return (
        <div className="testimonial-clients-section">
            <div className="testimonial-clients-container container">
                <div className="testimonials-section">
                    <TestimonialsSlider />

                </div>
                <div className="clients-section">
                    <ul className="client-list">
                        {clients.map(item => (
                            <li className="client" key={"client"+Math.random().toString(36).slice(2)}>

                                <Image src={item.img} alt={item.name} fill />
                            </li>
                        ))}


                    </ul>
                </div>
            </div>
        </div>
    )
}