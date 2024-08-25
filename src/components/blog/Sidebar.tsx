import { useEffect, useState } from "react";
import H6 from "../template/headings/h6";
import T2 from "../template/texts/t2";
import Categories from "./Categories";
import Filter from "./Filter";
import SearchForm from "./SearchForm";
import Archives from "./Archives";
import Tags from "./Tags";

interface IProps {
    setUrl: React.Dispatch<React.SetStateAction<string>>;
}

export default function Sidebar({ setUrl }: IProps) {
    const [values, setValues] = useState<string[]>([]);
    const [usedValues, setUsedValues] = useState<string[]>([]);

    useEffect(() => {
        fetch("https://dummyjson.com/posts/tag-list")
            .then((res) => res.json() as Promise<string[]>)
            .then((data) => {
                setValues(data);
            });
    }, []);



    function getRandomVal(quantity: number, setValFunc: React.Dispatch<React.SetStateAction<string[]>>) {
        let arr: string[] = [];
        for (let i = 0; i < quantity; i++) {
            const randomIndex = Math.floor(Math.random() * values.length);
            arr[i] = (values[randomIndex])
        }
        setValFunc(arr)
    }
    
    return (
        <aside className="sidebar">
            <SearchForm setUrl={setUrl} />
            <Filter />
            <Categories setUrl={setUrl} getRandomVal={getRandomVal} values={values}/>
            <Tags setUrl={setUrl} values={values} getRandomVal={getRandomVal} />
            <Archives setUrl={setUrl} values={values} getRandomVal={getRandomVal} />
        </aside>
    );
}
