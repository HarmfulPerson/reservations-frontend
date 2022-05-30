import React from 'react';
import { BrowserRouter as Router, useParams } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import CircularProgress from '@mui/material/CircularProgress';
import { patchRequest } from '../../helpers/requests';
import Loader from '../common/Loader';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    width: '100%',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loader: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

const ConfirmReservation = () => {
  const { uid } = useParams();
  const classes = useStyles();
  const [confirmedReservation, setConfirmedReservation] = React.useState({});
  const [canRenderConfirmation, setCanRenderConfirmation] =
    React.useState(false);

  const confirmReservation = async () => {
    const result = await patchRequest('confirmReservation', { uid });
    setCanRenderConfirmation(true);
    setConfirmedReservation(result);
  };

  React.useEffect(() => {
    if (uid) confirmReservation(uid);
  }, [uid]);
  return (
    <div className={classes.wrapper}>
      {canRenderConfirmation ? (
        <div>
          {confirmedReservation.status === 200 ? (
            <div>
              Rezerwacja potwierdzona{' '}
              {`${confirmedReservation?.data?.startDate} - ${confirmedReservation?.data?.endDate}`}
            </div>
          ) : (
            <div>{confirmedReservation?.data?.error?.message}</div>
          )}
        </div>
      ) : (
        <div className={classes.loader}>
          <CircularProgress />
          <p>Potwierdzanie rezerwacji</p>
        </div>
      )}
    </div>
  );
};

export default ConfirmReservation;
