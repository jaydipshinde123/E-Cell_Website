import { useState, useEffect } from 'react';
import { Menu, X, Settings } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import ecellLogo from '@/assets/ecell-logo.jpg';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

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

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-background/80 backdrop-blur-md border-b border-border' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src={ecellLogo} 
              alt="E-Cell GHRCEMJ" 
              className="h-10 w-10 rounded-lg pulse-glow"
            />
            <span className="font-orbitron font-bold text-xl gradient-text">
              E-Cell GHRCEMJ
            </span>
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
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 ${
                  location.pathname === item.path ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
            ))}
            <Link
              to="/admin"
              className="text-foreground hover:text-accent transition-colors duration-300 font-medium relative group flex items-center gap-2"
            >
              <Settings className="w-4 h-4" />
              <span className="hidden lg:inline">Admin</span>
            </Link>
            <Link to="/contact" className="btn-primary">
              Join E-Cell
            </Link>
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
              <Link
                to="/admin"
                className="text-foreground hover:text-accent transition-colors duration-300 font-medium flex items-center gap-2"
                onClick={() => setIsOpen(false)}
              >
                <Settings className="w-4 h-4" />
                Admin
              </Link>
              <Link to="/contact" className="btn-primary mt-4" onClick={() => setIsOpen(false)}>
                Join E-Cell
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;