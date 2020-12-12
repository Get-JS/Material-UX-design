import React from 'react';
import CoffeCard from './CoffeCard';
import { Grid } from '@material-ui/core';
import coffeMakerList from '@fake-db/shop';

function Content() {
  return (
    <Grid container spacing={2}>
      {coffeMakerList.map((data) => (
        <Grid item xs={12} sm={4}>
          <CoffeCard {...data} />
        </Grid>
      ))}
    </Grid>
  );
}

export default Content;
