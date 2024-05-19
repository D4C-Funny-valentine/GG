import React from 'react';
import "@fontsource/open-sans";
import NotoSan from '../../../assets/fonts/NotoSans/NotoSansMyanmar-Regular.woff2';
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

const ProjectShowCaseCustomThemeProvider = (props) => {
    const _theme = React.useMemo(() => createTheme({
        spacing: 4,
        mixins:
        {
              toolbar: { minHeight: 48 },
              '@media (min-width:0px)': { minHeight: 48 },
              '@media (min-width:600px)': { minHeight: 48 },
        },
        typography: {
            fontFamily:  'Noto Sans Myanmar, "Open Sans", "Arial", sans-serif',
            fontSize: 14,
            fontWeightLight: 400,
            fontWeightRegular: 500,
            fontWeightMedium: 600,
            fontWeightBold: 700,
            fontWeightBolder: 800,
            fontColor :'#0f3460',
            h1: {
                fontFamily:  'Noto Sans Myanmar, "Open Sans", "Arial", sans-serif',
                fontSize: '2.5rem',
                fontWeight:  800,
            },
            h2: {
                fontFamily:  'Noto Sans Myanmar, "Open Sans", "Arial", sans-serif',
                fontSize: '1.75rem',
                fontWeight:  700,
            },
            h3: {
                fontFamily: 'Noto Sans Myanmar, "Open Sans", "Arial", sans-serif',
                fontSize : '1.5rem',
                fontWeight:  700,
                color: '#2b3445'
            },
            h4: {
                fontFamily:  'Noto Sans Myanmar, "Open Sans", "Arial", sans-serif',
                fontSize: '1.25rem',
                fontWeight:  600,
            },
            h5: {
                fontFamily:  'Noto Sans Myanmar, "Open Sans", "Arial", sans-serif',
                fontSize: '1.25rem',
                fontWeight:  500,
            },
            h6: {
                fontFamily:  'Noto Sans Myanmar, "Open Sans", "Arial", sans-serif',
                fontSize: '18px',
                fontWeight:  500,
                lineHeight: 1.5
            },
            h7: {
                fontFamily:  'Noto Sans Myanmar, "Open Sans", "Arial", sans-serif',
                fontSize: '16px',
                fontWeight:  500,
                lineHeight: 1.5
            },
            body1: {
                fontFamily:  'Noto Sans Myanmar, "Open Sans", "Arial", sans-serif',
                fontSize: '14px',
                fontWeight:  500,
                lineHeight: 1.75
            },
            body2: {
                fontFamily:  'Noto Sans Myanmar, "Open Sans", "Arial", sans-serif',
                fontSize: '14px',
                fontWeight:  500,
                color: '#7d879c',
                lineHeight: 1.5
            },
            body3: {
                fontFamily:  'Noto Sans Myanmar, "Open Sans", "Arial", sans-serif',
                fontSize: '14px',
                fontWeight:  400,
                lineHeight: 1.75
            },
            subtitle1: {
                fontFamily: 'Noto Sans Myanmar, "Open Sans", "Arial", sans-serif',
                fontSize: '13.5px',
                fontWeight: 400,
            },
            subtitle2: {
                fontFamily: 'Noto Sans Myanmar, "Open Sans", "Arial", sans-serif',
                fontSize: '13px',
                fontWeight: 400,
            },
            button: {
                fontFamily:  'Noto Sans Myanmar, "Open Sans", "Arial", sans-serif',
                fontSize: '14px',
                fontWeight: 600,
                lineHeight: 1.75,
                textTransform: 'capitalize',
                textDecoration: 'none',
            },
            caption: {
                fontFamily:  'Noto Sans Myanmar, "Open Sans", "Arial", sans-serif',
                fontSize: '0.75rem',
                fontWeight: 400,
            },
            overline: {
                fontFamily:  'Noto Sans Myanmar, "Open Sans", "Arial", sans-serif',
            }
        },
        shape: {
            borderRadius: 5
        },
        palette: {
            common: {
                black: '#2b3445',
                white: '#fff',
            },
            primary: {
                main: '#D23F57',
                light: '#d23f5780',
                contrastText: "#fff",
            },
            secondary: {
                main: '#0f3460',
                light: '#7d879c'
            },
            background: {
                paper: '#ffffff',
                default: '#fff',
            },
            text: {
                primary: '#0f3460',
                secondary: '#7d879c',
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
                        padding: '5px 15px',
                        transition: 'all 250ms ease-in-out',
                        borderRadius: 6,
                  },
                  sizeLarge: {
                    padding: '.6rem 2.5rem',
                    fontWeight: 600,
                    margin: '0.5rem',
                  },
                  outlinedSecondary: {
                    borderColor: '#0f3460',
                    '&:active': {
                          boxShadow: 'none',
                    },
                    '&:hover': {
                        border: '1px solid #0f3460',
                        backgroundColor: '#0f346011',
                    }
                  },
                  containedSecondary: {
                    backgroundColor: '#0f3460',
                    '&:active': {
                          boxShadow: 'none',
                          color: '#fff'
                    },
                    '&:hover': {
                        boxShadow: '0px 0px 28px rgba(3, 0, 71, 0.01)',
                        backgroundColor: '#0f3460',
                        color: '#fff',
                    }
                  },
                  contained: {
                        boxShadow: '0px 4px 16px rgba(43, 52, 69, 0.1)',
                        '&:active': {
                              boxShadow: '0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12)',
                              color: '#fff'
                        },
                        '&:hover': {
                            boxShadow: '0px 0px 28px rgba(3, 0, 71, 0.01)',
                            backgroundColor: '#e3364e',
                            color: '#fff',
                        }
                  },
                  outlined: {
                        boxShadow: '0px 4px 16px rgba(43, 52, 69, 0.1)',
                        borderColor: '#d23f5780',
                        '&:active': {
                              boxShadow: 'none',
                              color: '#000'
                        },
                        '&:hover': {
                            borderColor: '#d23f57',
                            backgroundColor: '#d23f570a'
                        }
                  },
                  text: {
                    boxShadow: 'none',
                    '&:active' : {
                        boxShadow: 'none',
                        color: '#D23F57'
                    }
                  }
                }
            },
            MuiIconButton: {
                styleOverrides: {
                    root: {
                        width: '48px',
                        height: '48px',
                        fontSize: '1.5rem'
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
            MuiTooltip: {
                styleOverrides: {
                    tooltip: {
                        padding: 10,
                        backgroundColor: '#7d879c',
                        color: 'white',
                        lineHeight: 1.75,
                        fontSize: '14px',
                        fontWeight: 400
                    },
                    arrow: {
                        color: '#7d879c'
                    }
                }
            }
            // MuiPaper : {
            //     styleOverrides : {
            //         root: {
            //             '&:hover' : {
            //                 boxShadow: '0px 0px 28px rgba(3, 0, 71, 0.01)'
            //             }
            //         }
            //     }
            // }
        }
    }),[])

    const ThemeWithRepositiveFont = responsiveFontSizes(_theme);

    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={ThemeWithRepositiveFont}>
                {props.children}
            </ThemeProvider>
        </StyledEngineProvider>
    )
}

export default ProjectShowCaseCustomThemeProvider

