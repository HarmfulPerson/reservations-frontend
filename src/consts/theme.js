import { colors, colorsDark, colorsLight } from './colors';

const themeSet = {
  light: {
    palette: {
      type: 'light',
      primary: {
        main: colorsLight.primary.main,
      },
      secondary: {
        main: colors.brown[400],
      },
      error: {
        main: colors.red[500],
      },
      warning: {
        main: colors.orange[500],
      },
      info: {
        main: colors.yellow[500],
      },
      success: {
        main: colors.green[500],
      },
      background: {
        main: colors.white,
        gray: colors.grey[100],
      },
      // standardowe kolory
      black: colors.black,
      blue: colors.blue[500],
      green: colors.green[500],
      red: colors.red[500],
      white: colors.white,
      // kolory dla elementów formularza nie nadpisanych w overwrite
      selectMenu: {
        textColor: `${colors.grey[600]} !important`,
        backgroundColor: colors.white,
      },
      labelColor: colors.grey[600],
      // generalne style używane w wielu/kilku komponentach
      fontColor: colors.white,
      backgroundColor: colors.grey[50],
      iconDivider: colors.grey[100],
      iconColor: colors.grey[600],
      sideBarBackgroundColor: colors.grey[900],
      defaultLanguageColor: colors.blackRgba[540],
      tableRow: colors.colorsRgba[500],
      dashboard: {
        filters: {
          areaShowBorder: '10px',
          areaShowTransition: 'ease 0.2s',
          buttonBorder: '10px',
        },
      },
      popupBorderColor: colors.grey[200],
      // kolory używane w pojedycznych komponentach
      activationModalGreyBackgroundColor: colors.blackRgba[400],
      deleteConfirmationModalTextareaColor: colors.grey[300],
      detailsCardDescColor: colors.grey[400],
      displayUsersActionTitleColor: colors.grey[350],
      existingOrganizations: {
        cardColor: colors.white,
        hoverCardColor: colors.grey[10],
        linkColor: colors.grey[40],
      },
      uavoDetailsBorderRightColor: colors.grey[70],
      logoBackground: colors.grey[999],
    },
    typography: {
      color: {
        primary: '#000000',
        secondary: '#033355',
      },
      fontFamily: "'Montserrat', sans-serif",
      textTransform: 'none',
      h1: {
        fontSize: '32px',
        margin: '32px 0px',
      },
      h2: {
        fontSize: '24px',
        margin: '24px 0px',
      },
      h3: {
        fontWeight: 400,
        fontSize: '18.72px',
        margin: '18.72px 0px',
      },
      h4: {
        fontSize: '16px',
        margin: '16px 0px',
      },
      h5: {
        fontSize: '13.28px',
        margin: '13.28px 0px',
      },
      h6: {
        fontSize: '10.72px',
        margin: '10.72px 0px',
      },
    },
    overrides: {
      MuiCssBaseline: {
        '@global': {
          '::-webkit-scrollbar': {
            width: '5px',
            height: '5px',
          },
          '::-webkit-scrollbar-thumb': {
            background: colorsLight.primary.main,
            borderRadius: '13px',
          },
          '::-webkit-scrollbar-track': {
            background: colors.white,
            borderRadius: '15px',
            boxShadow: `inset -30px 30px 0px ${colors.grey[60]}`,
          },
        },
      },
      MuiMenuItem: {
        root: {
          color: colors.grey[600],
          padding: '10px 45px 10px 15px',
          '&:hover': {
            backgroundColor: `${colors.grey[600]} !important`,
            color: `${colors.white} !important`,
          },
        },
      },
      MuiInputBase: {
        input: {
          color: colors.grey[600],
          '&:-webkit-autofill': {
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: colors.grey[600],
          },
        },
      },
      MuiOutlinedInput: {
        root: {
          borderRadius: '4px',
          transition: 'border-color 0.3s ease-in-out',
          '&:hover $notchedOutline': {
            borderColor: colors.grey[100],
          },
          '&.Mui-focused $notchedOutline': {
            // border: `1px solid ${colors.grey[600]}`,
            // borderColor: colors.grey[600],
          },
        },
        notchedOutline: {
          borderColor: colors.grey[100],
        },
        inputMultiline: {
          resize: 'vertical',
        },
      },
      MuiTextField: {
        root: {
          color: colors.grey[600],
          fontSize: '14px',
          lineHeight: 'normal',
          transition: 'color 0.3s ease-in-out',
          '&:disabled': {
            backgroundColor: colors.grey[100],
            color: colors.grey[600],
            cursor: 'not-allowed',
          },
        },
      },
      MuiButton: {
        root: {
          backgroundColor: colorsLight.primary.main,
          borderRadius: '5px',
          borderWidth: '1px',
          boxShadow: 'none !important',
          color: colors.white,
          cursor: 'pointer',
          fontSize: '0.8671em',
          fontWeight: 600,
          lineHeight: '1.35em',
          margin: '10px 1px',
          opacity: 0.8,
          padding: '7px 13px',
          textTransform: 'uppercase',
          transition: 'opacity 150ms linear',
          '&:hover': {
            backgroundColor: colorsLight.primary.main,
            boxShadow: 'none !important',
            color: colors.white,
            opacity: 1,
          },
          '&.Mui-disabled': {
            backgroundColor: `${colors.blackRgba[260]} !important`,
            color: `${colors.white} !important`,
            cursor: 'not-allowed',
            opacity: 0.8,
            pointerEvents: 'visible',
          },
          '@media (hover: none)': {
            '&:hover': {
              backgroundColor: `${colorsLight.primary.main} !important`,
              opacity: 1,
            },
          },
        },
        text: {
          padding: '11px 23px',
        },
        contained: {
          backgroundColor: colorsLight.primary.main,
          boxShadow: 'none !important',
          color: colors.white,
          opacity: 0.8,
          padding: '12px 24px',
          transition: 'opacity 150ms linear',
          '&:hover': {
            backgroundColor: colorsLight.primary.main,
            boxShadow: 'none !important',
            color: colors.white,
            opacity: 1,
          },
        },
        outlined: {
          padding: '11px 23px',
          backgroundColor: colors.transparent,
          color: colors.blackRgba[870],
          border: `1px solid ${colorsLight.primary.main}`,
          opacity: 0.8,
          transition: 'opacity 150ms linear',
          '&:hover': {
            opacity: 1,
            backgroundColor: colors.blackRgba[40],
            color: colors.blackRgba[870],
          },
        },
      },
    },
  },
  dark: {
    palette: {
      type: 'dark',
      primary: {
        main: colorsDark.primary.main,
      },
      secondary: {
        main: colorsDark.secondary.main,
      },
      error: {
        main: colors.red[500],
      },
      warning: {
        main: colors.orange[500],
      },
      info: {
        main: colors.yellow[500],
      },
      success: {
        main: colors.green[500],
      },
      background: {
        default: colors.blueGrey[800],
      },
      text: {
        primary: `${colors.whiteRgba[800]} !important`,
        secondary: colors.white,
      },
      // standardowe kolory
      black: colors.black,
      blue: colors.blue[400],
      green: colors.green[500],
      red: colors.red[500],
      white: colors.white,
      // kolory dla elementów formularza nie nadpisanych w overwrite
      selectMenu: {
        textColor: colors.white,
        backgroundColor: colorsDark.secondary.main,
      },
      labelColor: colors.white,
      // generalne style używane w wielu/kilku komponentach
      fontColor: colors.white,
      backgroundColor: `linear-gradient(${colors.blueGrey[800]},${colors.blueGrey[900]})`,
      iconDivider: colors.grey[100],
      iconColor: colors.grey[600],
      sideBarBackgroundColor: colors.grey[900],
      defaultLanguageColor: colors.whiteRgba[800],
      tableRow: colors.colorsRgba[600],
      dashboard: {
        filters: {
          areaShowBorder: '10px',
          areaShowTransition: 'ease 0.2s',
          buttonBorder: '10px',
        },
      },
      popupBorderColor: colors.grey[200],
      // kolory używane w pojedycznych komponentach
      activationModalGreyBackgroundColor: colors.blackRgba[400],
      deleteConfirmationModalTextareaColor: colors.grey[300],
      detailsCardDescColor: colors.grey[400],
      displayUsersActionTitleColor: colors.grey[350],
      existingOrganizations: {
        cardColor: colors.blueGrey[700],
        overCardColor: colors.blueGrey[800],
        linkColor: colorsDark.primary.main,
      },
      uavoDetailsBorderRightColor: colorsDark.primary.main,
      // kolory tylko dla dark
      darkDisplayUser: {
        backgroundColor: colors.blue[600],
        darkerBlueForGradient: colors.blue[700],
        decorationPrimaryColor: colors.transparent,
        decorationSecondColor: colors.colorsRgba[600],
      },
      logoBackground: colors.grey[999],
    },
    typography: {
      color: {
        primary: '#040404',
        secondary: '#ffffff',
      },
      fontFamily: "'Poppins',sans-serif",
      textTransform: 'none',
      h1: {
        fontSize: '32px',
        margin: '32px 0px',
      },
      h2: {
        fontSize: '24px',
        margin: '24px 0px',
      },
      h3: {
        fontWeight: 100,
        fontSize: '18.72px',
        margin: '18.72px 0px',
      },
      h4: {
        fontSize: '16px',
        margin: '16px 0px',
      },
      h5: {
        fontSize: '13.28px',
        margin: '13.28px 0px',
      },
      h6: {
        fontSize: '10.72px',
        margin: '10.72px 0px',
      },
    },
    overrides: {
      MuiCssBaseline: {
        '@global': {
          '::-webkit-scrollbar': {
            width: '5px',
            height: '5px',
          },
          '::-webkit-scrollbar-thumb': {
            background: colorsDark.primary.main,
            borderRadius: '13px',
          },
          '::-webkit-scrollbar-track': {
            background: colors.blueGrey[800],
            borderRadius: '15px',
            boxShadow: `inset -30px 30px 0px ${colors.blueGrey[800]}`,
          },
        },
      },
      MuiSelect: {
        icon: {
          color: `${colors.white} !important`,
        },
      },
      MuiMenuItem: {
        root: {
          color: colors.white,
          padding: '10px 45px 10px 15px',
          '&:hover': {
            backgroundColor: `${colors.blackRgba[340]} !important`,
          },
          '&$selected': {
            backgroundColor: colors.blackRgba[200],
          },
        },
      },
      MuiInputBase: {
        input: {
          color: colors.white,
          '&:-webkit-autofill': {
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: colors.white,
          },
          '&$disabled': {
            backgroundColor: colors.grey[900],
            color: colorsDark.primary.main,
            cursor: 'not-allowed',
          },
        },
      },
      MuiTextField: {
        root: {
          backgroundColor: colors.transparent,
          borderRadius: '.4285rem',
          color: `linear-gradient(${colors.blueGrey[800]},${colors.blueGrey[900]})`,
          fontSize: '14px',
          lineHeight: 'normal',
          padding: '0px',
          transition: `color 0.3s ease-in-out, 
                        background-color 0.3s ease-in-out`,
          '&:focus': {
            border: `1px solid ${colorsDark.primary.main}`,
            boxShadow: 'none',
            color: `linear-gradient(${colors.blueGrey[800]},${colors.blueGrey[900]})`,
            outline: '0 !important',
          },
        },
      },
      MuiOutlinedInput: {
        notchedOutline: {
          borderColor: colorsDark.primary.main,
        },
      },
      MuiButton: {
        root: {
          background: colorsDark.primary.main,
          backgroundImage: `linear-gradient(to bottom left,
            ${colorsDark.primary.main}, ${colorsDark.secondary.main}, ${colorsDark.primary.main})`,
          backgroundPosition: '100% 0',
          backgroundSize: '210% 210%',
          border: 'none',
          borderRadius: '.4285rem',
          boxShadow: 'none !important',
          color: colors.white,
          cursor: 'pointer',
          fontSize: '.875rem',
          fontWeight: 600,
          lineHeight: '1.35em',
          margin: '10px 1px',
          padding: '11px 40px',
          textAlign: 'center',
          textTransform: 'Capitalize !important',
          transition: 'all .15s ease',
          userSelect: 'none',
          '&:hover': {
            boxShadow: `2px 2px 6px ${colors.grey[600]}`,
          },
          '&.Mui-disabled': {
            backgroundColor: colors.blackRgba[260],
            color: colors.white,
            cursor: 'not-allowed',
          },
        },
        text: {
          padding: '11px 40px',
        },
        contained: {
          backgroundColor: colorsDark.primary.main,
          boxShadow: 'none !important',
          color: colors.white,
          padding: '12px 24px',
          transition: 'opacity .15s ease',
          opacity: 0.8,
          '&:hover': {
            backgroundColor: colorsDark.primary.main,
            boxShadow: 'none !important',
            color: colors.white,
            opacity: 1,
          },
        },
        outlined: {
          padding: '11px 23px',
          backgroundColor: colors.transparent,
          background: 'none',
          color: colors.white,
          border: `1px solid ${colorsDark.primary.main}`,
          transition: 'background-color .15s ease',
          '&:hover': {
            backgroundColor: colors.grey[600],
            color: colors.white,
          },
        },
      },
    },
  },
};

export default themeSet;
