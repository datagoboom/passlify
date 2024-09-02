import React from 'react';
import ReactDOM from 'react-dom';
import { PasswordStrengthChecker } from 'passlify';

const App = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Passlify Demo</h1>
      <PasswordStrengthChecker />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));