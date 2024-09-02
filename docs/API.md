# Passlify API Documentation

## Passlify Class

The main class for password validation and generation.

### Constructor

```typescript
new Passlify(options: PasslifyOptions)
```

#### PasslifyOptions

- `min_characters`: Minimum number of characters (default: 8)
- `max_characters`: Maximum number of characters (default: 128)
- `special_chars`: Require special characters (default: true)
- `min_special_chars`: Minimum number of special characters (default: 1)
- `alpha`: Require alphabetic characters (default: true)
- `numeric`: Require numeric characters (default: true)
- `min_alpha`: Minimum number of alphabetic characters (default: 1)
- `min_numeric`: Minimum number of numeric characters (default: 1)
- `uppercase`: Require uppercase characters (default: true)
- `lowercase`: Require lowercase characters (default: true)
- `min_uppercase`: Minimum number of uppercase characters (default: 1)
- `min_lowercase`: Minimum number of lowercase characters (default: 1)
- `blacklist`: Array of blacklisted passwords (default: [])
- `customRules`: Array of custom validation functions (default: [])
- `locale`: Locale for error messages (default: 'en')

### Methods

#### check(password: string): ValidationResult

Checks a password against the defined rules.

#### checkAsync(password: string): Promise<ValidationResult>

Asynchronously checks a password against the defined rules.

#### generatePassword(): string

Generates a password that meets all the defined rules.

### ValidationResult

- `isValid`: Boolean indicating if the password is valid
- `score`: Strength score (0-4)
- `errors`: Array of error messages
- `entropy`: Calculated entropy of the password

## PasswordStrengthChecker Component

A React component for checking password strength.

### Props

This component doesn't accept any props. It uses the default Passlify options.

### Usage

```jsx
import { PasswordStrengthChecker } from 'passlify';

function App() {
  return (
    <div>
      <h1>Password Strength Checker</h1>
      <PasswordStrengthChecker />
    </div>
  );
}
```

This component provides an input field for password entry, a button to generate a password, and displays the validation results.