import { Accordion, AccordionSummary, Box, Collapse, Drawer, Grid } from '@mui/material'
import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { Paragraph, CustomButton } from '@globalComponents/index'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useDrawer, useStartUpThemeSetting } from '../../features';
import { navLinks } from '../../data/_navlinks';

const CustomDrawer = ({open}) => {
    const {mode} = useStartUpThemeSetting();
    const {onCloseDrawer} = useDrawer();

  return (
    <Drawer open={open} onClose={onCloseDrawer} role='presentation'>
        <Box sx={{minWidth: 280, width: '100%'}}>
            <Box sx={{p: 2}}>
                <Box>
                    <Box sx={{py: 2, px: 4}}>
                        <NavLink to={'/'} onClick={onCloseDrawer}>
                             <img src={mode === 'light' ? 'https://assets.maccarianagency.com/the-front/logos/logo.svg' : 'https://assets.maccarianagency.com/the-front/logos/logo-negative.svg'} className="logo" alt="logo" style={{maxWidth: '100px', objectFit: 'contain'}} />
                        </NavLink>
                    </Box>
                    <Box sx={{ py: 4 }}>  
                    {/* navbar link */}
                        <DropdownDrawerNavLink/>
                    {/* button group */}
                        <Box sx={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
                        <CustomButton variant='outlined'>
                            <Paragraph variant='body1'>Documentation</Paragraph>
                        </CustomButton>
                        <CustomButton variant='contained'>
                            <Paragraph variant='body1'>Purchase now</Paragraph>
                        </CustomButton>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    </Drawer>
  )
}

const DropdownDrawerNavLink = () => {
    return (
        <>
            {
                navLinks.map((item, index) => (
                    <DrawerDropdownItem key={index} item={item}/>
                ))
            }
        </>
    )
}

const DrawerDropdownItem = ({item}) => {
    const [collapseOpen ,setCollapseOpen] = React.useState(false);

    const toggleHandler = () => {
        setCollapseOpen(prev => !prev);
    }
    return (
        <Box>
            {
                item?.submenu && item.submenu.length > 0 ? (
                <Accordion elevation={0} onChange={toggleHandler} sx={{px: 4}}>
                    <AccordionSummary>
                        <Paragraph variant={collapseOpen ? 'body1' : 'body2'} sx={{mr: 'auto'}}>{item.title}</Paragraph>
                        {
                            collapseOpen ? <KeyboardArrowUpIcon color='inherit'/> : <KeyboardArrowDownIcon color='inherit'/>
                        }
                    </AccordionSummary>
                    <Collapse in={collapseOpen} timeout="auto" unmountOnExit>
                        <Grid container spacing={0}>
                            {
                                item.submenu.map(menu => (
                                <Grid item xs={12}>
                                    <Box sx={{padding: '4px 0px'}}>
                                        <ActiveNavbarLink key={menu.to} data={menu}/>
                                    </Box>
                                </Grid>
                                ))
                            }
                        </Grid>
                    </Collapse>
                </Accordion>
                ) : (
                    <Box sx={{padding : '4px 5px'}}>
                        <ActiveNavbarLink data={item}/>
                    </Box>
                )
            }
        </Box>
    )
}

const ActiveNavbarLink = ({data}) => {
    const {onCloseDrawer} = useDrawer();
    const [active, setActive] = React.useState(false);
    const {mode} = useStartUpThemeSetting();

    const navigate = useNavigate();

    const handleNavigation = () => {
        onCloseDrawer();
        return navigate(data.to)
    }

    return (
            <NavLink
                to={data.to}
                className={({ isActive }) => setActive(isActive)}
                onClick={handleNavigation}
                caseSensitive
                end
            >
                <CustomButton variant='outline' sx={{color: active ? 'primary.main' : mode === 'light' ? '#000' : '#fff', width : '100%', justifyContent : 'start', bgcolor : active ? '#1976d21a' : 'transparent' }} size="small">
                    <Paragraph
                        variant={'body1'}
                        sx={{ cursor: "pointer", textTransform: "capitalize", fontWeight : active ? 700 : 400}}
                    >
                        {data.title}
                    </Paragraph>
                </CustomButton>
            </NavLink>
    )
}

export default CustomDrawer