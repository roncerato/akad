import Image from "next/image"
import H5 from "../template/headings/h5"
import T2 from "../template/texts/t2"
import { benefitsV2 } from "@/constants/benefitsV2"

export default function Benefits() {
    return (
        <section className="benfits-section">
            <div className="benfits-container container">
                <ul className="benefits-list">
                    {benefitsV2.map(item => (
                        <li className="benefit" key={item.id}>
                            <div className="benefit-img-wrap">
                                <Image src={item.urlImg} alt={item.title} fill />
                            </div>
                            <H5>
                                {item.title}
                            </H5>
                            <T2>
                                {item.description}
                            </T2>
                        </li>
                    ))}

                </ul>
            </div>
        </section>
    )
}