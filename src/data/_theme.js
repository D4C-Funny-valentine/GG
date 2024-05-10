import React from 'react';
import "@fontsource/inter";
import NotoSan from '../assets/fonts/NotoSans/NotoSansMyanmar-Regular.woff2';
import { useThemeSetting } from '../redux/features';
import { createTheme, responsiveFontSizes, ThemeProvider, StyledEngineProvider } from "@mui/material";

const MMFont = {
    fontFamily: 'NotoSansMyanmar',
    fontStyle: 'normal',
    fontDisplay: 'swap',
    fontWeight: 400,
    src: `local('NotoSansMyanmar'),
  local('NotoSansMyanmar-Regular'),
  url(${NotoSan}) format('woff2')`,
    unicodeRange:
          'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};

const CustomThemeProvider = (props) => {
    const { mode } = useThemeSetting();
    console.info(`Custom Theme Mode : ${mode}`);
    console.info("- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -")
    const _theme = React.useMemo(() => createTheme({
        spacing: 4,
        mixins:
        {
              toolbar: { minHeight: 48 },
              '@media (min-width:0px)': { minHeight: 48 },
              '@media (min-width:600px)': { minHeight: 48 },
        },
        typography: {
            fontFamily:  'Noto Sans Myanmar, "Inter", "Arial", sans-serif',
            fontSize: 14,
            fontWeightLight: 300,
            fontWeightRegular: 400,
            fontWeightMedium: 500,
            fontWeightBold: 700,
            h1: {
                fontFamily:  'Noto Sans Myanmar, "Inter", "Arial", sans-serif',
                fontSize: '3rem',
                fontWeight:  700,
            },
            h2: {
                fontFamily:  'Noto Sans Myanmar, "Inter", "Arial", sans-serif',
                fontSize: '2.5rem',
                fontWeight:  700,
            },
            h3: {
                fontFamily: 'Noto Sans Myanmar, "Inter", "Arial", sans-serif',
                fontSize : '2rem',
                fontWeight:  700,
            },
            h4: {
                fontFamily:  'Noto Sans Myanmar, "Inter", "Arial", sans-serif',
                fontSize: '1.5rem',
                fontWeight:  600,
            },
            h5: {
                fontFamily:  'Noto Sans Myanmar, "Inter", "Arial", sans-serif',
                fontSize: '1.25rem',
                fontWeight:  600,
            },
            h6: {
                fontFamily:  'Noto Sans Myanmar, "Inter", "Arial", sans-serif',
                fontSize: '1.25rem',
                fontWeight:  500,
                lineHeight: 1.5
            },
            h7: {
                fontFamily:  'Noto Sans Myanmar, "Inter", "Arial", sans-serif',
                fontSize: '1.25rem',
                fontWeight:  500,
                lineHeight: 1.5,
                color: mode === 'light' ? '#677788' : '#aeb0b4'
            },
            body1: {
                fontFamily:  'Noto Sans Myanmar, "Inter", "Arial", sans-serif',
                fontSize: '1rem',
                fontWeight:  400,
            },
            body2: {
                fontFamily:  'Noto Sans Myanmar, "Inter", "Arial", sans-serif',
                fontSize: '1rem',
                fontWeight:  400,
                lineHeight: 1.5,
                color: mode === 'light' ? '#677788' : '#aeb0b4'
            },
            subtitle1: {
                fontFamily: 'Noto Sans Myanmar, "Inter", "Arial", sans-serif',
                fontSize: '0.875rem',
                fontWeight: 400,
            },
            subtitle2: {
                fontFamily: 'Noto Sans Myanmar, "Inter", "Arial", sans-serif',
                fontSize: '0.875rem',
                fontWeight: 400,
                color: mode === 'light' ? '#677788' : '#aeb0b4'
            },
            subtitle3: {
                fontFamily: 'Noto Sans Myanmar, "Inter", "Arial", sans-serif',
                fontSize: '0.825rem',
                fontWeight: 400,
            },
            subtitle4: {
                fontFamily: 'Noto Sans Myanmar, "Inter", "Arial", sans-serif',
                fontSize: '0.825rem',
                fontWeight: 400,
                color: mode === 'light' ? '#677788' : '#aeb0b4'
            },
            button: {
                fontFamily:  'Noto Sans Myanmar, "Inter", "Arial", sans-serif',
                fontSize: '1rem',
                fontWeight: 400,
                textTransform: 'none',
            },
            caption: {
                fontFamily:  'Noto Sans Myanmar, "Inter", "Arial", sans-serif',
                fontSize: '0.75rem',
                fontWeight: 400,
            },
            caption2: {
                fontFamily:  'Noto Sans Myanmar, "Inter", "Arial", sans-serif',
                fontSize: '0.75rem',
                fontWeight: 400,
                color: mode === 'light' ? '#677788' : '#aeb0b4'
            },
            overline: {
                fontFamily:  'Noto Sans Myanmar, "Inter", "Arial", sans-serif',
            }
        },
        shape: {
            borderRadius: 5
        },
        palette: {
            mode,
            common: {
                black: '#1e2022',
                white: '#ffffff',
            },
            primary: {
                main: mode === 'light' ? '#377dff' : '#1976d2',
                light: '#167ac6',
                dark: '#2f6ad9',
                contrastText: "#fff",
            },
            secondary: {
                main: '#f9b934',
            },
            info: {
                main: mode === 'light' ? '#f7faff' : '#1a2138'
            },
            silver : {
                main : mode === 'light' ? '#00000014' : '#ffffff29',
            },
            sky : {
                main : '#ffffff'
            },
            background: {
                paper: mode === 'light' ? '#ffffff' : '#222b45',
                default: mode === 'light' ? '#ffffff' : '#222b45',
            }
        },
        components: {
            MuiCssBaseline : {
                styleOverrides: {
                    '@global': {
                        '@font-face': [MMFont],
                        html: {
                            WebkitFontSmoothing: 'antialiased', // Font Smoothing for WebKit browsers
                            MozOsxFontSmoothing: 'grayscale', // Font Smoothing for Firefox on macOS
                            textRendering: 'optimizeLegibility', // Optimize text legibility
                            WebkitOverflowScrolling: 'touch', // Enable touch-based overflow scrolling for WebKit browsers
                        },
                        body: {
                            WebkitFontSmoothing: 'antialiased',
                            MozOsxFontSmoothing: 'grayscale',
                            textRendering: 'optimizeLegibility',
                            WebkitOverflowScrolling: 'touch',
                        },
                        '#root': {
                            WebkitFontSmoothing: 'antialiased',
                            MozOsxFontSmoothing: 'grayscale',
                            textRendering: 'optimizeLegibility',
                            WebkitOverflowScrolling: 'touch',
                        },
                        '*::-webkit-scrollbar': {
                            width: '0em'
                        },
                    }
                }
            },
            MuiButton: {
                styleOverrides: {
                    root: {
                        minWidth: '64px',
                        padding: '10px 22px',
                        transition: 'all 250ms ease-in-out',
                        // boxShadow: mode === 'light' ? 'rgba(140, 152, 164, 0.1) 0px 12px 15px' : 'rgba(0, 0, 0, 0.1) 0px 12px 15px',
                        borderRadius: 5,
                  },
                  contained: {
                        boxShadow: 'none',
                        '&:active': {
                              boxShadow: 'none',
                              color: '#fff'
                        },
                        '&:hover': {
                            backgroundColor: '#2f6ad9',
                            color: '#fff'
                        }
                  },
                  outlined: {
                        boxShadow: 'none',
                        '&:active': {
                              boxShadow: 'none',
                              color: '#000'
                        },
                        '&:hover': {
                            borderColor: '#2f6ad9',
                        }
                  },
                  text: {
                    boxShadow: 'none',
                    '&:active' : {
                        boxShadow: 'none',
                        color: mode === 'light' ? '#377dff' : '#1976d2' 
                    }
                  }
                }
            },
            MuiIconButton: {
                styleOverrides: {
                    root: {
                        width: '50px',
                        height: '50px',
                        marginBottom: '16px',
                        fontSize: '1.25rem'
                  }
                }
            },
            MuiToolbar: {
                styleOverrides: {
                    root: {
                        padding: 0
                    }
                }
            },
            // MuiPaper : {
            //     styleOverrides : {
            //         root: {
            //             borderRadius: 5,
            //             // padding: '16px 24px',
            //             backgroundColor: mode === 'light' ? '#ffffff' : '#222b45',
            //             color: mode === 'light' ? '#677788' : '#aeb0b4',
            //             '&:hover' : {
            //                 boxShadow: mode === 'light' ? 'rgba(140, 152, 164, 0.1) 0px 12px 15px' : 'rgba(0, 0, 0, 0.1) 0px 12px 15px',
            //             }
            //         }
            //     }
            // }
        }
    }),[mode])

    const ThemeWithRepositiveFont = responsiveFontSizes(_theme);

    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={ThemeWithRepositiveFont}>
                {props.children}
            </ThemeProvider>
        </StyledEngineProvider>
    )
}

export default CustomThemeProvider

