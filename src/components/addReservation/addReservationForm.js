import React from 'react';
import { makeStyles } from '@mui/styles';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import plLocale from 'date-fns/locale/pl';
import Grid from '@mui/material/Grid';
import { SliderValueLabelUnstyled } from '@mui/base';
import languages from '../../consts/language';

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
}));

const AddReservationForm = () => {
  const [value, setValue] = React.useState(null);
  const hours = _.range(6, 23);
  React.useEffect(() => {
    const date1 = new Date(value);
    console.log(new Date(date1.setHours(0)));
    console.log();
  }, [value]);
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <h1>{languages.pl.addForm.header_}</h1>
      <LocalizationProvider
        dateAdapter={AdapterDateFns}
        adapterLocale={plLocale}
      >
        <DatePicker
          mask
          label="Wybierz dzień"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
      <Grid container>
        {value && (
          <>
            <Grid item xs={12}>
              <h3>Wybierz godzinę</h3>
            </Grid>
            {hours.map((hour) => (
              <Grid
                onClick={() => {
                  value.setHours(hour);
                }}
                item
                xs={3}
                className={`${classes.eachHour}`}
              >
                {hour}
              </Grid>
            ))}
          </>
        )}
      </Grid>
    </div>
  );
};

export default AddReservationForm;
