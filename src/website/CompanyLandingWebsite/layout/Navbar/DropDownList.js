import { ClickAwayListener, Grow, MenuItem, MenuList, Paper, Popper, Stack, Typography } from '@mui/material';
import React from 'react'
import ActiveNavbarLink from './ActiveNavbarLink';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const DropDownList = ({navData}) => {
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  }

  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);
  return (
    <div>
       <Stack direction={'row'} gap={1}>
        <Typography
                variant="body1"
                ref={anchorRef}
                id="composition-button"
                aria-controls={open ? 'composition-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-haspopup="true"
                onClick={handleToggle}
                style={{cursor: 'pointer'}}
            >
            {navData.title}
            </Typography>
            {open ? <KeyboardArrowUpIcon sx={{pb: 1}} color='inherit'/> : <KeyboardArrowDownIcon sx={{pb: 1}} color='inherit'/>}
       </Stack>
        <Popper
            open={open}
            anchorEl={anchorRef.current}
            role={undefined}
            placement="bottom-start"
            transition
            disablePortal
        >
            {({ TransitionProps, placement }) => (
            <Grow
                {...TransitionProps}
                style={{
                    transformOrigin:
                    placement === 'bottom-start' ? 'left top' : 'left bottom',
                }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    onKeyDown={handleListKeyDown}
                  >
                    {
                        navData.submenu.map((menu) => (
                            <MenuItem onClick={handleClose} key={menu.to}>
                                <ActiveNavbarLink data={menu}/>
                            </MenuItem>
                        ))
                    }
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
    </div>
  )
}

export default DropDownList