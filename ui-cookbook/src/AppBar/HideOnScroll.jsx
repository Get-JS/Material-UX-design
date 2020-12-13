import React, { useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  toolbarMargin: theme.mixins.toolbar,
}));

function ScrolledAppBar() {
  const classes = useStyles();
  const [scrolling, setScrolling] = useState(false);

  const handleScroll = e => {
    setScrolling(e.target.documentElement.scrollTop);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Fade in={!scrolling}>
      <AppBar>
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.flex}>
            My Title
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Fade>
  );
}

function HideOnScroll() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ScrolledAppBar />
      <div className={classes.toolbarMargin} />
      <ul>
        {new Array(500).fill(null).map((v, i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
    </div>
  );
}

export default HideOnScroll;
