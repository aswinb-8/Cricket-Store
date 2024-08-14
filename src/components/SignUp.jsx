import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import Link and useNavigate
import './Auth.css'; // Assuming you use a common CSS file for both Login and SignUp

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Use useNavigate to programmatically navigate

  const handleSignUp = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Please enter both email and password');
      return;
    }

    console.log('Signing up with:', { email, password });

    // Clear the form fields
    setEmail('');
    setPassword('');
    setError('');

    // Redirect to home page or login after successful sign-up
    navigate('/login'); // Example: Redirect to login page after sign-up
  };

  return (
    <div className="auth-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSignUp}>
        {error && <p className="error-message">{error}</p>}
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
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
            required
          />
        </div>
        <button type="submit" className="auth-button">Sign Up</button>
      </form>
      <p className="login-prompt">
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default SignUp;
