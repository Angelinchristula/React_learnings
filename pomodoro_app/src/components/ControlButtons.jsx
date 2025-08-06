import React from 'react';
import { Button, Stack } from '@mui/material';

function ControlButtons({ isRunning, onStart, onPause, onReset }) {
  return (
    <Stack direction="row" spacing={2} justifyContent="center" sx={{ mt: 4 }}>
      {!isRunning ? (
        <Button variant="contained" color="primary" onClick={onStart}>
          Start
        </Button>
      ) : (
        <Button variant="contained" color="warning" onClick={onPause}>
          Pause
        </Button>
      )}
      <Button variant="outlined" color="error" onClick={onReset}>
        Reset
      </Button>
    </Stack>
  );
}

export default ControlButtons;
