import Newsletter from "@/components/Newsletter";
import HeroTemplate from "@/components/template/Hero";
import "@/styles/services/style.scss"

export default function Services() {
    return (
        <main>
            <HeroTemplate classN={"services"} title={"our services"} breadcrumbs={"services"} />
            <Newsletter />
        </main>
    )
}