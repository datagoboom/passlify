const { Passlify } = require('passlify');

const options = {
  min_characters: 8,
  max_characters: 20,
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

// Check a password
const password = 'P@ssw0rd123!';
const result = passlify.check(password);

console.log('Password:', password);
console.log('Is valid:', result.isValid);
console.log('Strength score:', result.score);
console.log('Entropy:', result.entropy);
console.log('Errors:', result.errors);

// Generate a password
const generatedPassword = passlify.generatePassword();
console.log('\nGenerated password:', generatedPassword);
const generatedResult = passlify.check(generatedPassword);
console.log('Is valid:', generatedResult.isValid);
console.log('Strength score:', generatedResult.score);
console.log('Entropy:', generatedResult.entropy);