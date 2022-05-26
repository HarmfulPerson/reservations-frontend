import React from 'react';
import Paper from '@mui/material/Paper';
import { makeStyles } from '@mui/styles';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import IconButton from '@mui/material/IconButton';
import UserSessionDataHandler from '../../auth/UserSessionDataHandler';
import languages from '../../consts/language';
import AddReservationForm from '../addReservation/addReservationForm';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    width: '100%',
    height: '100vh',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ededed',
    flexDirection: 'column',
  },
  appBar: {
    width: '80%',
    height: '60px',
    margin: '20px auto',
  },
  listAndAddWrapper: {
    display: 'flex',
    flexDirection: 'row',
    width: '80%',
    height: '100%',
    margin: '0 auto 40px auto',
  },
  leftSideDashboard: {
    marginRight: '10px',
    width: '50%',
    height: '100%',
  },
  rightSideDashboard: {
    width: '50%',
    marginLeft: '10px',
    height: '100%',
  },
  userInfo: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    marginLeft: '20px',
  },
  nameSurname: {
    textTransform: 'capitalize',
  },
  loggedAs: {
    fontWeight: 'bold',
  },
  appBarContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignContent: 'center',
    height: '100%',
  },
  logoutButtonContainer: {
    width: '40px',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    marginRight: '20px',
    justifyContent: 'center',
  },
}));
const Dashboard = () => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <Paper className={classes.appBar}>
        <div className={classes.appBarContainer}>
          <div className={classes.userInfo}>
            <span className={classes.loggedAs}>
              {languages.pl.dashboard.loggedAs_}:&nbsp;
            </span>
            <span className={classes.nameSurname}>
              {` ${UserSessionDataHandler.getUserData().firstName}`}&nbsp;
            </span>{' '}
            <span className={classes.nameSurname}>
              {UserSessionDataHandler.getUserData().lastName}
            </span>
          </div>
          <div className={classes.logoutButtonContainer}>
            <IconButton>
              <LogoutOutlinedIcon />
            </IconButton>
          </div>
        </div>
      </Paper>
      <div className={classes.listAndAddWrapper}>
        <Paper className={classes.leftSideDashboard} />
        <Paper className={classes.rightSideDashboard}>
          <AddReservationForm />
        </Paper>
      </div>
    </div>
  );
};

export default Dashboard;
