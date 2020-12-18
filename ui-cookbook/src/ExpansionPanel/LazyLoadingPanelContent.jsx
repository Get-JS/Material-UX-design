import React, { useState } from 'react';

import { makeStyles } from '@material-ui/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({
  panelDetails: { flexDirection: 'column' },
}));

function MaybeProgress({ loading }) {
  return loading ? <LinearProgress /> : null;
}

const fetchPanelContent = index =>
  new Promise(resolve =>
    setTimeout(
      () =>
        resolve(
          ['First panel content...', 'Second panel content...', 'Third panel content...', 'Fourth panel content...'][
            index
          ],
        ),
      1000,
    ),
  );

function LazyLoadingPanelContent() {
  const classes = useStyles();
  const [panels, setPanels] = useState([
    { title: 'First Panel Title' },
    { title: 'Second Panel Title' },
    { title: 'Third Panel Title' },
    { title: 'Fourth Panel Title' },
  ]);

  const handleChange = index => (e, expanded) => {
    if (!panels[index].content && expanded) {
      fetchPanelContent(index).then(content => {
        const newPanels = [...panels];
        newPanels[index] = { ...newPanels[index], content };
        setPanels(newPanels);
      });
    }
  };

  return (
    <>
      {panels.map((panel, index) => (
        <ExpansionPanel key={index} onChange={handleChange(index)}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>{panel.title}</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.panelDetails}>
            <MaybeProgress loading={!panel.content} />
            <Typography>{panel.content}</Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      ))}
    </>
  );
}
export default LazyLoadingPanelContent;
