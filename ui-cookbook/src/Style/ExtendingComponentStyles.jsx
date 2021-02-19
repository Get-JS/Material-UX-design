import React, { Fragment } from 'react';
import { JssProvider, jss } from 'react-jss';

import { makeStyles } from '@material-ui/styles';
import { createGenerateClassName } from '@material-ui/styles';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2),
   padding: theme.spacing(2),
  },
  contained: {
    extend: 'root',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  containedPrimary: {
    extend: 'contained',
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
  },
}));

const App = ({ children }) => (
  <JssProvider jss={jss} generateClassName={createGenerateClassName()}>
    <MuiThemeProvider theme={createMuiTheme()}>{children}</MuiThemeProvider>
  </JssProvider>
);

function Buttons() {
  const classes = useStyles();

  return (
    <Fragment>
      <Button className={classes.root}>My Default Button</Button>
      <Button className={classes.contained} variant="contained">
        My Contained Button
      </Button>
      <Button className={classes.containedPrimary} variant="contained" color="primary">
        My Contained Primary Button
      </Button>
    </Fragment>
  );
}

function ExtendingComponentStyles() {
  return (
    <App>
      <Buttons />
    </App>
  );
}
export default ExtendingComponentStyles;
