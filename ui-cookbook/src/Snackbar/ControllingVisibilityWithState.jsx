import React, { useState } from 'react';

import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';

function ControllingVisibilityWithState() {
  const [open, setOpen] = useState(false);

  const showSnackbar = () => {
    setOpen(true);
  };
  const hideSnackbar = () => {
    setOpen(false);
  };

  return (
    <>
      <Button variant="contained" onClick={showSnackbar}>
        Show Snackbar
      </Button>
      <Snackbar open={open} onClose={hideSnackbar} autoHideDuration={5000} message="Visible Snackbar!" />
    </>
  );
}
export default ControllingVisibilityWithState;
