import Passlify from '../src/core/Passlify';

describe('Passlify', () => {
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

  test('valid password passes all checks', () => {
    const result = passlify.check('P@ssw0rd123!');
    expect(result.isValid).toBe(true);
    expect(result.errors).toHaveLength(0);
  });

  test('short password fails', () => {
    const result = passlify.check('Sh0rt!');
    expect(result.isValid).toBe(false);
    expect(result.errors).toContain('Password is too short');
  });

  test('password without special characters fails', () => {
    const result = passlify.check('Password123');
    expect(result.isValid).toBe(false);
    expect(result.errors).toContain('Password must contain special characters');
  });

  test('blacklisted password fails', () => {
    const result = passlify.check('password123');
    expect(result.isValid).toBe(false);
    expect(result.errors).toContain('Password is in the blacklist');
  });

  test('generated password is valid', () => {
    const generatedPassword = passlify.generatePassword();
    const result = passlify.check(generatedPassword);
    expect(result.isValid).toBe(true);
    expect(result.errors).toHaveLength(0);
  });

  test('async check returns same result as sync check', async () => {
    const password = 'P@ssw0rd123!';
    const syncResult = passlify.check(password);
    const asyncResult = await passlify.checkAsync(password);
    expect(asyncResult).toEqual(syncResult);
  });
});