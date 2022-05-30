import React from 'react';
import PropTypes from 'prop-types';
import ReservationList from './ListRender';
import {
  authGetRequest,
  authDelRequestWithParam,
} from '../../helpers/requests';

const Reservations = (props) => {
  const { reservations, setReservations } = props;
  const getOwnReservations = async () => {
    const result = await authGetRequest('reservation');
    setReservations(result.data);
  };

  const deleteReservation = async (uid) => {
    const result = await authDelRequestWithParam('reservation', uid);
    if (result.status === 200) {
      setReservations(
        reservations.filter((reservation) => reservation.uid !== uid)
      );
    }
  };

  React.useEffect(() => {
    console.log(reservations);
  }, [reservations]);

  React.useEffect(() => {
    getOwnReservations();
  }, []);

  return (
    <ReservationList
      reservations={reservations}
      deleteReservation={deleteReservation}
    />
  );
};

Reservations.propTypes = {
  reservations: PropTypes.array.isRequired,
  setReservations: PropTypes.func.isRequired,
};

export default Reservations;
