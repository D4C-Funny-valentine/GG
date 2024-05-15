import React, { Suspense } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CompanyWebsite from "../website/CompanyWebsite";
import { Landing, Company, Carrer, Blog, Portfolio } from "../website/CompanyWebsite/screens";
import ErrorRoute from "./ErrorRoute";
// import { PATH } from "../data/_navData";

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Hello world</div>,
    errorElement: <ErrorRoute />,
  },
  {
    path: "/company",
    element: <CompanyWebsite />,
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
