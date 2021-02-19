import React from 'react';

import { makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  paper: {
    width: 200,
    height: 200,
    padding: theme.spacing(1),
  },
}));

function MyPaper({ horizontalAlign, verticalAlign, children }) {
  const classes = useStyles();

  return (
    <Grid
      container
      component={Paper}
      className={classes.paper}
      alignContent={verticalAlign}
      justify={horizontalAlign}
      children={children}
    />
  );
}

function MyTypography({ children }) {
  return <Grid item component={Typography} children={children} />;
}

function AligningText({ ...props }) {
  return (
    <MyPaper {...props}>
      <MyTypography>Text</MyTypography>
    </MyPaper>
  );
}

export default AligningText;
