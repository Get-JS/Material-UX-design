import React, { useState } from 'react';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function StatefulExpansionPanels() {
  const [expanded, setExpanded] = useState(0);
  const [panels] = useState([
    {
      title: 'First Panel Title',
      content: 'First panel content...',
    },
    {
      title: 'Second Panel Title',
      content: 'Second panel content...',
    },
    {
      title: 'Third Panel Title',
      content: 'Third panel content...',
    },
    {
      title: 'Fourth Panel Title',
      content: 'Fourth panel content...',
    },
  ]);

  const handleChange = expanded => () => {
    setExpanded(expanded);
  };

  return (
    <>
      {panels
        .filter(panel => !panel.hidden)
        .map((panel, index) => (
          <ExpansionPanel
            key={index}
            expanded={index === expanded}
            disabled={panel.disabled}
            onChange={handleChange(index)}
          >
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>{panel.title}</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>{panel.content}</Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        ))}
    </>
  );
}
export default StatefulExpansionPanels;
