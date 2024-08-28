import Smartphone from "public/svg/smartphone.svg";
import Infinite from "public/svg/infinite.svg";
import Wordpress from "public/svg/wordpress.svg";
import Cart from "public/svg/cart.svg";
import Options from "public/svg/options.svg";
import Construct from "public/svg/construct.svg";

interface IBenefit {
    id: string
    Img: React.FunctionComponent<React.SVGProps<SVGSVGElement>>,
    title: string
    description: string
}

export const benefits: IBenefit[] = [
    {
        id: "1",
        Img: Smartphone,
        title: "FULLY RESPONSIVE",
        description: "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In eleifend suscipit enim, eu commodo neque molestie vitae."
    },
    {
        id: "2",
        Img: Infinite,
        title: "UNLIMITED OPTIONS",
        description: "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In eleifend suscipit enim, eu commodo neque molestie vitae."
    },
    {
        id: "3",
        Img: Wordpress,
        title: "WORDPRESS",
        description: "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In eleifend suscipit enim, eu commodo neque molestie vitae."
    },
    {
        id: "4",
        Img: Cart,
        title: "e-commerce",
        description: "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In eleifend suscipit enim, eu commodo neque molestie vitae."
    },
    {
        id: "5",
        Img: Options,
        title: "CUSTOMIZABLE DESIGN",
        description: "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In eleifend suscipit enim, eu commodo neque molestie vitae."
    },
    {
        id: "6",
        Img: Construct,
        title: "SUPPORT",
        description: "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In eleifend suscipit enim, eu commodo neque molestie vitae."
    },
]