import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowUp, Github } from 'lucide-react';
import ecellLogo from '@/assets/ecell-logo.jpg';
import { Link } from 'react-router-dom';

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
    <footer className="bg-card border-t border-border/20 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-25 h-25  rounded-lg flex items-center justify-center">
            <img src={ecellLogo} alt="E-Cell logo with a modern and vibrant design" className="w-20 h-20 object-contain" />
              </div>
              <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent flex items-center">
                E-Cell
              </span>
            </div>
            <p className="text-muted-foreground text-sm">
              Fostering entrepreneurship and innovation at our college. Building the next generation of entrepreneurs.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/ecell_ghriebm/" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/ecell_ghrcemj" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/events" className="text-muted-foreground hover:text-primary transition-colors">Events</Link></li>
              <li><Link to="/team" className="text-muted-foreground hover:text-primary transition-colors">Our Team</Link></li>
              <li><Link to="/winners" className="text-muted-foreground hover:text-primary transition-colors">Past Winners</Link></li>
              <li><Link to="/sponsors" className="text-muted-foreground hover:text-primary transition-colors">Sponsors</Link></li>
            </ul>
          </div>

          {/* Programs */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Programs</h3>
            <ul className="space-y-2">
              <li><span className="text-muted-foreground">Startup Incubation</span></li>
              <li><span className="text-muted-foreground">Mentorship Program</span></li>
              <li><span className="text-muted-foreground">Innovation Challenges</span></li>
              <li><span className="text-muted-foreground">Workshops & Seminars</span></li>
              <li><span className="text-muted-foreground">Networking Events</span></li>
            </ul>
          </div>

            {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground text-sm"><a href='mailto:ghriebmecell@gmail.com'>ghriebmecell@gmail.com</a></span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground text-sm"><a href='https://maps.app.goo.gl/FnoND5S2hHao4Ej66'>Gat No.57, Shirsoli Road, Mohadi Jalgaon - 425002</a></span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border/20 mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2025 E-Cell. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;