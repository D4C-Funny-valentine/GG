import React, { Suspense } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/_rootLayout";
import ErrorPage from "../views/ErrorPage";
import { Landing, Company, Pages, Blog, Portfolio, About, StartUp, Carrer, Basic } from "../views";
import CustomThemeProvider from "../data/_theme";
import { CssBaseline } from "@mui/material"
// import { PATH } from "../data/_navData";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Landing/>,
        children: [
          {
            index: true,
            element: <StartUp/>
          }
        ]
      },
      {
        path: "/company",
        element: <Company />,
        children: [
          {
            // path: PATH.COMPANY.about,
            index: true,
            element: <About/>
          }
        ]
      },
      {
        path: "/pages",
        element: <Pages />,
        children: [
          {
            // path: PATH.PAGES.carrer,
            index: true,
            element: <Carrer/>
          }
        ]
      },
      {
        path: "/blog",
        element: <Blog />,
        // children: [
        //   {
        //     // path: PATH.BLOG.reach_view,
        //     index : true,
        //     element: <ReachView/>
        //   }
        // ]
      },
      {
        path: "/basic",
        element: <Portfolio />,
        children: [
          {
            // path: PATH.PORTFOLIO.basic,
            index: true,
            element: <Basic/>
          }
        ]
      },
    ],
  },
]);

const AppRoute = () => {
  return (
    <Suspense
    fallback={
      <div style={{ height: "100vh", backgroundColor: "white" }}>Loading.....</div>
    }
    >
          <CustomThemeProvider>
            <CssBaseline/>
            <RouterProvider
                router={router}
                fallbackElement={
                  <div>
                    <h1>Fallback element</h1>
                  </div>
                }
            />
          </CustomThemeProvider> 
    </Suspense>
  );
};

export default AppRoute;
