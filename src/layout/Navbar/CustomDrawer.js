import { Accordion, AccordionSummary, Box, Collapse, Drawer, Grid } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { useThemeSetting } from '../../redux/features'
import { Paragraph, CustomButton } from '../../components'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { default_navlinks, dropdown_navlinks } from '../../data/_navData'

const CustomDrawer = ({open, onClose, isDefault = true}) => {
    const {mode} = useThemeSetting();

  return (
    <Drawer open={open} onClose={onClose} role='presentation'>
        <Box sx={{minWidth: 280, width: '100%'}}>
            <Box sx={{p: 2}}>
                <Box>
                    <Box sx={{py: 2, px: 4}}>
                        <NavLink to={'/'}>
                             <img src={mode === 'light' ? 'https://assets.maccarianagency.com/the-front/logos/logo.svg' : 'https://assets.maccarianagency.com/the-front/logos/logo-negative.svg'} className="logo" alt="logo" style={{maxWidth: '100px', objectFit: 'contain'}} />
                        </NavLink>
                    </Box>
                    <Box sx={{ p: 4 }}>  
                        {
                            isDefault ? <DefaultDrawerNavLink/> : <DropdownDrawerNavLink/>
                        }
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

const DefaultDrawerNavLink = () => {
    return (
        <>
            {
                default_navlinks.map((item, index) => (
                    <DrawerItem key={index} item={item}/>
                ))
            }
        </>
    )
}

const DropdownDrawerNavLink = () => {
    return (
        <>
            {
                dropdown_navlinks.map((item, index) => (
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
            <Accordion elevation={0} onChange={toggleHandler}>
                <AccordionSummary>
                    <Paragraph variant='body1' sx={{mr: 'auto'}}>{item.title}</Paragraph>
                    {
                        collapseOpen ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/>
                    }
                </AccordionSummary>
               {
                item.submenu.length > 0 &&  <Collapse in={collapseOpen} timeout="auto" unmountOnExit>
                <Grid container spacing={0}>
                    {
                        item.submenu.map(menu => (
                        <Grid item xs={12}>
                            <Box sx={{padding: '4px 5px'}}>
                                <ActiveNavbarLink key={menu.to} data={menu}/>
                            </Box>
                        </Grid>
                        ))
                    }
                </Grid>
            </Collapse>
               }
            </Accordion>
        </Box>
    )
}

const ActiveNavbarLink = ({data}) => {
    const [active, setActive] = React.useState(false);

    return (
            <NavLink
                     to={data.to === 'startup' ? '/' : data.to}
                           className={({ isActive }) => setActive(isActive)}
            >
                <CustomButton variant='outline' sx={{color: active ? 'primary.main' : '#000', width : '100%', justifyContent : 'start', bgcolor : active ? '#e6f2f82b' : 'transparent' }} size="small">
                    <Paragraph
                        variant={active ? 'body1' : 'body2'}
                        sx={{ cursor: "pointer", textTransform: "capitalize", fontWeight : active ? 700 : 400}}
                    >
                        {data.title}
                    </Paragraph>
                </CustomButton>
            </NavLink>
    )
}

const DrawerItem = ({item}) => {
    const [active, setActive] = React.useState(false);
   
    return (
       <Box sx={{padding : '4px 5px'}}>
             <NavLink
                to={item === 'landing' ? '/' : `/${item}`}
                    className={({ isActive }) => setActive(isActive)}
            >
            <CustomButton variant='outline' sx={{color: active ? 'primary.main' : '#000', width : '100%', justifyContent : 'start', bgcolor : active ? '#e6f2f82b' : 'transparent' }} size="small">
                <Paragraph
                    variant={active ? 'body1' : 'body2'}
                    sx={{ cursor: "pointer", textTransform: "capitalize", fontWeight : active ? 700 : 400}}
                >
                    {item}
                </Paragraph>
            </CustomButton>
            </NavLink>
       </Box>
    )
} 

export default CustomDrawer