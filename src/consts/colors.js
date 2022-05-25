import blue from '@material-ui/core/colors/blue';
import brown from '@material-ui/core/colors/brown';
import green from '@material-ui/core/colors/green';
import orange from '@material-ui/core/colors/orange';
import red from '@material-ui/core/colors/red';
import yellow from '@material-ui/core/colors/yellow';

export const colors = {
  black: '#000000',
  white: '#ffffff',
  grey: {
    10: '#f9f9fa',
    40: '#F5F5F5',
    50: '#f4f3ef',
    60: '#f0f0f0',
    70: '#ededed',
    100: '#D3D3D3',
    200: '#cccccc',
    300: '#0000008a',
    350: '#ababad',
    400: '#9A9A9A',
    600: '#696969',
    900: '#212120',
    999: '#1b1b1b',
  },
  blue: {
    200: '#51bcda',
    400: blue[400],
    500: 'rgba(0, 0, 255, 1)',
    600: '#344675',
    700: '#263148',
  },
  pink: {
    600: '#e14eca',
  },
  red: {
    500: red[500],
  },
  green: {
    500: green[500],
  },
  brown: {
    400: brown.A400,
  },
  orange: {
    500: orange[500],
  },
  yellow: {
    500: yellow[500],
  },
  violet: {
    600: '#664871',
  },
  blueGrey: {
    700: '#27293d',
    800: '#1e1e2f',
    900: '#1e1e24',
  },
  transparent: 'transparent',
  blackRgba: {
    40: 'rgba(0,0,0, 0.04)',
    200: 'rgba(0, 0, 0, 0.20)',
    260: 'rgba(0, 0, 0, 0.26)',
    340: 'rgba(0, 0, 0, 0.34)',
    400: 'rgba(0, 0, 0, 0.40)',
    540: 'rgba(0, 0, 0, 0.54)',
    870: 'rgba(0, 0, 0, 0.87)',
  },
  whiteRgba: {
    800: 'rgba(255, 255, 255, 0.8)',
  },
  colorsRgba: {
    500: 'rgba(81, 188 ,218, 0.5)',
    600: 'rgba(255, 78 ,202, 0.6)',
  },
};

export const colorsLight = {
  primary: {
    main: colors.blue[200],
  },
};

export const colorsDark = {
  primary: {
    main: colors.pink[600],
  },
  secondary: {
    main: colors.violet[600],
  },
};

export const approvedAreaChartStyle = {
  colors: {
    corridorColor: '#6495ED',
    groundColor: '#B8860B',
    groundEdgeColor: '#006400',
  },
};

export const popupLoaderStyle = {
  color: '#ef8213',
};

export const utmStatusColors = {
  accepted: 'green',
  rejected: 'red',
  verify: 'blue',
};
