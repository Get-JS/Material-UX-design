import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles(theme => ({
  fab: {
    margin: 0,
    top: 'auto',
    left: 'auto',
    bottom: 20,
    right: 20,
    position: 'fixed',
  },
}));

function ExtendedFab({ ...props }) {
  const classes = useStyles();
  const isExtended = React.Children.toArray(props.children).find(child => typeof child === 'string');

  return <Fab className={classes.fab} variant={isExtended && 'extended'} {...props} />;
}

function FloatingActions({ fabColor }) {
  return (
    <ExtendedFab color={fabColor}>
      Add
      <AddIcon />
    </ExtendedFab>
  );
}

export default FloatingActions;
