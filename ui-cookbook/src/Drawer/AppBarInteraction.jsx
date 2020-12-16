import React, { useState } from 'react';
import clsx from 'clsx';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

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
  aboveDrawer: {
    zIndex: theme.zIndex.drawer + 1,
  },
}));

function MyToolbar({ title, handleMenuClick }) {
  const classes = useStyles();

  return (
    <>
      <AppBar className={classes.aboveDrawer}>
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" onClick={handleMenuClick}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.flex}>
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
      <div className={classes.toolbarMargin} />
    </>
  );
}

function MyDrawer({ variant, open, onClose, handleItemClick }) {
  const classes = useStyles();

  return (
    <Drawer variant={variant} open={open} onClose={onClose}>
      <div
        className={clsx({
          [classes.toolbarMargin]: variant === 'persistent',
        })}
      />
      <List>
        <ListItem button onClick={handleItemClick('Home')}>
          <ListItemText>Home</ListItemText>
        </ListItem>
        <ListItem button onClick={handleItemClick('Page 2')}>
          <ListItemText>Page 2</ListItemText>
        </ListItem>
        <ListItem button onClick={handleItemClick('Page 3')}>
          <ListItemText>Page 3</ListItemText>
        </ListItem>
      </List>
    </Drawer>
  );
}

function AppBarInteraction({ variant }) {
  const classes = useStyles();
  const [drawer, setDrawer] = useState(false);
  const [title, setTitle] = useState('Home');

  const toggleDrawer = () => {
    setDrawer(!drawer);
  };

  const handleItemClick = title => () => {
    setTitle(title);
    setDrawer(variant === 'temporary' ? false : drawer);
  };

  return (
    <div className={classes.root}>
      <MyToolbar title={title} handleMenuClick={toggleDrawer} />
      <MyDrawer open={drawer} onClose={toggleDrawer} handleItemClick={handleItemClick} variant={variant} />
    </div>
  );
}
export default AppBarInteraction;
