import React from "react";
import { Box, CssBaseline } from "@mui/material"
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import { persistor, store } from "./store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import MainShowCase from "./page/MainShowCase";
import CommonThemeProvider from "@config/_common-theme";

const ProjectShowCase = () => {
      return (
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <CommonThemeProvider>
                <CssBaseline/>
                <Box sx={{display: 'flex', flexDirection: 'column', height: '100vh'}}> 
                    <Navbar/>
                    <MainShowCase/>
                    <Footer/>
                </Box>
            </CommonThemeProvider>
          </PersistGate>
        </Provider>
      )
}

export default ProjectShowCase;