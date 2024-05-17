import React from 'react'
import { NavLink} from 'react-router-dom'
import "./common.css"

const NavbarLogo = ({src, path, width= '100px', height= '40px'}) => {

  return (
    <NavLink to={path}>
        <img 
          src={src}
          className="navlogo"
          alt="logo"
          width={width}
          height={height}
        />
    </NavLink>
  )
}


export default NavbarLogo