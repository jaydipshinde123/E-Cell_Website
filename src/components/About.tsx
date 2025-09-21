import { Target, Eye, Award, Users, Lightbulb, Rocket } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Lightbulb,
      title: "Innovation Hub",
      description: "Fostering creative thinking and innovative solutions to real-world problems."
    },
    {
      icon: Users,
      title: "Community Building",
      description: "Creating a vibrant ecosystem of entrepreneurs, mentors, and industry experts."
    },
    {
      icon: Rocket,
      title: "Startup Incubation",
      description: "Providing comprehensive support from ideation to market launch."
    },
    {
      icon: Award,
      title: "Excellence Recognition",
      description: "Celebrating and rewarding outstanding entrepreneurial achievements."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6 gradient-text">
            About E-Cell GHRCEMJ
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We are the driving force behind entrepreneurial innovation at GHRC Engineering & Management College, 
            committed to transforming students into successful entrepreneurs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          {/* Mission */}
          <div className="card-3d bg-card p-8 rounded-2xl border border-border">
            <div className="flex items-center mb-6">
              <Target className="text-primary mr-4" size={32} />
              <h3 className="text-2xl font-bold text-foreground">Our Mission</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              To create a thriving entrepreneurial ecosystem that empowers students with the knowledge, 
              skills, and network needed to build successful businesses. We aim to bridge the gap between 
              academic learning and real-world business challenges through practical experience and mentorship.
            </p>
          </div>

          {/* Vision */}
          <div className="card-3d bg-card p-8 rounded-2xl border border-border">
            <div className="flex items-center mb-6">
              <Eye className="text-accent mr-4" size={32} />
              <h3 className="text-2xl font-bold text-foreground">Our Vision</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              To be recognized as the leading entrepreneurship cell in the region, producing innovative 
              startups that solve pressing societal problems while creating economic value. We envision 
              our alumni becoming successful entrepreneurs who contribute to India's growth story.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="card-3d bg-card p-6 rounded-xl border border-border text-center group hover:border-primary/50 transition-all duration-300"
            >
              <div className="mb-4 flex justify-center">
                <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors duration-300">
                  <feature.icon className="text-primary" size={32} />
                </div>
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h4>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Impact Section */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-bold mb-8 gradient-text">Our Impact</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">3+</div>
              <div className="text-muted-foreground">Years of Excellence</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-accent mb-2">500+</div>
              <div className="text-muted-foreground">Workshop Participants</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-secondary mb-2">15+</div>
              <div className="text-muted-foreground">Successful Ventures</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;