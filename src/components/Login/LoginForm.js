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
    margin: '40px 0px',
  },
}));

const LoginForm = () => {
  const x = 1;
  const classes = useStyles();
  console.log('login');
  return (
    <div className={classes.wrapper}>
      <Paper className={classes.paper}>
        <h1>{languages.pl.loginScreen.helloMessage_}</h1>
        <h3>{languages.pl.loginScreen.loginInfo_}</h3>
        <form className={classes.form} noValidate>
          <Grid container>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                id="email"
                label={languages.pl.loginScreen.email_}
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
                label={languages.pl.loginScreen.password_}
                name="password"
                autoComplete="password"
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
                {languages.pl.loginScreen.button_}
              </Button>
            </Grid>
          </Grid>
        </form>
        <Grid className={classes.registerWrapper} container>
          <Grid item xs={12}>
            <Link className={classes.link} to="/register">
              {languages.pl.loginScreen.noAccountMessage_}
            </Link>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default LoginForm;
