import { lazy } from "react";
import Landing from "./Landing"
import Company from "./Company"
import Pages from "./Pages"
import Blog from "./Blog"
import Portfolio from "./Portfolio"

// const Landing = lazy(() => import('./Landing'));
// const Company = lazy(() => import("./Company"));
// const Pages = lazy(() => import("./Pages"));
// const Blog = lazy(() => import("./Blog"));
// const Portfolio = lazy(() => import("./Portfolio"));

const StartUp = lazy(() => import("./Landing/StartUp"))
const About = lazy(() => import("./Company/About"))
const Carrer  = lazy(() => import("./Pages/Carrer"))
// const Blog  = lazy(() => import("./Blog"))
const Basic  = lazy(() => import("./Portfolio/Basic"))

export {
    // parrent
    Landing,
    Company,
    Pages,
    Blog,
    Portfolio,

    // child
    StartUp,
    About,
    Carrer,
    Basic
}
