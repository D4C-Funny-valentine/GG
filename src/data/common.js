import { Email, Phone, FmdGood, Facebook, Instagram, GitHub } from "@mui/icons-material"

const specialPath = ['/', '/pages', '/blog'];


const brandLogo = [
    'https://assets.maccarianagency.com/svg/logos/airbnb-original.svg',
    'https://assets.maccarianagency.com/svg/logos/amazon-original.svg',
    'https://assets.maccarianagency.com/svg/logos/fitbit-original.svg',
    'https://assets.maccarianagency.com/svg/logos/netflix-original.svg',
    'https://assets.maccarianagency.com/svg/logos/google-original.svg',
    'https://assets.maccarianagency.com/svg/logos/paypal-original.svg',
    'https://assets.maccarianagency.com/svg/logos/hubspot-original.svg',
    'https://assets.maccarianagency.com/svg/logos/slack-original.svg',
    'https://assets.maccarianagency.com/svg/logos/mapbox-original.svg',
]

const aboutUs = [
    {
        name : 'Walter White',
        position: ['SEO at Comoti'],
        profile: 'https://assets.maccarianagency.com/avatars/img6.jpg',
        socialMedia : [
            {
                icon: <Facebook />,
                link : 'https://google.com'
            },
            {
                icon: <Instagram />,
                link : 'https://google.com'
            },
            {
                icon: <GitHub />,
                link : 'https://google.com'
            },
        ]
    },
    {
        name : 'Cherry Grace',
        position : ['Project Management'],
        profile : 'https://assets.maccarianagency.com/avatars/img5.jpg',
        socialMedia : [
            {
                icon: <Facebook />,
                link : 'https://google.com'
            },
            {
                icon: <Instagram />,
                link : 'https://google.com'
            },
            {
                icon: <GitHub />,
                link : 'https://google.com'
            },
        ]
    },
    {
        name:  'Clara Bertoletti',
        position: ['Junior Designer'],
        profile : 'https://assets.maccarianagency.com/avatars/img4.jpg',
        socialMedia : [
            {
                icon: <Facebook />,
                link : 'https://google.com'
            },
            {
                icon: <Instagram />,
                link : 'https://google.com'
            },
            {
                icon: <GitHub />,
                link : 'https://google.com'
            },
        ]
    },
    {
        name: 'Jhon Anderson',
        position: ['Senior Frontend Developer', 'Senior Designer'],
        profile : 'https://assets.maccarianagency.com/avatars/img3.jpg',
        socialMedia : [
            {
                icon: <Facebook />,
                link : 'https://google.com'
            },
            {
                icon: <Instagram />,
                link : 'https://google.com'
            },
            {
                icon: <GitHub />,
                link : 'https://google.com'
            },
        ]
    },
    {
        name : 'Thormas Smith',
        position: ['Senior Frontend Developer'],
        profile: 'https://assets.maccarianagency.com/avatars/img2.jpg',
        socialMedia : [
            {
                icon: <Facebook />,
                link : 'https://google.com'
            },
            {
                icon: <Instagram />,
                link : 'https://google.com'
            },
            {
                icon: <GitHub />,
                link : 'https://google.com'
            },
        ]
    },
    {
        name : 'Kukisaki Nobara',
        position: ['Senior Designer', 'Marketing'],
        profile : 'https://assets.maccarianagency.com/avatars/img1.jpg',
        socialMedia : [
            {
                icon: <Facebook />,
                link : 'https://google.com'
            },
            {
                icon: <Instagram />,
                link : 'https://google.com'
            },
            {
                icon: <GitHub />,
                link : 'https://google.com'
            },
        ]
    }
]

const groupImages = [
    {
        img: 'https://assets.maccarianagency.com/backgrounds/img25.jpg',
        alt: 'img 1',
        // rows: 3,
        cols: 2,
    },
    {
        img : 'https://assets.maccarianagency.com/backgrounds/img22.jpg',
        alt : 'img 2',
        // rows: 3,
        cols: 1,
    },
    {
        img : 'https://assets.maccarianagency.com/backgrounds/img24.jpg',
        alt: 'img 3',
        // rows: 3,
        cols: 1,
    },
    {
        img: 'https://assets.maccarianagency.com/backgrounds/img21.jpg',
        alt: 'img 4',
        // rows: 3,
        cols: 2,
    }
]

const contact = [
    {
        method: 'Phone',
        value: '+39 659-657-0133',
        icon: <Phone/>
    },
    {
        method: 'Email',
        value: 'hi@maccarianagency.com',
        icon: <Email/>
    },
    {
        method: 'Address',
        value: 'Via Venini 33, 20147',
        icon: <FmdGood/>
    }
]

const countupRates = [
    {
        number: 12,
        description : '12 years in business.'
    },
    {
        number : 5.2,
        unit : 'K',
        description : '5.200 sold copies',
    },
    {
        number : 99,
        unit : '%',
        description : "99% customer statisfication."
    }
]

export { 
    specialPath,
    brandLogo,
    aboutUs,
    groupImages,
    contact,
    countupRates
}