import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import LanguageToggle from './LanguageToggle';

describe('LanguageToggle', () => {
  it('updates the active state and styling when the Sinhala button is clicked', () => {
    render(<LanguageToggle />);

    const englishButton = screen.getByText('English');
    const sinhalaButton = screen.getByText('සිංහල');
    const tamilButton = screen.getByText('தமிழ்');

    // Verify initial active state (English is active by default)
    expect(englishButton).toHaveAttribute('aria-pressed', 'true');
    expect(sinhalaButton).toHaveAttribute('aria-pressed', 'false');
    expect(tamilButton).toHaveAttribute('aria-pressed', 'false');

    // The English button should have the active text color class
    expect(englishButton.className).toContain('text-blue-600');
    // The Sinhala button should have the inactive text color class
    expect(sinhalaButton.className).toContain('text-slate-500');

    // Click the Sinhala button
    fireEvent.click(sinhalaButton);

    // Verify the state has updated
    expect(sinhalaButton).toHaveAttribute('aria-pressed', 'true');
    expect(englishButton).toHaveAttribute('aria-pressed', 'false');

    // Verify the active classes have moved to the Sinhala button
    expect(sinhalaButton.className).toContain('text-blue-600');
    expect(sinhalaButton.className).toContain('bg-white');

    // Verify the English button now has inactive classes
    expect(englishButton.className).not.toContain('text-blue-600');
    expect(englishButton.className).toContain('text-slate-500');
  });
});
