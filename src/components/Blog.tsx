import { useState } from 'react';
import { Calendar, User, ArrowRight, Search, Tag } from 'lucide-react';
import { useData } from '@/contexts/DataContext';

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState(null);
  const { blogPosts } = useData();

  const categories = ["All", ...Array.from(new Set(blogPosts.flatMap(post => post.tags)))];

  if (selectedPost) {
    return (
      <div className="fixed inset-0 bg-background z-50 overflow-y-auto">
        <div className="container mx-auto px-4 py-8">
          <button 
            onClick={() => setSelectedPost(null)}
            className="mb-6 text-primary hover:text-accent transition-colors duration-300 flex items-center gap-2"
          >
            ← Back to Blog
          </button>
          
          <article className="max-w-4xl mx-auto">
            <div className="mb-8">
              <div className="h-64 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl mb-6 flex items-center justify-center">
                <div className="text-8xl opacity-20">📝</div>
              </div>
              
              <h1 className="text-4xl font-bold mb-4 gradient-text">{selectedPost.title}</h1>
              
                <div className="flex items-center gap-6 text-muted-foreground mb-6">
                <div className="flex items-center gap-2">
                  <User size={16} />
                  <span>{selectedPost.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>{selectedPost.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Tag size={16} />
                  <div className="flex gap-1">
                    {selectedPost.tags.map((tag, index) => (
                      <span key={index} className="bg-primary/10 text-primary px-2 py-1 rounded text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div 
              className="prose prose-lg max-w-none text-foreground prose-headings:text-primary prose-a:text-accent prose-strong:text-foreground"
            >
              <div dangerouslySetInnerHTML={{ __html: selectedPost.content }} />
            </div>
          </article>
        </div>
      </div>
    );
  }

  return (
    <section id="blog" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6 gradient-text">
            E-Cell Echo
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Insights, stories, and resources to fuel your entrepreneurial journey
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-12">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full pl-10 pr-4 py-3 bg-card border border-border rounded-full focus:outline-none focus:border-primary"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 bg-card border border-border rounded-full text-sm whitespace-nowrap hover:border-primary/50 transition-colors duration-300"
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article 
              key={post.id}
              className="card-3d bg-card rounded-2xl overflow-hidden border border-border group hover:border-primary/50 transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedPost(post)}
            >
              {/* Post Image */}
              <div className="relative h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  {post.tags.slice(0, 2).map((tag, tagIndex) => (
                    <div key={tagIndex} className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium mb-2">
                      {tag}
                    </div>
                  ))}
                </div>
              </div>

              {/* Post Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Post Meta */}
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <User size={14} />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{post.date}</span>
                    </div>
                  </div>
                </div>

                {/* Read More Button */}
                <button className="w-full flex items-center justify-center gap-2 text-primary hover:text-accent transition-colors duration-300 font-medium">
                  Read More
                  <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={16} />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 text-center">
          <div className="bg-card p-8 rounded-2xl border border-border inline-block max-w-md mx-auto">
            <h3 className="text-2xl font-bold mb-4 gradient-text">Stay Updated</h3>
            <p className="text-muted-foreground mb-6">
              Subscribe to our newsletter for the latest entrepreneurship insights
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:border-primary"
              />
              <button className="btn-primary">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;