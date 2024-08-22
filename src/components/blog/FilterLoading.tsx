import H6 from "../template/headings/h6";
import T3 from "../template/texts/t3";
import { Flow_Rounded } from "next/font/google"

const flowRounded = Flow_Rounded({
    weight: "400",
    preload: true,
    subsets: ["latin"]
})

export default function FilterLoading() {
    return (
        <li className="sidebar-posts-filter-content-item">
            <div className="sidebar-posts-filter-img-wrap loader">
            </div>
            <H6>
                <span className={`${flowRounded.className} loading-text`}>
                    It was just a burger
                </span>
            </H6>
            <T3>
                <span className={`${flowRounded.className} loading-text`}>
                    March 26, 2024
                </span>
            </T3>
        </li>
    )
}