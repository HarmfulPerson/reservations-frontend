import React from 'react';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import Container from '@mui/material/Container';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { ClassNames } from '@emotion/react';
import UserSessionDataHandler from '../../auth/UserSessionDataHandler';
import languages from '../../consts/language';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    width: '100%',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ededed',
  },
  paper: {
    width: '30%',
    borderRadius: '10px !important',
    display: 'flex',
    flexDirection: 'column',
  },
  submit: { width: '229px', marginTop: '12px !important' },
  registerWrapper: {
    marginTop: '40px',
  },
}));

const Register = () => {
  const x = 'register';
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <Paper className={classes.paper}>
        <p>lol</p>
      </Paper>
    </div>
  );
};

export default Register;
