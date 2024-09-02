// src/core/Passlify.ts

import zxcvbn from 'zxcvbn';
import { PasslifyOptions, ValidationResult, ErrorMessages } from './types';
import { generatePassword, calculateEntropy } from './utils';
import en from '../locales/en';
import es from '../locales/es';

class Passlify {
  private options: PasslifyOptions;
  private errorMessages: { [key: string]: ErrorMessages };

  constructor(options: PasslifyOptions) {
    this.options = options;
    this.errorMessages = { en, es };
  }

  public check(password: string): ValidationResult {
    const errors: string[] = [];
    const locale = this.options.locale || 'en';
    const messages = this.errorMessages[locale];

    if (password.length < this.options.min_characters) {
      errors.push(messages.tooShort);
    }

    if (password.length > this.options.max_characters) {
      errors.push(messages.tooLong);
    }

    const specialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    const alphaChars = /[a-zA-Z]+/;
    const numericChars = /[0-9]+/;
    const uppercaseChars = /[A-Z]+/;
    const lowercaseChars = /[a-z]+/;

    if (this.options.special_chars && !specialChars.test(password)) {
      errors.push(messages.noSpecialChars);
    }

    if (this.options.alpha && !alphaChars.test(password)) {
      errors.push(messages.noAlpha);
    }

    if (this.options.numeric && !numericChars.test(password)) {
      errors.push(messages.noNumeric);
    }

    if (this.options.uppercase && !uppercaseChars.test(password)) {
      errors.push(messages.noUppercase);
    }

    if (this.options.lowercase && !lowercaseChars.test(password)) {
      errors.push(messages.noLowercase);
    }

    if ((password.match(specialChars) || []).length < this.options.min_special_chars) {
      errors.push(messages.notEnoughSpecialChars);
    }

    if ((password.match(alphaChars) || []).length < this.options.min_alpha) {
      errors.push(messages.notEnoughAlpha);
    }

    if ((password.match(numericChars) || []).length < this.options.min_numeric) {
      errors.push(messages.notEnoughNumeric);
    }

    if ((password.match(uppercaseChars) || []).length < this.options.min_uppercase) {
      errors.push(messages.notEnoughUppercase);
    }

    if ((password.match(lowercaseChars) || []).length < this.options.min_lowercase) {
      errors.push(messages.notEnoughLowercase);
    }

    if (this.options.blacklist && this.options.blacklist.includes(password)) {
      errors.push(messages.blacklisted);
    }

    if (this.options.customRules) {
      for (const rule of this.options.customRules) {
        if (!rule(password)) {
          errors.push(messages.customRuleFailed);
        }
      }
    }

    const zxcvbnResult = zxcvbn(password);

    return {
      isValid: errors.length === 0,
      score: zxcvbnResult.score,
      errors,
      entropy: calculateEntropy(password),
    };
  }

  public generatePassword(): string {
    return generatePassword(this.options);
  }

  public async checkAsync(password: string): Promise<ValidationResult> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.check(password));
      }, 0);
    });
  }
}

export default Passlify;