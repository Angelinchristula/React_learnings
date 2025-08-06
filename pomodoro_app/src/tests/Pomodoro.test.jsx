import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import Pomodoro from '../components/Pomodoro';
import {vi} from 'vitest';
import '@testing-library/jest-dom';

vi.useFakeTimers();

describe('Pomodoro Component', () => {
  test('renders Pomodoro heading and buttons', () => {
    render(<Pomodoro />);
    expect(screen.getByText(/Pomodoro Timer/i)).toBeInTheDocument();
    expect(screen.getByText(/Start/i)).toBeInTheDocument();
    expect(screen.getByText(/Reset/i)).toBeInTheDocument();
  });

  test('starts timer when Start is clicked', () => {
    render(<Pomodoro />);
    fireEvent.click(screen.getByText('Start'));
    act(() => {
      vi.advanceTimersByTime(1000);
    });
    expect(screen.getByText('00:59')).toBeInTheDocument();
  });

  test('pauses timer when Pause is clicked', () => {
    render(<Pomodoro />);
    fireEvent.click(screen.getByText('Start'));
    act(() => {
      vi.advanceTimersByTime(2000);
    });
    fireEvent.click(screen.getByText('Pause'));
    const timeAfterPause = screen.getByText(/00:/);
    act(() => {
      vi.advanceTimersByTime(2000);
    });
    expect(screen.getByText(timeAfterPause.textContent)).toBeInTheDocument(); // same time
  });

  test('resets timer when Reset is clicked', () => {
    render(<Pomodoro />);
    fireEvent.click(screen.getByText('Start'));
    act(() => {
      vi.advanceTimersByTime(5000);
    });
    fireEvent.click(screen.getByText('Reset'));
    expect(screen.getByText('01:00')).toBeInTheDocument();
  });
});
