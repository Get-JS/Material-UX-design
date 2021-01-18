import React, { useState } from 'react';

import { makeStyles } from '@material-ui/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
  control: { margin: theme.spacing(2), minWidth: 200 },
}));

const categories = [
  { label: 'Category 1', id: 1 },
  { label: 'Category 2', id: 2 },
  { label: 'Category 3', id: 3 },
];

const products = [
  { label: 'Product 1', id: 1, category: 1 },
  { label: 'Product 2', id: 2, category: 1 },
  { label: 'Product 3', id: 3, category: 1 },
  { label: 'Product 4', id: 4, category: 2 },
  { label: 'Product 5', id: 5, category: 2 },
  { label: 'Product 6', id: 6, category: 2 },
  { label: 'Product 7', id: 7, category: 3 },
  { label: 'Product 8', id: 8, category: 3 },
  { label: 'Product 9', id: 9, category: 3 },
];

function ControllingSelectsWithState() {
  const classes = useStyles();

  const [selectCategory, setSelectCategory] = useState({ id: '' });
  const [selectProduct, setSelectProduct] = useState({ id: '' });
  
  const collections = {
    categories,
    products,
  };

  const setters = {
    categories: setSelectCategory,
    products: setSelectProduct,
  };

  const onChange = ({ target: { name, value } }) => {
    const setCollection = setters[name];
    const find = collections[name].find(item => item.id === value);
    setCollection(find);
  };

  return (
    <>
      <FormControl className={classes.control}>
        <InputLabel htmlFor="categories">Category</InputLabel>
        <Select
          value={selectCategory.id}
          onChange={onChange}
          inputProps={{
            name: 'categories',
            id: 'categories',
          }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {categories.map(category => (
            <MenuItem key={category.id} value={category.id}>
              {category.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl className={classes.control} disabled={selectCategory.id === ''}>
        <InputLabel htmlFor="Products">Product</InputLabel>
        <Select
          value={selectProduct.id}
          onChange={onChange}
          inputProps={{
            name: 'products',
            id: 'values',
          }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {products
            .filter(product => product.category === selectCategory.id)
            .map(product => (
              <MenuItem key={product.id} value={product.id}>
                {product.label}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </>
  );
}
export default ControllingSelectsWithState;
