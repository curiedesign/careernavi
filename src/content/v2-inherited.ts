/**
 * V2 inherited content — scrubbed of PII (names, emails, phones, personal URLs)
 * and brand-masked (employer/client/product names replaced with generic descriptors).
 *
 * Source: V2 PRD v1.1 (career-navigator-v2/Career_Navigator_PRD_v1.md)
 * Scrubbed via: src/utils/pii-scrubber.ts + src/utils/brand-masker.ts
 * Covered by snapshot test: this file's .test.ts
 */

export const V2_INHERITED_CONTENT = {
  /** 4Rs Framework — career transformation lenses */
  fourRs: ['Redesign', 'Reskill', 'Redeploy', 'Rebalance'] as const,

  /** 7 Executive Conciseness Rules — applied to Executive persona outputs */
  executiveConcisenessRules: [
    'Lead with outcome, not activity.',
    'Quantify impact in every bullet where possible.',
    'One idea per bullet — never compound.',
    'Verbs over nouns — "drove" beats "driver of".',
    'Strip hedging language ("helped", "assisted", "supported").',
    'Omit implementation details unless they are the point.',
    'Max 2 lines per bullet on the printed page.',
  ] as const,

  /** 6 Workbench tools (labels only — implementation in later plans) */
  workbenchTools: [
    { id: 'resume', label: 'Resume Builder' },
    { id: 'cover', label: 'Cover Letter' },
    { id: 'skills', label: 'Skills Optimizer' },
    { id: 'linkedin', label: 'LinkedIn Copy' },
    { id: 'star', label: 'STAR Breakdown' },
    { id: 'qa', label: 'Application Answers' },
  ] as const,

  /** 4 Bullet elevation levels */
  bulletElevationLevels: ['Flat', 'Functional', 'Impact', 'Executive'] as const,

  /** Sample scrubbed bullet examples showing the elevation ladder */
  bulletLadderExample: {
    flat: 'Responsible for design team operations.',
    functional: 'Managed design team of 12 across 4 product lines.',
    impact: 'Led design team of 12, shipping 4 product lines and cutting review cycle time by 40%.',
    executive:
      'Design leadership · 12-person team + 4 product lines · 40% faster review cycle, $2.4M saved.',
  },
} as const;
