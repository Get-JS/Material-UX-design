import React from 'react';

import { storiesOf } from '@storybook/react';

import withThemeProvider from './withThemeProvider';

import {
  StatefulExpansionPanels,
  FormattingPanelHeaders,
  ScrollablePanelContent,
  LazyLoadingPanelContent,
  ControlledAccordions,
  CustomizedAccordions,
} from '../ExpansionPanel';

storiesOf('Expansion Panels', module)
  .addDecorator(withThemeProvider)
  .add('Stateful Expansion Panels', () => <StatefulExpansionPanels />)
  .add('Formatting Panel Headers', () => <FormattingPanelHeaders />)
  .add('Scrollable Panel Content', () => <ScrollablePanelContent />)
  .add('Lazy Loading Panel Content', () => <LazyLoadingPanelContent />)
  .add('ControlledAccordions', () => <ControlledAccordions />)
  .add('CustomizedAccordions', () => <CustomizedAccordions />);
