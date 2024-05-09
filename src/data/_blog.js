const popular_news = [
    {
        url: 'https://assets.maccarianagency.com/backgrounds/img3.jpg',
        title : 'LOREM IPSUM DOLOR SIT AMET',
        description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        author : 'Clara Bertoletti',
        date : new Date(),
        tags: [
            "UX",
            "Design",
            "Themes",
            "Photography"
        ]
    },
    {
        url: 'https://assets.maccarianagency.com/backgrounds/img25.jpg',
        title : 'CONSECTETUR ADIPISCING ELIT',
        description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        author : 'Jhon Anderson',
        date : new Date(),
        tags: [
            "UX",
            "Design",
            "Themes",
            "Photography"
        ]
    }
]

const feature_stories = [
    {
        backdrop_url: 'https://assets.maccarianagency.com/backgrounds/img13.jpg',
        title : "Eiusmod tempor incididunt",
        description : 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem',
        author : {
            profile : 'https://assets.maccarianagency.com/avatars/img1.jpg',
            name : 'Clara Bertoletti',
            create_date : '2023-09-10T00:00:00.000Z'
        }
    },
    {
        backdrop_url : 'https://assets.maccarianagency.com/backgrounds/img14.jpg',
        title : 'Sed ut perspiciatis',
        description: "At vero eos et accusamus et iusto odio dignissimos ducimus",
        author : {
            profile: 'https://assets.maccarianagency.com/avatars/img2.jpg',
            name : 'John Anderson',
            create_date : '2023-08-02T00:00:00.000Z'
        }
    },
    {
        backdrop_url : 'https://assets.maccarianagency.com/backgrounds/img17.jpg',
        title : 'Unde omnis iste natus',
        description: "Qui blanditiis praesentium voluptatum deleniti atque corrupti",
        author : {
            profile: 'https://assets.maccarianagency.com/avatars/img3.jpg',
            name : 'Chary Smith',
            create_date : '2023-03-05T00:00:00.000Z'
        }
    },
    {
        backdrop_url: 'https://assets.maccarianagency.com/backgrounds/img13.jpg',
        title : "Eiusmod tempor incididunt",
        description : 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem',
        author : {
            profile : 'https://assets.maccarianagency.com/avatars/img1.jpg',
            name : 'Clara Bertoletti',
            create_date : '2023-09-10T00:00:00.000Z'
        }
    }
]

export {
    popular_news,
    feature_stories 
}