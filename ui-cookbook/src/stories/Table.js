import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import withThemeProvider from './withThemeProvider';

import {
  StatefulTables,
  SortableColumns,
  FilteringRows,
  SelectingRows,
  RowActions,
  Pagination,
  PaginationCheckbox,
} from '../Table';

storiesOf('Table', module)
  .addDecorator(withKnobs)
  .addDecorator(withThemeProvider)
  .add('Stateful Tables', () => <StatefulTables />)
  .add('Sortable Columns', () => <SortableColumns />)
  .add('Filtering Rows', () => <FilteringRows />)
  .add('Selecting Rows', () => <SelectingRows />)
  .add('Row Actions', () => <RowActions />)
  .add('Pagination', () => <Pagination />)
  .add('PaginationCheckbox', () => <PaginationCheckbox />);
