import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

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

function MyToolbar({ title, MenuItems, RightButton }) {
  const classes = useStyles();
  const [anchor, setAnchor] = useState(null);
  const handleCloseMenu = () => setAnchor(null);

  return (
    <>
      <AppBar>
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
            onClick={e => setAnchor(e.currentTarget)}
          >
            <MenuIcon />
          </IconButton>
          <Menu anchorEl={anchor} open={Boolean(anchor)} onClose={handleCloseMenu}>
            {MenuItems ? (
              <MenuItems handleCloseMenu={handleCloseMenu} />
            ) : (
              <>
                <MenuItem onClick={handleCloseMenu}>Profile</MenuItem>
                <MenuItem onClick={handleCloseMenu}>My account</MenuItem>
                <MenuItem onClick={handleCloseMenu}>Logout</MenuItem>
              </>
            )}
          </Menu>
          <Typography variant="h6" color="inherit" className={classes.flex}>
            {title}
          </Typography>
          {RightButton ? <RightButton /> : <Button color="inherit">Login</Button>}
        </Toolbar>
      </AppBar>
      <div className={classes.toolbarMargin} />
    </>
  );
}

function ToolbarAbstraction({ ...props }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <MyToolbar {...props} />
    </div>
  );
}

export default ToolbarAbstraction;
