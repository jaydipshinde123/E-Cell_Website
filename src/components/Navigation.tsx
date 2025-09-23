import { useState, useEffect } from 'react';
import { Menu, X, Settings } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import ecellLogo from '@/assets/ecell-logo.jpg';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Track if login form/modal is open
  const [showLogin, setShowLogin] = useState(false);

  // Login form state
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Team', path: '/team' },
    { name: 'Events', path: '/events' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  // Show login form instead of navigating directly
  const handleAdminClick = () => {
    setShowLogin(true);
    setIsOpen(false);
  };

  // Handle login submit inside Navigation
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (username === 'Admin' && password === 'Ecelljalgaon1223@#$') {
      setError('');
      setShowLogin(false);
      setUsername('');
      setPassword('');
      navigate('/admin');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-background/80 backdrop-blur-md border-b border-border' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <img src={ecellLogo} alt="E-Cell GHRCEMJ" className="h-10 w-10 rounded-lg pulse-glow" />
              <span className="font-orbitron font-bold text-xl gradient-text">E-Cell GHRCEMJ</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-foreground hover:text-primary transition-colors duration-300 font-medium relative group ${
                    location.pathname === item.path ? 'text-primary' : ''
                  }`}
                >
                  {item.name}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 ${
                      location.pathname === item.path ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  ></span>
                </Link>
              ))}
              <button
                onClick={handleAdminClick}
                className="text-foreground hover:text-accent transition-colors duration-300 font-medium relative group flex items-center gap-2 bg-transparent border-none cursor-pointer"
              >
                <Settings className="w-4 h-4" />
                <span className="hidden lg:inline"></span>
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-foreground hover:text-primary transition-colors duration-300"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden bg-card/95 backdrop-blur-md border border-border rounded-lg mt-2 p-4 animate-fade-in">
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`text-foreground hover:text-primary transition-colors duration-300 font-medium ${
                      location.pathname === item.path ? 'text-primary' : ''
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Login Modal/Form */}
      {showLogin && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
          <div className="bg-card p-8 rounded-lg max-w-md w-full shadow-md relative">
            <button
              className="absolute top-3 right-3 text-foreground hover:text-red-600"
              onClick={() => {
                setShowLogin(false);
                setError('');
              }}
              aria-label="Close login form"
            >
              &#x2715;
            </button>
            <h2 className="text-2xl font-bold mb-6 text-center">Admin Login</h2>

            <form onSubmit={handleLoginSubmit}>
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
        </div>
      )}
    </>
  );
};

export default Navigation;
