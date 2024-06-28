import React from 'react';
import { Grid } from '@mui/material';
import ProductCard from './ProductCard';

function ProductList({ products }) {
  return (
    <Grid container spacing={4}>
      {products.map(product => (
        <Grid item xs={12} sm={6} md={4} key={product.id}>
          <ProductCard product={product} />
        </Grid>
      ))}
    </Grid>
  );
}

export default ProductList;