import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Team from '@/components/Team';
import Events from '@/components/Events';
import Blog from '@/components/Blog';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Team />
        <Events />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;