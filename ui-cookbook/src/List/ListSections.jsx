import React from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

function ListSections() {
  return (
    <>
      <Typography variant="h6">First Section</Typography>
      <List>
        <ListItem>
          <ListItemText primary="First" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Second" />
        </ListItem>
      </List>
      <Typography variant="h6">Second Section</Typography>
      <List>
        <ListItem>
          <ListItemText primary="Third" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Fourth" />
        </ListItem>
      </List>
      <Typography variant="h6">Third Section</Typography>
      <List>
        <ListItem>
          <ListItemText primary="Fifth" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Sixth" />
        </ListItem>
      </List>
    </>
  );
}
export default ListSections;
