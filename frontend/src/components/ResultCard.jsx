import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function ResultCard({ item }) {
  const data = item.data[0];
  const mediaLink = item.links && item.links[0] ? item.links[0].href : '';

  return (
    <Link
      to={`/detail/${data.nasa_id}`}
      state={{ item }}
      style={{ textDecoration: 'none' }}
    >
      <Card sx={{ maxWidth: 345, backgroundColor: '#f35ec3', display: 'flex', flexDirection: 'column', height: '100%' }}>
        {data.media_type === 'image' ? (
          <CardMedia component="img" height="140" image={mediaLink} alt={data.title} />
        ) : (
          <CardMedia
            component="div"
            sx={{
              height: 140,
              backgroundColor: '#484848',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Typography variant="subtitle1" color="white">
              {data.media_type.toUpperCase()}
            </Typography>
          </CardMedia>
        )}
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h6" component="div">
            {data.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data.description ? `${data.description.substring(0, 100)}...` : 'No description available.'}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
}

export default ResultCard;
