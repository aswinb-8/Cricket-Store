import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import Link and useNavigate
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Use useNavigate to programmatically navigate

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Please enter both email and password');
      return;
    }

    console.log('Logging in with:', { email, password });

    // Clear the form fields
    setEmail('');
    setPassword('');
    setError('');

    // Navigate to a different page after login, if needed
    navigate('/products'); // Example: Redirect to products page after login
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        {error && <p className="error-message">{error}</p>}
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </div>
        <button type="submit" className="login-button">Login</button>
      </form>
      <p className="signup-prompt">
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </p>
    </div>
  );
};

export default Login;
