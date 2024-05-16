import React from "react";
import { Box, Button, CssBaseline } from "@mui/material"
import ProjectShowCaseCustomThemeProvider from "./config/_theme";
import { CustomButton } from "@globalComponents/ui";

const ProjectShowCase = ({children}) => {
      return (
        <ProjectShowCaseCustomThemeProvider>
            <CssBaseline/>
            <Box sx={{display : 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}> 
              <CustomButton variant="contained" size="large">
                Browsers Pages
              </CustomButton>
            </Box>
        </ProjectShowCaseCustomThemeProvider>
      )
}

export default ProjectShowCase;