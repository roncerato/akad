import Newsletter from "@/components/Newsletter";
import Benefits from "@/components/about/Benefits";
import Description from "@/components/about/Description";
import Team from "@/components/about/Team";
import TestimonialsClients from "@/components/about/TestimonialsClients";
import HeroTemplate from "@/components/template/Hero";
import "@/styles/about/style.scss"

export default function About() {
    return (
        <main>
            <HeroTemplate classN={"about"} title={"about us"} breadcrumbs={"about"} />
            <Description />
            <Benefits />
            <Team />
            <TestimonialsClients />
            <Newsletter />
        </main>
    )
}