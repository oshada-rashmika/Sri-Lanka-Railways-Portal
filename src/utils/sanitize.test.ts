import { describe, it, expect } from 'vitest';
import { sanitizeInput } from './sanitize';

describe('sanitizeInput', () => {
  it('neutralizes basic <script> tags completely', () => {
    const maliciousInput = '<script>alert("XSS")</script>';
    const result = sanitizeInput(maliciousInput);
    expect(result).toBe('');
  });

  it('removes dangerous inline event handlers like onerror', () => {
    const maliciousInput = '<img src="missing.jpg" onerror="alert(1)">';
    const result = sanitizeInput(maliciousInput);
    expect(result).toBe('<img src="missing.jpg">');
  });

  it('removes javascript: URIs from href attributes', () => {
    const maliciousInput = '<a href="javascript:alert(1)">Click Me</a>';
    const result = sanitizeInput(maliciousInput);
    expect(result).toBe('<a>Click Me</a>');
  });

  it('handles mixed safe and malicious content', () => {
    const maliciousInput = '<div><p>Safe text</p><script>alert("Hacked!")</script></div>';
    const result = sanitizeInput(maliciousInput);
    expect(result).toBe('<div><p>Safe text</p></div>');
  });

  it('neutralizes iframe injections', () => {
    const maliciousInput = '<iframe src="javascript:alert(1)"></iframe>';
    const result = sanitizeInput(maliciousInput);
    expect(result).toBe('');
  });

  it('preserves perfectly safe HTML intact', () => {
    const safeInput = '<h1>Welcome</h1><p>This is a <strong>safe</strong> string.</p>';
    const result = sanitizeInput(safeInput);
    expect(result).toBe('<h1>Welcome</h1><p>This is a <strong>safe</strong> string.</p>');
  });
});
