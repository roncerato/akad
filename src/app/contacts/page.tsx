import Newsletter from "@/components/Newsletter";
import Main from "@/components/contact/Main";
import HeroTemplate from "@/components/template/Hero";
import "@/styles/contacts/style.scss"

export default function Contact() {
    return (
        <main>
            <HeroTemplate classN={"contact"} title={"contact us"} breadcrumbs={"contact"} />
            <Main />
            <Newsletter />
        </main>
    )
}