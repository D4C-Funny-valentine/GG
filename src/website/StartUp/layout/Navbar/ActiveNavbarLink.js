import { Typography } from '@mui/material';
import React from 'react'
import { NavLink } from 'react-router-dom';

const ActiveNavbarLink = ({data}) => {
    const [active, setActive] = React.useState(false);

  return (
    <NavLink
        to={data.to}
        className={({isActive}) => setActive(isActive)}
        style={{width: '100%', height: '100%'}}
        caseSensitive
        end
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