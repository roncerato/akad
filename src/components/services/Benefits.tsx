import Image from "next/image"
import H5 from "../template/headings/h5"
import T2 from "../template/texts/t2"
import { benefitsV2 } from "@/constants/benefitsV2"

export default function Benefits() {
    return (
        <section className="services-benfits-section">
            <div className="services-benfits-container container">
                <ul className="services-benefits-list">
                    {benefitsV2.map(item => (
                        <li className="services-benefit" key={Math.random().toString(36).slice(2)}>
                            <div className="services-benefit-img-wrap">
                                <item.Img stroke="#60606e" strokeWidth={30} width={30} height={30}/>
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