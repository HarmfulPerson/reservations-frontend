import React from 'react';

import CircularProgress from '@mui/material/CircularProgress';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';

import { useStyles } from './InsideLoaderUseStyles';

const InsideLoader = (props) => {
  const classes = useStyles(props);
  const { loaderSize, fontSize, text } = props;
  return (
    <div
      className={`${classes.InsideLoader}__modal-container ${classes.InsideLoaderCalc}__modal-container`}
    >
      <CircularProgress
        className={`${classes.InsideLoader}__modal-container__circular-progress`}
        size={loaderSize}
      />
      <Typography
        className={`${classes.InsideLoaderCalc}__modal-container__text--font-size`}
        align="center"
        color="primary"
        sx={{ fontSize }}
      >
        &nbsp;&nbsp;{text || ''}
      </Typography>
    </div>
  );
};

InsideLoader.propTypes = {
  loaderSize: PropTypes.number,
  text: PropTypes.string,
  fontSize: PropTypes.number,
};
export default InsideLoader;
