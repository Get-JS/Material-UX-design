import React from 'react';
import { Route, Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  tabContent: {
    padding: theme.spacing(2),
  },
}));

function TabContainer({ value }) {
  return (
    <AppBar position="static">
      <Tabs value={value}>
        <Tab label="Item One" component={Link} to="/" />
        <Tab label="Item Two" component={Link} to="/page2" />
        <Tab label="Item Three" component={Link} to="/page3" />
      </Tabs>
    </AppBar>
  );
}

function TabNavigationWithRoutes() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Route
        exact
        path="/"
        render={() => (
          <>
            <TabContainer value={0} />
            <Typography component="div" className={classes.tabContent}>
              Item One
            </Typography>
          </>
        )}
      />
      <Route
        exact
        path="/page2"
        render={() => (
          <>
            <TabContainer value={1} />
            <Typography component="div" className={classes.tabContent}>
              Item Two
            </Typography>
          </>
        )}
      />
      <Route
        exact
        path="/page3"
        render={() => (
          <>
            <TabContainer value={2} />
            <Typography component="div" className={classes.tabContent}>
              Item Three
            </Typography>
          </>
        )}
      />
    </div>
  );
}
export default TabNavigationWithRoutes;
