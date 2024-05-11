import React from "react";
import { AppBar, Toolbar, Box, Container, Button, Typography } from "@mui/material";
import { NavbarLogo, ThemeSwitchIconButton } from "../../components"
import CustomLink from "./CustomLink";
import { useLocation } from "react-router-dom";
import { useDrawer, useThemeSetting } from "../../redux/features";
import MenuIcon from '@mui/icons-material/Menu';
import CustomDrawer from "./CustomDrawer";
import { useMediaQueryDevice } from "../../hooks";
import { specialPath } from "../../data/common";

const Navigation = () => {
  const { pathname } = useLocation();
  const {mode} = useThemeSetting();
  // change navbar color when scrolling
  const [isScroll, setIsScroll] = React.useState(false);
  const { tablet } = useMediaQueryDevice();

  const getNavbarColor = () => {
    if (isScroll && mode === 'light'){
      return 'inherit';
    } else if (specialPath.includes(pathname) || mode === 'dark'){
      return '#fff';
    } else {
      return 'inherit';
    }
  };

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 40) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScroll])

  return (
        <>
          <Container maxWidth="lg" sx={{color: getNavbarColor() }}>
            <UpperNavBar/>
          </Container>
          <AppBar position="sticky" sx={{top: 0, color: getNavbarColor(), py: 1}} color={pathname === '/' && !isScroll ? 'transparent' : isScroll ? 'inherit' : 'transparent'} component={'header'} elevation={isScroll ? 1 : 0}>
            <Container maxWidth="lg" sx={{position: 'relative'}}>
              <LowerNavBar isScroll={isScroll} tablet={tablet} mode={mode}/>
            </Container>
          </AppBar>
        </>
  );
};

const UpperNavBar = () => {
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
      <ThemeSwitchIconButton/>
  </Toolbar>
  )
}

const LowerNavBar = ({isScroll, tablet, mode}) => {

  const { open, onOpenDrawer, onCloseDrawer } = useDrawer();

  return  (
    <Toolbar sx={{ justifyContent: "space-between" }} style={{padding: 0}}>
      <NavbarLogo key={'navbarLogo'} isScroll={isScroll}/>
      {
        tablet
        ? (
          <Box sx={{display : 'flex', gap: '1rem', alignItems: 'center'}}>
          <CustomLink isDefaultLink={true} />
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
              <CustomDrawer open={open} onClose={onCloseDrawer}/>
          </Box>
         )
      }
    </Toolbar>
    )
}

export default Navigation;
