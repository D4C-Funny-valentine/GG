import { lazy } from "react"
import Landing from "./Landing"
import Orders from "./Orders"
import Profile from "./Profile"
import Sales from "./Sales"

const ProfileInfo = lazy(() => import("./Profile/ProfileInfo"));
const EditProfile = lazy(() => import("./Profile/EditProfile"));
const OrderLists = lazy(() => import("./Orders/OrderLists"));
const OrderDetail = lazy(() => import("./Orders/OrderDetail"));
const WishList = lazy(() => import("./Orders/WishList"));

export {
    Landing,
    Orders,
    Profile,
    Sales,

    ProfileInfo,
    EditProfile,
    OrderLists,
    OrderDetail,
    WishList
}