import React, { useState, useEffect } from 'react';
import { Container, Grid, Box, MenuItem, Select, Typography } from '@mui/material';
import ProductList from './components/ProductList';
import FiltersPanel from './components/FiltersPanel';
import NavBar from './components/NavBar';
import productsData from './data/products.json';
import './App.css';

function App() {
  const [products, setProducts] = useState(productsData);
  const [filteredProducts, setFilteredProducts] = useState(productsData);
  const [filters, setFilters] = useState({
    category: [],
    priceRange: [0, 500],
    brands: [],
    availability: [],
  });
  const [sort, setSort] = useState('most-popular');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    applyFilters();
  }, [filters, sort, searchQuery]);

  const applyFilters = () => {
    let filtered = products.filter(product => {
      let categoryMatch = filters.category.length ? filters.category.includes(product.category) : true;
      let priceMatch = product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1];
      let brandMatch = filters.brands.length ? filters.brands.includes(product.brand) : true;
      let availabilityMatch = filters.availability.length ? filters.availability.includes(product.inStock ? 'in-stock' : 'out-of-stock') : true;
      let searchMatch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || product.description.toLowerCase().includes(searchQuery.toLowerCase());
      return categoryMatch && priceMatch && brandMatch && availabilityMatch && searchMatch;
    });

    switch (sort) {
      case 'price-low-to-high':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high-to-low':
        filtered.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }

    setFilteredProducts(filtered);
  };

  const handleSortChange = (event) => {
    setSort(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <>
      <NavBar handleSearchChange={handleSearchChange} />
      <Container maxWidth="lg" className="App">
        <Grid container spacing={4}>
          <Grid item xs={12} md={3}>
            <FiltersPanel filters={filters} setFilters={setFilters} />
          </Grid>
          <Grid item xs={12} md={9}>
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
              <Typography variant="subtitle1">
                Showing <span className="beige-number">{filteredProducts.length}</span> out of <span className="beige-number">{products.length}</span> products
              </Typography>
              <Box display="flex" alignItems="center">
                <Box component="span" mr={1}>Sort by:</Box>
                <Select value={sort} onChange={handleSortChange}>
                  <MenuItem value="most-popular">Most Popular</MenuItem>
                  <MenuItem value="price-low-to-high">Price: Low to High</MenuItem>
                  <MenuItem value="price-high-to-low">Price: High to Low</MenuItem>
                </Select>
              </Box>
            </Box>
            <ProductList products={filteredProducts} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default App;