export interface PasslifyOptions {
  min_characters: number;
  max_characters: number;
  special_chars: boolean;
  min_special_chars: number;
  alpha: boolean;
  numeric: boolean;
  min_alpha: number;
  min_numeric: number;
  uppercase: boolean;
  lowercase: boolean;
  min_uppercase: number;
  min_lowercase: number;
  blacklist?: string[];
  customRules?: Array<(password: string) => boolean>;
  locale?: string;
}

export interface ValidationResult {
  isValid: boolean;
  score: number;
  errors: string[];
  entropy: number;
}

export interface ErrorMessages {
  [key: string]: string;
}