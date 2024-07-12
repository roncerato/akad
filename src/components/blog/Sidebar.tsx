"use client"

import Image from "next/image"
import H6 from "../template/headings/h6"
import T3 from "../template/texts/t3"
import T2 from "../template/texts/t2"

export default function Sidebar() {
    return (
        <aside className="sidebar">
            <form action="" className="sidebar-search-form" onSubmit={(e) => e.preventDefault()}>
                <input type="text" name="" id="" placeholder="SEARCH..." />
                <button type="submit">
                    <Image src={"/jpg/search.png"} alt={""} fill />
                </button>
            </form>

            <div className="sidebar-posts">
                <H6>POSTS</H6>
                <ul className="sidebar-posts-filter-list">
                    <li className="sidebar-post-filter-item sidebar-post-filter-item-active">
                        <button>
                            <H6>
                                latest
                            </H6>
                        </button>
                    </li>
                    <li className="sidebar-post-filter-item ">
                        <button>
                            <H6>
                                popular
                            </H6>
                        </button>


                    </li>
                    <li className="sidebar-post-filter-item">
                        <button>
                            <H6>
                                comments
                            </H6>
                        </button>


                    </li>
                </ul>
                <ul className="sidebar-posts-filter-content">
                    <li className="sidebar-posts-filter-content-item">
                        <div className="sidebar-posts-filter-img-wrap">
                            <Image src={"/jpg/mountains.jpg"} alt={""} fill />
                        </div>
                        <H6>Magna mollis ultricies</H6>
                        <T3>
                            3th oct 2012
                        </T3>
                    </li>
                    <li className="sidebar-posts-filter-content-item">
                        <div className="sidebar-posts-filter-img-wrap">
                            <Image src={"/jpg/mountains.jpg"} alt={""} fill />
                        </div>
                        <H6>Magna mollis ultricies</H6>
                        <T3>
                            3th oct 2012
                        </T3>
                    </li>
                    <li className="sidebar-posts-filter-content-item">
                        <div className="sidebar-posts-filter-img-wrap">
                            <Image src={"/jpg/mountains.jpg"} alt={""} fill />
                        </div>
                        <H6>Magna mollis ultricies</H6>
                        <T3>
                            3th oct 2012
                        </T3>
                    </li>

                </ul>
            </div>

            <div className="sidebar-categories">
                <H6>Categories</H6>
                <ul className="sidebar-categories-list">
                    <li className="siddebar-categories-item">
                        <T2>
                            Business
                        </T2>
                        <T2>
                            15
                        </T2>
                    </li>
                    <li className="siddebar-categories-item">
                        <T2>
                            photography
                        </T2>
                        <T2>
                            17
                        </T2>
                    </li>
                    <li className="siddebar-categories-item">
                        <T2>
                            Journal
                        </T2>
                        <T2>
                            22
                        </T2>
                    </li>
                    <li className="siddebar-categories-item">
                        <T2>
                            Web development
                        </T2>
                        <T2>
                            30
                        </T2>
                    </li>
                </ul>
            </div>

            <div className="sidebar-tags">
                <H6>TAGS</H6>
                <ul className="sidebar-tags-list">
                    <li className="sidebar-tag-item">
                        <T2>
                            HTML
                        </T2>

                    </li>
                    <li className="sidebar-tag-item">
                        <T2>
                            CSS
                        </T2>

                    </li>
                    <li className="sidebar-tag-item">
                        <T2>
                            JavaScript
                        </T2>

                    </li>
                    <li className="sidebar-tag-item">
                        <T2>
                            Bootstrap
                        </T2>

                    </li>
                    <li className="sidebar-tag-item">
                        <T2>
                            Tailwind
                        </T2>

                    </li>
                    <li className="sidebar-tag-item">
                        <T2>
                            React
                        </T2>

                    </li>
                    <li className="sidebar-tag-item">
                        <T2>
                            nextjs
                        </T2>

                    </li>
                    <li className="sidebar-tag-item">
                        <T2>
                            React native
                        </T2>

                    </li>

                </ul>
            </div>
            <div className="sidebar-categories">
                <H6>ARCHIVES</H6>
                <ul className="sidebar-categories-list">
                    <li className="siddebar-categories-item">
                        <T2>
                            Business
                        </T2>
                        <T2>
                            15
                        </T2>
                    </li>
                    <li className="siddebar-categories-item">
                        <T2>
                            photography
                        </T2>
                        <T2>
                            17
                        </T2>
                    </li>
                    <li className="siddebar-categories-item">
                        <T2>
                            Journal
                        </T2>
                        <T2>
                            22
                        </T2>
                    </li>
                    <li className="siddebar-categories-item">
                        <T2>
                            Web development
                        </T2>
                        <T2>
                            30
                        </T2>
                    </li>
                </ul>
            </div>
        </aside>
    )
}