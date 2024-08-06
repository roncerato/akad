import { URL } from "url"

export interface IFilter{
    name: string,
    url: string | URL
}

export const filters: IFilter[] = [
    {
        "name": "latest",
        "url": "https://dummyjson.com/posts?limit=3&skip=30"
    },
    {
        "name": "popular",
        "url": "https://dummyjson.com/posts?sortBy=views&order=desc&limit=3&skip=40"
    },
    {
        "name": "most liked",
        "url": "https://dummyjson.com/posts?limit=3&skip=60"
    }
]