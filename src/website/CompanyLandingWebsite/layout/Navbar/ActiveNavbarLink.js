import { Typography } from '@mui/material';
import React from 'react'
import { NavLink } from 'react-router-dom';
import { PATH } from '../../data/_navData';

const ActiveNavbarLink = ({data}) => {
    const [active, setActive] = React.useState(false);

  return (
    <NavLink
        to={`${
        data.title === PATH.LANDING.title ? "/" : `/${data.to}`
        }`}
        className={({isActive}) => setActive(isActive)}
        style={{width: '100%', height: '100%'}}
        >
        <Typography
            variant="body1"
            sx={{ cursor: "pointer", textTransform: "capitalize", fontWeight: active ? 700 : 400 }}
        >
            {data.title}
        </Typography>
    </NavLink>
  )
}

export default ActiveNavbarLink