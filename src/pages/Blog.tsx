import Navigation from '@/components/Navigation';
import Blog from '@/components/Blog';
import Footer from '@/components/Footer';

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        <Blog />
      </main>
      <Footer />
    </div>
  );
};

export default BlogPage;