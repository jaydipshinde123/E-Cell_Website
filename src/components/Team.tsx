import { Card, CardContent } from '@/components/ui/card';
import { Card3D } from '@/components/ui/3d-card';
import { Github, Linkedin, Instagram, Mail, Twitter } from 'lucide-react';
import { useData } from '@/contexts/DataContext';

export default function Team() {
  const { teamMembers } = useData();

  // Group members by team if needed (optional)
  const groupedMembers = teamMembers.reduce((acc, member) => {
    if (!acc[member.team]) {
      acc[member.team] = [];
    }
    acc[member.team].push(member);
    return acc;
  }, {} as Record<string, typeof teamMembers>);

  return (
    <div className="container mx-auto px-4 py-20">
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold animate-bounce">
          Meet Our <span className="text-primary">Team</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mt-4">
          Passionate individuals working together to build an amazing entrepreneurial ecosystem.
        </p>
      </section>

      <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
        {teamMembers.map((member, index) => (
          <Card3D key={index}>
            <Card className="glass hover-lift overflow-hidden text-center p-4 flex flex-col items-center group relative">
              <div className="relative mb-4">
                <img
                  src={member.image || '/api/placeholder/150/150'}
                  alt={member.name}
                  className="w-32 h-32 rounded-full object-cover"
                />
                {/* Hover overlay with bio */}
                <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full flex items-center justify-center p-2">
                  <p className="text-white text-xs">{member.bio || ''}</p>
                </div>
              </div>
              
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-sm text-muted-foreground mb-2">{member.role}</p>
              
              <div className="flex space-x-3 mt-2">
                {/* Uncomment and use if you store these urls:
                {member.github && (
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                )}
                {member.instagram && (
                  <a
                    href={member.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                )} */}
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                )}
                {member.twitter && (
                  <a
                    href={member.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                )}
                {member.email && (
                  <a
                    href={`mailto:${member.email}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                )}
              </div>
            </Card>
          </Card3D>
        ))}
      </section>
    </div>
  );
}