import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';

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

function FillingSpace({ justify }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={3}>
          <Paper className={classes.paper}>
            <Grid container justify={justify}>
              <Grid item>
                <Chip label="xs=12" />
              </Grid>
              <Grid item>
                <Chip label="sm=6" />
              </Grid>
              <Grid item>
                <Chip label="md=3" />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper className={classes.paper}>
            <Grid container justify={justify}>
              <Grid item>
                <Chip label="xs=12" />
              </Grid>
              <Grid item>
                <Chip label="sm=6" />
              </Grid>
              <Grid item>
                <Chip label="md=3" />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper className={classes.paper}>
            <Grid container justify={justify}>
              <Grid item>
                <Chip label="xs=12" />
              </Grid>
              <Grid item>
                <Chip label="sm=6" />
              </Grid>
              <Grid item>
                <Chip label="md=3" />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper className={classes.paper}>
            <Grid container justify={justify}>
              <Grid item>
                <Chip label="xs=12" />
              </Grid>
              <Grid item>
                <Chip label="sm=6" />
              </Grid>
              <Grid item>
                <Chip label="md=3" />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default FillingSpace;
