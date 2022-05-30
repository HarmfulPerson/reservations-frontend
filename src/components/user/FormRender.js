import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import PropTypes from 'prop-types';
import { makeStyles } from '@mui/styles';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import languages from '../../consts/language';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  boxShadow: 24,
  p: 4,
  display: 'flex',
  justifyContent: 'center',
};

const useStyles = makeStyles((theme) => ({
  gridRow: {
    display: 'flex',
    justifyContent: 'center',
  },
  header_: {
    textAlign: 'center',
  },
}));

const UserRenderForm = (props) => {
  const {
    showUserSettings,
    closeModal,
    values,
    changeSettings,
    errors,
    handleChange,
  } = props;
  const classes = useStyles();
  React.useEffect(() => {
    console.log(showUserSettings);
  }, [showUserSettings]);

  return (
    <Modal
      open={showUserSettings}
      onClose={closeModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <form className={classes.form} noValidate>
          <Grid container>
            <Grid className={classes.header_} item xs={12}>
              <h1>{languages.pl.userForm.header_}</h1>
            </Grid>
            <Grid className={classes.gridRow} item xs={12}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                id="email"
                error={errors.email}
                label={languages.pl.registerScreen.email_}
                name="email"
                autoComplete="email"
                autoFocus
                onChange={handleChange}
                value={values.email}
              />
            </Grid>
            <Grid className={classes.gridRow} item xs={12}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                type="password"
                id="password"
                label={languages.pl.registerScreen.password_}
                name="password"
                autoComplete="password"
                autoFocus
                onChange={handleChange}
                value={values.password}
                error={errors.password}
              />
            </Grid>
            <Grid className={classes.gridRow} item xs={12}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                id="rePassword"
                label={languages.pl.registerScreen.rePassword_}
                name="rePassword"
                type="password"
                autoComplete="rePassword"
                autoFocus
                onChange={handleChange}
                value={values.rePassword}
                error={errors.rePassword}
              />
            </Grid>
            <Grid className={classes.gridRow} item xs={12}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                id="firstName"
                label={languages.pl.registerScreen.firstName_}
                name="firstName"
                autoComplete="firstName"
                autoFocus
                onChange={handleChange}
                value={values.firstName}
                error={errors.firstName}
              />
            </Grid>
            <Grid className={classes.gridRow} item xs={12}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                id="lastName"
                label={languages.pl.registerScreen.lastName_}
                name="lastName"
                autoComplete="lastName"
                autoFocus
                onChange={handleChange}
                value={values.lastName}
                error={errors.lastName}
              />
            </Grid>
            <Grid className={classes.gridRow} item xs={12}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                id="phone"
                label={languages.pl.registerScreen.phoneNumber_}
                name="phone"
                autoComplete="phone"
                autoFocus
                onChange={handleChange}
                value={values.phone}
                error={errors.phone}
              />
            </Grid>
            <Grid className={classes.gridRow} item xs={12}>
              <Button
                variant="contained"
                className={classes.submit}
                color="primary"
                onClick={changeSettings}
              >
                {languages.pl.addForm.saveButton_}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Modal>
  );
};

UserRenderForm.propTypes = {
  showUserSettings: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  values: PropTypes.object.isRequired,
  changeSettings: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default UserRenderForm;
