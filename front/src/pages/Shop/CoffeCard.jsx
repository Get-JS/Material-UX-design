import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ShareIcon from "@material-ui/icons/Share";
import { Avatar, IconButton, CardMedia } from "@material-ui/core";
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
  CardStyle: {
    height: "25rem",
  },
  CardMediaStyle: {
    height: "150px"
  },
  CardContentStyle: {
    height: "130px"
  }
}));

function CoffeCard ({ avatarUrl, title, subtitle, description, imageUrl } ) {
  const classes = useStyles();

  return (
    <Card className={classes.CardStyle}>
      <CardHeader
        avatar={<Avatar src={avatarUrl} />}
        action={
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        }
        title={title}
        subheader={subtitle}
      />
      <CardMedia className={classes.CardMediaStyle} image={imageUrl} />
      <CardContent className={classes.CardContentStyle}>
        <Typography variant="body2" component="p">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">BUY NOW</Button>
        <Button size="small">OFFER</Button>
      </CardActions>
    </Card>
  );
}

export default CoffeCard;