import { ArrowRight, Sparkles, TrendingUp } from 'lucide-react';
import ecellLogo from '@/assets/ecell-logo.jpg';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen hero-glow flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/10 rounded-full blur-xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-secondary/10 rounded-full blur-xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Floating Logo */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <img 
                src={ecellLogo} 
                alt="E-Cell GHRCEMJ" 
                className="h-32 w-32 mx-auto rounded-2xl float pulse-glow"
              />
              <div className="absolute -top-2 -right-2">
                <Sparkles className="text-accent animate-pulse" size={24} />
              </div>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-orbitron font-bold mb-6 animate-fade-in">
            <span className="gradient-text">E-Cell</span>{' '}
            <span className="text-foreground">GHRCEMJ</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in delay-300">
            Empowering Innovation • Fostering Entrepreneurship • Building Tomorrow
          </p>

          {/* Description */}
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in delay-500">
            Join GHRCEMJ's premier Entrepreneurship Cell where ideas transform into startups, 
            dreams become reality, and students evolve into successful entrepreneurs.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in delay-700">
            <button className="btn-primary group">
              Get Involved
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
            </button>
            <button className="btn-secondary group">
              <TrendingUp className="mr-2 group-hover:scale-110 transition-transform duration-300" size={20} />
              Our Impact
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 animate-fade-in delay-1000">
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">50+</div>
              <div className="text-muted-foreground">Startups Incubated</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">1000+</div>
              <div className="text-muted-foreground">Students Mentored</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">25+</div>
              <div className="text-muted-foreground">Industry Partners</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">₹5Cr+</div>
              <div className="text-muted-foreground">Funding Raised</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;