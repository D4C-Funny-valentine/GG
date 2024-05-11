import React from 'react'
import "./logo.css"
import { NavLink, useLocation } from 'react-router-dom'
import { useThemeSetting } from '../../../redux/features'
import { specialPath } from '../../../data/common'

const NavbarLogo = ({isScroll}) => {
  const {mode} = useThemeSetting();
  const {pathname} = useLocation() 

  const getNavbarColor = () => {
    if (isScroll && mode === 'light'){
      return 'https://assets.maccarianagency.com/the-front/logos/logo.svg';
    } else if (specialPath.includes(pathname) || mode === 'dark'){
      return 'https://assets.maccarianagency.com/the-front/logos/logo-negative.svg';
    } else {
      return 'https://assets.maccarianagency.com/the-front/logos/logo.svg';
    }
  };

  return (
    <NavLink to={"/"}>
        <img 
          src={getNavbarColor()}
          className="navlogo" 
          alt="logo" 
        />
    </NavLink>
  )
}


export default NavbarLogo