import React, { Suspense } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import GlobalLoading from "./GlobalLoading";
import ErrorRoute from "./ErrorRoute";
import ROUTES from "@config/_routes";
import ProjectShowCase from "website/ProjectShowCase";
import StartUp from "website/StartUp";
import Market from "website/Market";
import { Landing as StartUpLanding, Company, Carrer, Blog, Portfolio } from "../website/StartUp/screens";
import { Landing as MarketLanding, Orders, Sales, Profile, ProfileInfo, EditProfile, OrderLists, OrderDetail, WishList } from "../website/Market/pages"

const router = createBrowserRouter([
  {
    path: '/',
    element: <ProjectShowCase/>,
    errorElement: <ErrorRoute />,
  },
  {
    path: ROUTES.STARTUP.base,
    element: <StartUp />,
    errorElement: <ErrorRoute />,
    children: [
      {
        index: true,
        element:  <StartUpLanding />,
      },
      {
        path: ROUTES.STARTUP.company,
        element: <Company/>,
      },
      {
        path: ROUTES.STARTUP.carrer,
        element: <Carrer />
      },
      {
        path: ROUTES.STARTUP.blog,
        element: <Blog />
      },
      {
        path: ROUTES.STARTUP.portfolio,
        element: <Portfolio />
      },
    ],
  },
  {
    path: ROUTES.MARKET.base,
    element: <Market/>,
    errorElement: <ErrorRoute/>,
    children: [
      {
        index: true,
        element: <MarketLanding/>,
      },
      {
        path: ROUTES.MARKET.sale,
        element: <Sales/>
      },
      {
        path: ROUTES.MARKET.profile,
        element: <Profile/>,
        children: [
          {
            index: true,
            element: <ProfileInfo/>
          },
          {
            path: ':id',
            element: <EditProfile/>
          }
        ]
      },
      {
        path: ROUTES.MARKET.orders,
        element: <Orders/>,
        children: [
          {
            index: true,
            element: <OrderLists/>
          },
          {
            path: ':id',
            element: <OrderDetail/>
          },
          {
            path: ROUTES.MARKET.wishlist,
            element: <WishList/>
          }
        ]
      }
    ]
  }
]);

const AppRoute = () => {
  return (
    <Suspense
    fallback={
      <GlobalLoading/>
    }
    >
            <RouterProvider
                router={router}
                // fallbackElement={
                //   <div>
                //     <h1>Fallback element</h1>
                //   </div>
                // }
            />
    </Suspense>
  );
};

export default AppRoute;
