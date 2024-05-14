import React, { Suspense } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/_rootLayout";
import ErrorPage from "../views/ErrorPage";
import { Landing, Company, Pages, Blog, Portfolio } from "../views";
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
        element: <Landing/>
      },
      {
        path: "/company",
        element: <Company/>,
      },
      {
        path: "/pages",
        element: <Pages />
      },
      {
        path: "/blog",
        element: <Blog />
      },
      {
        path: "/portfolio",
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
          <CustomThemeProvider>
            <CssBaseline/>
            <RouterProvider
                router={router}
                // fallbackElement={
                //   <div>
                //     <h1>Fallback element</h1>
                //   </div>
                // }
            />
          </CustomThemeProvider> 
    </Suspense>
  );
};

export default AppRoute;
