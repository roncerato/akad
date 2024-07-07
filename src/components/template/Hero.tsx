import H2 from "../template/headings/h2";
import H6 from "../template/headings/h6";

interface IProps {
    classN: string
    title: string
    breadcrumbs: string
}

export default function HeroTemplate({ classN, title, breadcrumbs }: IProps) {
    return (
        <div className={`${classN}-hero-section hero-section-template`}>
            <div className={`${classN}-hero-container hero-container-template`}>
                <div className="container">
                    <H2>
                        {title.toUpperCase()}
                    </H2>
                    <H6>
                        HOME / {breadcrumbs.toUpperCase()}
                    </H6>
                </div>

            </div>
        </div>
    )
}