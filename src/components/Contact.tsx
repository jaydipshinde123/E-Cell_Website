import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Card3D } from '@/components/ui/3d-card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Users,
} from 'lucide-react';
import { useState } from 'react';
import { useData } from '@/contexts/DataContext';  // Import your DataContext hook

const contactInfo = [
  {
    icon: Mail,
    title: 'Email Us',
    details: 'ecell@college.edu',
    description: 'Send us an email anytime'
  },
  {
    icon: Phone,
    title: 'Call Us',
    details: '+91 12345 67890',
    description: 'Mon-Fri 9AM-6PM'
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    details: 'E-Cell Office, Room 301, Main Building',
    description: 'Gat No.57, Shirsoli Road, Mohadi Jalgaon - 425002'
  },
  {
    icon: Clock,
    title: 'Office Hours',
    details: 'Mon-Fri: 9AM-6PM',
    description: 'Sat: 10AM-4PM'
  }
];

const teamContacts = [
  {
    name: 'Overall Co-ordinator',
    person: 'Kalyani Ravindra Kadam',
    email: 'kalyani.kadam@ecell.edu',
    phone: '+91 98765 43210',
    icon: Users,
  },
  {
    name: 'Events and PR Head',
    person: 'Nidhi Rajesh Bajpai',
    email: 'nidhi.bajpai@ecell.edu',
    phone: '+91 98765 43211',
    icon: Users,
  },
];

export default function Contact() {
  const { addContact } = useData();

  // Form state for inputs
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  // For showing success or error status
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  // Input change handler
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  // Form submit handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      await addContact(formData);
      setStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      setStatus('error');
      console.error('Failed to send contact message:', error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-20 space-y-20">
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-bounce">
          Get In <span className="text-primary">Touch</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Have questions, ideas, or want to collaborate? We'd love to hear from you. 
          Reach out to us through any of the channels below.
        </p>
      </section>

      {/* Contact Information */}
      <section>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((info, index) => (
            <Card3D key={index}>
              <Card className="glass hover-lift text-center h-full">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <info.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{info.title}</h3>
                  <p className="text-primary font-medium mb-1">{info.details}</p>
                  <p className="text-muted-foreground text-sm">{info.description}</p>
                </CardContent>
              </Card>
            </Card3D>
          ))}
        </div>
      </section>

      {/* Contact Form & Map */}
      <section>
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card3D>
            <Card className="glass">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <Send className="w-6 h-6 text-primary" />
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="Enter your first name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Enter your last name"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What's this about?"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us more about your inquiry..."
                      rows={5}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full" disabled={status === 'sending'}>
                    <Send className="w-4 h-4" />
                    {status === 'sending' ? 'Sending...' : 'Send Message'}
                  </Button>

                  {status === 'success' && (
                    <p className="mt-2 text-green-600 font-medium">Message sent successfully!</p>
                  )}
                  {status === 'error' && (
                    <p className="mt-2 text-red-600 font-medium">Failed to send message. Please try again.</p>
                  )}
                </form>
              </CardContent>
            </Card>
          </Card3D>

          {/* Map & Additional Info */}
          <div className="space-y-8">
            <Card3D>
              <Card className="glass">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-3">
                    <MapPin className="w-6 h-6 text-primary" />
                    Find Us
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 rounded-lg overflow-hidden mb-4">
                    {/* Google Maps iframe embed */}
                    <iframe
                      title="Ghraisoni College, Jalgaon Location"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3761.702631651456!2d75.56601421517543!3d21.010366292542875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4a964a68c09a7%3A0x1787ff6e34ef6a4a!2sGhraisoni%20Institute%20of%20Technology%2C%20Jalgaon%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1694302338518!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen={false}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                  <div className="space-y-2">
                    <p className="font-semibold">G.H.Raisoni College Of Engineering And Management</p>
                    <p className="text-muted-foreground">Gat No.57, Shirsoli Road, Mohadi Jalgaon - 425002</p>
                    <p className="text-muted-foreground">Maharashtra, India</p>
                  </div>
                </CardContent>
              </Card>
            </Card3D>

            {/* Team Contacts */}
            <Card3D>
              <Card className="glass">
                <CardHeader>
                  <CardTitle className="text-xl">Direct Contacts</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {teamContacts.map((contact, index) => (
                    <div key={index} className="flex items-center gap-4 p-3 rounded-lg bg-card/50">
                      <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                        <contact.icon className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold">{contact.name}</div>
                        <div className="text-sm text-primary">{contact.person}</div>
                        <div className="text-xs text-muted-foreground">
                          {contact.email} • {contact.phone}
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </Card3D>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Quick answers to common questions about E-Cell.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {(() => {
            const faqs = [
              {
                question: 'How can I join E-Cell?',
                answer: 'We hold recruitment drives every semester. Follow our social media or contact us for updates on upcoming opportunities.'
              },
              {
                question: 'Can I pitch my startup idea?',
                answer: 'Absolutely! We regularly organize pitch competitions and provide platforms for students to present their innovative ideas.'
              },
              {
                question: 'Do you provide mentorship?',
                answer: 'Yes, we have a strong network of mentors from industry who guide students in their entrepreneurial journey.'
              },
              {
                question: 'Are events open to all students?',
                answer: 'Most of our events are open to all students. Some specialized workshops may have prerequisites which will be mentioned.'
              },
              {
                question: 'How can my company sponsor E-Cell?',
                answer: 'We welcome corporate partnerships! Please reach out to us through the contact form or directly via email for sponsorship opportunities.'
              },
              {
                question: 'Do you help with funding for startups?',
                answer: 'We connect promising startups with investors and provide guidance on funding opportunities, pitch preparation, and business development.'
              }
            ];
            const [openIndex, setOpenIndex] = useState<number | null>(null);

            return faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <Card3D key={index}>
                  <Card className="glass hover-lift">
                    <CardContent
                      className="p-6 cursor-pointer"
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                    >
                      <div className="flex justify-between items-center mb-3 text-primary text-lg font-semibold">
                        <span>{faq.question}</span>
                        <span className="ml-4 text-2xl select-none">
                          {isOpen ? '−' : '+'}
                        </span>
                      </div>
                      {isOpen && (
                        <p className="text-muted-foreground">
                          {faq.answer}
                        </p>
                      )}
                    </CardContent>
                  </Card>
                </Card3D>
              );
            });
          })()}
        </div>
      </section>

      {/* CTA Section (commented out) */}
      {/* <section>
        <Card3D>
          <Card className="glass text-center">
            <CardContent className="p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Start Your <span className="text-primary">Journey</span>?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join our vibrant community of entrepreneurs and innovators. 
                Let's build the future together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg">
                  Join E-Cell Today
                </Button>
                <Button variant="outline" size="lg">
                  Schedule a Meeting
                </Button>
              </div>
            </CardContent>
          </Card>
        </Card3D>
      </section> */}
    </div>
  );
}