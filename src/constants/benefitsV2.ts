import Lamp from "public/svg/lamp.svg"
import Pulse from "public/svg/pulse.svg"
import Infinite from "public/svg/infinite.svg"
import Options from "public/svg/options.svg"

interface IBenefitsV2 {
    id: string
    Img:  React.FunctionComponent<React.SVGProps<SVGSVGElement>>
    title: string
    description: string
}

export const benefitsV2: IBenefitsV2[] = [
    {
        id: "1",
        Img: Pulse,
        title: "KEEP PULSE GOING",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ."
    },
    {
        id: "2",
        Img: Infinite,
        title: "PASS THE LIMITS",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ."
    },
    {
        id: "3",
        Img: Lamp,
        title: "GREAT IDEAS",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ."
    },
    {
        id: "4",
        Img: Options,
        title: "AWESOME SUPPORT",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ."
    },
]