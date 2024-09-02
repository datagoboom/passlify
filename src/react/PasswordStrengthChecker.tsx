import React, { useState } from 'react';
import Passlify from '../core/Passlify';
import { ValidationResult, PasslifyOptions } from '../core/types';

const options: PasslifyOptions = {
  min_characters: 8,
  max_characters: 48,
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

const PasswordStrengthChecker: React.FC = () => {
  const [password, setPassword] = useState<string>('');
  const [result, setResult] = useState<ValidationResult | null>(null);

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    const validationResult = passlify.check(newPassword);
    setResult(validationResult);
  };

  const handleGeneratePassword = () => {
    const generatedPassword = passlify.generatePassword();
    setPassword(generatedPassword);
    const validationResult = passlify.check(generatedPassword);
    setResult(validationResult);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Password Strength Checker</h2>
      <div className="flex mb-4">
        <input
          type="text"
          value={password}
          onChange={handlePasswordChange}
          className="border p-2 rounded flex-grow mr-2"
          placeholder="Enter password"
        />
        <button
          onClick={handleGeneratePassword}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Generate
        </button>
      </div>
      {result && (
        <div>
          <p className={`font-bold ${result.isValid ? 'text-green-600' : 'text-red-600'}`}>
            {result.isValid ? 'Valid password' : 'Invalid password'}
          </p>
          <p>Strength score: {result.score} / 4</p>
          <p>Entropy: {result.entropy.toFixed(2)} bits</p>
          {result.errors.length > 0 && (
            <ul className="list-disc pl-5 mt-2">
              {result.errors.map((error, index) => (
                <li key={index} className="text-red-600">{error}</li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default PasswordStrengthChecker;
