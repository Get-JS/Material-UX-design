import React from 'react';
import { Grid } from '@material-ui/core';
import Header from 'components/Header';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
  HeaderStyle: {
    marginBottom: "5rem",
  },
}));

function BasedLayout({ children }) {
  const classes = useStyles();

  return (
    <Grid container direction="column">
      <Grid item className={classes.HeaderStyle}>
        <Header />
      </Grid>

      <Grid item container>
        <Grid item xs={false} sm={2} />
        <Grid item xs={12} sm={8}>
          {children}
        </Grid>
        <Grid item xs={false} sm={2} />
      </Grid>
    </Grid>
  );
}

export default BasedLayout;
