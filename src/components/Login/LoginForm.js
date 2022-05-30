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
import PropTypes from 'prop-types';
import UserSessionDataHandler from '../../auth/UserSessionDataHandler';
import languages from '../../consts/language';
import Alert from '../common/alert/alert';

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

const LoginForm = (props) => {
  const { login, handleChange, alert, errors, values } = props;
  const classes = useStyles();

  React.useEffect(() => {
    const listener = (event) => {
      console.log(event.code);
      if (event.code === 'Enter' || event.code === 'NumpadEnter') {
        login();
      }
    };
    document.addEventListener('keydown', listener);
    return () => {
      document.removeEventListener('keydown', listener);
    };
  });

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
                onChange={handleChange}
                value={values.email}
                error={errors.email}
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
                type="password"
                onChange={handleChange}
                value={values.password}
                error={errors.password}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                className={classes.submit}
                color="primary"
                onClick={login}
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

LoginForm.propTypes = {
  login: PropTypes.func.isRequired,
  values: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  alert: PropTypes.object.isRequired,
};

export default LoginForm;
