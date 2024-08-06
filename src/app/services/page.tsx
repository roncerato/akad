import Newsletter from "@/components/Newsletter";
import Benefits from "@/components/services/Benefits";
import PricingPlans from "@/components/services/PricingPlans";
import WhatWeDo from "@/components/services/WhatWeDo";
import HeroTemplate from "@/components/template/Hero";
import "@/styles/services/style.scss"

export default function Services() {
    return (
        <main>
            <HeroTemplate classN={"services"} title={"our services"} breadcrumbs={"services"} />
            <WhatWeDo />
            <Benefits />
            <PricingPlans/>
            <Newsletter />
        </main>
    )
}