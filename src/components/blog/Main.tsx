import Image from "next/image"
import H5 from "../template/headings/h5"
import T2 from "../template/texts/t2"
import H6 from "../template/headings/h6"

export default function Main() {
    return (
        <div className="blog-main-content">
            <ul className="blog-post-list">
                <li className="blog-post-item">
                    <div className="blog-post-image-wrap">
                        <Image fill src={"/jpg/mountains.jpg"} alt={"mountains"} />

                    </div>
                    <div className="blog-post-info">
                        <div className="blog-post-time">
                            <H6>
                                October 13, 2015
                            </H6>
                        </div>
                        <div className="blog-post-comments">
                            <H6>
                                8
                            </H6>
                        </div>
                        <button className="blog-post-likes">
                            <H6>
                                15
                            </H6>
                        </button>
                    </div>
                    <H5>
                        THE BIG LEAGUES OUR TURN STRAIGHTNIN
                    </H5>
                    <T2>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </T2>
                    <button className="blog-post-btn-read-more">
                        <H6>
                            continue reading
                        </H6>
                    </button>
                </li>
                <li className="blog-post-item">
                    <div className="blog-post-image-wrap">
                        <Image fill src={"/jpg/mountains.jpg"} alt={"mountains"} />

                    </div>
                    <div className="blog-post-info">
                        <div className="blog-post-time">
                            <H6>
                                October 13, 2015
                            </H6>
                        </div>
                        <div className="blog-post-comments">
                            <H6>
                                8
                            </H6>
                        </div>
                        <button className="blog-post-likes">
                            <H6>
                                15
                            </H6>
                        </button>
                    </div>
                    <H5>
                        THE BIG LEAGUES OUR TURN STRAIGHTNIN
                    </H5>
                    <T2>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </T2>
                    <button className="blog-post-btn-read-more">
                        <H6>
                            continue reading
                        </H6>
                    </button>
                </li>
            </ul>
        </div>
    )
}