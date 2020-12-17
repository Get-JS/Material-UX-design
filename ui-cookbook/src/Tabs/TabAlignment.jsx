import React, { useState } from 'react';
import compose from 'recompose/compose';

import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

function TabAlignment() {
  const classes = useStyles();
  const match = useMediaQuery(theme => theme.breakpoints.between('xs', 'sm'));
  const [value, setValue] = useState(0);

  const onChange = (e, value) => {
    setValue(value);
  };

  return (
    <div className={classes.root}>
      <Tabs value={value} onChange={onChange} variant={match ? null : 'fullWidth'} centered>
        <Tab label="Item One" />
        <Tab label="Item Two" />
        <Tab label="Item Three" />
      </Tabs>
    </div>
  );
}
export default TabAlignment;
