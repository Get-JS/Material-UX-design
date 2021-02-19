import React, { Fragment } from 'react';

import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2),
  },
  contained: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  containedPrimary: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
  },
}));

function ScopedComponentStyles() {
  const classes = useStyles();

  return (
    <Fragment>
      <Button classes={classes}>My Default Button</Button>
      <Button classes={classes} variant="contained">
        My Contained Button
      </Button>
      <Button classes={classes} variant="contained" color="primary">
        My Contained Primary Button
      </Button>
    </Fragment>
  );
}

export default ScopedComponentStyles;
