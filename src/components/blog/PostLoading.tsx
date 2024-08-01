import H5 from "../template/headings/h5";
import H6 from "../template/headings/h6";
import T2 from "../template/texts/t2";
import { Flow_Rounded } from "next/font/google"

const flowRounded = Flow_Rounded({
    weight: "400",
    preload: true,
    subsets: ["latin"]
})

export default function PostLoading() {
    return (
        <li className="blog-post-item">
            <div className="blog-post-image-wrap loader">


            </div>
            <div className={`blog-post-info loading-text`}>

                <H6>
                    <span className={`${flowRounded.className} loading-text`}>
                        October 13, 2015
                    </span>
                </H6>


                <H6>
                    <span className={`${flowRounded.className} loading-text`}>
                        0
                    </span>
                </H6>

                <H6>
                    <span className={`${flowRounded.className} loading-text`}>
                        0
                    </span>
                </H6>

            </div>
            <H5>
                <span className={`${flowRounded.className} loading-text`}>
                    THE BIG LEAGUES OUR TURN STRAIGHTNIN
                </span>
            </H5>
            <T2>
                <span className={`${flowRounded.className} loading-text`}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </span>

            </T2>
        </li>
    )
}