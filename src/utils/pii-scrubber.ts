export interface ScrubOptions {
  names?: string[];
  urls?: string[];
}

const EMAIL_PATTERN = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;

// Matches phones like (415) 555-1234, 415-555-1234, 415.555.1234, +1 415 555 1234
const PHONE_PATTERN = /(?:\+?\d{1,2}[\s.-]?)?(?:\(?\d{3}\)?[\s.-]?)\d{3}[\s.-]?\d{4}/g;

function escapeRegex(input: string): string {
  return input.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

export function scrubPII(input: string, options: ScrubOptions = {}): string {
  if (!input) return input;

  let output = input;

  // Redact emails
  output = output.replace(EMAIL_PATTERN, '[EMAIL_REDACTED]');

  // Redact phone numbers
  output = output.replace(PHONE_PATTERN, '[PHONE_REDACTED]');

  // Redact specific names (case-insensitive)
  for (const name of options.names ?? []) {
    const pattern = new RegExp(escapeRegex(name), 'gi');
    output = output.replace(pattern, '[NAME_REDACTED]');
  }

  // Redact specific URLs (case-insensitive)
  for (const url of options.urls ?? []) {
    const pattern = new RegExp(escapeRegex(url), 'gi');
    output = output.replace(pattern, '[URL_REDACTED]');
  }

  return output;
}
