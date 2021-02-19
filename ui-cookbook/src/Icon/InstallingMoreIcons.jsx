import React, { Fragment } from 'react';

import { makeStyles } from '@material-ui/styles';

import Apple from 'mdi-material-ui/Apple';
import Facebook from 'mdi-material-ui/Facebook';
import Google from 'mdi-material-ui/Google';
import Hulu from 'mdi-material-ui/Hulu';
import Linkedin from 'mdi-material-ui/Linkedin';
// import Lyft from 'mdi-material-ui/Lyft';
import Microsoft from 'mdi-material-ui/Microsoft';
import Netflix from 'mdi-material-ui/Netflix';
import Npm from 'mdi-material-ui/Npm';
import Reddit from 'mdi-material-ui/Reddit';
import Twitter from 'mdi-material-ui/Twitter';
// import Uber from 'mdi-material-ui/Uber';

const useStyles = makeStyles((theme) => ({
  icon: { margin: theme.spacing(3) },
}));

function InstallingMoreIcons() {
  const classes = useStyles();

  return (
    <Fragment>
      <Apple className={classes.icon} />
      <Facebook className={classes.icon} />
      <Google className={classes.icon} />
      <Hulu className={classes.icon} />
      <Linkedin className={classes.icon} />
      {/* <Lyft className={classes.icon} /> */}
      <Microsoft className={classes.icon} />
      <Netflix className={classes.icon} />
      <Npm className={classes.icon} />
      <Reddit className={classes.icon} />
      <Twitter className={classes.icon} />
      {/* <Uber className={classes.icon} /> */}
    </Fragment>
  );
}
export default InstallingMoreIcons;
