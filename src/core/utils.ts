
import { PasslifyOptions } from './types';

export function calculateEntropy(password: string): number {
  const charset = 94; // Assuming printable ASCII characters
  return Math.log2(Math.pow(charset, password.length));
}

export function generatePassword(options: PasslifyOptions): string {
  // Simple implementation for now
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
  let password = '';
  for (let i = 0; i < options.min_characters; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return password;
}