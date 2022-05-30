import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  InsideLoader: {
    '&__modal-container': {
      display: 'flex',
      justifyContent: 'center',
      '&__circular-progress': {
        display: 'block',
        margin: '0 auto',
      },
    },
  },
  InsideLoaderCalc: {
    '&__modal-container': {
      '&__text': {
        '&--font-size': {
          fontSize: (props) => props.fontSize,
        },
      },
    },
  },
});

export { useStyles };
