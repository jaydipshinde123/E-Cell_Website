import { useState } from 'react';
import { Calendar, MapPin, Users, Clock, ExternalLink, Filter } from 'lucide-react';
import { useData } from '@/contexts/DataContext';

const Events = () => {
  const [filter, setFilter] = useState('all');
  const { events } = useData();

  const categories = [
    { id: 'all', name: 'All Events' },
    ...Array.from(new Set(events.map(event => event.category))).map(cat => ({
      id: cat,
      name: cat.charAt(0).toUpperCase() + cat.slice(1) + 's'
    }))
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
              className=" bg-card rounded-2xl overflow-hidden border border-border group hover:border-primary/50 transition-all duration-300"
            >
              {/* Event Image */}
              <div className="relative h-48 bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium ${
                  event.registrationOpen 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-muted text-muted-foreground'
                }`}>
                  {event.registrationOpen ? 'Registration Open' : 'Registration Closed'}
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
                    <span className="text-sm">Expected attendees</span>
                  </div>
                </div>

                {/* CTA Button */}
                {event.registrationOpen ? (
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
      </div>
    </section>
  );
};

export default Events;