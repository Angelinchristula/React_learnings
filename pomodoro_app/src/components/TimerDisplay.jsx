import React from 'react';
import { Typography, Box } from '@mui/material';

function TimerDisplay({ timeLeft }) {
  const formatTime = (seconds) => {
    const min = Math.floor(seconds / 60).toString().padStart(2, '0');
    const sec = (seconds % 60).toString().padStart(2, '0');
    return `${min}:${sec}`;
  };

  return (
    <Box>
      <Typography variant="h2" color='black'>
        {formatTime(timeLeft)}
      </Typography>
    </Box>
  );
}

export default TimerDisplay;
