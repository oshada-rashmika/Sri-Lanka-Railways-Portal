import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import SearchBar from './SearchBar';

describe('SearchBar Component', () => {
  it('inputs text, sanitizes input, and calls onSearch on submit', async () => {
    const mockOnSearch = vi.fn();
    const user = userEvent.setup();
    
    render(<SearchBar onSearch={mockOnSearch} />);
    
    const inputElement = screen.getByPlaceholderText('Search...');
    
    // An input with some potentially dangerous HTML that should be sanitized
    const maliciousInput = 'Hello <script>alert("XSS")</script>';
    const expectedSanitizedText = 'Hello '; // DOMPurify removes the script tag
    
    // Type into the input
    await user.type(inputElement, maliciousInput);
    
    // Check that the input value matches the sanitized value (since withSanitizedInput sets the state with sanitized text)
    expect(inputElement).toHaveValue(expectedSanitizedText);
    
    // Submit the form
    await user.type(inputElement, '{Enter}');
    
    // Verify the mock function was called with the sanitized string
    expect(mockOnSearch).toHaveBeenCalledTimes(1);
    expect(mockOnSearch).toHaveBeenCalledWith(expectedSanitizedText);
  });
});
