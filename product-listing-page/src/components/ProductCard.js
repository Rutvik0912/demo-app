import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';

function ProductCard({ product }) {
  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image={product.image}
        alt={product.name}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography variant="body1" color="text.primary">
          ${product.price}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ProductCard;