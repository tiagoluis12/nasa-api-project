import React, { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import {
  Container,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Box,
  Grid,
  Button,
} from '@mui/material';
import axios from 'axios';

function Detail() {
  const location = useLocation();
  const { id } = useParams();
  const item = location.state?.item;
  const [similarImages, setSimilarImages] = useState([]);

  useEffect(() => {
    if (item) {
      // Create a simple query by taking the first three words of the title
      const query = item.data[0].title.split(' ').slice(0, 3).join(' ');
      fetchSimilarImages(query);
    }
  }, [item]);

  const fetchSimilarImages = async (query) => {
    try {
      const response = await axios.get(
        `https://images-api.nasa.gov/search?q=${encodeURIComponent(query)}&media_type=image`
      );
      setSimilarImages(response.data.collection.items);
    } catch (error) {
      console.error('Error fetching similar images:', error);
    }
  };

  if (!item) {
    return (
      <Container sx={{ py: 4 }}>
        <Typography variant="h5" align="center">
          No content found. Please navigate from the homepage.
        </Typography>
      </Container>
    );
  }

  const data = item.data[0];
  const mediaLink = item.links && item.links[0] ? item.links[0].href : '';

  return (
    <Container sx={{ py: 4 }}>
      {/* Back Button at the Top */}
      <Button variant="contained" color="white" onClick={() => window.history.back()} sx={{ mb: 2 }}>
        Back to Search Results
      </Button>
      
      {/* Main Content */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" gutterBottom>
          {data.title}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          {new Date(data.date_created).toLocaleDateString()}
        </Typography>
      </Box>
      <Card sx={{ mb: 4 }}>
        {data.media_type === 'image' ? (
          <CardMedia component="img" image={mediaLink} alt={data.title} />
        ) : data.media_type === 'video' ? (
          <CardMedia component="video" controls src={mediaLink} alt={data.title} />
        ) : (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: 300,
              backgroundColor: '#ccc',
            }}
          >
            <Typography variant="h6">
              {data.media_type.toUpperCase()}
            </Typography>
          </Box>
        )}
        <CardContent>
          <Typography variant="body1">
            {data.description || 'No description available.'}
          </Typography>
        </CardContent>
      </Card>

      {/* Similar Images Section */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" gutterBottom>
          Similar Images
        </Typography>
        <Grid container spacing={2}>
          {similarImages.length > 0 ? (
            similarImages.map((simItem, index) => {
              const simData = simItem.data[0];
              const simMediaLink =
                simItem.links && simItem.links[0] ? simItem.links[0].href : '';
              return (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Card>
                    {simMediaLink && (
                      <CardMedia
                        component="img"
                        height="140"
                        image={simMediaLink}
                        alt={simData.title}
                      />
                    )}
                    <CardContent>
                      <Typography variant="body2" noWrap>
                        {simData.title}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })
          ) : (
            <Typography variant="body2">No similar images found.</Typography>
          )}
        </Grid>
      </Box>
    </Container>
  );
}

export default Detail;
