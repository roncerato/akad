import Newsletter from "@/components/Newsletter";
import Main from "@/components/blog/Main";
import Sidebar from "@/components/blog/Sidebar";
import HeroTemplate from "@/components/template/Hero";
import "@/styles/blog/style.scss"

export default function Blog() {
    return (
        <main>
            <HeroTemplate classN={"blog"} title={"blog posts"} breadcrumbs={"blog"} />
            <div className="blog-section">
                <div className="blog-container container">
                    <Main />
                    <Sidebar />
                </div>
            </div>
            <Newsletter />
        </main>
    )
}