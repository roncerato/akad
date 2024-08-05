import Button from "../template/Button";
import H3 from "../template/headings/h3";
import H6 from "../template/headings/h6";
import T2 from "../template/texts/t2";
import { prices } from "@/constants/prices";

export default function PricingPlans() {
    return (
        <div className="pricing-plans-section">
            <div className="pricing-plans-container container">
                <H3>
                    Pricing Plans
                </H3>
                <T2>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </T2>
                <ul className="pricing-plans-list">
                    {
                        prices.map((item) => (
                            <li className="price" key={"price"+Math.random().toString(36).slice(2)}>
                                <H3 decoration={false}>
                                    {item.title}
                                </H3>
                                <H6>
                                    ${item.price} Monthly
                                </H6>
                                <ul className="price-services">
                                    {item.services.map((service) => (
                                        <li className="price-service" key={"ps"+Math.random().toString(36).slice(2)}>
                                            <T2>
                                                {service}
                                            </T2>
                                        </li>
                                    ))}

                                </ul>
                                <Button isColored={true}>
                                    GET STARTED
                                </Button>
                            </li>
                        ))
                    }

                </ul>
            </div>
        </div>
    )
}