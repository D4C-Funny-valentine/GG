import React from "react";
import { Box, CssBaseline } from "@mui/material"
import Navigation from "./layout/Navbar/Navigation";
import Footer from "./layout/Footer/Footer";
import { Outlet } from 'react-router-dom'
import { Provider } from "react-redux";
import { store } from "./store";
import CustomThemeProvider from "./config/_theme";

const LandingWebsite = ({children}) => {
      return (
        <Provider store={store}>
            <CustomThemeProvider>
                <CssBaseline/>
                <Box> 
                    <Navigation/>
                        {children}
                        <Outlet/>
                    <Footer/>
                </Box>
            </CustomThemeProvider>
        </Provider>
      )
}

export default LandingWebsite;