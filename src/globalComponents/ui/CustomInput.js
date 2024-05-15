import React from "react";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material";
import { useMediaQueryDevice } from "@hooks/index";

/**
 * Renders a custom input component with the given props.
 *
 * @param {object} props - Component props.
 * @param {'outlined' | 'filled' | 'standard'} props.variant - Variant of the input (outlined, filled, standard).
 * @param {string} props.label - The label for the input.
 * @param {string} props.placeholder - The placeholder for the input.
 * @param {'medium' | 'small'} props.size - The size for the input (medium, small).
 * @param {boolean} [props.error=false] - Whether the input is in an error state. Defaults to false.
 * @param {boolean} [props.disabled=false] - Whether the input is disabled. Defaults to false.
 * @param {boolean} [props.required=false] - Whether the input is required. Defaults to false.
 * @param {object} [props.sx={}] - Additional styles for the input.
 * @param {string} props.fontColor - Custom font color for textfield. Defaults to inherit.
 * @param {string} props.labelFocusedColor - Custom label color for textfield. Defaults to inherit.
 * @param {string} props.borderColor - Custom border color for textfield. Defaults to inherit.
 * @param {string} props.hoverBorderColor - Custom border style for textfield when hovering over.
 * @param {string} porps.focusBorderColor - Custom border style for textfield when focusing over.
 * @return {React.JSX.Element} The custom input component.
 */



const CustomInput = ({variant="outlined", label, placeholder = '', size, error= false, disabled= false, required= false, labelFocusedColor = 'primary', fontColor = 'inherit', borderColor = 'inherit', hoverBorderColor = '', focusBorderColor = '', sx={}, ...props}) => {
  const {tablet} = useMediaQueryDevice();
    const CssTextField = styled(TextField)({
        '& label.Mui-focused': {
            color: labelFocusedColor,
        },
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: borderColor,
          },
          '&:hover fieldset': {
            borderColor: hoverBorderColor ?? borderColor,
          },
          '&.Mui-focused fieldset': {
            borderColor: focusBorderColor ?? borderColor,
          },
        },
      });

    return (
    <CssTextField 
        sx={{...sx}}
        label={label}
        placeholder={placeholder}
        variant={variant}
        size={size ? size : tablet ? 'medium' : 'small'}
        error={error}
        disabled={disabled}
        required={required}
        {...props}
    />
    )
}

export default CustomInput