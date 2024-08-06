import Advantages from "@/components/home/Advantages";
import Hero from "@/components/home/Hero";
import Portfolio from "@/components/home/Portfolio";
import Newsletter from "@/components/Newsletter";
import { Metadata } from "next/types";

export async function generateMetadata(): Promise<Metadata>{
  
    return {
        title: `AKAD.`
    }
}

export default function Home() {
    
    return (
        <main>
            <Hero />
            <Advantages />
            <Portfolio />
            <Newsletter />
        </main>
    );
}
