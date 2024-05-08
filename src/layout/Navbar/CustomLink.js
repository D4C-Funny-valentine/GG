import React from "react";
import { Typography, Menu, MenuItem, Toolbar } from "@mui/material";
import { NavLink } from "react-router-dom";
import {
  PATH,
  default_navlinks,
  dropdown_navlinks,
} from "../../data/_navData";

const CustomLink = ({ isDefaultLink = true }) => {
  return (
    <Toolbar sx={{ gap: "2rem" }}>
      {isDefaultLink
        ? default_navlinks.map((item) => <DefaultLink key={item} data={item} />)
        : dropdown_navlinks.map((item) => (
            <DropDownLink key={item} data={item} />
          ))}
    </Toolbar>
  );
};

const DefaultLink = ({ data }) => {
    const [active, setActive] = React.useState(null);
  return (
    <NavLink
      to={`${
        data === PATH.LANDING.title.toLocaleLowerCase() ? "/" : `/${data}`
      }`}
      className={({ isActive }) => setActive(isActive)}
    >
      <Typography
        variant="body1"
        sx={{ cursor: "pointer", textTransform: "capitalize", fontWeight: active ? 700 : 400 }}
      >
        {data}
      </Typography>
    </NavLink>
  );
};

const DropDownLink = ({ data }) => {
  const [active, setActive] = React.useState(null);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleOpen = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <Typography
        variant="body1"
        id="menu"
        aria-controls={open ? "menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleOpen}
        sx={{ cursor: "pointer" }}
      >
        {data.title}
      </Typography>
      {data.submenu && (
        <Menu id="menu" anchorEl={anchorEl} open={open} onClose={handleClose}>
          {data.submenu.map((menu) => (
            <MenuItem key={menu.to} onClick={handleClose}>
              <NavLink
                to={menu.to}
                className={({ isActive }) => setActive(isActive)}
              >
                 <Typography
                    variant="body1"
                    sx={{ cursor: "pointer", textTransform: "capitalize", fontWeight: active ? 700 : 400 }}
                  >
                    {menu.title}
                  </Typography>
              </NavLink>
            </MenuItem>
          ))}
        </Menu>
      )}
    </div>
  );
};

export default CustomLink;
