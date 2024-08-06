"use client"

import Image from "next/image"
import H5 from "../template/headings/h5"
import T2 from "../template/texts/t2"
import H6 from "../template/headings/h6"
import { useEffect, useState } from "react"
import PostLoading from "./PostLoading"
import Post from "./Post"
import { faker } from '@faker-js/faker';

export interface IPosts {
    "id": string,
    "title": string,
    "body": string,
    "tags": string[],
    "reactions": {
        "likes": number,
        "dislikes": number
    },
    "views": number,
    "userId": number,
    "date": string,
    "comments": number
}

export interface IPostApi {
    posts: IPosts[],
    total: number,
    skip: number,
    limit: number
}



export default function Main({url}: {url: string}) {

    const [postsAPI, setPosts] = useState<IPostApi | null>()
    useEffect(() => {
        fetch(url)
            .then(res => res.json() as Promise<IPostApi>)
            .then(res => {
                res.posts.map(item=>{
                    item.date = faker.date.past({ years: 2 }).toLocaleDateString('en-US', {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric'
                    })
                    item.comments = Math.round(Math.random() * 250)
                })
                setPosts(res)
            });
    }, [url])

    return (
        <div className="blog-main-content">
            <ul className="blog-post-list">
                {postsAPI ?
                    postsAPI.posts.map(item => (
                        <Post posts={item} key={Math.random().toString(36).slice(2)}/>
                    ))
                    :
                    [0, 0, 0].map(() => (
                        <PostLoading key={"pl"+Math.random().toString(36).slice(2)}/>
                    ))
                }
            </ul>
        </div>
    )
}