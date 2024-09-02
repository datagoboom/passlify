import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import PasswordStrengthChecker from '../src/react/PasswordStrengthChecker';

// Mock the Passlify class
jest.mock('../src/core/Passlify', () => {
  return jest.fn().mockImplementation(() => ({
    check: jest.fn().mockReturnValue({
      isValid: true,
      score: 3,
      errors: [],
      entropy: 50,
    }),
    generatePassword: jest.fn().mockReturnValue('GeneratedP@ssw0rd'),
  }));
});

describe('PasswordStrengthChecker', () => {
  test('renders without crashing', () => {
    const { getByText, getByPlaceholderText } = render(<PasswordStrengthChecker />);
    expect(getByText('Password Strength Checker')).toBeInTheDocument();
    expect(getByPlaceholderText('Enter password')).toBeInTheDocument();
  });

  test('displays validation result when password is entered', async () => {
    const { getByPlaceholderText, getByText } = render(<PasswordStrengthChecker />);
    const input = getByPlaceholderText('Enter password');
    
    fireEvent.change(input, { target: { value: 'TestP@ssw0rd' } });
    
    await waitFor(() => {
      expect(getByText('Valid password')).toBeInTheDocument();
      expect(getByText('Strength score: 3 / 4')).toBeInTheDocument();
      expect(getByText('Entropy: 50.00 bits')).toBeInTheDocument();
    });
  });

  test('generates a valid password when Generate button is clicked', async () => {
    const { getByText, getByPlaceholderText } = render(<PasswordStrengthChecker />);
    const generateButton = getByText('Generate');
    
    fireEvent.click(generateButton);
    
    await waitFor(() => {
      const input = getByPlaceholderText('Enter password') as HTMLInputElement;
      expect(input.value).toBe('GeneratedP@ssw0rd');
      expect(getByText('Valid password')).toBeInTheDocument();
    });
  });
});