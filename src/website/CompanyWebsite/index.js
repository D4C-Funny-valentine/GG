import React from "react";
import { Box, CssBaseline } from "@mui/material"
import Navigation from "./layout/Navbar/Navigation";
import Footer from "./layout/Footer/Footer";
import { Outlet } from 'react-router-dom'
import { Provider } from "react-redux";
import { store } from "./store";
import CompanyWebsiteCustomThemeProvider from "./config/_theme";

const CompanyWebsite = ({children}) => {
      return (
        <Provider store={store}>
            <CompanyWebsiteCustomThemeProvider>
                <CssBaseline/>
                <Box> 
                    <Navigation/>
                        {children}
                        <Outlet/>
                    <Footer/>
                </Box>
            </CompanyWebsiteCustomThemeProvider>
        </Provider>
      )
}

export default CompanyWebsite;