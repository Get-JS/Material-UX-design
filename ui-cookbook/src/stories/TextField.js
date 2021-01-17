import React from 'react';

import { storiesOf } from '@storybook/react';

import withThemeProvider from './withThemeProvider';

import {
  ControllingInputWithState,
  PlaceholderAndHelperText,
  ValidationAndErrorDisplay,
  PasswordFields,
  MultilineInput,
  InputAdornments,
  InputMasking,
  FormatField,
  CustomFields,
} from '../TextField';

storiesOf('TextField', module)
  .addDecorator(withThemeProvider)
  .add('Controlling Input With State', () => <ControllingInputWithState />)
  .add('Placeholder and Helper Text', () => <PlaceholderAndHelperText />)
  .add('Validation and Error Display', () => <ValidationAndErrorDisplay />)
  .add('Password Fields', () => <PasswordFields />)
  .add('Multiline Input', () => <MultilineInput />)
  .add('Input Adornments', () => <InputAdornments />)
  .add('Input Masking', () => <InputMasking />)
  .add('Format Field', () => <FormatField />)
  .add('Custom Fields', () => <CustomFields />);
