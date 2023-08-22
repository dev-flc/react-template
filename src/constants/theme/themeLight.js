export const themeLight = {
  'Symbol(mui.nested)': false,
  breakpoints: {
    keys: ['xs', 'sm', 'md', 'lg', 'xl'],
    unit: 'px',
    values: {
      lg: 1200,
      md: 900,
      sm: 600,
      xl: 1536,
      xs: 0
    }
  },

  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true
      },

      styleOverrides: {
        containedPrimary: {
          backgroundColor: '#007FFF',
          color: '#fff'
        },

        sizeLarge: {
          fontFamily: "'roboto'",
          fontSize: '1rem',
          fontWeight: 700,
          letterSpacing: 0,
          lineHeight: 1.3125,
          padding: '0.875rem 1rem',
          scrollMarginTop: 'calc(var(--MuiDocs-header-height) + 32px)'
        },

        sizeSmall: {
          marginLeft: '-8px',
          padding: '4px 8px'
        }
      },

      variants: [
        {
          props: { variant: 'code' },
          style: {
            '& .MuiButton-endIcon': {
              color: '#bdbdbd',
              display: 'inline-block',
              marginRight: 10,
              position: 'absolute',
              right: 0
            },
            '& .MuiButton-startIcon': { color: '#bdbdbd' },
            '&:hover, &.Mui-focusVisible': {
              '& .MuiButton-endIcon': { color: '#007FFF' },
              backgroundColor: '#F0F7FF',
              borderColor: '#007FFF'
            },
            WebkitFontSmoothing: 'subpixel-antialiased',
            backgroundColor: '#fafafa',
            border: '1px solid',
            borderColor: '#e0e0e0',
            color: '#424242',
            fontFamily: "'roboto'",
            fontSize: '0.8125rem',
            fontWeight: 400,
            letterSpacing: 0,
            lineHeight: 1.5
          }
        },
        {
          props: { variant: 'link' },
          style: {
            '& svg': { ml: -0.5 },
            color: '#0072E5',
            fontSize: '0.875rem',
            fontWeight: 700,
            mb: 1
          }
        }
      ]
    },

    MuiButtonBase: {
      defaultProps: {
        disableTouchRipple: true
      }
    },

    MuiChip: {
      styleOverrides: {
        deleteIcon: {
          '&:hover': {
            color: '#003A75'
          },
          color: '#0059B2'
        }
      }
    },

    MuiCssBaseline: {
      defaultProps: {
        enableColorScheme: true
      }
    },

    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: 'rgba(194, 224, 255, 0.08)'
        }
      }
    },

    MuiIconButton: {
      variants: [
        {
          props: { color: 'primary' },
          style: {
            '&:hover': {
              background: '#fafafa',
              borderColor: '#e0e0e0'
            },
            border: '1px solid #eeeeee',
            borderRadius: 10,
            color: '#007FFF',
            height: 34,
            width: 34
          }
        }
      ]
    },

    MuiLink: {
      defaultProps: { underline: 'none' },
      styleOverrides: {
        root: {
          '& svg:last-child': { marginLeft: 2 },
          '&.MuiTypography-body1 > svg': { marginTop: 2 },
          '&:hover': { color: '#0059B2' },
          alignItems: 'center',
          color: '#0072E5',
          display: 'inline-flex',
          fontWeight: 700
        }
      }
    },

    MuiList: {
      styleOverrides: {
        root: {
          padding: 0
        }
      }
    },

    MuiListItemButton: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            '&:hover': { backgroundColor: '#C2E0FF' },
            backgroundColor: '#F0F7FF',
            border: '1px solid',
            borderColor: '#007FFF !important',
            borderRadius: 10,
            color: '#007FFF'
          },
          '&:hover': { backgroundColor: '#fafafa' },
          borderRadius: 0,
          color: '#616161',
          fontSize: '0.875rem',
          fontWeight: 500,
          padding: '8px',
          textTransform: 'none'
        }
      }
    },

    MuiMenu: {
      styleOverrides: {
        paper: {
          '& .MuiMenuItem-root': {
            '&.Mui-selected': {
              backgroundColor: 'rgba(194, 224, 255, 0.6)',
              color: '#0072E5',
              fontWeight: 500
            },
            '&:focus': { backgroundColor: '#fafafa' },
            '&:hover': { backgroundColor: '#fafafa' },
            fontSize: '0.875rem',
            fontWeight: 500
          },
          backgroundColor: '#fff',
          backgroundImage: 'none',
          border: '1px solid #eeeeee',
          color: '#3E5060',
          minWidth: 160
        }
      }
    },

    MuiPaginationItem: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            '&:hover': { backgroundColor: '#C2E0FF' },
            backgroundColor: '#F0F7FF',
            borderColor: '#007FFF !important',
            color: '#007FFF'
          },
          borderColor: '#eeeeee',
          color: '#616161',
          fontWeight: 700,
          textTransform: 'none'
        }
      }
    },

    MuiPaper: {
      styleOverrides: {
        outlined: {
          'a&, button&': {
            '&:hover': {
              boxShadow: '0px 4px 20px rgba(170, 180, 190, 0.3)'
            }
          },
          borderColor: '#eeeeee',
          display: 'block'
        },
        root: {
          '&[href]': { textDecorationLine: 'none' },
          backgroundColor: '#fff',
          backgroundImage: 'none'
        }
      }
    },

    MuiPopover: {
      styleOverrides: {
        paper: {
          boxShadow: '0px 4px 20px rgba(170, 180, 190, 0.3)'
        }
      }
    },

    MuiSelect: {
      defaultProps: {
        IconComponent: {
          compare: null,
          type: {}
        }
      },
      styleOverrides: {
        iconFilled: {
          top: 'calc(50% - .25em)'
        }
      }
    },

    MuiSwitch: {
      styleOverrides: {
        root: {
          '& .MuiSwitch-switchBase': {
            '&.Mui-checked': {
              color: '#fff',
              transform: 'translateX(11px)'
            }
          },
          height: 20,
          padding: 0,
          width: 32
        },
        switchBase: {
          '&.Mui-checked + .MuiSwitch-track': { opacity: 1 },
          color: '#fff',
          height: 20,
          padding: 0,
          width: 20
        },
        thumb: {
          flexShrink: 0,
          height: '14px',
          width: '14px'
        },
        track: {
          backgroundColor: '#bdbdbd',
          borderRadius: 32,
          opacity: 1
        }
      }
    },

    MuiTab: {
      defaultProps: {
        disableTouchRipple: true
      }
    },

    MuiTableCell: {
      styleOverrides: {
        body: { color: '#3E5060' },
        head: {
          color: '#1A2027',
          fontWeight: 700
        },
        root: {
          borderColor: '#E7EBF0',
          padding: '8px 16px'
        }
      }
    },

    MuiToggleButton: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            '&:hover': { backgroundColor: '#C2E0FF' },
            backgroundColor: '#F0F7FF',
            borderColor: '#007FFF !important',
            color: '#007FFF'
          },
          borderColor: '#eeeeee',
          color: '#616161',
          fontWeight: 500,
          textTransform: 'none'
        }
      }
    },

    MuiToggleButtonGroup: {
      styleOverrides: {
        root: { backgroundColor: '#fff' }
      }
    },

    MuiTooltip: {
      styleOverrides: {
        tooltip: { padding: '5px 9px' }
      }
    }
  },

  direction: 'ltr',

  mixins: {
    toolbar: {
      '@media (min-width:0px)': {
        '@media (orientation: landscape)': { minHeight: 48 }
      },
      '@media (min-width:600px)': { minHeight: 64 },
      minHeight: 56
    }
  },

  nprogress: { color: '#007FFF' },

  palette: {
    action: {
      activatedOpacity: 0.24,
      active: 'rgba(0, 0, 0, 0.54)',
      disabled: 'rgba(0, 0, 0, 0.26)',
      disabledBackground: 'rgba(0, 0, 0, 0.12)',
      disabledOpacity: 0.38,
      focus: 'rgba(0, 0, 0, 0.12)',
      focusOpacity: 0.12,
      hover: 'rgba(0, 0, 0, 0.04)',
      hoverOpacity: 0.08,
      selected: 'rgba(0, 0, 0, 0.08)',
      selectedOpacity: 0.16
    },

    background: {
      default: '#fff',
      paper: '#fff'
    },

    common: {
      black: '#1D1D1D',
      white: '#fff'
    },

    contrastThreshold: 3,

    divider: '#E7EBF0',

    error: {
      100: '#FFDBDE',
      200: '#FFBDC2',
      300: '#FF99A2',
      400: '#FF7A86',
      50: '#FFF0F1',
      500: '#FF505F',
      600: '#EB0014',
      700: '#C70011',
      800: '#94000D',
      900: '#570007',
      contrastText: '#fff',
      dark: '#C70011',
      light: '#FF99A2',
      main: '#EB0014'
    },

    grey: {
      100: '#f5f5f5',
      200: '#eeeeee',
      300: '#e0e0e0',
      400: '#bdbdbd',
      50: '#fafafa',
      500: '#9e9e9e',
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#212121',
      A100: '#f5f5f5',
      A200: '#eeeeee',
      A400: '#bdbdbd',
      A700: '#616161',
      contrastText: '#6F7E8C',
      main: '#E7EBF0'
    },

    info: {
      contrastText: '#fff',
      dark: '#01579b',
      light: '#03a9f4',
      main: '#0288d1'
    },

    mode: 'light',

    primary: {
      100: '#C2E0FF',
      200: '#99CCF3',
      300: '#66B2FF',
      400: '#3399FF',
      50: '#F0F7FF',
      500: '#007FFF',
      600: '#0072E5',
      700: '#0059B2',
      800: '#004C99',
      900: '#003A75',
      contrastText: '#fff',
      dark: '#0059B2',
      light: '#66B2FF',
      main: '#007FFF'
    },

    primaryDark: {
      100: '#CEE0F3',
      200: '#91B9E3',
      300: '#5090D3',
      400: '#265D97',
      50: '#E2EDF8',
      500: '#1E4976',
      600: '#173A5E',
      700: '#132F4C',
      800: '#001E3C',
      900: '#0A1929',
      main: '#5090D3'
    },

    secondary: {
      contrastText: '#fff',
      dark: '#7b1fa2',
      light: '#ba68c8',
      main: '#9c27b0'
    },

    success: {
      100: '#C6F6D9',
      200: '#9AEFBC',
      300: '#6AE79C',
      400: '#3EE07F',
      50: '#E9FBF0',
      500: '#21CC66',
      600: '#1DB45A',
      700: '#1AA251',
      800: '#178D46',
      900: '#0F5C2E',
      contrastText: '#fff',
      dark: '#1AA251',
      light: '#6AE79C',
      main: '#1AA251'
    },

    text: {
      disabled: 'rgba(0, 0, 0, 0.38)',
      primary: '#1A2027',
      secondary: '#3E5060'
    },

    tonalOffset: 0.2,

    warning: {
      100: '#FFF3C1',
      200: '#FFECA1',
      300: '#FFDC48',
      400: '#F4C000',
      50: '#FFF9EB',
      500: '#DEA500',
      600: '#D18E00',
      700: '#AB6800',
      800: '#8C5800',
      900: '#5A3600',
      contrastText: 'rgba(0, 0, 0, 0.87)',
      dark: '#AB6800',
      light: '#FFDC48',
      main: '#DEA500'
    }
  },

  props: { MuiBadge: { overlap: 'rectangular' } },

  shadows: [
    'none',
    '0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)',
    '0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)',
    '0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)',
    '0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)',
    '0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)',
    '0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)',
    '0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)',
    '0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)',
    '0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12)',
    '0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)',
    '0px 6px 7px -4px rgba(0,0,0,0.2),0px 11px 15px 1px rgba(0,0,0,0.14),0px 4px 20px 3px rgba(0,0,0,0.12)',
    '0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)',
    '0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12)',
    '0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px rgba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12)',
    '0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12)',
    '0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)',
    '0px 8px 11px -5px rgba(0,0,0,0.2),0px 17px 26px 2px rgba(0,0,0,0.14),0px 6px 32px 5px rgba(0,0,0,0.12)',
    '0px 9px 11px -5px rgba(0,0,0,0.2),0px 18px 28px 2px rgba(0,0,0,0.14),0px 7px 34px 6px rgba(0,0,0,0.12)',
    '0px 9px 12px -6px rgba(0,0,0,0.2),0px 19px 29px 2px rgba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.12)',
    '0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12)',
    '0px 10px 13px -6px rgba(0,0,0,0.2),0px 21px 33px 3px rgba(0,0,0,0.14),0px 8px 40px 7px rgba(0,0,0,0.12)',
    '0px 10px 14px -6px rgba(0,0,0,0.2),0px 22px 35px 3px rgba(0,0,0,0.14),0px 8px 42px 7px rgba(0,0,0,0.12)',
    '0px 11px 14px -7px rgba(0,0,0,0.2),0px 23px 36px 3px rgba(0,0,0,0.14),0px 9px 44px 8px rgba(0,0,0,0.12)',
    '0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)'
  ],

  shape: { borderRadius: 10 },

  transitions: {
    duration: {
      complex: 375,
      enteringScreen: 225,
      leavingScreen: 195,
      short: 250,
      shorter: 200,
      shortest: 150,
      standard: 300
    },
    easing: {
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
      sharp: 'cubic-bezier(0.4, 0, 0.6, 1)'
    }
  },

  typography: {
    allVariants: {
      scrollMarginTop: 'calc(var(--MuiDocs-header-height) + 32px)'
    },

    body1: {
      fontFamily: "'roboto'",
      fontSize: '1rem',
      fontWeight: 400,
      letterSpacing: 0,
      lineHeight: 1.5,
      scrollMarginTop: 'calc(var(--MuiDocs-header-height) + 32px)'
    },

    body2: {
      fontFamily: "'roboto'",
      fontSize: '0.875rem',
      fontWeight: 400,
      letterSpacing: 0,
      lineHeight: 1.5,
      scrollMarginTop: 'calc(var(--MuiDocs-header-height) + 32px)'
    },

    button: {
      fontFamily: "'roboto'",
      fontSize: '0.875rem',
      fontWeight: 700,
      letterSpacing: 0,
      lineHeight: 1.75,
      scrollMarginTop: 'calc(var(--MuiDocs-header-height) + 32px)',
      textTransform: 'initial'
    },

    caption: {
      display: 'inline-block',
      fontFamily: "'roboto'",
      fontSize: '0.75rem',
      fontWeight: 700,
      letterSpacing: 0,
      lineHeight: 1.5,
      scrollMarginTop: 'calc(var(--MuiDocs-header-height) + 32px)'
    },

    fontFamily: "'roboto'",
    fontFamilyCode: "'roboto'",
    fontFamilySystem: "'roboto'",
    fontFamilyTagline: "'roboto'",
    fontSize: 14,
    fontWeightBold: 700,
    fontWeightExtraBold: 800,
    fontWeightLight: 300,
    fontWeightMedium: 500,
    fontWeightRegular: 400,
    fontWeightSemiBold: 600,

    h1: {
      color: '#0A1929',
      fontFamily: "'roboto'",
      fontSize: 'clamp(2.625rem, 1.2857rem + 3.5714vw, 4rem)',
      fontWeight: 300,
      lineHeight: 1.1142857142857143,
      scrollMarginTop: 'calc(var(--MuiDocs-header-height) + 32px)'
    },

    h2: {
      color: '#132F4C',
      fontFamily: "'roboto'",
      fontSize: 'clamp(1.5rem, 0.9643rem + 1.4286vw, 2.25rem)',
      fontWeight: 800,
      lineHeight: 1.2222222222222223,
      scrollMarginTop: 'calc(var(--MuiDocs-header-height) + 32px)'
    },

    h3: {
      fontFamily: "'roboto'",
      fontSize: '2.25rem',
      fontWeight: 400,
      letterSpacing: 0.2,
      lineHeight: 1.2222222222222223,
      scrollMarginTop: 'calc(var(--MuiDocs-header-height) + 32px)'
    },

    h4: {
      fontFamily: "'roboto'",
      fontSize: '1.75rem',
      fontWeight: 400,
      letterSpacing: 0.2,
      lineHeight: 1.5,
      scrollMarginTop: 'calc(var(--MuiDocs-header-height) + 32px)'
    },

    h5: {
      color: '#007FFF',
      fontFamily: "'roboto'",
      fontSize: '1.5rem',
      fontWeight: 400,
      letterSpacing: 0.1,
      lineHeight: 1.5,
      scrollMarginTop: 'calc(var(--MuiDocs-header-height) + 32px)'
    },

    h6: {
      fontFamily: "'roboto'",
      fontSize: '1.25rem',
      fontWeight: 500,
      lineHeight: 1.5,
      scrollMarginTop: 'calc(var(--MuiDocs-header-height) + 32px)'
    },

    htmlFontSize: 16,

    overline: {
      fontFamily: "'roboto'",
      fontSize: '0.75rem',
      fontWeight: 400,
      lineHeight: 2.66,
      scrollMarginTop: 'calc(var(--MuiDocs-header-height) + 32px)',
      textTransform: 'uppercase'
    },

    subtitle1: {
      fontFamily: "'roboto'",
      fontSize: '1.125rem',
      fontWeight: 500,
      letterSpacing: 0,
      lineHeight: 1.3333333333333333,
      scrollMarginTop: 'calc(var(--MuiDocs-header-height) + 32px)'
    },

    subtitle2: {
      fontFamily: "'roboto'",
      fontSize: '0.875rem',
      fontWeight: 500,
      lineHeight: 1.57,
      scrollMarginTop: 'calc(var(--MuiDocs-header-height) + 32px)'
    }
  },

  zIndex: {
    appBar: 1100,
    drawer: 1200,
    fab: 1050,
    mobileStepper: 1000,
    modal: 1300,
    snackbar: 1400,
    speedDial: 1050,
    tooltip: 1500
  }
}
