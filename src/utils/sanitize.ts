import DOMPurify from 'dompurify';
import { ChangeEvent } from 'react';

/**
 * Sanitizes a string input using DOMPurify to prevent XSS attacks.
 * Includes a guard for Server-Side Rendering (SSR) environments in Next.js.
 *
 * @param input The raw string input to sanitize
 * @returns The sanitized string
 */
export function sanitizeInput(input: string): string {
  // Check if we are in a browser environment because DOMPurify requires a DOM
  if (typeof window === 'undefined') {
    return input;
  }
  return DOMPurify.sanitize(input);
}

/**
 * A wrapper for React input change handlers.
 * Intercepts the event, sanitizes the `e.target.value`, and passes the cleaned
 * value to your callback function.
 *
 * @param callback The function to execute with the sanitized string
 * @returns A standard React ChangeEvent handler
 * 
 * @example
 * <input type="text" onChange={withSanitizedInput(setSearchTerm)} />
 */
export function withSanitizedInput<
  T extends HTMLInputElement | HTMLTextAreaElement
>(
  callback: (sanitizedValue: string, e: ChangeEvent<T>) => void
) {
  return (e: ChangeEvent<T>) => {
    const rawValue = e.target.value;
    const sanitizedValue = sanitizeInput(rawValue);
    callback(sanitizedValue, e);
  };
}
