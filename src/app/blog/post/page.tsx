"use client"

import { IPosts } from "@/components/blog/Main";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import H6 from "@/components/template/headings/h6";
import H1 from "@/components/template/headings/h1";
import T1 from "@/components/template/texts/t1";
import PostLoading from "@/components/blog/post/PostLoading";
import "@/styles/blog/post/style.scss"
import { faker } from "@faker-js/faker";

export interface IPostWithAuthorPost extends IPosts {
  firstName: string,
  lastName: string,
  image: string,
  [key: string]: any
}

export default function Post() {
  const [post, setPost] = useState< IPostWithAuthorPost | null>()
  const [likes, setLikes] = useState<number>();
  const searchParams = useSearchParams()
  const id = searchParams.get("id")

  useEffect(() => {
    fetch(`https://dummyjson.com/posts/${id}`)
      .then(res => res.json() as Promise<IPostWithAuthorPost>)
      .then(data => {
        const arr = data;
        fetch(`https://dummyjson.com/users/${data.userId}`)
          .then(res => res.json())
          .then(response => {
            arr.firstname = response.firstName
            arr.lastname = response.lastName
            arr.image = response.image
            arr.comments = Math.round(Math.random() * 500)
            console.log(arr.id)
            setLikes(arr.reactions.likes)
            setPost(arr)
          })
      });
  }, [])

  if (post) {
    return (

      <div className="post">
        <div className="post-container container">
          <H1>
            {post?.title}
          </H1>
          <div className="post-author">
            <div className="post-author-img-wrap">
              <Image src={post.image} alt={`${post.firstname} ${post.lastname}`} fill />
            </div>
            <H6>
              {post.firstname} {post.lastname}
            </H6>
          </div>
          <div className="post-data">
            <H6>
              November 20, 2023
            </H6>

          </div>
          <div className="post-img-container">
            <Image fill src={"/jpg/mountains.jpg"} alt={"mountains"} />
          </div>
          <ul className="post-tag-list">
            {post.tags.map(item => (
              <li className="post-tag">
                <H6>
                  {item}
                </H6>
              </li>
            ))}

          </ul>
          <div className="post-info">
            <div className="post-comments">
              <H6>
                {post.comments}
              </H6>
            </div>
            
            <button className={`${post.reactions.likes == likes ? "blog-post-likes" : "liked"}`} onClick={() => {
                    post.reactions.likes == likes ? setLikes(likes + 1) : setLikes(likes! - 1)
                }}>
              <H6>
                {likes}
              </H6>
            </button>

          </div>
          <T1>
            {post.body}
          </T1>
          <div className="post-views">
            <H6>
              {post.views} views
            </H6>
          </div>
        </div>
      </div>
    );
  }

  return (
    <PostLoading />
  )
}
