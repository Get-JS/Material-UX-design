import React, { useState } from 'react';

import { makeStyles } from '@material-ui/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  textField: { margin: theme.spacing(1) },
}));

function formatDate(date) {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return [year, month < 10 ? `0${month}` : month, day < 10 ? `0${day}` : day].join('-');
}

const DatePicker = ({ date, ...props }) => (
  <TextField
    value={date instanceof Date ? formatDate(date) : date}
    type="date"
    InputLabelProps={{
      shrink: true,
    }}
    {...props}
  />
);

function UsingDatePickers() {
  const classes = useStyles();
  const [date, setDate] = useState('');

  const onChange = e => {
    setDate(new Date(`${e.target.value}T00:00:00`));
  };

  const dateFormatted = date ? date.toLocaleDateString() : '';

  return (
    <>
      <DatePicker date={date} onChange={onChange} label="My Date" className={classes.textField} />
      <TextField
        value={dateFormatted}
        label="Updated Date Value"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        InputProps={{ readOnly: true }}
      />
    </>
  );
}
export default UsingDatePickers;
