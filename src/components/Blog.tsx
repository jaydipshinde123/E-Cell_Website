import { useState } from 'react';
import { Calendar, User, ArrowRight, Search, Tag } from 'lucide-react';

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  const blogPosts = [
    {
      id: 1,
      title: "10 Essential Skills Every Entrepreneur Needs",
      excerpt: "Discover the fundamental skills that separate successful entrepreneurs from the rest. From leadership to financial literacy, we cover it all.",
      author: "Raj Sharma",
      date: "2024-02-15",
      category: "Skills",
      readTime: "5 min read",
      image: "/api/placeholder/400/250",
      content: `
        <h2>Introduction</h2>
        <p>Entrepreneurship is more than just having a great idea. It requires a diverse set of skills that can be developed over time. Here are the 10 essential skills every entrepreneur needs to succeed.</p>
        
        <h3>1. Leadership Skills</h3>
        <p>Great entrepreneurs are great leaders. They inspire their teams, communicate vision effectively, and make tough decisions when needed.</p>
        
        <h3>2. Financial Literacy</h3>
        <p>Understanding cash flow, profit margins, and financial planning is crucial for any business owner.</p>
        
        <!-- More content would go here -->
      `
    },
    {
      id: 2,
      title: "Success Story: From Idea to ₹1 Cr Revenue",
      excerpt: "How GHRCEMJ alumnus transformed a simple college project into a multi-crore business within 2 years.",
      author: "Priya Patel",
      date: "2024-02-10",
      category: "Success Story",
      readTime: "8 min read",
      image: "/api/placeholder/400/250",
      content: `
        <h2>The Beginning</h2>
        <p>What started as a college project has now become one of the most successful startups from our campus...</p>
      `
    },
    {
      id: 3,
      title: "Funding Guide: Securing Your First Investment",
      excerpt: "A comprehensive guide to understanding different funding options and preparing for investor meetings.",
      author: "Arjun Kumar",
      date: "2024-02-05",
      category: "Funding",
      readTime: "12 min read",
      image: "/api/placeholder/400/250",
      content: `
        <h2>Understanding Funding Stages</h2>
        <p>Every startup goes through different funding stages. Here's what you need to know...</p>
      `
    },
    {
      id: 4,
      title: "Building a Strong Team Culture",
      excerpt: "Learn how to create a positive work environment that attracts top talent and drives innovation.",
      author: "Sneha Joshi",
      date: "2024-01-28",
      category: "Team Building",
      readTime: "6 min read",
      image: "/api/placeholder/400/250",
      content: `
        <h2>The Foundation of Success</h2>
        <p>A strong team culture is the backbone of any successful startup...</p>
      `
    }
  ];

  const categories = ["All", "Skills", "Success Story", "Funding", "Team Building"];

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
                  <span>{selectedPost.category}</span>
                </div>
              </div>
            </div>
            
            <div 
              className="prose prose-lg max-w-none text-foreground"
              dangerouslySetInnerHTML={{ __html: selectedPost.content }}
            />
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
              <div className="relative h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <div className="text-6xl opacity-20">📝</div>
                <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                  {post.category}
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
                  <span>{post.readTime}</span>
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