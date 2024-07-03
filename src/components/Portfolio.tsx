"use client"
import { ChangeEvent, useState } from "react";
import H3 from "./template/headings/h3";
import H6 from "./template/headings/h6";
import T2 from "./template/texts/t2";
import Image from "next/image";
import { portfolioData } from "@/constants/portfolioData";

interface ICategory {

    categoryId: string,
    categoryName: string,
    categoryItem: {
        name: string
        url: string
    }[]

}
export default function Portfolio() {

    const [categoryName, setCategoryName] = useState<string>("fashion")
    const [categoryItems, setCategoryItems] = useState<ICategory>(portfolioData[3])

    function findCategoryByName(categoryName: string): ICategory | undefined {
        return portfolioData.find(category => category.categoryName.toLowerCase() === categoryName.toLowerCase());
    }

    const handleCategoryChange = (event: ChangeEvent<HTMLInputElement>) => {
        setCategoryName(event.target.value);
        let val = findCategoryByName(event.target.value)
        if (val)
            setCategoryItems(val)
    };


    return (
        <section className="portfolio-section">
            <div className="portfolio-container container">
                <H3>
                    OUR PORTFOLIO
                </H3>
                <T2>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </T2>

                <div className="portfolio-main-content">
                    <div className="portfolio-categories">
                        <H3 decoration={false}>
                            CHOOSE<br />
                            CATEGORY
                        </H3>
                        <ul className="portfolio-category-list">
                            {portfolioData.map(category => (
                                <li className="portfolio-category-item" key={category.categoryName}>
                                    <label>
                                        <input
                                            type="radio"
                                            name="category"
                                            value={category.categoryName}
                                            checked={categoryName === category.categoryName}
                                            onChange={handleCategoryChange}
                                        />
                                        <H6>
                                            {category.categoryName.toUpperCase()}
                                        </H6>
                                    </label>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <ul className="portfolio-list">

                        {
                            categoryItems.categoryItem.map((item) => (

                                <li className="porttfolio-item">
                                    <Image
                                        src={item.url} alt={item.name} className="portfolio-item-img"
                                        layout="fill"
                                        objectPosition={item.name.startsWith("logo") ? "center" : ""}
                                    />
                                </li>
                            ))
                        }

                        {/* <li className="porttfolio-item loaded">

                        </li>
                        <li className="porttfolio-item loaded">

                        </li>
                        <li className="porttfolio-item loaded">

                        </li>
                        <li className="porttfolio-item loaded">

                        </li>
                        <li className="porttfolio-item loaded">

                        </li>
                        <li className="porttfolio-item loaded">

                        </li>
                        <li className="porttfolio-item loaded">

                        </li>
                        <li className="porttfolio-item loaded">

                        </li>
                        <li className="porttfolio-item loaded">

                        </li>
                        <li className="porttfolio-item loaded">

                        </li>
                        <li className="porttfolio-item loaded">
                        </li>
                        <li className="porttfolio-item loaded">

                        </li> */}
                    </ul>
                </div>
            </div>
        </section >
    )
}