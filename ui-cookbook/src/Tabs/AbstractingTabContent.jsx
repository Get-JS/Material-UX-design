import React, { Children, useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  tabContent: {
    padding: theme.spacing(2),
  },
}));

function TabContainer({ children, value: valueProp }) {
  const [value, setValue] = useState();

  const onChange = (e, value) => {
    setValue(value);
  };

  if (value === undefined) {
    setValue(valueProp);
  }

  return (
    <>
      <Tabs value={value} onChange={onChange}>
        {Children.map(children, child => (
          <Tab label={child.props.label} />
        ))}
      </Tabs>
      {Children.map(children, (child, index) => (index === value ? child : null))}
    </>
  );
}

TabContainer.defaultProps = {
  value: 0,
};

function TabContent({ children }) {
  const classes = useStyles();

  return (
    <Typography component="div" className={classes.tabContent}>
      {children}
    </Typography>
  );
}

function AbstractingTabContent() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <TabContainer value={1}>
        <TabContent label="Item One">Item One Content</TabContent>
        <TabContent label="Item Two">Item Two Content</TabContent>
        <TabContent label="Item Three">Item Three Content</TabContent>
      </TabContainer>
    </div>
  );
}
export default AbstractingTabContent;
