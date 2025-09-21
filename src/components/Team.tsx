import { Linkedin, Twitter, Mail, Github } from 'lucide-react';
import { useData } from '@/contexts/DataContext';

const Team = () => {
  const { teamMembers } = useData();

  return (
    <section id="team" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6 gradient-text">
            Meet Our Team
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The passionate individuals driving entrepreneurial success at GHRCEMJ
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="group relative bg-card rounded-2xl overflow-hidden border border-border card-3d"
            >
              {/* Card Front */}
              <div className="p-6 text-center transition-all duration-500 group-hover:opacity-0">
                <div className="relative mb-6">
                  <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-primary to-accent p-1">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary rounded-full animate-pulse"></div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{member.name}</h3>
                <p className="text-primary font-semibold mb-3">{member.role}</p>
              </div>

              {/* Card Back */}
              <div className="absolute inset-0 p-6 bg-gradient-to-br from-card to-muted opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-center">
                <h3 className="text-xl font-bold text-foreground mb-2">{member.name}</h3>
                <p className="text-primary font-semibold mb-4">{member.role}</p>
                <p className="text-muted-foreground text-sm mb-6">{member.bio}</p>
                
                {/* Social Links */}
                <div className="flex justify-center space-x-4">
                  {member.linkedin && (
                    <a 
                      href={member.linkedin}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform"
                    >
                      <Linkedin size={20} />
                    </a>
                  )}
                  {member.twitter && (
                    <a 
                      href={member.twitter}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform"
                    >
                      <Twitter size={20} />
                    </a>
                  )}
                  {member.email && (
                    <a 
                      href={`mailto:${member.email}`}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform"
                    >
                      <Mail size={20} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Join Team CTA */}
        <div className="text-center mt-16">
          <div className="bg-card p-8 rounded-2xl border border-border inline-block">
            <h3 className="text-2xl font-bold mb-4 gradient-text">Want to Join Our Team?</h3>
            <p className="text-muted-foreground mb-6">
              We're always looking for passionate individuals to join our mission
            </p>
            <button className="btn-primary">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;