import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowUp } from 'lucide-react';
import ecellLogo from '@/assets/ecell-logo.jpg';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Team', href: '#team' },
    { name: 'Events', href: '#events' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' }
  ];

  const resources = [
    { name: 'Startup Guide', href: '#' },
    { name: 'Business Plan Template', href: '#' },
    { name: 'Funding Resources', href: '#' },
    { name: 'Mentorship Program', href: '#' },
    { name: 'Alumni Network', href: '#' }
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src={ecellLogo} 
                alt="E-Cell GHRCEMJ" 
                className="h-12 w-12 rounded-lg"
              />
              <div>
                <h3 className="font-orbitron font-bold text-xl gradient-text">E-Cell</h3>
                <p className="text-sm text-muted-foreground">GHRCEMJ</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
              Empowering the next generation of entrepreneurs through innovation, 
              mentorship, and community building at GHRC Engineering & Management College.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Facebook, color: 'hover:text-blue-500' },
                { icon: Twitter, color: 'hover:text-blue-400' },
                { icon: Instagram, color: 'hover:text-pink-500' },
                { icon: Linkedin, color: 'hover:text-blue-600' }
              ].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className={`text-muted-foreground ${social.color} transition-all duration-300 hover:scale-110`}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-foreground mb-6">Resources</h4>
            <ul className="space-y-3">
              {resources.map((resource) => (
                <li key={resource.name}>
                  <a
                    href={resource.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {resource.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-foreground mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="text-primary mt-0.5" size={16} />
                <div>
                  <p className="text-sm text-muted-foreground">ecell@ghrcemj.edu.in</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="text-primary mt-0.5" size={16} />
                <div>
                  <p className="text-sm text-muted-foreground">+91 98765 43210</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="text-primary mt-0.5" size={16} />
                <div>
                  <p className="text-sm text-muted-foreground">
                    GHRC Engineering & Management College<br />
                    Nagpur, Maharashtra 440016
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="text-center mb-8">
            <h4 className="font-semibold text-foreground mb-4">Stay Connected</h4>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto text-sm">
              Subscribe to our newsletter for the latest updates on events, opportunities, and success stories
            </p>
            <div className="flex max-w-md mx-auto gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:border-primary text-sm"
              />
              <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-300 text-sm font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-muted-foreground mb-4 md:mb-0">
            © 2024 E-Cell GHRCEMJ. All rights reserved. Built with ❤️ for entrepreneurs.
          </div>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-primary hover:text-accent transition-colors duration-300 text-sm font-medium group"
          >
            Back to Top
            <ArrowUp className="group-hover:-translate-y-1 transition-transform duration-300" size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;