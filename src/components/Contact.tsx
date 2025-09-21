import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6 gradient-text">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to start your entrepreneurial journey? Reach out to us and let's make it happen together
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-foreground">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border hover:border-primary/50 transition-colors duration-300">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Mail className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Email</h4>
                  <p className="text-muted-foreground">ecell@ghrcemj.edu.in</p>
                  <p className="text-muted-foreground">info@ghrcemj.edu.in</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border hover:border-primary/50 transition-colors duration-300">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <Phone className="text-accent" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                  <p className="text-muted-foreground">+91 98765 43210</p>
                  <p className="text-muted-foreground">+91 87654 32109</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border hover:border-primary/50 transition-colors duration-300">
                <div className="p-2 bg-secondary/10 rounded-lg">
                  <MapPin className="text-secondary" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Address</h4>
                  <p className="text-muted-foreground">
                    E-Cell Office, Block A<br />
                    GHRC Engineering & Management College<br />
                    Nagpur, Maharashtra 440016
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-8">
              <h4 className="font-semibold text-foreground mb-4">Follow Us</h4>
              <div className="flex gap-4">
                {[
                  { icon: Facebook, color: 'hover:text-blue-500' },
                  { icon: Twitter, color: 'hover:text-blue-400' },
                  { icon: Instagram, color: 'hover:text-pink-500' },
                  { icon: Linkedin, color: 'hover:text-blue-600' }
                ].map((social, index) => (
                  <a
                    key={index}
                    href="#"
                    className={`p-3 bg-card rounded-lg border border-border ${social.color} transition-all duration-300 hover:scale-110 hover:border-primary/50`}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card-3d bg-card p-8 rounded-2xl border border-border">
            <h3 className="text-2xl font-bold mb-6 text-foreground">Send us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary transition-colors duration-300"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary transition-colors duration-300"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary transition-colors duration-300 resize-none"
                  placeholder="Tell us about your idea or question..."
                />
              </div>

              <button
                type="submit"
                className="w-full btn-primary group"
              >
                Send Message
                <Send className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
              </button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-6 text-center gradient-text">Find Us</h3>
          <div className="bg-card rounded-2xl border border-border p-4 h-64 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="text-primary mx-auto mb-4" size={48} />
              <p className="text-muted-foreground">Interactive Map Coming Soon</p>
              <p className="text-sm text-muted-foreground mt-2">
                GHRC Engineering & Management College, Nagpur
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;