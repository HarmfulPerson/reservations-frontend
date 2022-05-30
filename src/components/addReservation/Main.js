import React from 'react';
import PropTypes from 'prop-types';
import AddReservationForm from './addReservationForm';
import { authPostRequest } from '../../helpers/requests';
import { parseDateToIsoWithOffset } from '../../consts/utils';

const AddReservation = (props) => {
  const { setReservations, x } = props;
  const [reservationDate, setReservationDate] = React.useState(null);
  const [alert, setAlert] = React.useState({});

  const addReservation = async () => {
    const endDate = new Date(reservationDate);
    endDate.setHours(endDate.getHours() + 1);
    const dateObject = {
      startDate: parseDateToIsoWithOffset(reservationDate),
      endDate: parseDateToIsoWithOffset(endDate),
    };

    const result = await authPostRequest('reservationAdd', dateObject);
    console.log(result);
    if (result.status === 201) {
      setAlert({ status: 'success', text: 'Dodano poprawnie' });
      setReservations((currReservations) => [...currReservations, result.data]);
    }
  };

  return (
    <AddReservationForm
      reservationDate={reservationDate}
      setReservationDate={setReservationDate}
      saveButtonFunction={addReservation}
      alert={alert}
    />
  );
};

AddReservation.propTypes = {
  setReservations: PropTypes.func.isRequired,
  x: PropTypes.number.isRequired,
};

export default AddReservation;
