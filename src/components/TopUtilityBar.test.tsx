import React from 'react';
import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TopUtilityBar from './TopUtilityBar';

describe('TopUtilityBar', () => {
  beforeEach(() => {
    // Reset the html font size before each test
    document.documentElement.style.fontSize = '';
    // Clear localStorage
    localStorage.clear();
  });

  it('updates the root html font size when the A+ button is clicked', () => {
    render(<TopUtilityBar />);

    // Get the A+ button
    const aPlusButton = screen.getByText('A+').closest('button');
    expect(aPlusButton).not.toBeNull();

    // Click the A+ button
    fireEvent.click(aPlusButton!);

    // Verify the state has updated the root html element's font size
    expect(document.documentElement.style.fontSize).toBe('18px');
    
    // Verify it saved to localStorage
    expect(localStorage.getItem('site-font-size')).toBe('lg');
  });
});
