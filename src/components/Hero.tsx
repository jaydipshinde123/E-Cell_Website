import { Button } from '@/components/ui/button';
import ecellLogo from '@/assets/ecell-logo.jpg';
import { Card3D } from '@/components/ui/3d-card';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Rocket, 
  Users, 
  Trophy, 
  Target, 
  Lightbulb, 
  TrendingUp,
  Zap,
  ArrowRight,
  Play,
  Building,
  Award,
  Globe,
  Sparkles
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 tech-grid opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-hero"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="mb-8 flex justify-center">
            <div className="relative">
              <img 
                src={ecellLogo} 
                alt="E-Cell GHRCEMJ" 
                className="h-[10em] w-[10em] mx-auto  rounded-2xl float pulse-glow"
              />
              <div className="absolute -top-2 -right-2">
                <Sparkles className="text-accent animate-pulse" size={24} />
              </div>
            </div>
          </div>
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-pulse">
                Welcome to{' '}
                <span className="bg-gradient-primary bg-clip-text text-transparent ">
                  E-Cell
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Fostering Innovation, Building Entrepreneurs, Creating the Future
              </p>
            </div>

            {/* Stats */}
            {/* <div className="flex mt-16 animate-scale-in justify-center gap-10">
              {[
                { label: 'Active Members', value: '25+' },
                { label: 'Events Hosted', value: '2+' },
                { label: 'Success Stories', value: '30+' },
              ].map((stat, index) => (
                <Card3D key={index}>
                  <Card className="glass hover-glow text-center">
                    <CardContent className="p-6">
                      <div className="text-2xl md:text-3xl font-bold text-primary mb-2">
                        {stat.value}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {stat.label}
                      </div>
                    </CardContent>
                  </Card>
                </Card3D>
              ))}
            </div> */}
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 animate-float">
          <div className="w-16 h-16 bg-gradient-primary rounded-full opacity-20 blur-xl"></div>
        </div>
        <div className="absolute bottom-20 right-10 animate-float" style={{ animationDelay: '2s' }}>
          <div className="w-24 h-24 bg-gradient-neon rounded-full opacity-10 blur-2xl"></div>
        </div>
      </section>

      {/* About E-Cell Section */}
      <section className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What is <span className="text-primary">E-Cell</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The Entrepreneurship Cell is a non-profit organization that aims to foster the spirit of entrepreneurship among students.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold flex items-center gap-3">
                <Building className="w-8 h-8 text-primary" />
                About Our College
              </h3>
              <p className="text-muted-foreground">
                Our prestigious institution has been at the forefront of technical education for over 17 years. 
                With state-of-the-art facilities and world-class faculty, we nurture the brightest minds to become 
                tomorrow's innovators and entrepreneurs.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-bold flex items-center gap-3">
                <Zap className="w-8 h-8 text-primary" />
                E-Cell Mission
              </h3>
              <p className="text-muted-foreground">
                To create a vibrant ecosystem that encourages innovation, supports startups, and develops 
                entrepreneurial mindset among students through mentorship, networking, and hands-on experience.
              </p>
            </div>
          </div>

          <Card3D>
            <Card className="glass hover-lift">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                      <Globe className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Global Impact</h4>
                      <p className="text-sm text-muted-foreground">Reaching worldwide</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                      <Award className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Excellence</h4>
                      <p className="text-sm text-muted-foreground">Award-winning programs</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Community</h4>
                      <p className="text-sm text-muted-foreground">Strong network of entrepreneurs</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Card3D>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <Card3D>
            <Card className="glass hover-glow h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Target className="w-8 h-8 text-primary" />
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  To cultivate an entrepreneurial ecosystem within our college that empowers students 
                  to transform innovative ideas into successful ventures, fostering creativity, 
                  leadership, and economic growth.
                </p>
              </CardContent>
            </Card>
          </Card3D>

          <Card3D>
            <Card className="glass hover-glow h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Lightbulb className="w-8 h-8 text-primary" />
                  Our Vision
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  To be recognized as the leading entrepreneurship cell that produces innovative 
                  entrepreneurs who create sustainable businesses and contribute to society's 
                  technological and economic advancement.
                </p>
              </CardContent>
            </Card>
          </Card3D>
        </div>
      </section>

      {/* Key Features */}
      <section className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose <span className="text-primary">E-Cell</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We provide comprehensive support to turn your entrepreneurial dreams into reality.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Rocket,
              title: 'Startup Incubation',
              description: 'Get your startup off the ground with our comprehensive incubation program.',
            },
            {
              icon: Users,
              title: 'Mentorship',
              description: 'Learn from successful entrepreneurs and industry experts.',
            },
            {
              icon: Trophy,
              title: 'Competitions',
              description: 'Participate in various entrepreneurship competitions and challenges.',
            },
            {
              icon: TrendingUp,
              title: 'Funding Support',
              description: 'Connect with investors and get funding for your innovative ideas.',
            },
            {
              icon: Lightbulb,
              title: 'Innovation Labs',
              description: 'Access state-of-the-art facilities to develop your prototypes.',
            },
            {
              icon: Globe,
              title: 'Global Network',
              description: 'Connect with entrepreneurs and startups from around the world.',
            },
          ].map((feature, index) => (
            <Card3D key={index}>
              <Card className="glass hover-lift h-full text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <feature.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </Card3D>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="container mx-auto px-4">
        <Card3D>
          <Card className="glass text-center">
            <CardContent className="p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Start Your <span className="text-primary">Entrepreneurial Journey</span>?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join our community of innovators and turn your ideas into successful businesses.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contact">Get Started Today</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/events">View Upcoming Events</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </Card3D>
      </section> */}
    </div>
  );
};

export default Hero;