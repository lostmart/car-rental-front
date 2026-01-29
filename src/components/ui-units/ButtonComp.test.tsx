import { render, screen } from '@testing-library/react';
import ButtonComp from './ButtonComp';
import { describe, it, expect } from 'vitest';

describe('ButtonComp', () => {
  it('renders with correct text content', () => {
    render(<ButtonComp onClick={() => {}} className="">Test Button</ButtonComp>);
    expect(screen.getByRole('button', { name: /Test Button/i })).toBeInTheDocument();
  });
});
