import React, { Suspense } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CompanyWebsite from "../website/StartUp";
import { Landing, Company, Carrer, Blog, Portfolio } from "../website/StartUp/screens";
import ErrorRoute from "./ErrorRoute";
import ROUTES from "@config/_routes";
import ProjectShowCase from "website/ProjectShowCase";

const router = createBrowserRouter([
  {
    path: '/',
    element: <ProjectShowCase/>,
    errorElement: <ErrorRoute />,
  },
  {
    path: ROUTES.STARTUP.base,
    element: <CompanyWebsite />,
    errorElement: <ErrorRoute />,
    children: [
      {
        index: true,
        element:  <Landing />,
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
