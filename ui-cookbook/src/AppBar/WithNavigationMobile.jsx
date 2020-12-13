import React from 'react';
import { BrowserRouter as Router, Route, useHistory } from 'react-router-dom';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    [theme.breakpoints.down('xs')]: {
      flexGrow: 1,
    },
  },
  headerOptions: {
    display: 'flex',
    flex: 1,
    justifyContent: 'space-evenly',
  },
}));

function MyToolbar() {
  const history = useHistory();
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClick = pageURL => {
    history.push(pageURL);
    setAnchorEl(null);
  };

  const handleButtonClick = pageURL => {
    history.push(pageURL);
  };

  const menuItems = [
    {
      menuTitle: 'Home',
      pageURL: '/',
    },
    {
      menuTitle: 'Contact',
      pageURL: '/contact',
    },
    {
      menuTitle: 'About',
      pageURL: '/about',
    },
  ];

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Photos
          </Typography>
          {isMobile ? (
            <>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
                onClick={handleMenu}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'center',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'center',
                }}
                open={open}
                onClose={() => setAnchorEl(null)}
              >
                {menuItems.map(menuItem => {
                  const { menuTitle, pageURL } = menuItem;
                  return <MenuItem onClick={() => handleMenuClick(pageURL)}>{menuTitle}</MenuItem>;
                })}
              </Menu>
            </>
          ) : (
            <div className={classes.headerOptions}>
              <Button variant="contained" onClick={() => handleButtonClick('/')}>
                HOME
              </Button>
              <Button variant="contained" onClick={() => handleButtonClick('/contact')}>
                CONTACT
              </Button>
              <Button variant="contained" onClick={() => handleButtonClick('/about')}>
                ABOUT
              </Button>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

function WithNavigationMobile() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Route
        exact
        path="/"
        render={() => (
          <>
            <MyToolbar />
            <Typography>Home</Typography>
          </>
        )}
      />
      <Route
        exact
        path="/contact"
        render={() => (
          <>
            <MyToolbar />
            <Typography>contact</Typography>
          </>
        )}
      />
      <Route
        exact
        path="/about"
        render={() => (
          <>
            <MyToolbar />
            <Typography>about</Typography>
          </>
        )}
      />
    </div>
  );
}

export default WithNavigationMobile;
