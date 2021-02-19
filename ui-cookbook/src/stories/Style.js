import React from 'react';

import { storiesOf } from '@storybook/react';

import withThemeProvider from './withThemeProvider';

import {
  BasicComponentStyles,
  ScopedComponentStyles,
  ExtendingComponentStyles,
  MovingStylesToThemes,
  OtherStylingOptions,
} from '../Style';

storiesOf('Styles', module)
  .addDecorator(withThemeProvider)
  .add('Basic Component Styles', () => <BasicComponentStyles />)
  .add('Scoped Component Styles', () => <ScopedComponentStyles />)
  .add('Extending Component Styles', () => <ExtendingComponentStyles />)
  .add('Moving Styles To Themes', () => <MovingStylesToThemes />)
  .add('Other Styling Options', () => <OtherStylingOptions />);
