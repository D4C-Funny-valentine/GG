import React from "react";
import { Toolbar } from "@mui/material";
import {
  navLinks,
} from "../../data/_navlinks";
import ActiveNavbarLink from "./ActiveNavbarLink";
import DropDownList from "./DropDownList";

const CustomLink = () => {
  return (
    <Toolbar sx={{ gap: "2rem" }}>
        {
          navLinks.map((data, index) => (
            <NavbarLink data={data} key={index}/>
          ))
        }
    </Toolbar>
  );
};

const NavbarLink = ({ data }) => {

  return (
    <div>
      {data?.submenu ? (
        <DropDownList navData={data}/>
      ) : (
        <ActiveNavbarLink data={data}/>
      )}
    </div>
  );
};

export default CustomLink;
