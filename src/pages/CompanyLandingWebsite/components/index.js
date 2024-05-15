// urgent components
import { lazy } from "react"
import NavbarLogo from "./NavbarLogo"

// lazy comoponents
const BrandLogo = lazy(() => import("./BrandLogo"));
const BrandLogoShowCase = lazy(() => import("./BrandLogoShowCase"));

const CustomAccordion = lazy(() => import("./CustomAccordion"));
const CustomListItem = lazy(() => import("./CustomListItem"));

const ServiceGridCardLayout = lazy(() => import("./ServiceGridCardLayout"));
const ServiceGridCard = lazy(() => import("./ServiceGridCard"));

const NumberCountUpCard = lazy(() => import("./NumberCountUpCard"));
const NumberCountUpLayout = lazy(() => import("./NumberCountUpLayout"));

const ProfileCard = lazy(() => import("./ProfileCard"));

const UsagePattern = lazy(() => import("./UsagePattern"));

const DevPlatFormFeatures = lazy(() => import("./DevPlatFormFeatures"));
const FactLayoutGrid = lazy(() => import("./FactLayoutGrid"));
const ClassTemplate = lazy(() => import("./ClassTemplate"));
const GridSectionCard = lazy(() => import("./GridSectionCard"));

export  {
    NavbarLogo,
    BrandLogo,
    BrandLogoShowCase,
    CustomAccordion,
    CustomListItem,
    ServiceGridCardLayout,
    ServiceGridCard,
    FactLayoutGrid,
    UsagePattern,
    DevPlatFormFeatures,
    ClassTemplate,
    NumberCountUpLayout,
    NumberCountUpCard,
    ProfileCard,
    GridSectionCard,
}