import { describe, it, expect } from 'vitest';
import { maskBrands } from './brand-masker';

describe('maskBrands', () => {
  it('replaces a known employer with a generic descriptor', () => {
    const input = 'Led design at Salesforce for 5 years.';
    const result = maskBrands(input, {
      employers: { Salesforce: 'a global enterprise SaaS company' },
    });
    expect(result).toBe('Led design at a global enterprise SaaS company for 5 years.');
  });

  it('replaces multiple brands in one string', () => {
    const input = 'Consulted for Walmart and Target on digital transformation.';
    const result = maskBrands(input, {
      employers: {
        Walmart: 'a Fortune 10 retailer',
        Target: 'a Fortune 50 retailer',
      },
    });
    expect(result).toBe(
      'Consulted for a Fortune 10 retailer and a Fortune 50 retailer on digital transformation.'
    );
  });

  it('is case-insensitive in matching but preserves replacement casing', () => {
    const input = 'salesforce team';
    const result = maskBrands(input, {
      employers: { Salesforce: 'a global enterprise SaaS company' },
    });
    expect(result).toBe('a global enterprise SaaS company team');
  });

  it('only matches whole words, not substrings', () => {
    const input = 'The saleforcefield was tested.';
    const result = maskBrands(input, {
      employers: { Salesforce: 'a global enterprise SaaS company' },
    });
    expect(result).toBe('The saleforcefield was tested.');
  });

  it('masks product names separately from employers', () => {
    const input = 'Built on Agentforce and Data Cloud.';
    const result = maskBrands(input, {
      products: {
        Agentforce: 'an enterprise AI platform',
        'Data Cloud': 'a customer data platform',
      },
    });
    expect(result).toBe('Built on an enterprise AI platform and a customer data platform.');
  });

  it('masks client names when provided', () => {
    const input = 'Shipped for Acme Corp and Globex.';
    const result = maskBrands(input, {
      clients: {
        'Acme Corp': 'a Fortune 100 financial services client',
        Globex: 'a global telecom client',
      },
    });
    expect(result).toBe(
      'Shipped for a Fortune 100 financial services client and a global telecom client.'
    );
  });

  it('returns input unchanged when no matches', () => {
    const input = 'The team delivered on time.';
    const result = maskBrands(input, { employers: { Salesforce: 'X' } });
    expect(result).toBe('The team delivered on time.');
  });

  it('handles empty brand dictionaries gracefully', () => {
    const input = 'No brands here.';
    expect(maskBrands(input)).toBe('No brands here.');
  });

  it('handles empty input', () => {
    expect(maskBrands('')).toBe('');
  });
});
