import Image from "next/image"
import H6 from "../template/headings/h6"
import T3 from "../template/texts/t3"
import T2 from "../template/texts/t2"
import { ChangeEvent, useState, useEffect } from "react"
import { IPosts, IPostApi } from "./Main"
import { filters, IFilter } from "@/constants/filters"
import { faker } from "@faker-js/faker"
import FilterLoading from "./FilterLoading"
import { useRouter } from "next/navigation"
import Link from "next/link"



export default function Filter() {

    const [filterName, setFilterName] = useState<string>("latest");
    const [filterItems, setFilterItems] = useState<IPostApi | null>(null);

    function findFilterByName(filterName: string): IFilter | undefined {
        return filters.find(filter => filter.name.toLowerCase() === filterName.toLowerCase());
    }
    const handleFilterChange = (event: ChangeEvent<HTMLInputElement>) => {
        setFilterName(event.target.value)

        const filter = findFilterByName(event.target.value)
        if (filter) {
            fetch(filter.url)
                .then(data => data.json() as Promise<IPostApi>)
                .then(data => {
                    data.posts.map(item => {
                        item.date = faker.date.past({ years: 2 }).toLocaleDateString('en-US', {
                            month: 'long',
                            day: 'numeric',
                            year: 'numeric'
                        })
                        item.comments = Math.round(Math.random() * 250)
                    })
                    setFilterItems(data)
                })
                .catch(err => { throw new Error })
        }
    }
    useEffect(() => {
        const filter = findFilterByName(filterName);
        if (filter) {
            fetch(filter.url)
                .then(res => res.json())
                .then(data => {
                    data.posts.map((item: { date: string; comments: number }) => {
                        item.date = faker.date.past({ years: 2 }).toLocaleDateString('en-US', {
                            month: 'long',
                            day: 'numeric',
                            year: 'numeric'
                        })
                        item.comments = Math.round(Math.random() * 250)
                    })
                    setFilterItems(data)
                })
                .catch(err => console.error("Error fetching data: ", err));
        }
    }, [filterName]);

    return (
        <div className="sidebar-posts">
            <H6>POSTS</H6>
            <ul className="sidebar-posts-filter-list">
                {filters.map(filter => (
                    <li key={filter.name} className="sidebar-post-filter-item">
                        <label>
                            <input
                                type="radio"
                                name="filter"
                                value={filter.name}
                                checked={filterName === filter.name}
                                onChange={handleFilterChange}
                            />
                            <H6>
                                {filter.name}
                            </H6>
                        </label>
                    </li>
                ))}
            </ul>
            <ul className="sidebar-posts-filter-content">
                {
                    filterItems
                        ? filterItems?.posts.map(post => (
                            <li
                                key={Math.random().toString(36).slice(2)}
                                className="sidebar-posts-filter-content-item">

                                <Link
                                    href={{
                                        pathname: `/blog/post/`,
                                        query: { id: post.id },
                                    }}>
                                    <div className="sidebar-posts-filter-img-wrap">
                                        <Image src={"/jpg/mountains.jpg"} alt={post.title} fill />
                                    </div>
                                    <H6>{post.title}</H6>
                                    <T3>{post.date}</T3>
                                </Link>
                            </li>
                        ))
                        : [0, 0, 0].map(() => (
                            <FilterLoading key={Math.random().toString(36).slice(2)} />
                        ))
                }
            </ul>
        </div>
    )
}