import { describe, it, expect } from 'vitest';
import { scrubPII } from './pii-scrubber';

describe('scrubPII', () => {
  it('redacts email addresses', () => {
    const input = 'Reach me at tania@example.com for details.';
    expect(scrubPII(input)).toBe('Reach me at [EMAIL_REDACTED] for details.');
  });

  it('redacts phone numbers in common US formats', () => {
    expect(scrubPII('Call (415) 555-1234')).toBe('Call [PHONE_REDACTED]');
    expect(scrubPII('Call 415-555-1234')).toBe('Call [PHONE_REDACTED]');
    expect(scrubPII('Call 415.555.1234')).toBe('Call [PHONE_REDACTED]');
    expect(scrubPII('Call +1 415 555 1234')).toBe('Call [PHONE_REDACTED]');
  });

  it('redacts specific named PII passed via options', () => {
    const input = 'Tania Makroo led the project.';
    expect(scrubPII(input, { names: ['Tania Makroo'] })).toBe(
      '[NAME_REDACTED] led the project.'
    );
  });

  it('is case-insensitive for names', () => {
    const input = 'tania makroo is a designer.';
    expect(scrubPII(input, { names: ['Tania Makroo'] })).toBe(
      '[NAME_REDACTED] is a designer.'
    );
  });

  it('redacts URLs to personal sites when listed', () => {
    const input = 'Portfolio at thegirldesigns.com is live.';
    expect(scrubPII(input, { urls: ['thegirldesigns.com'] })).toBe(
      'Portfolio at [URL_REDACTED] is live.'
    );
  });

  it('leaves unrelated text untouched', () => {
    const input = 'The executive team approved the plan.';
    expect(scrubPII(input)).toBe('The executive team approved the plan.');
  });

  it('handles multi-line strings', () => {
    const input = 'Line one: tania@example.com\nLine two: (415) 555-1234';
    expect(scrubPII(input)).toBe('Line one: [EMAIL_REDACTED]\nLine two: [PHONE_REDACTED]');
  });

  it('returns empty string for empty input', () => {
    expect(scrubPII('')).toBe('');
  });
});
