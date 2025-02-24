import React from 'react';
import { CircularProgress, Box } from '@mui/material';

function LoadingSpinner() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
      <CircularProgress />
    </Box>
  );
}

export default LoadingSpinner;
