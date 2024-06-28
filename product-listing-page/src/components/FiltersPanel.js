import React from 'react';
import { Box, Typography, Slider, FormControlLabel, Checkbox, Grid } from '@mui/material';

function FiltersPanel({ filters, setFilters }) {
  const handleCategoryChange = (event) => {
    const category = event.target.name;
    const newCategories = event.target.checked
      ? [...filters.category, category]
      : filters.category.filter(c => c !== category);
    setFilters({ ...filters, category: newCategories });
  };

  const handlePriceChange = (event, newValue) => {
    setFilters({ ...filters, priceRange: newValue });
  };

  const handleBrandChange = (event) => {
    const brand = event.target.name;
    const newBrands = event.target.checked
      ? [...filters.brands, brand]
      : filters.brands.filter(b => b !== brand);
    setFilters({ ...filters, brands: newBrands });
  };

  const handleAvailabilityChange = (event) => {
    const availability = event.target.name;
    const newAvailability = event.target.checked
      ? [...filters.availability, availability]
      : filters.availability.filter(a => a !== availability);
    setFilters({ ...filters, availability: newAvailability });
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Categories
      </Typography>
      <Grid container direction="column">
        <FormControlLabel
          control={<Checkbox checked={filters.category.includes('furniture')} onChange={handleCategoryChange} name="furniture" />}
          label="Furniture"
        />
        <FormControlLabel
          control={<Checkbox checked={filters.category.includes('lighting')} onChange={handleCategoryChange} name="lighting" />}
          label="Lighting"
        />
        <FormControlLabel
          control={<Checkbox checked={filters.category.includes('decoration')} onChange={handleCategoryChange} name="decoration" />}
          label="Decoration"
        />
        <FormControlLabel
          control={<Checkbox checked={filters.category.includes('toys')} onChange={handleCategoryChange} name="toys" />}
          label="Toys"
        />
        <FormControlLabel
          control={<Checkbox checked={filters.category.includes('bath & shower')} onChange={handleCategoryChange} name="bath & shower" />}
          label="Bath & Shower"
        />
        <FormControlLabel
          control={<Checkbox checked={filters.category.includes('building')} onChange={handleCategoryChange} name="building" />}
          label="Building"
        />
      </Grid>

      <Typography variant="h6" gutterBottom>
        Price
      </Typography>
      <Typography gutterBottom>
        Price Range
      </Typography>
      <Slider
        className="price-slider"
        value={filters.priceRange}
        onChange={handlePriceChange}
        valueLabelDisplay="auto"
        min={0}
        max={500}
      />

      <Typography variant="h6" gutterBottom>
        Brands
      </Typography>
      <Grid container direction="column">
        <FormControlLabel
          control={<Checkbox checked={filters.brands.includes('Poliform')} onChange={handleBrandChange} name="Poliform" />}
          label="Poliform"
        />
        <FormControlLabel
          control={<Checkbox checked={filters.brands.includes('Molteni & C')} onChange={handleBrandChange} name="Molteni & C" />}
          label="Molteni & C"
        />
        <FormControlLabel
          control={<Checkbox checked={filters.brands.includes('B&B Italia')} onChange={handleBrandChange} name="B&B Italia" />}
          label="B&B Italia"
        />
        <FormControlLabel
          control={<Checkbox checked={filters.brands.includes('Kartell')} onChange={handleBrandChange} name="Kartell" />}
          label="Kartell"
        />
      </Grid>

      <Typography variant="h6" gutterBottom>
        Availability
      </Typography>
      <Grid container direction="column">
        <FormControlLabel
          control={<Checkbox checked={filters.availability.includes('in-stock')} onChange={handleAvailabilityChange} name="in-stock" />}
          label="In Stock"
        />
        <FormControlLabel
          control={<Checkbox checked={filters.availability.includes('out-of-stock')} onChange={handleAvailabilityChange} name="out-of-stock" />}
          label="Out of Stock"
        />
      </Grid>
    </Box>
  );
}

export default FiltersPanel;