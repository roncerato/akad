"use client"

import Link from "next/link";
import Button from "./template/Button";
import H3 from "./template/headings/h3";
import H4 from "./template/headings/h4";
import T1 from "./template/texts/t1";

export default function Newsletter() {
    return (
        <section className="newsletter-section">
            <div className="newsletter-container container">
                <div className="newsletter-left">
                    <H3>
                        YOU THINK WE&apos;RE&nbsp;COOL&nbsp;? LET&apos;S WORK TOGETHER
                    </H3>
                    <Link href={"/contacts#contact-form"}>
                        <Button>
                            get in touch
                        </Button>
                    </Link>

                </div>
                <div className="newsletter-right">
                    <H4>
                        STAY INFORMED WITH OUR NEWSLETTER
                    </H4>
                    <T1>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </T1>
                    <form action="" onSubmit={(event) => {
                        event.preventDefault()
                    }}>
                        <input type="email" name="" id="" placeholder="YOUR EMAIL" />
                        <Button isColored={true}>
                            SEND
                        </Button>
                    </form>
                </div>
            </div>
        </section>
    )
}