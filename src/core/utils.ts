import { PasslifyOptions } from './types';

export function generatePassword(options: PasslifyOptions): string {
  const charset = {
    lowercase: 'abcdefghijklmnopqrstuvwxyz',
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    numeric: '0123456789',
    special: '!@#$%^&*()_+-=[]{}|;:,.<>?'
  };

  let password = '';
  let remainingLength = options.min_characters;

  if (options.lowercase) {
    password += getRandomChars(charset.lowercase, options.min_lowercase);
    remainingLength -= options.min_lowercase;
  }
  if (options.uppercase) {
    password += getRandomChars(charset.uppercase, options.min_uppercase);
    remainingLength -= options.min_uppercase;
  }
  if (options.numeric) {
    password += getRandomChars(charset.numeric, options.min_numeric);
    remainingLength -= options.min_numeric;
  }
  if (options.special_chars) {
    password += getRandomChars(charset.special, options.min_special_chars);
    remainingLength -= options.min_special_chars;
  }

  const allChars = Object.values(charset).join('');
  password += getRandomChars(allChars, remainingLength);

  return shuffleString(password);
}

function getRandomChars(charset: string, length: number): string {
  let result = '';
  for (let i = 0; i < length; i++) {
    result += charset.charAt(Math.floor(Math.random() * charset.length));
  }
  return result;
}

function shuffleString(str: string): string {
  const arr = str.split('');
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr.join('');
}

export function calculateEntropy(password: string): number {
  const charset = 94; // Assuming printable ASCII characters
  return Math.log2(Math.pow(charset, password.length));
}