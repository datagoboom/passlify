![image](https://github.com/user-attachments/assets/22134253-1840-4309-bab6-f1d4a87f4e94)


Passlify is a robust password validation and generation library for JavaScript and TypeScript, with built-in React components for easy integration into web applications.

## Installation

```bash
npm install passlify
```

## Usage

### Basic usage

```javascript
const Passlify = require('passlify');

const options = {
  min_characters: 8,
  max_characters: 30,
  special_chars: true,
  min_special_chars: 1,
  alpha: true,
  numeric: true,
  min_alpha: 1,
  min_numeric: 1,
  uppercase: true,
  lowercase: true,
  min_uppercase: 1,
  min_lowercase: 1,
  blacklist: ['password123', 'qwerty123'],
};

const passlify = new Passlify(options);

// Password validation
const result = passlify.check('P@ssw0rd123!');
console.log(result);

// Password generation
const generatedPassword = passlify.generatePassword();
console.log('Generated password:', generatedPassword);
```

### TypeScript usage

```typescript
import Passlify from 'passlify';

// ... rest of the code is the same as in the JavaScript example
```

### React Component

```jsx
import React from 'react';
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

### Password Generation Examples

1. Generate a password with default options:

```javascript
const passlify = new Passlify();
const password = passlify.generatePassword();
console.log('Default generated password:', password);
```

2. Generate a longer password:

```javascript
const longPasswordOptions = {
  min_characters: 16,
  max_characters: 20,
  special_chars: true,
  min_special_chars: 2,
  alpha: true,
  numeric: true,
  min_alpha: 8,
  min_numeric: 2,
  uppercase: true,
  lowercase: true,
  min_uppercase: 2,
  min_lowercase: 2,
};

const passlifyLong = new Passlify(longPasswordOptions);
const longPassword = passlifyLong.generatePassword();
console.log('Long generated password:', longPassword);
```

3. Generate a password without special characters:

```javascript
const noSpecialCharsOptions = {
  min_characters: 12,
  max_characters: 16,
  special_chars: false,
  alpha: true,
  numeric: true,
  min_alpha: 8,
  min_numeric: 2,
  uppercase: true,
  lowercase: true,
  min_uppercase: 1,
  min_lowercase: 1,
};

const passlifyNoSpecial = new Passlify(noSpecialCharsOptions);
const noSpecialPassword = passlifyNoSpecial.generatePassword();
console.log('Password without special characters:', noSpecialPassword);
```

## API

### Passlify(options)

Creates a new Passlify instance with the given options.

### passlify.check(password)

Checks a password against the defined rules and returns a validation result.

### passlify.generatePassword()

Generates a password that meets all the defined rules.

### passlify.checkAsync(password)

Asynchronously checks a password against the defined rules.

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.
