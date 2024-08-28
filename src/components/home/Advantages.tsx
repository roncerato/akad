import Image, { StaticImageData } from "next/image";
import H3 from "../template/headings/h3";
import T2 from "../template/texts/t2";
import lines from "public/jpg/lines.png"
import shopCart from "public/jpg/shopCart.png"
import shuffle from "public/jpg/sync.png"
import unlimited from "public/jpg/unlimited.png"
import H5 from "../template/headings/h5";
import advImg from "public/webp/main/advantages-img.webp"
import AdvantagesListItem from "../template/AdvantagesListItem";
import Cart from "public/svg/cart.svg"
import Infinite from "public/svg/infinite.svg"
import Options from "public/svg/options.svg"
import Shuffle from "public/svg/shuffle.svg"
export interface IAdvantageList {
    title: string
    Img: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
    advantageList: string[]
}

export default function Advantages() {

    const advantagesList: IAdvantageList[] = [
        {
            title: "unlimited options",
            Img: Infinite,
            advantageList: [
                "Branding",
                "Design & Copywriting",
                "Concept development",
                "User Experience"
            ]
        },
        {
            title: "DESIGN & DEVELOPMENT",
            Img: Shuffle,
            advantageList: [
                "Information architecture",
                "Interface design",
                "Product Design",
                "Integrated ad Companies",
            ]
        },
        {
            title: "E-Commerce",
            Img: Cart,
            advantageList: [
                "Prototyping",
                "Technical Consulting",
                "Web applications",
                "Quality testing",
            ]
        },
        {
            title: "CUSTOMIZABLE DESIGN",
            Img: Options,
            advantageList: [
                "Information architecture",
                "Interface design",
                "Product Design",
                "Integrated ad Companies",
            ]
        },
    ]

    return (
        <section className="advanatages-section">
            <div className="advantages-container container">
                <H3>
                    WHY CHOOSE US
                </H3>
                <T2>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </T2>
                <div className="advantages-main-content">
                    <ul className="advantages-category-list">

                        {advantagesList.map(item => (
                            <AdvantagesListItem
                                key={String(Math.random() * 3000)}
                                title={item.title}
                                Img={item.Img}
                                advantageList={item.advantageList}
                            />
                        ))
                        }
                    </ul>
                    <div className="advantages-img-wrap">
                        <Image src={advImg} alt={"Image"} />
                    </div>
                </div>
            </div>
        </section>
    )
}