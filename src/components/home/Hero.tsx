import Link from "next/link";
import Button from "../template/Button";
import H1 from "../template/headings/h1";
import H3 from "../template/headings/h3";
import H5 from "../template/headings/h5";
import T1 from "../template/texts/t1";
import T2 from "../template/texts/t2";
import Image from "next/image";
import historyImage from "public/jpg/history-img.png"
export default function Hero() {
    return (
        <section className="hero-section">
            <div className="hero-container">
                <div className="container">
                    <div className="hero-main">
                        <H5>
                            WE&apos;RE
                        </H5>
                        <H1>
                            CREATIVE AGENCY
                        </H1>
                        <T1>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </T1>
                    </div>
                    <div className="hero-history">
                        <div className="hero-history-image-wrap">
                            <Image src={historyImage} alt={""} />
                        </div>
                        <div className="hero-history-text">
                            <H3>
                                History of agency
                            </H3>
                            <T2>
                                Porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi modi tempora incidunt ut labore.
                            </T2>
                            <Link href="/about#description">
                                <Button isColored={true}>
                                    Read more
                                </Button>
                            </Link>

                        </div>

                    </div>
                </div>

            </div>
        </section>
    )
}