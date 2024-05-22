import { CustomScrollNavbar } from '@globalComponents/common'
import { CustomButton, NavbarLogo, Paragraph } from '@globalComponents/index'
import { Box, Container, MenuItem, MenuList, Paper, Stack, Toolbar,  } from '@mui/material'
import React from 'react'
import Logo from "@assets/logo2.svg"
import { navdata } from '../config/_navdata'
import { NavLink } from 'react-router-dom'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';


const Navbar = () => {
  
  const [showSubMenu, setShowSubMenu] = React.useState([]);


  const handleMouseEnter = (id) => {
    setShowSubMenu(prev => {
      console.log('enter');
      let arr = [...prev];
      arr[id] = true;
      return arr
    })
  }

  const handleMouseLeave = (id) => {
    setShowSubMenu(prev => {
      console.log('leave');
      let arr = [...prev];
      arr[id] = false;
      return arr
    })
  }
  
  return (
    <CustomScrollNavbar scrollTrigger={100}>
      <Container maxWidth="xl">
        <Toolbar sx={{ justifyContent: 'space-between', alignItems: 'center', py: {md: 3, xs: 1} }}>
          <NavbarLogo src={Logo} width='98px'/>
          <Box color={'text.primary'}>
            <Stack direction={'row'} alignItems={'center'} spacing={10}>
                {
                  navdata.map((item, index) => {
                      if(!item?.children)
                      {
                        return (
                          <Box>
                            <NavLink key={index} to={item.to}>
                              <Paragraph sx={{'&:hover' : {color: 'primary.main'}}}>{item.name}</Paragraph>
                            </NavLink>
                          </Box>
                        )
                      }
                    else {
                      return (
                        <Box
                          sx={{position: 'relative'}}
                          component={'li'}
                          onMouseEnter={(event) => handleMouseEnter(item.id)}
                          onMouseLeave={(event) => handleMouseLeave(item.id)}
                        >
                          <Stack direction={'row'} sx={{cursor: 'pointer', '&:hover' : {color: 'primary.main'}}} spacing={1}>
                              <Paragraph sx={{color: 'inherit'}}>{item.name}</Paragraph>
                              <KeyboardArrowDownIcon fontSize='small' htmlColor='grey'/>
                          </Stack>
                          <div>
                            <Paper elevation={1}>
                              <MenuList
                                component={'ul'}
                                sx={{
                                  position: 'absolute',
                                  top: '110%',
                                  minWidth: '120px',
                                  bgcolor: 'white',
                                  boxShadow: '0px 8px 45px rgba(3, 0, 71, 0.09)'
                                }}
                              >                
                              {
                                showSubMenu[item.id] && (
                                  item.children.map(child => {
                                    if(!child?.children) {
                                      return (
                                        <MenuItem component={'li'} key={child.id}>
                                            <NavLink to={child?.dynamic ? `${child.to}` : child.to}>
                                              <Paragraph sx={{'&:hover' : {color: 'primary.main'}}}>{child.name}</Paragraph>
                                            </NavLink>
                                        </MenuItem>
                                      )
                                    } 
                                    else {
                                      return (
                                        <MenuItem 
                                          component={'li'}
                                          key={child.id}
                                          onMouseEnter={(event) => handleMouseEnter(child.id)}
                                          onMouseLeave={(event) => handleMouseLeave(child.id)}
                                          sx={{
                                            position: 'relative',
                                          }}
                                      >
                                        <Stack width={'100%'} direction={'row'} justifyContent={'space-between'} sx={{cursor: 'pointer', '&:hover' : {color: 'primary.main'}}} spacing={1}>
                                            <Paragraph sx={{color: 'inherit'}}>{child.name}</Paragraph>
                                            <KeyboardArrowRightIcon fontSize='small' htmlColor='grey'/>
                                        </Stack>
                                        <div>
                                          <Paper>
                                            <MenuList
                                              component={'ul'}
                                              sx={{
                                                position: 'absolute',
                                                minWidth: '130px',
                                                top: 0,
                                                p: 0,
                                                bgcolor: 'white',
                                                boxShadow: '0px 8px 45px rgba(3, 0, 71, 0.09)',
                                                left: {xl: '100%', lg: '-100%'}
                                              }}
                                            >
                                              {showSubMenu[child.id] && (
                                                child.children.map(grandChild => {
                                                  return (
                                                    <MenuItem 
                                                      key={grandChild.id}
                                                      onMouseEnter={(event) => handleMouseEnter(grandChild.id)}
                                                      onMouseLeave={(event) => handleMouseLeave(grandChild.id)}
                                                    >
                                                      <NavLink to={grandChild.dynamic ? `${grandChild.to}` : grandChild.to}>
                                                        <Paragraph sx={{'&:hover' : {color: 'primary.main'}}}>{grandChild.name}</Paragraph>
                                                      </NavLink>
                                                    </MenuItem>
                                                  )
                                                })
                                              )}
                                            </MenuList>
                                          </Paper>
                                        </div>
                                      </MenuItem>
                                      )
                                    }
                                  })
                                )
                              }
                              </MenuList>
                            </Paper>
                          </div>
                        </Box>
                      )
                    }  
                  })
                }
                <CustomButton variant='outlined' color='secondary'>
                  Purchase now
                </CustomButton>
            </Stack>
          </Box>
        </Toolbar>
      </Container>
    </CustomScrollNavbar>
  )
}

export default Navbar