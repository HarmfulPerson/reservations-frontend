import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from '@mui/material';

const Main = (props) => {
  const { alertObject } = props;
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {alertObject?.status && (
        <Alert
          style={{ position: 'absolute', right: '20px', bottom: '20px' }}
          severity={alertObject.status}
        >
          {alertObject.text}
        </Alert>
      )}
    </>
  );
};

Main.propTypes = {
  alertObject: PropTypes.object.isRequired,
};

export default Main;
