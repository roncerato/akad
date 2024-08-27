interface ITeam {
    "id": number,
    "firstName": string,
    "lastName": string,
    "email": string,
    "phone": string,
    "image": string,
    "company": {
        "title": string,
    },
}

export const team: ITeam[] = [
    {
        "id": 1,
        "firstName": "Michael",
        "lastName": "Williams",
        "email": "michael.williams@x.dummyjson.com",
        "phone": "+49 258-627-6644",
        "image": "/webp/about/team/1.webp",
        "company": {
            "title": "Team Leader",
        },
    },
    {
        "id": 2,
        "firstName": "Emily",
        "lastName": "Johnson",
        "email": "emily.johnson@x.dummyjson.com",
        "phone": "+81 965-431-3024",
        "image": "/webp/about/team/2.webp",
        "company": {
            "title": "Designer",
        },
    },
    {
        "id": 3,
        "firstName": "James",
        "lastName": "Davis",
        "email": "james.davis@x.dummyjson.com",
        "phone": "+49 614-958-9364",
        "image": "/webp/about/team/3.webp",
        "company": {
            "title": "Tester",
        },
    },
    {
        "id": 4,
        "firstName": "Sophia",
        "lastName": "Brown",
        "email": "sophia.brown@x.dummyjson.com",
        "phone": "+81 210-652-2785",
        "image": "/webp/about/team/4.webp",
        "company": {
            "title": "Backend Developer",
        },
    },
    {
        "id": 5,
        "firstName": "Alexander",
        "lastName": "Jones",
        "email": "alexander.jones@x.dummyjson.com",
        "phone": "+61 260-824-4986",
        "image": "/webp/about/team/5.webp",
        "company": {
            "title": "Frontend Developer",
        },
    },
    {
        "id": 6,
        "firstName": "Ethan",
        "lastName": "Martinez",
        "email": "ethan.martinez@x.dummyjson.com",
        "phone": "+92 933-608-5081",
        "image": "/webp/about/team/6.webp",
        "company": {
            "title": "UX/UI Designer",
        },
    },
    {
        "id": 7,
        "firstName": "Emma",
        "lastName": "Miller",
        "email": "emma.miller@x.dummyjson.com",
        "phone": "+91 759-776-1614",
        "image": "/webp/about/team/7.webp",
        "company": {
            "title": "Quality Assurance Engineer",
        },
    },
    {
        "id": 8,
        "firstName": "Liam",
        "lastName": "Garcia",
        "email": "liam.garcia@x.dummyjson.com",
        "phone": "+92 870-217-6201",
        "image": "/webp/about/team/8.webp",
        "company": {
            "title": "Full-Stack Developer",
        },
    },
]