import H5 from "../template/headings/h5";
import H6 from "../template/headings/h6";
import T2 from "../template/texts/t2";
import Image from "next/image";
import { IPosts } from "./Main";
import { useState } from "react";
import Link from "next/link";
import CommentIcon from "public/svg/comment.svg"
import HeartIcon from "public/svg/heart.svg"
interface IProps {
    posts: IPosts
}

export default function Post({ posts }: IProps) {

    const [likes, setLikes] = useState<number>(posts.reactions.likes);
    const [heartColor, setHeartColor] = useState<"#CCC" | "#FC4C59">("#CCC")

    return (
        <li className="blog-post-item">
            <div className="blog-post-image-wrap">
                <Image fill src={"/webp/mountains.webp"} alt={"mountains"} />

            </div>
            <div className="blog-post-info">
                <div className="blog-post-time">
                    <H6>
                        {posts.date}
                    </H6>
                </div>
                <div className="blog-post-comments">
                    <CommentIcon width={34} height={34} fill="#ccc"/>
                    <H6>
                        {posts.comments}
                    </H6>
                </div>
                <button className={"blog-post-likes"} onClick={() => {
                    if (posts.reactions.likes == likes) {
                        setLikes(likes + 1)
                        setHeartColor("#FC4C59")
                    }
                    else {
                        setLikes(likes - 1)
                        setHeartColor("#CCC")
                    }
                }}>
                    <HeartIcon width={44} height={44} fill={heartColor} />
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
            <Link href={{
                pathname: `/blog/post/`,
                query: { id: posts.id },
            }}>
                <button className="blog-post-btn-read-more" onClick={() => { }}>
                    <H6>
                        continue reading
                    </H6>
                </button>
            </Link>
        </li>
    )
}