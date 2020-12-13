import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function NestedGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2} direction="column">
        <Grid item xs={12} container>
          <Grid item xs={2}>
            Welcome, Hello ~
          </Grid>
          <Grid item xs={8} />
          <Grid item xs={2}>
            Logout
          </Grid>
          <Grid item xs={12}>
            <Divider />
          </Grid>
          <Grid item xs={12} container spacing={2}>
            <Grid item xs={6}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
              of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it? It is a long established fact
              that a reader will be distracted by the readable content of a page when looking at its layout. The point
              of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using
              'Content here, content here', making it look like readable English. Many desktop publishing packages and
              web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by
              accident, sometimes on purpose (injected humour and the like).
            </Grid>
            <Grid item xs={6}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
              of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it? It is a long established fact
              that a reader will be distracted by the readable content of a page when looking at its layout. The point
              of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using
              'Content here, content here', making it look like readable English. Many desktop publishing packages and
              web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by
              accident, sometimes on purpose (injected humour and the like).
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default NestedGrid;
