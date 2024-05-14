import React, { Suspense } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LandingWebsite from "../pages/CompanyLandingWebsite";
import ErrorRoute from "../views/ErrorRoute";
import { Landing, Company, Carrer, Blog, Portfolio } from "../pages/CompanyLandingWebsite/screens";
import { MotionHeroSection } from "../pages/CompanyLandingWebsite/components";
// import { PATH } from "../data/_navData";

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>
      <MotionHeroSection style={{height: '100vh'}} url="https://assets.maccarianagency.com/backgrounds/img44.jpg"/>
    </div>,
    errorElement: <ErrorRoute />,
  },
  {
    path: "/landing",
    element: <LandingWebsite />,
    errorElement: <ErrorRoute />,
    children: [
      {
        index: true,
        element:  <Landing />,
      },
      {
        path: "company",
        element: <Company/>,
      },
      {
        path: "carrer",
        element: <Carrer />
      },
      {
        path: "blog",
        element: <Blog />
      },
      {
        path: "portfolio",
        element: <Portfolio />
      },
    ],
  },
]);

const AppRoute = () => {
  return (
    <Suspense
    fallback={
      <div style={{ height: "100vh", backgroundColor: "white" }}/>
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
