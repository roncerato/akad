import Newsletter from "@/components/Newsletter";
import HeroTemplate from "@/components/template/Hero";
import "@/styles/about/style.scss"

export default function About() {
    return (
        <main>
            <HeroTemplate classN={"about"} title={"about us"} breadcrumbs={"about"} />
            <Newsletter />
        </main>
    )
}