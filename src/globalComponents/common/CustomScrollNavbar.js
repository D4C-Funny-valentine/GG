import { AppBar} from '@mui/material';
import React from 'react';
import "./common.css"
import useScrollNavbar from '@hooks/useScrollNavbar';

/**
 * Custom component for a scrollable navbar.
 *
 * @param {object} props - Component props.
 * @param {number} [props.scrollTrigger=40] - The scroll trigger value.
 * @param {object} props.sx - Custom styles for the navbar.
 * @param {React.ReactNode} props.children - The content inside the navbar.
 * @return {React.JSX.Element} The custom scrollable navbar component.
 */

const CustomScrollNavbar = ({scrollTrigger = 40, sx = {}, children}) => {
    const { isScrolled } = useScrollNavbar(scrollTrigger);
    return (
      <AppBar
        sx={{
          backgroundColor: isScrolled ? 'white' : 'transparent',
          boxShadow: isScrolled ? "0px 4px 16px rgba(43, 52, 69, 0.1)" : 'none',
          border: '2px solid #f3f5f9',
          ...sx
        }}
        className={isScrolled ? 'fixedHeader' : ''}
        elevation={isScrolled ? 1 : 0}
        component={'header'}
      >
            {children}
      </AppBar>
    );
}
export default CustomScrollNavbar