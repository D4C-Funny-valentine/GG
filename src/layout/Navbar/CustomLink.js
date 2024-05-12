import React from "react";
import { Typography, Menu, MenuItem, Toolbar } from "@mui/material";
import { useLocation } from "react-router-dom";
import {
  navLinks,
} from "../../data/_navData";
import ActiveNavbarLink from "./ActiveNavbarLink";

const CustomLink = () => {
  return (
    <Toolbar sx={{ gap: "2rem" }}>
        {
          navLinks.map((data, index) => (
            <DropDownLink data={data} key={index}/>
          ))
        }
    </Toolbar>
  );
};

const DropDownLink = ({ data }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const { pathname } = useLocation();

  const handleOpen = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const makeSubMenuTitleActive = (routes) => {
    return pathname.slice(1, pathname.length).includes(routes.some(route => route.to));
  }

  return (
    <div>
      {data?.submenu ? (
          <>
            <Typography
              variant="body1"
              onClick={handleOpen}
              sx={{ cursor: "pointer", textTransform: "capitalize", fontWeight: makeSubMenuTitleActive(data.submenu) ? 700 : 400 }}
            >
              {data.title}
            </Typography>
            <Menu id="menu" anchorEl={anchorEl} open={open} onClose={handleClose}>
              {data.submenu.map((menu) => (
                <MenuItem key={menu.to} onClick={handleClose}>
                  <ActiveNavbarLink data={menu}/>
                </MenuItem>
              ))}
            </Menu>
        </>
      ) : (
        <ActiveNavbarLink data={data}/>
      )}
    </div>
  );
};

export default CustomLink;
