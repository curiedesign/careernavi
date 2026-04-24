import { describe, it, expect } from 'vitest';
import { V2_INHERITED_CONTENT } from './v2-inherited';

describe('V2 inherited content', () => {
  const allText = Object.values(V2_INHERITED_CONTENT).flat().join(' ');

  it('contains no email addresses', () => {
    expect(allText).not.toMatch(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/);
  });

  it('contains no phone numbers', () => {
    expect(allText).not.toMatch(/(?:\+?\d{1,2}[\s.-]?)?(?:\(?\d{3}\)?[\s.-]?)\d{3}[\s.-]?\d{4}/);
  });

  it('contains no Tee-specific name', () => {
    expect(allText.toLowerCase()).not.toContain('tania makroo');
    expect(allText.toLowerCase()).not.toContain('tee makroo');
  });

  it('contains no Tee-specific personal URLs', () => {
    expect(allText.toLowerCase()).not.toContain('thegirldesigns.com');
    expect(allText.toLowerCase()).not.toContain('curiedesign');
  });

  it('contains no Salesforce brand name (employer should be masked)', () => {
    expect(allText).not.toMatch(/\bSalesforce\b/i);
  });

  it('exports the 4 Rs framework labels', () => {
    expect(V2_INHERITED_CONTENT.fourRs).toContain('Redesign');
    expect(V2_INHERITED_CONTENT.fourRs).toContain('Reskill');
    expect(V2_INHERITED_CONTENT.fourRs).toContain('Redeploy');
    expect(V2_INHERITED_CONTENT.fourRs).toContain('Rebalance');
  });

  it('exports 7 Executive Conciseness Rules', () => {
    expect(V2_INHERITED_CONTENT.executiveConcisenessRules).toHaveLength(7);
  });
});
