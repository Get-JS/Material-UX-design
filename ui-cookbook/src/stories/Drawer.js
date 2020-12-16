import React from 'react';

import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router';

import { withKnobs, select } from '@storybook/addon-knobs';

import withThemeProvider from './withThemeProvider';

import {
  DrawerTypes,
  DrawerItemState,
  DrawerItemNavigation,
  DrawerSections,
  AppBarInteraction
} from '../Drawer';

storiesOf('Drawers', module)
  .addDecorator(withKnobs)
  .addDecorator(StoryRouter())
  .addDecorator(withThemeProvider)
  .add('Drawer Types', () => (
    <DrawerTypes
      variant={select(
        'Variant',
        {
          Temporary: 'temporary',
          Persistent: 'persistent',
          Permanent: 'permanent'
        },
        'temporary'
      )}
    />
  ))
  .add('Drawer Item State', () => <DrawerItemState />)
  .add('Drawer Item Navigation', () => <DrawerItemNavigation />)
  .add('Drawer Sections', () => <DrawerSections />)
  .add('AppBar Interaction', () => (
    <AppBarInteraction
      variant={select(
        'Variant',
        {
          Temporary: 'temporary',
          Persistent: 'persistent'
        },
        'temporary'
      )}
    />
  ));
