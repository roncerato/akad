"use client"
import Main from "@/components/blog/Main";
import Sidebar from "@/components/blog/Sidebar";
import { useState } from "react";

export default function BlogSection() {

    const [url, setUrl] = useState<string>("https://dummyjson.com/posts?limit=10")

    return (
        <div className="blog-section">
            <div className="blog-container container">
                <Main url={url}/>
                <Sidebar setUrl={setUrl}/>
            </div>
        </div>
    )
}