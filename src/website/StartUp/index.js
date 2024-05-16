import React from "react";
import { Box, CssBaseline } from "@mui/material"
import Navigation from "./layout/Navbar/Navigation";
import Footer from "./layout/Footer/Footer";
import { Outlet } from 'react-router-dom'
import { Provider } from "react-redux";
import { persistor, store } from "./store";
import StartUpCustomThemeProvider from "./config/_theme";
import { PersistGate } from "redux-persist/integration/react";

const StartUp = ({children}) => {
      return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <StartUpCustomThemeProvider>
                    <CssBaseline/>
                    <Box> 
                        <Navigation/>
                            {children}
                            <Outlet/>
                        <Footer/>
                    </Box>
                </StartUpCustomThemeProvider>
            </PersistGate>
        </Provider>
      )
}

export default StartUp;