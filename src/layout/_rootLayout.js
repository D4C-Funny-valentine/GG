import React from "react";
import { Box } from "@mui/material"
import Navigation from "./Navbar/Navigation";
import Footer from "./Footer/Footer";
import { Outlet } from 'react-router-dom'
 

const root_main_layout = {
    // minHeight: '100vh'
}

const RootLayout = ({children}) => {
      return (
        <Box sx={root_main_layout}> 
            <Navigation/>
                {children}
                <Outlet/>
            <Footer/>
        </Box>
      )
}

export default RootLayout;