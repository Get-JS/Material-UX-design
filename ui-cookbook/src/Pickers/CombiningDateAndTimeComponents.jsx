import React, { useState } from 'react';

import { makeStyles } from '@material-ui/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  textField: { margin: theme.spacing(1) },
}));

const formatDate = date =>
  date
    .toISOString()
    .split(':')
    .slice(0, 2)
    .join(':');

function DateTimePicker({ date, ...props }) {
  return (
    <TextField
      value={date instanceof Date ? date.toISOString().replace('Z', '') : date}
      type="datetime-local"
      InputLabelProps={{
        shrink: true,
      }}
      {...props}
    />
  );
}

function CombiningDateAndTimeComponents() {
  const classes = useStyles();
  const [datetime, setDatetime] = useState(new Date());

  const onChangeDate = e => {
    setDatetime(new Date(`${e.target.value}Z`));
  };

  return (
    <DateTimePicker
      date={formatDate(datetime)}
      onChange={onChangeDate}
      label="My Date/Time"
      className={classes.textField}
    />
  );
}
export default CombiningDateAndTimeComponents;
