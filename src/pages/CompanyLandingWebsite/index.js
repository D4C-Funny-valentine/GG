import React from "react";
import { Box, CssBaseline } from "@mui/material"
import Navigation from "./layout/Navbar/Navigation";
import Footer from "./layout/Footer/Footer";
import { Outlet } from 'react-router-dom'
import { Provider } from "react-redux";
import { store } from "./store";
import CustomThemeProvider from "./config/_theme";
 

const root_main_layout = {
    // minHeight: '100vh'
}

const LandingWebsite = ({children}) => {
      return (
        <Provider store={store}>
            <CustomThemeProvider>
                <CssBaseline/>
                <Box sx={root_main_layout}> 
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