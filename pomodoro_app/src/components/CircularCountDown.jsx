import React from 'react';
import { CircularProgress, Box, Typography } from '@mui/material';

function CircularCountdown({ timeLeft, totalTime }) {
  const progress = (timeLeft / totalTime) * 100;

  const formatTime = (seconds) => {
    const min = Math.floor(seconds / 60).toString().padStart(2, '0');
    const sec = (seconds % 60).toString().padStart(2, '0');
    return `${min}:${sec}`;
  };

  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      {/* Background ring (track) */}
      <CircularProgress
        variant="determinate"
        value={100}
        size={200}
        thickness={4}
        sx={{
          color: '#ED6C02', 
        }}
      />

      {/* Foreground progress ring */}
      <CircularProgress
        variant="determinate"
        value={progress}
        size={200}
        thickness={4}
        sx={{
          color: progress > 20 ? 'primary.main' : 'error.main',
          position: 'absolute',
          left: 0,
          transform: 'rotate(-90deg)',
        }}
      />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="h5" component="div" color='black'>
          {formatTime(timeLeft)}
        </Typography>
      </Box>
    </Box>
  );
}

export default CircularCountdown;
