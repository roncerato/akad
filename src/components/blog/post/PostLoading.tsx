"use client"
import H6 from "@/components/template/headings/h6";
import "@/styles/blog/post/style.scss"
import H1 from "@/components/template/headings/h1";
import T1 from "@/components/template/texts/t1";
import { Flow_Rounded } from "next/font/google"

const flowRounded = Flow_Rounded({
    weight: "400",
    preload: true,
    subsets: ["latin"]
})
export default function PostLoading() {

    return (
        <div className="post">
            <div className="post-container container">
                <H1>
                    <span className={`${flowRounded.className} loading-text`}>
                        His mother had always taught him
                    </span>
                </H1>
                <div className="post-author" style={{marginBottom: "2rem"}}>
                    <div className="post-author-img-wrap loader">
                    </div>
                    <H6>
                        <span className={`${flowRounded.className} loading-text`}>
                            Ava Harris
                        </span>
                    </H6>
                </div>


                <div className="post-img-container loader">

                </div>

                <T1>
                    <span className={`${flowRounded.className} loading-text`}>
                        His mother had always taught him not to ever think of himself as better than others. He&apos;d tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.
                    </span>
                </T1>
            </div>
        </div>
    );
}
