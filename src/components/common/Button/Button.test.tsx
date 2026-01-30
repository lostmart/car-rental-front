import { render, screen } from '@testing-library/react';
import Button from './Button';
import { describe, it, expect } from 'vitest';

describe('Button', () => {
  it('renders with correct text content', () => {
    render(<Button onClick={() => {}} className="">Test Button</Button>);
    expect(screen.getByRole('button', { name: /Test Button/i })).toBeInTheDocument();
  });
});
