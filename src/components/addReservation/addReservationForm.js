import React from 'react';
import { makeStyles } from '@mui/styles';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import plLocale from 'date-fns/locale/pl';
import Grid from '@mui/material/Grid';
import clsx from 'clsx';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';
import languages from '../../consts/language';
import AlertObject from '../common/alert/alert';

const _ = require('underscore');

const useStyles = makeStyles((theme) => ({
  wrapper: {
    width: '100%',
    height: '100%',
  },
  pickedHour: {
    backgroundColor: 'yellow',
  },
  eachHour: {
    width: '25%',
    padding: '10px 0px',
    '&:hover': {
      backgroundColor: 'yellow',
      cursor: 'pointer',
    },
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px 20px',
  },
  buttonSave: {
    color: 'white !important',
    backgroundColor: 'green !important',
  },
  buttonReset: {
    color: 'white !important',
    backgroundColor: 'red !important',
  },
}));

const AddReservationForm = (props) => {
  const { reservationDate, setReservationDate, saveButtonFunction, alert } =
    props;
  const [canRenderSummary, setCanRenderSummary] = React.useState(false);
  const hours = _.range(6, 23);
  const classes = useStyles();

  const handleHourPick = (hour) => {
    setReservationDate(new Date(new Date(reservationDate).setHours(hour)));
    setCanRenderSummary(true);
  };

  const returnInfoString = (date, isEndDate = false) => {
    const lessonDuration = 1;

    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${
      isEndDate ? date.getHours() + lessonDuration : date.getHours()
    }:00`;
  };

  const handleReset = () => {
    setReservationDate(null);
    setCanRenderSummary(false);
  };

  return (
    <div className={classes.wrapper}>
      <h1>{languages.pl.addForm.header_}</h1>
      <LocalizationProvider
        dateAdapter={AdapterDateFns}
        adapterLocale={plLocale}
      >
        <DatePicker
          label="Wybierz dzień"
          value={reservationDate}
          disablePast
          onChange={(newValue) => {
            setReservationDate(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
      <Grid container>
        {reservationDate && (
          <>
            <Grid item xs={12}>
              <h3>{languages.pl.addForm.pickHour_}</h3>
            </Grid>
            {hours.map((hour) => (
              <Grid
                onClick={() => {
                  handleHourPick(hour);
                }}
                item
                xs={3}
                className={clsx({
                  [classes.pickedHour]:
                    new Date(reservationDate).getHours() === hour,
                  [classes.eachHour]: true,
                })}
              >
                {hour}
              </Grid>
            ))}
          </>
        )}
      </Grid>
      <Grid container>
        {canRenderSummary && (
          <Grid item xs={12}>
            <h3>{languages.pl.addForm.summaryHeader_}</h3>
            <p>{languages.pl.addForm.summaryInfo_}:</p>
            <p>{`${languages.pl.addForm.summaryStartsAt_}: ${returnInfoString(
              reservationDate
            )}`}</p>
            <p>{`${languages.pl.addForm.summaryEndsAt_}: ${returnInfoString(
              reservationDate,
              true
            )}`}</p>
            <Grid className={classes.buttonContainer} item xs={12}>
              <Button
                onClick={() => handleReset()}
                className={classes.buttonReset}
              >
                {languages.pl.addForm.resetButton_}
              </Button>
              <Button
                onClick={() => saveButtonFunction()}
                className={classes.buttonSave}
              >
                {languages.pl.addForm.saveButton_}
              </Button>
            </Grid>
          </Grid>
        )}
      </Grid>
      {/* <AlertObject alertObject={alert} /> */}
    </div>
  );
};

AddReservationForm.propTypes = {
  reservationDate: PropTypes.instanceOf(Date),
  setReservationDate: PropTypes.func.isRequired,
  saveButtonFunction: PropTypes.func.isRequired,
  alert: PropTypes.object.isRequired,
};

export default AddReservationForm;
