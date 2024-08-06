import Image, { StaticImageData } from "next/image"
import H5 from "./headings/h5"
import { IAdvantageList } from "../home/Advantages"
import T2 from "./texts/t2"

interface IProps extends IAdvantageList {
}

export default function AdvantagesListItem({ title, imgUrl, advantageList }: IProps) {
    return (
        <li className="advantage-category-item">
            <Image src={imgUrl} alt={title} />
            <H5>
                {title}
            </H5>
            <ul className="advantage-subcategory-list">
                {advantageList.map(item => (
                    <li className="advantage-subcategory-item" key={String(Math.random() * 3000)}>
                        <T2>
                            {item}
                        </T2>
                    </li>
                ))}

            </ul>
        </li>
    )
}


