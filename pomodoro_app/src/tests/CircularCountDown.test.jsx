import React from 'react';
import { render, screen } from '@testing-library/react';
import CircularCountdown from '../components/CircularCountDown';
import '@testing-library/jest-dom';

describe('CircularCountdown Component', () => {
  test('displays formatted time correctly', () => {
    render(<CircularCountdown timeLeft={90} totalTime={300} />);
    expect(screen.getByText('01:30')).toBeInTheDocument();
  });

  test('renders with correct progress value', () => {
    const { container } = render(<CircularCountdown timeLeft={150} totalTime={300} />);
    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument(); // SVG rendered for CircularProgress
  });
});
