import { CustomDrawer, CustomScrollNavbar } from '@globalComponents/common';
import { NavbarLogo } from '@globalComponents/index';
import { Box, Button, Container, Toolbar } from '@mui/material';
import React from 'react';
import { navdata } from '../config/_navdata';
import useMediaQueryDevice from '@hooks/useMediaQueryDevice';
import MenuIcon from '@mui/icons-material/Menu';
import { useProjectShowCaseDrawer } from '../features';
import NavigationLinks from '../components/NavigationLinks';
import Logo from "../assest/logo2.svg"

const Navbar = () => {
  const {tablet} = useMediaQueryDevice();
  const {open, onCloseDrawer, onOpenDrawer} = useProjectShowCaseDrawer();
  return (
    <CustomScrollNavbar scrollTrigger={40}>
        <Container maxWidth="xl">
          <Toolbar sx={{ justifyContent: 'space-between', alignItems: 'center', py: {md: 3, xs: 1} }}>
            <NavbarLogo src={Logo} width='98px' />
            <Box sx={{color: 'secondary.main'}}>
                {
                  tablet ? (
                    <NavigationLinks data={navdata} sx={{flexDirection: 'row', alignItems: 'center', gap: '3rem'}}/>
                  ) : (
                    <Box>
                        <Button color='secondary' onClick={onOpenDrawer} sx={{ minWidth: '40px', minHeight: '40px', p: 0, borderRadius: '50%', '&:hover' : {backgroundColor: '#0000000a'}}}>
                          <MenuIcon/>
                        </Button>
                        <CustomDrawer open={open} anchor='right' onClose={onCloseDrawer}>
                            <Box sx={{px: 3, py: 4}}>
                              <NavigationLinks data={navdata} sx={{flexDirection: 'column', gap: '1rem'}}/>
                            </Box>
                        </CustomDrawer>
                    </Box>
                  )
                }
            </Box>
          </Toolbar>
        </Container>
    </CustomScrollNavbar>
  );
}

export default Navbar;
