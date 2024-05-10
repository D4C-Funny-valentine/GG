// urgent components
import { lazy } from "react"
import NavbarLogo from "./UI/logo/NavbarLogo"
import MotionHeroSection from "./motion/MotionHeroSection";

// lazy comoponents

// UI
    // buttons
const CustomButton = lazy(() => import("./UI/buttons/CustomButton"));
const ThemeSwitchIconButton = lazy(() => import("./UI/buttons/ThemeSwitchIconButton"));

    // texts
const Heading = lazy(() => import("./UI/texts/Heading"));
const Paragraph = lazy(() => import("./UI/texts/Paragraph"));

    // textinputs
const CustomInput = lazy(() => import("./UI/textinputs/CustomInput"));

    // logo
const BrandLogo = lazy(() => import("./UI/logo/BrandLogo"));
const BrandLogoShowCase = lazy(() => import("./UI/logo/BrandLogoShowCase"));

    // wrapper
const CustomCarousel = lazy(() => import("./UI/wrapper/CustomCarousel"));

    // customize
const CustomAccordion = lazy(() => import("./UI/customized/CustomAccordion"));
const CustomListItem = lazy(() => import("./UI/customized/CustomListItem"));
const CustomPaperCard = lazy(() => import("./UI/customized/CustomPaperCard"));

// common
const HeadingTextGroup = lazy(() => import("./common/HeadingTextGroup"));
const ServiceGridCardLayout = lazy(() => import("./common/ServiceGridCardLayout"));
const ServiceGridCard = lazy(() => import("./common/ServiceGridCard"));

const DynamicGridContainer = lazy(() => import("./common/DynamicGridContainer"));

const FactBox = lazy(() => import("./common/FactBox"));

const CarouselCard = lazy(() => import("./common/CarouselCard"));

const ImageListContainer = lazy(() => import("./common/ImageListContainer"));
const ImageListCard = lazy(() => import("./common/ImageListCard"));

const CountOnScrollNumber = lazy(() => import("./common/CountOnScrollNumber"));
const NumberCountUpCard = lazy(() => import("./common/NumberCountUpCard"));
const NumberCountUpLayout = lazy(() => import("./common/NumberCountUpLayout"));

const GridLayout = lazy(() => import("./common/GridLayout"));
const HoverCard = lazy(() => import("./common/HoverCard"));

const GoogleMap = lazy(() => import("./common/GoogleMap"));

// intersection 
const DevPlatFormFeatures = lazy(() => import("./intersection/DevPlatFormFeatures"));
const FactLayoutGrid = lazy(() => import("./intersection/FactLayoutGrid"));
const ClassTemplate = lazy(() => import("./intersection/ClassTemplate"));
const GridSectionCard = lazy(() => import("./intersection/GridSectionCard"));

export  {
    MotionHeroSection,
    NavbarLogo,
    // lazy
    CustomButton,
    ThemeSwitchIconButton,
    BrandLogo,
    BrandLogoShowCase,
    Heading,
    Paragraph,
    CustomInput,
    CustomAccordion,
    CustomPaperCard,
    CustomListItem,
    CustomCarousel,
    HeadingTextGroup,
    ServiceGridCardLayout,
    ServiceGridCard,
    FactLayoutGrid,
    DevPlatFormFeatures,
    CarouselCard,
    DynamicGridContainer,
    FactBox,
    ClassTemplate,
    ImageListCard,
    ImageListContainer,
    CountOnScrollNumber,
    NumberCountUpLayout,
    NumberCountUpCard,
    GridLayout,
    HoverCard,
    GoogleMap,
    GridSectionCard
}