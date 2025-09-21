import { useState } from 'react';
import { Calendar, MapPin, Users, Clock, ExternalLink, Filter } from 'lucide-react';

const Events = () => {
  const [filter, setFilter] = useState('all');

  const events = [
    {
      id: 1,
      title: "Startup Pitch Competition 2024",
      date: "2024-03-15",
      time: "10:00 AM",
      location: "Main Auditorium, GHRCEMJ",
      attendees: 200,
      category: "competition",
      status: "upcoming",
      description: "Annual pitch competition where students present their innovative business ideas to industry experts.",
      image: "/api/placeholder/400/250",
      registrationLink: "#"
    },
    {
      id: 2,
      title: "Entrepreneurship Workshop Series",
      date: "2024-02-28",
      time: "2:00 PM",
      location: "E-Cell Lab, Block A",
      attendees: 50,
      category: "workshop",
      status: "upcoming",
      description: "Interactive workshop series covering business fundamentals, market analysis, and growth strategies.",
      image: "/api/placeholder/400/250",
      registrationLink: "#"
    },
    {
      id: 3,
      title: "Industry Leaders Meet",
      date: "2024-02-10",
      time: "11:00 AM",
      location: "Conference Hall",
      attendees: 150,
      category: "networking",
      status: "completed",
      description: "Exclusive networking session with successful entrepreneurs and industry leaders.",
      image: "/api/placeholder/400/250",
      registrationLink: "#"
    },
    {
      id: 4,
      title: "Innovation Hackathon",
      date: "2024-04-20",
      time: "9:00 AM",
      location: "Tech Park, GHRCEMJ",
      attendees: 300,
      category: "competition",
      status: "upcoming",
      description: "48-hour hackathon focused on developing innovative solutions for social and business challenges.",
      image: "/api/placeholder/400/250",
      registrationLink: "#"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Events' },
    { id: 'workshop', name: 'Workshops' },
    { id: 'competition', name: 'Competitions' },
    { id: 'networking', name: 'Networking' }
  ];

  const filteredEvents = filter === 'all' ? events : events.filter(event => event.category === filter);

  return (
    <section id="events" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6 gradient-text">
            Events & Initiatives
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join our exciting events and initiatives designed to boost your entrepreneurial journey
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                filter === category.id
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-card text-foreground border border-border hover:border-primary/50'
              }`}
            >
              <Filter size={16} />
              {category.name}
            </button>
          ))}
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredEvents.map((event) => (
            <div 
              key={event.id}
              className="card-3d bg-card rounded-2xl overflow-hidden border border-border group hover:border-primary/50 transition-all duration-300"
            >
              {/* Event Image */}
              <div className="relative h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <div className="text-6xl opacity-20">🚀</div>
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium ${
                  event.status === 'upcoming' 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-muted text-muted-foreground'
                }`}>
                  {event.status === 'upcoming' ? 'Upcoming' : 'Completed'}
                </div>
              </div>

              {/* Event Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {event.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {event.description}
                </p>

                {/* Event Details */}
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-muted-foreground">
                    <Calendar className="mr-2" size={16} />
                    <span className="text-sm">{event.date}</span>
                    <Clock className="ml-4 mr-2" size={16} />
                    <span className="text-sm">{event.time}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="mr-2" size={16} />
                    <span className="text-sm">{event.location}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Users className="mr-2" size={16} />
                    <span className="text-sm">{event.attendees} participants</span>
                  </div>
                </div>

                {/* CTA Button */}
                {event.status === 'upcoming' ? (
                  <button className="w-full btn-primary group">
                    Register Now
                    <ExternalLink className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={16} />
                  </button>
                ) : (
                  <button className="w-full btn-secondary">
                    View Details
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Event Calendar CTA */}
        <div className="text-center mt-16">
          <div className="bg-card p-8 rounded-2xl border border-border inline-block">
            <h3 className="text-2xl font-bold mb-4 gradient-text">View Full Calendar</h3>
            <p className="text-muted-foreground mb-6">
              Explore all our upcoming events and plan your entrepreneurial journey
            </p>
            <button className="btn-primary">
              <Calendar className="mr-2" size={20} />
              Event Calendar
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;