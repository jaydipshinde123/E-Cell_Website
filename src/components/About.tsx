import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Card3D } from '@/components/ui/3d-card';
import { Building, Users, Award, Globe, Target, Lightbulb, TrendingUp } from 'lucide-react';

export default function About() {
  return (
    <div className="container mx-auto px-4 py-20 space-y-20">
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-bounce">
          About <span className="text-primary">E-Cell</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Empowering the next generation of entrepreneurs through innovation, mentorship, and community building.
        </p>
      </section>

      {/* College Info */}
      <section>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold flex items-center gap-3">
              <Building className="w-8 h-8 text-primary" />
              Our College Legacy
            </h2>
            <p className="text-muted-foreground text-lg">
              Established in 2007, our institution has been a beacon of technical excellence for over 17 years. 
              With a sprawling campus of 7 to 9 acres, state-of-the-art laboratories, and we provide an unparalleled learning environment.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">Years of Excellence</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">15,000+</div>
                <div className="text-sm text-muted-foreground">Alumni Network</div>
              </div>
            </div>
          </div>

          <Card3D>
            <Card className="glass">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                      <Award className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold">NAAC A+ Accredited</h4>
                      <p className="text-sm text-muted-foreground">Top-tier accreditation</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                      <Globe className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Global Partnerships</h4>
                      <p className="text-sm text-muted-foreground">International collaborations</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Good Placement Rate</h4>
                      <p className="text-sm text-muted-foreground">Industry-ready graduates</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Card3D>
        </div>
      </section>

      {/* E-Cell Story */}
      <section>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">The E-Cell Story</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Founded in 2022, our Entrepreneurship Cell has grown from a small group of passionate students 
            to a thriving community of innovators and entrepreneurs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card3D>
            <Card className="glass h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Target className="w-6 h-6 text-primary" />
                  Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To foster entrepreneurial thinking and provide a platform for students to 
                  transform their innovative ideas into successful ventures.
                </p>
              </CardContent>
            </Card>
          </Card3D>

          <Card3D>
            <Card className="glass h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Lightbulb className="w-6 h-6 text-primary" />
                  Vision
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To be recognized as the premier entrepreneurship cell that produces 
                  world-class entrepreneurs and innovative solutions.
                </p>
              </CardContent>
            </Card>
          </Card3D>

          <Card3D>
            <Card className="glass h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Users className="w-6 h-6 text-primary" />
                  Values
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Innovation, integrity, collaboration, and excellence drive everything 
                  we do in building the entrepreneurial ecosystem.
                </p>
              </CardContent>
            </Card>
          </Card3D>
        </div>
      </section>

      {/* Achievements */}
      <section>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Achievements</h2>
          <p className="text-lg text-muted-foreground">
            Milestones that showcase our commitment to entrepreneurial excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            { number: '25+', label: 'Active Members', icon: Users },
            { number: '2+', label: 'Events Organized', icon: Award },
            // { number: '0', label: 'Startups Incubated', icon: TrendingUp },
            // { number: '0', label: 'Funding Raised', icon: Target },
          ].map((achievement, index) => (
            <Card3D key={index}>
              <Card className="glass text-center hover-lift">
                <CardContent className="p-6">
                  <achievement.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                  <div className="text-2xl font-bold text-primary mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {achievement.label}
                  </div>
                </CardContent>
              </Card>
            </Card3D>
          ))}
        </div>
      </section>
    </div>
  );
}