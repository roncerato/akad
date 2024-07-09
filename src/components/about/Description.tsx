import H3 from "../template/headings/h3";
import T2 from "../template/texts/t2";

export default function Description() {
    return (
        <section className="description-section">
            <div className="description-container container">
                <div className="description-column">
                    <H3>
                        about us
                    </H3>
                    <T2>
                        <sub className="desription-subtitle">
                            We are awesome
                        </sub>
                    </T2>

                    <T2>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.

                    </T2>

                </div>
                <div className="description-column">
                    <H3>
                        What We Do
                    </H3>
                    <T2>
                        <sub className="desription-subtitle">
                            Creative & Digital
                        </sub>
                    </T2>

                    <T2>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.

                    </T2>

                </div>
            </div>

        </section>
    )
}