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
    '@media (max-width: 780px)': {
      width: '100%',
    },
    borderRadius: '10px !important',
    display: 'flex',
    flexDirection: 'column',
  },
  submit: { width: '229px', margin: '12px 0px 24px 0px !important' },
  registerWrapper: {
    padding: '40px 0px !important',
  },
}));

const RegisterForm = () => {
  const x = 'register';
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <Paper className={classes.paper}>
        <h1>{languages.pl.registerScreen.header_}</h1>
        <h3>{languages.pl.registerScreen.headerInfo_}</h3>
        <form className={classes.form} noValidate>
          <Grid container>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                id="email"
                label={languages.pl.registerScreen.email_}
                name="email"
                autoComplete="email"
                autoFocus
                // onChange={handleChange}
                // value={values.username}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                id="password"
                label={languages.pl.registerScreen.password_}
                name="password"
                autoComplete="password"
                autoFocus
                // onChange={handleChange}
                // value={values.username}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                id="rePassword"
                label={languages.pl.registerScreen.rePassword_}
                name="rePassword"
                autoComplete="rePassword"
                autoFocus
                // onChange={handleChange}
                // value={values.username}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                id="firstName"
                label={languages.pl.registerScreen.firstName_}
                name="firstName"
                autoComplete="firstName"
                autoFocus
                // onChange={handleChange}
                // value={values.username}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                id="lastName"
                label={languages.pl.registerScreen.lastName_}
                name="lastName"
                autoComplete="lastName"
                autoFocus
                // onChange={handleChange}
                // value={values.username}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                id="phone"
                label={languages.pl.registerScreen.phoneNumber_}
                name="phone"
                autoComplete="phone"
                autoFocus
                // onChange={handleChange}
                // value={values.username}
              />
            </Grid>
            <Grid xs={12}>
              <Button
                variant="contained"
                className={classes.submit}
                color="primary"
                // onClick={login}
              >
                {languages.pl.registerScreen.registerButton_}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </div>
  );
};

export default RegisterForm;
