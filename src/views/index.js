import { lazy } from "react";
import Landing from "./Landing"
import Company from "./Company"
import Pages from "./Pages"
import Blog from "./Blog"
import Portfolio from "./Portfolio"

const StartUp = lazy(() => import("./Landing/StartUp"))
const About = lazy(() => import("./Company/About"))
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
    Basic
}
