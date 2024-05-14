// lazy comoponents
// UI
const CustomButton = lazy(() => import("./ui/CustomButton"));
const CustomChip = lazy(() => import("./ui/CustomChip"));
const ThemeSwitchIconButton = lazy(() => import('./ui/ThemeSwitchIconButton'));

const Heading = lazy(() => import("./ui/Heading"));
const Paragraph = lazy(() => import("./ui/Paragraph"));

const CustomInput = lazy(() => import("./ui/CustomInput"));

// common
const CustomCarousel = lazy(() => import("./common/CustomCarousel"));
const CarouselCard = lazy(() => import("./common/CarouselCard"));
const CustomPaperCard = lazy(() => import("./common/CustomPaperCard"));
const HeadingTextGroup = lazy(() => import("./common/HeadingTextGroup"));
const DynamicGridContainer = lazy(() => import("./common/DynamicGridContainer"));
const FactBox = lazy(() => import("./common/FactBox"));
const ImageListContainer = lazy(() => import("./common/ImageListContainer"));
const ImageListCard = lazy(() => import("./common/ImageListCard"));
const CountOnScrollNumber = lazy(() => import("./common/CountOnScrollNumber"));
const GridLayout = lazy(() => import("./common/GridLayout"));
const GoogleMap = lazy(() => import("./common/GoogleMap"));

// motion
const MotionHeroSection = lazy(() => import("./motion/MotionHeroSection"));
const MotionHoverCard = lazy(() => import("./motion/MotionHoverCard"));

export  {
    MotionHeroSection,
    CustomButton,
    CustomChip,
    ThemeSwitchIconButton,
    Heading,
    Paragraph,
    CustomInput,
    CustomPaperCard,
    CustomCarousel,
    HeadingTextGroup,
    CarouselCard,
    DynamicGridContainer,
    FactBox,
    ImageListCard,
    ImageListContainer,
    CountOnScrollNumber,
    GridLayout,
    GoogleMap,
    MotionHoverCard
}