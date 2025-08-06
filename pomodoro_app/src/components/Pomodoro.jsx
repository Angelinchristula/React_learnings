import React, { useState, useEffect } from 'react';
import { Container, Typography, Box } from '@mui/material';
import ControlButtons from './ControlButtons.jsx';
import CircularCountdown from './CircularCountDown.jsx';

function Pomodoro() {
  const [timeLeft, setTimeLeft] = useState(1 * 60); 
  const [isRunning, setIsRunning] = useState(false);
  const [initialTime, setInitialTime] = useState(1 * 60);

  useEffect(() => {
    let timer;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
    }, [isRunning, timeLeft]);
  const handleStart = () => setIsRunning(true); 
  const handlePause = () => setIsRunning(false);
  const handleReset = () => {
  setIsRunning(false);
  setTimeLeft(1 * 60); 
};


  return (
    <>
    <Typography variant="h3" color='black'>
        Pomodoro Timer
      </Typography>
    <Container maxWidth="sm" sx={{ mt: 10, textAlign: 'center' }}>
      <CircularCountdown timeLeft={timeLeft} totalTime={initialTime} />
        <ControlButtons
            isRunning={isRunning}
            onStart={handleStart}
            onPause={handlePause}
            onReset={handleReset}
        />

    </Container>
    </>
  );
}

export default Pomodoro;
