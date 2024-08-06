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
        "image": "/jpg/team/1.png",
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
        "image": "/jpg/team/2.png",
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
        "image": "/jpg/team/3.png",
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
        "image": "/jpg/team/4.png",
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
        "image": "/jpg/team/5.png",
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
        "image": "/jpg/team/6.png",
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
        "image": "/jpg/team/7.png",
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
        "image": "/jpg/team/8.png",
        "company": {
            "title": "Full-Stack Developer",
        },
    },
]