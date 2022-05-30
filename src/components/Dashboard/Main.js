import React from 'react';
import Paper from '@mui/material/Paper';
import { makeStyles } from '@mui/styles';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import IconButton from '@mui/material/IconButton';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import UserSessionDataHandler from '../../auth/UserSessionDataHandler';
import languages from '../../consts/language';
import AddReservationForm from '../addReservation/Main';
import ReservationsList from '../reservationList/Main';
import Auth from '../../auth/Auth';
import history from '../../history';

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
    height: 'calc(100% - 120px)',
    overflowY: 'hidden',
    margin: '0 auto 40px auto',
  },
  leftSideDashboard: {
    marginRight: '10px',
    width: '50%',
    height: '100%',
    overflowY: 'auto',
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
    width: '80px',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    marginRight: '20px',
    justifyContent: 'center',
  },
}));
const Dashboard = () => {
  const classes = useStyles();
  const [reservations, setReservations] = React.useState([]);

  const logout = () => {
    const auth = new Auth();

    UserSessionDataHandler.removeToken();
    UserSessionDataHandler.removeSettings();
    UserSessionDataHandler.removeUserData();
    window.location.reload(true);
    history.push('/login');
  };

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
              <SettingsOutlinedIcon />
            </IconButton>
            <IconButton onClick={() => logout()}>
              <LogoutOutlinedIcon />
            </IconButton>
          </div>
        </div>
      </Paper>
      <div className={classes.listAndAddWrapper}>
        <Paper className={classes.leftSideDashboard}>
          <ReservationsList
            reservations={reservations}
            setReservations={setReservations}
          />
        </Paper>
        <Paper className={classes.rightSideDashboard}>
          <AddReservationForm setReservations={setReservations} x={11} />
        </Paper>
      </div>
    </div>
  );
};

export default Dashboard;
