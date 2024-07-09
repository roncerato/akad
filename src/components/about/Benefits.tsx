import { benefits } from "@/constants/benefits";
import H3 from "../template/headings/h3";
import T2 from "../template/texts/t2";
import H5 from "../template/headings/h5";
import Image from "next/image";
export default function Benefits() {
    return (
        <section className="benefits-section">
            <div className="benefits-container container">
                <H3>
                    Some benefits
                </H3>
                <T2>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </T2>
                <ul className="benefits-list">
                    {benefits.map(item => (
                        <li className="benefit">
                            <div className="benefit-img-wrap">
                                <Image src={item.imgSrc} alt={item.id} layout="fill"
                                    objectPosition={"cover"} />

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
