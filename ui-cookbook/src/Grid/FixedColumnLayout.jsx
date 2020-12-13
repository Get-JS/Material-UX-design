import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function FixedColumnLayout({ width }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item xs={width}>
          <Paper className={classes.paper}>xs={width}</Paper>
        </Grid>
        <Grid item xs={width}>
          <Paper className={classes.paper}>xs={width}</Paper>
        </Grid>
        <Grid item xs={width}>
          <Paper className={classes.paper}>xs={width}</Paper>
        </Grid>
        <Grid item xs={width}>
          <Paper className={classes.paper}>xs={width}</Paper>
        </Grid>
        <Grid item xs={width}>
          <Paper className={classes.paper}>xs={width}</Paper>
        </Grid>
        <Grid item xs={width}>
          <Paper className={classes.paper}>xs={width}</Paper>
        </Grid>
        <Grid item xs={width}>
          <Paper className={classes.paper}>xs={width}</Paper>
        </Grid>
        <Grid item xs={width}>
          <Paper className={classes.paper}>xs={width}</Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default FixedColumnLayout;
