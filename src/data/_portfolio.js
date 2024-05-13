import TipsAndUpdatesOutlinedIcon from '@mui/icons-material/TipsAndUpdatesOutlined';
import DevicesOutlinedIcon from '@mui/icons-material/DevicesOutlined';
import PersonalVideoOutlinedIcon from '@mui/icons-material/PersonalVideoOutlined';
import CastForEducationOutlinedIcon from '@mui/icons-material/CastForEducationOutlined';
import HttpOutlinedIcon from '@mui/icons-material/HttpOutlined';

const showCases = (theme) => {  
    const showcases = [
        {
            title : 'Goby',
            description : 'Electric toothbrush, designed for you',
            backdrop_image : 'https://assets.maccarianagency.com/backgrounds/img48.jpg',
            backgroundColor : theme.palette.navy.main
        },
        {
            title : 'Nike',
            description : 'Just do it',
            backdrop_image: 'https://assets.maccarianagency.com/backgrounds/img45.jpg',
            backgroundColor : theme.palette.scarlet.main
        },
        {
            title : 'Curology',
            description: 'Curology custom skincare',
            backdrop_image: 'https://assets.maccarianagency.com/backgrounds/img47.jpg',
            backgroundColor: theme.palette.rose.main
        },
        {
            title : 'Trek',
            description : "The world's best bikes and cycling gear",
            backdrop_image : 'https://assets.maccarianagency.com/backgrounds/img43.jpg',
            backgroundColor: theme.palette.coal.main
        }
    ]
    return showcases
}

const developmentServices = [
    {
        icon: <TipsAndUpdatesOutlinedIcon/>,
        title : 'Idea',
        description : 'We meet with your team to know more about your idea, project and goal. After that, our team sits to create an action plan and proposal for your project.'
    },
    {
        icon : <DevicesOutlinedIcon/>,
        title : 'Design',
        description : "We start by designing a mockup or prototype of your website/app, and present it to you. Once with the initial mockup, we start the revision process to perfect it."
    },
    {
        icon : <PersonalVideoOutlinedIcon/>,
        title: 'Development',
        description: "We develop your website using the best practices and standards, so you have a perfectly responsive, lightning fast, and super scalable website."
    },
    {
        icon : <HttpOutlinedIcon/>,
        title : 'Launch & Maintenance',
        description : "When the project is ready, we help you to launch it and push it live. After that, we meet with your team to train them on how to edit, update and scale it."
    }
]

export {
    showCases,
    developmentServices
}
