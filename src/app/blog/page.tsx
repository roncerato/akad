import Newsletter from "@/components/Newsletter";
import HeroTemplate from "@/components/template/Hero";
import "@/styles/blog/style.scss"

export default function Blog() {
    return (
        <main>
            <HeroTemplate classN={"blog"} title={"blog posts"} breadcrumbs={"blog"} />
            <Newsletter />
        </main>
    )
}