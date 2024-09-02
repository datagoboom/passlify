# Passlify

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

const result = passlify.check('P@ssw0rd123!');
console.log(result);
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