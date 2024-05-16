import React from "react";
import { AppBar, Toolbar, Box, Container, Button, Typography } from "@mui/material";
import { ThemeSwitchIconButton } from "@globalComponents/index"
import CustomLink from "./CustomLink";
import { useLocation } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import CustomDrawer from "./CustomDrawer";
import { useMediaQueryDevice, useScrollNavbar } from "@hooks/index"
import { specialPath } from "../../data/_navData";
import { useDrawer, useThemeSetting } from "../../features";
import { NavbarLogo } from "../../components";
import ROUTES from "@config/_routes";

const Navigation = () => {
  const { pathname } = useLocation();
  const {mode} = useThemeSetting();
  // change navbar color when scrolling
  const { tablet } = useMediaQueryDevice();
  const { isScrolled } = useScrollNavbar(40);

  const getNavbarColor = () => {
    if ( isScrolled  && mode === 'light'){
      return 'inherit';
    } else if (specialPath.includes(pathname) || mode === 'dark'){
      return '#fff';
    } else {
      return 'inherit';
    }
  };

  return (
        <>
          <Container maxWidth="lg" sx={{color: getNavbarColor() }}>
            <UpperNavBar/>
          </Container>
          <AppBar 
            position="sticky" 
            sx={{
              top: 0, 
              color: getNavbarColor(), py: 1
            }} 
            color={
              pathname === ROUTES.STARTUP.base && !isScrolled  
              ? 'transparent' : isScrolled  
              ? 'inherit' : 'transparent'
            } 
            component={'header'} 
            elevation={isScrolled ? 1 : 0}
          >
            <Container maxWidth="lg" sx={{position: 'relative'}}>
              <LowerNavBar isScroll={isScrolled} tablet={tablet} mode={mode}/>
            </Container>
          </AppBar>
        </>
  );
};

const UpperNavBar = () => {
  const {mode, changeMode} = useThemeSetting();
  return (
    <Toolbar sx={{justifyContent: 'flex-end', alignItems: 'center', gap: { xs : '0.5rem', md : '1rem' }, position: 'relative', zIndex: 5, bgcolor: 'transparent'}} style={{padding: 0, minHeight: '40px', paddingTop: 3}}>
      <Box sx={{display: 'flex', alignItems: "center", gap: 1}}>
        <Typography variant="body1">Demos</Typography>
        <Box>
          <Box sx={{bgcolor: 'primary.main', minWidth: '35px', height: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: 1, fontSize: theme => theme.typography.caption}}>
            new
          </Box>
        </Box>
      </Box>
      <Typography variant="body1">Components</Typography>
      <Typography variant="body1">Docs</Typography>
      <ThemeSwitchIconButton mode={mode} onClick={changeMode}/>
  </Toolbar>
  )
}

const LowerNavBar = ({isScroll, tablet, mode}) => {

  const { open, onOpenDrawer } = useDrawer();

  return  (
    <Toolbar sx={{ justifyContent: "space-between" }} style={{padding: 0}}>
      <NavbarLogo key={'navbarLogo'} isScroll={isScroll}/>
      {
        tablet
        ? (
          <Box sx={{display : 'flex', gap: '1rem', alignItems: 'center'}}>
          <CustomLink/>
          <Button variant="contained" color="primary">
            Buy now
          </Button>
        </Box> 
        )
        : (
          <Box>
              <Button onClick={onOpenDrawer} sx={{ minWidth: '40px', minHeight: '40px', p: 0, border : 1, borderRadius: 1, borderColor: mode === 'light' ? 'lightgrey' : 'inherit', '&:hover' : {borderColor: '#377dff'}}}>
                <MenuIcon/>
              </Button> 
              <CustomDrawer open={open}/>
          </Box>
         )
      }
    </Toolbar>
    )
}

export default Navigation;
