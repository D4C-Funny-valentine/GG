import React from "react"
import Button from "@mui/material/Button";
import CircularProgress  from "@mui/material/CircularProgress";
import { useMediaQueryDevice } from "@hooks/index";

/**
 * Custom button component with support for loading state.
 * @param {object} props - Component props.
 * @param {'text' | 'outlined' | 'contained'} props.variant - Variant of the button (text, outlined, contained). 
 * @param {'inherit' | 'primary' | 'secondary'} props.color - Color of the button.
 * @param {'large' | 'medium' | 'small'} props.size - Size of the button.
 * @param {Function} props.onClick - Click event handler
 * @param {React.ReactNode} props.children - Button text or content.
 * @param {React.ReactNode} [props.startIcon] - Icon component for the start of the button.
 * @param {React.ReactNode} [props.endIcon] - Icon component for the end of the button.
 * @param {boolean} [props.loading] - Loading state of the button.
 * @param {boolean} [props.disabled] - Disabled state of the button.
 * @param {number} props.progressSize - Size for the circular progress.
 * @param {object} [props.sx] - Additional custom styles for the button.
 * @returns {React.JSX.Element}
 */

const CustomButton = ({ variant = "contained", size, color = "primary", onClick, children, startIcon, endIcon, loading = false, disabled, sx = {} , progressSize = 24, ...props}) => {
    const { tablet } = useMediaQueryDevice();
    return (
        <Button
            variant={variant}
            color={color}
            onClick={onClick}
            startIcon={loading ? null : startIcon}
            endIcon={loading ? null : endIcon}
            disabled={loading || disabled}
            size={size ? size : tablet ? 'medium' : 'small'}
            {...props}
            sx={{ ...sx, opacity: loading ? 0.7 : 1 }}
        >
            {loading && <CircularProgress color="inherit" size={progressSize}/>}
            {children}
        </Button>
    )
}


export default CustomButton;