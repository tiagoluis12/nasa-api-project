import React, { useState } from 'react';
import { Box, TextField, Button } from '@mui/material';

function SearchBar({ onSearch, initialQuery }) {
  const [searchTerm, setSearchTerm] = useState(initialQuery || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
      <TextField
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        variant="outlined"
        placeholder="Search NASA media..."
        sx={{ width: '300px', backgroundColor: 'white', borderRadius: 1 }}
      />
      <Button type="submit" variant="contained" color="white" sx={{ ml: 2 }}>
        Search
      </Button>
    </Box>
  );
}

export default SearchBar;
