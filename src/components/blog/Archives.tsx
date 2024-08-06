import { useEffect, useState } from "react";
import H6 from "../template/headings/h6";
import T2 from "../template/texts/t2";

interface CategoriesProps {
    setUrl: React.Dispatch<React.SetStateAction<string>>;
    values: string[];
    getRandomVal: (quantity: number, setValFunc: React.Dispatch<React.SetStateAction<string[]>>) => void;
}


const Archives: React.FC<CategoriesProps> = ({ setUrl, values, getRandomVal }) => {
    const [randomValues, setRandomValues] = useState<string[]>([]);
    const [valuesQuantity, setValueQuantity] = useState<number[]>([]);

    useEffect(() => {
        if (values && values.length > 0) {
            getRandomVal(5, setRandomValues);
        }
    }, [values]);

    useEffect(() => {
        if (randomValues.length > 0) {
            const fetchQuantities = async () => {
                const quantities = await Promise.all(randomValues.map(async (item) => {
                    const res = await fetch(`https://dummyjson.com/posts/tag/${item}`);
                    const data = await res.json();
                    return data.posts.length;
                }));
                setValueQuantity(quantities);
            };

            fetchQuantities();
        }
    }, [randomValues]);

    return (
        <div className="sidebar-categories">
            <H6>Archives</H6>
            <ul className="sidebar-categories-list">
                {randomValues.map((item, index) => (
                    <li className="siddebar-categories-item" key={Math.random().toString(36).slice(2)} onClick={()=>setUrl(`https://dummyjson.com/posts/tag/${item}`)}>
                        <T2>{item}</T2>
                        <T2>{valuesQuantity[index]}</T2>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Archives;
