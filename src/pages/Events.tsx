import Navigation from '@/components/Navigation';
import Events from '@/components/Events';
import Footer from '@/components/Footer';

const EventsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        <Events />
      </main>
      <Footer />
    </div>
  );
};

export default EventsPage;