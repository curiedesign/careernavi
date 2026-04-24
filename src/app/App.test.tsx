import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';

describe('App', () => {
  it('renders the landing page hero heading at root path', () => {
    render(<App />);
    expect(
      screen.getByRole('heading', { name: /write your career/i, level: 1 })
    ).toBeInTheDocument();
  });

  it('renders the CareerNavi wordmark in the header', () => {
    render(<App />);
    expect(screen.getByRole('link', { name: /careernavi/i })).toBeInTheDocument();
  });
});
