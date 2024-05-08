// mui icons
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import ExtensionOutlinedIcon from '@mui/icons-material/ExtensionOutlined';
import PaletteOutlinedIcon from '@mui/icons-material/PaletteOutlined';
import LoopOutlinedIcon from '@mui/icons-material/LoopOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

// hero section

// services section
const services = [
   {
    icon: <CodeOutlinedIcon/>,
    title: 'Web Design',
    description: 'We design and develop beautiful, lightning fast, scalable, and marketing-focused websites tailored to grow your business.'
   },
   {
    icon: <DarkModeOutlinedIcon/>,
    title : 'UI / UX Design',
    description: 'We craft great user centered interfaces for web and mobile apps. We ensure to deliver intuitive and seamless experiences.'
   },
   {
    icon : <ExtensionOutlinedIcon/>,
    title : 'Product Design',
    description: 'We help you to carefully improve your digital product to deliver a great user experience, grow its user base and increase retention.'
   },
   {
    icon : <PaletteOutlinedIcon/>,
    title : 'Branding',
    description: 'We transform businesses into brands through high quality brand identity design.'
   },
   {
    icon : <LoopOutlinedIcon/>,
    title : 'Optimization',
    description: 'We help you optimize your website or mobile app to increase your conversion rates.'
   },
   {
    icon : <FavoriteBorderOutlinedIcon/>,
    title : 'Automation',
    description: 'We help your business gain leverage and efficiency through smart automation.'
   }
]

// development features
const dev_platform = [
    {
        title : 'All features'
    },
    {
        title : 'Email support'
    },
    {
        title : 'Google Ads'
    },
    {
        title : 'SSO via Google'
    },
    {
        title : 'API access'
    },
    {
        title : 'Facebook Ads'
    }
] 


// feature section
const features = [
    {
        title : 'Your brand platform',
        description : 'Monetize your website and manage all guest interactions with your own brand, logo and domains.',
        img: 'https://assets.maccarianagency.com/svg/illustrations/illustration4.svg',
    },
    {
        title : 'Mobile compatible platform',
        description: 'Introduce your brand-new mobile friendly website to your customers. Seamlessly integrates with WiFi hardware and marketing automation software.',
        img: 'https://assets.maccarianagency.com/svg/illustrations/illustration1.svg'
    },
    {
        title: 'Simple customer dashboards',
        description: 'Give sub-users access to a simplified dashboard with limited permission levels to offer remote management and real-time analytics',
        img : 'https://assets.maccarianagency.com/svg/illustrations/illustration2.svg'
    }
]


export {
    services,
    dev_platform,
    features,
}