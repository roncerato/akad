import Image from "next/image"
import { ChangeEvent, Dispatch, SetStateAction, useState } from "react"
import H6 from "../template/headings/h6"
import T2 from "../template/texts/t2"

export default function SearchForm({setUrl}: {setUrl: React.Dispatch<React.SetStateAction<string>>}) {

    const [tags, setTags] = useState<string[] | null>()

    const hintOnSearch = async (event: ChangeEvent<HTMLInputElement>) => {
        try {
            let val = event.target.value.toLowerCase()
            if (event.target.value.length < 2) {
                setTags(null)
            }
            else {
                let response = await fetch('https://dummyjson.com/posts/tag-list');
                let data = (await response.json() as Promise<string[]>);
                let arr = (await data).filter(item => item.includes(val, 0))
                setTags(arr)
            }

        }
        catch (error) {
            console.log(error)
        }

    }

    return (
        <div className="sidebar-search-form-wrap">
            <form action="" className="sidebar-search-form" onSubmit={(e) => e.preventDefault()}>
                <input type="text" name="" id="" placeholder="SEARCH..." onChange={hintOnSearch} />
                <button type="submit">
                    <Image src={"/jpg/search.png"} alt={""} fill />
                </button>
            </form>
            {tags && <ul className="search-form-tag-list">
                {tags.length != 0 ? tags.map(item => (
                    <li className="search-form-tag-list-item" key={item}>
                        <button onClick={()=>{
                            setUrl(`https://dummyjson.com/posts/tag/${item}`)
                        }}>
                            <T2>
                                {item}
                            </T2>
                        </button>
                    </li>
                )) : <li className="search-form-tag-list-item">
                    <H6>
                        <li className="search-form-tag-list-item">
                            <T2>
                                NOTHING WAS FOUND
                            </T2>
                        </li>
                    </H6>
                </li>}
            </ul>}
        </div>

    )
}