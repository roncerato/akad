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
export interface IAdvantageList {
    title: string
    imgUrl: StaticImageData
    advantageList: string[]
}

export default function Advantages() {

    const advantagesList: IAdvantageList[] = [
        {
            title: "unlimited options",
            imgUrl: unlimited,
            advantageList: [
                "Branding",
                "Design & Copywriting",
                "Concept development",
                "User Experience"
            ]
        },
        {
            title: "DESIGN & DEVELOPMENT",
            imgUrl: shuffle,
            advantageList: [
                "Information architecture",
                "Interface design",
                "Product Design",
                "Integrated ad Companies",
            ]
        },
        {
            title: "E-Commerce",
            imgUrl: shopCart,
            advantageList: [
                "Prototyping",
                "Technical Consulting",
                "Web applications",
                "Quality testing",
            ]
        },
        {
            title: "CUSTOMIZABLE DESIGN",
            imgUrl: lines,
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
                                imgUrl={item.imgUrl}
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