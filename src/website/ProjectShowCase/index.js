import React from "react";
import { Box, CssBaseline } from "@mui/material"
import ProjectShowCaseCustomThemeProvider from "./config/_theme";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import { persistor, store } from "./store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import MainShowCase from "./page/MainShowCase";

const ProjectShowCase = () => {
      return (
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <ProjectShowCaseCustomThemeProvider>
                <CssBaseline/>
                <Box sx={{display: 'flex', flexDirection: 'column', height: '100vh'}}> 
                    <Navbar/>
                    <MainShowCase/>
                    <Footer/>
                </Box>
            </ProjectShowCaseCustomThemeProvider>
          </PersistGate>
        </Provider>
      )
}

export default ProjectShowCase;