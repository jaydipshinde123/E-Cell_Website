import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === 'JAY' && password === '123') {
      setError('');
      navigate('/admin');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-background px-4">
      <form onSubmit={handleSubmit} className="bg-card p-8 rounded-lg max-w-md w-full shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Admin Login</h2>

        <label htmlFor="username" className="block mb-2 font-semibold">
          Username
        </label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="input-primary mb-4 w-full"
          required
        />

        <label htmlFor="password" className="block mb-2 font-semibold">
          Password
        </label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input-primary mb-4 w-full"
          required
        />

        {error && <p className="text-red-600 mb-4">{error}</p>}

        <button type="submit" className="btn-primary w-full">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
