import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import Button from './Button';
describe('Button component', () => {
  it('renders correctly', () => {
    render(<Button>Click me</Button>);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('renders with custom text', () => {
    render(<Button>Custom Text</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('Custom Text');
  });

  it('handles onPress event', async () => {
    const onPress = jest.fn();
    render(<Button onPress={onPress}>Click me</Button>);
    const button = screen.getByRole('button');
    fireEvent.click(button); // Pass the button element to fireEvent.click
    expect(onPress).toHaveBeenCalledTimes(1);
  });

  it('disables button when isDisabled is true', () => {
    render(<Button disabled>Click me</Button>);
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
  });

  it('applies custom className', () => {
    render(<Button className="custom-class">Click me</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('custom-class');
  });

  it('renders with full width when fullWidth prop is true', () => {
    // Assuming the fullWidth prop adds a CSS class "full-width"
    render(<Button fullWidth>Click me</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('w-full');
  });
});
