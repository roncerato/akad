import H5 from "../template/headings/h5";
import H6 from "../template/headings/h6";
import T2 from "../template/texts/t2";
import Image from "next/image";
import { IPosts } from "./Main";
import { useState } from "react";
interface IProps {
    posts: IPosts
}

export default function Post({ posts }: IProps) {

const [likes, setLikes] = useState<number>(posts.reactions.likes);


    return (
        <li className="blog-post-item">
            <div className="blog-post-image-wrap">
                <Image fill src={"/jpg/mountains.jpg"} alt={"mountains"} />

            </div>
            <div className="blog-post-info">
                <div className="blog-post-time">
                    <H6>
                        {posts.date}
                    </H6>
                </div>
                <div className="blog-post-comments">
                    <H6>
                       {posts.comments}
                    </H6>
                </div>
                <button className={`${posts.reactions.likes == likes ? "blog-post-likes" :"liked"}`} onClick={()=>{
                    posts.reactions.likes == likes ? setLikes(likes + 1) : setLikes(likes - 1)
                }}>
                    <H6>
                        {likes}
                    </H6>
                </button>
            </div>
            <H5>
                {posts.title}
            </H5>
            <T2>
                {posts.body}
            </T2>
            <button className="blog-post-btn-read-more">
                <H6>
                    continue reading
                </H6>
            </button>
        </li>
    )
}