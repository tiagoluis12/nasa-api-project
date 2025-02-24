import React, { useState, useEffect } from 'react';
import { Container, Grid, Typography, Box, ToggleButtonGroup, ToggleButton } from '@mui/material';
import SearchBar from '../components/SearchBar';
import ResultCard from '../components/ResultCard';
import LoadingSpinner from '../components/LoadingSpinner';
import { fetchSearchResults } from '../services/api';
import LogoImage from '../assets/logo.svg';

function Home() {
  const [query, setQuery] = useState('Mars');
  const [selectedFilter, setSelectedFilter] = useState('all'); // Options: all, image, video, audio
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = (searchTerm) => {
    setQuery(searchTerm);
  };

  const handleFilterChange = (event, newFilter) => {
    if (newFilter !== null) {
      setSelectedFilter(newFilter);
    }
  };

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchSearchResults(query, selectedFilter);
        setResults(data.collection.items);
      } catch (err) {
        setError('Failed to fetch data from NASA API.');
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [query, selectedFilter]);

  return (
    <Box sx={{ background: '', minHeight: '100vh', color: 'black' }}>
      <Container sx={{ py: 4 }}>
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <img src={LogoImage} alt="Project Logo" style={{ width: '150px', height: 'auto' }} />
          <Typography variant="h3" component="h1" sx={{ mt: 2 }}>
            Nasa Library
          </Typography>
        </Box>

        <SearchBar onSearch={handleSearch} initialQuery={query} />

        {/* Filter Bar */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
          <ToggleButtonGroup
            value={selectedFilter}
            exclusive
            onChange={handleFilterChange}
            aria-label="media filter"
          >
            <ToggleButton value="all" aria-label="all">
              All
            </ToggleButton>
            <ToggleButton value="image" aria-label="photos">
              Photos
            </ToggleButton>
            <ToggleButton value="video" aria-label="videos">
              Videos
            </ToggleButton>
            <ToggleButton value="audio" aria-label="audio">
              Audio
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>

        {loading && <LoadingSpinner />}
        {error && (
          <Typography variant="h6" color="error" align="center" sx={{ mt: 2 }}>
            {error}
          </Typography>
        )}
        {!loading && !error && (
          <Grid container spacing={2} sx={{ mt: 2, justifyContent: 'center' }}>
            {results.map((item) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={item.data[0].nasa_id}>
                <ResultCard item={item} />
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </Box>
  );
}

export default Home;
