import Newsletter from "@/components/Newsletter";
import Main from "@/components/blog/Main";
import Sidebar from "@/components/blog/Sidebar";
import HeroTemplate from "@/components/template/Hero";
import BlogSection from "@/components/blog/BlogSection";
import "@/styles/blog/style.scss"


export default function Blog() {

    return (
        <main>
            <HeroTemplate classN={"blog"} title={"blog posts"} breadcrumbs={"blog"} />
            <BlogSection/>
            <Newsletter />
        </main>
    )
}