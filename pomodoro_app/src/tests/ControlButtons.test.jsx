import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ControlButtons from '../components/ControlButtons';
import '@testing-library/jest-dom';
import {vi} from 'vitest';

describe('ControlButtons Component', () => {
  test('renders Start and Reset buttons when not running', () => {
    render(<ControlButtons isRunning={false} onStart={() => {}} onPause={() => {}} onReset={() => {}} />);
    expect(screen.getByText('Start')).toBeInTheDocument();
    expect(screen.getByText('Reset')).toBeInTheDocument();
  });

  test('renders Pause and Reset buttons when running', () => {
    render(<ControlButtons isRunning={true} onStart={() => {}} onPause={() => {}} onReset={() => {}} />);
    expect(screen.getByText('Pause')).toBeInTheDocument();
    expect(screen.getByText('Reset')).toBeInTheDocument();
  });

  test('calls appropriate handlers on button clicks', () => {
    const onStart = vi.fn();
    const onPause = vi.fn();
    const onReset = vi.fn();

    const { rerender } = render(
      <ControlButtons isRunning={false} onStart={onStart} onPause={onPause} onReset={onReset} />
    );

    fireEvent.click(screen.getByText('Start'));
    expect(onStart).toHaveBeenCalled();

    rerender(
      <ControlButtons isRunning={true} onStart={onStart} onPause={onPause} onReset={onReset} />
    );

    fireEvent.click(screen.getByText('Pause'));
    expect(onPause).toHaveBeenCalled();

    fireEvent.click(screen.getByText('Reset'));
    expect(onReset).toHaveBeenCalled();
  });
});
