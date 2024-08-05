import { team } from "@/constants/team";
import H3 from "../template/headings/h3";
import T2 from "../template/texts/t2";
import Image from "next/image";
import T1 from "../template/texts/t1";
import Button from "../template/Button";

export default function Team() {
    return (
        <section className="team-section">
            <div className="team-container container">
                <H3>
                    THE DREAM TEAM
                </H3>
                <T2>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </T2>
                <ul className="team-user-list">
                    {team.map(item => (
                        <li className="team-user" key={"team"+Math.random().toString(36).slice(2)}>
                            <div className="team-user-img-wrap">
                                <Image src={item.image} alt={item.firstName} fill />
                            </div>
                        </li>
                    ))}
                </ul>
                <div className="team-bar">
                    <T1>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
                    </T1>
                    <Button isColored={true}>
                        READ MORE
                    </Button>
                </div>
            </div>
        </section>
    )
}