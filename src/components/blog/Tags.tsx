import { useEffect, useState } from "react";
import H6 from "../template/headings/h6";
import T2 from "../template/texts/t2";

interface TagsProps {
    setUrl: React.Dispatch<React.SetStateAction<string>>;
    values: string[];
    getRandomVal: ( quantity: number, setValFunc: React.Dispatch<React.SetStateAction<string[]>>) => void;
}

const Tags: React.FC<TagsProps> = ({ setUrl, values, getRandomVal }) => {
    const [randomValues, setRandomValues] = useState<string[]>([]);

    useEffect(() => {
        if (values.length > 0) {
            getRandomVal(10, setRandomValues);
        }
    }, [values]); 

    return (
        <div className="sidebar-tags">
            <H6>TAGS</H6>
            <ul className="sidebar-tags-list">
                {randomValues.map((value, index) => (
                    <li className="sidebar-tag-item" key={Math.random().toString(36).slice(2)} onClick={()=>setUrl(`https://dummyjson.com/posts/tag/${value}`)}>
                        <T2>{value}</T2>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Tags;
