import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 322,
  },
  media: {
    width: 322,
    height: 322,
  },
}));

function PresentingMedia() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardHeader title="Grapefruit" subheader="Red" />
      <CardMedia
        className={classes.media}
        image="https://picsum.photos/seed/picsum/322/322"
        title="Grapefruit"
      />
      <CardContent>
        <Typography>Mmmm. Grapefruit.</Typography>
      </CardContent>
    </Card>
  );
}
export default PresentingMedia;
