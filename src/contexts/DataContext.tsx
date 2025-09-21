import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface BlogPost {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  author: string;
  date: string;
  image: string;
  tags: string[];
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  image: string;
  category: string;
  registrationOpen: boolean;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  linkedin: string;
  twitter: string;
  email: string;
}

interface DataContextType {
  // Blog
  blogPosts: BlogPost[];
  addBlogPost: (post: Omit<BlogPost, 'id'>) => void;
  updateBlogPost: (id: string, post: Partial<BlogPost>) => void;
  deleteBlogPost: (id: string) => void;
  
  // Events
  events: Event[];
  addEvent: (event: Omit<Event, 'id'>) => void;
  updateEvent: (id: string, event: Partial<Event>) => void;
  deleteEvent: (id: string) => void;
  
  // Team
  teamMembers: TeamMember[];
  addTeamMember: (member: Omit<TeamMember, 'id'>) => void;
  updateTeamMember: (id: string, member: Partial<TeamMember>) => void;
  deleteTeamMember: (id: string) => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};

const initialBlogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Starting Your Entrepreneurial Journey',
    content: 'Entrepreneurship is not just about starting a business; it\'s about solving problems and creating value. In this comprehensive guide, we explore the fundamental steps every aspiring entrepreneur should take...',
    excerpt: 'Learn the essential steps to begin your entrepreneurial journey and turn your ideas into reality.',
    author: 'E-Cell Team',
    date: '2024-01-15',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=400&fit=crop',
    tags: ['Entrepreneurship', 'Startup', 'Business']
  },
  {
    id: '2',
    title: 'Building a Strong Network',
    content: 'Networking is crucial for any entrepreneur. It\'s not just about collecting business cards; it\'s about building meaningful relationships that can help you grow your business...',
    excerpt: 'Discover how to build meaningful professional relationships that will support your entrepreneurial goals.',
    author: 'John Doe',
    date: '2024-01-10',
    image: 'https://images.unsplash.com/photo-1515169067868-5387ec356754?w=800&h=400&fit=crop',
    tags: ['Networking', 'Business', 'Growth']
  }
];

const initialEvents: Event[] = [
  {
    id: '1',
    title: 'Startup Pitch Competition',
    description: 'Present your innovative startup ideas to a panel of expert judges and win exciting prizes.',
    date: '2024-02-15',
    time: '10:00 AM',
    location: 'College Auditorium',
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=400&fit=crop',
    category: 'Competition',
    registrationOpen: true
  },
  {
    id: '2',
    title: 'Entrepreneurship Workshop',
    description: 'Learn from successful entrepreneurs about building and scaling startups.',
    date: '2024-02-20',
    time: '2:00 PM',
    location: 'Seminar Hall A',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop',
    category: 'Workshop',
    registrationOpen: true
  }
];

const initialTeamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Alex Johnson',
    role: 'President',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
    bio: 'Leading the E-Cell with passion for innovation and entrepreneurship.',
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com',
    email: 'alex@ecell.com'
  },
  {
    id: '2',
    name: 'Sarah Chen',
    role: 'Vice President',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b1e9?w=400&h=400&fit=crop',
    bio: 'Focused on building startup ecosystem and mentoring aspiring entrepreneurs.',
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com',
    email: 'sarah@ecell.com'
  }
];

export const DataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>(initialBlogPosts);
  const [events, setEvents] = useState<Event[]>(initialEvents);
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>(initialTeamMembers);

  // Blog functions
  const addBlogPost = (post: Omit<BlogPost, 'id'>) => {
    const newPost: BlogPost = {
      ...post,
      id: Date.now().toString()
    };
    setBlogPosts(prev => [newPost, ...prev]);
  };

  const updateBlogPost = (id: string, updates: Partial<BlogPost>) => {
    setBlogPosts(prev => prev.map(post => 
      post.id === id ? { ...post, ...updates } : post
    ));
  };

  const deleteBlogPost = (id: string) => {
    setBlogPosts(prev => prev.filter(post => post.id !== id));
  };

  // Event functions
  const addEvent = (event: Omit<Event, 'id'>) => {
    const newEvent: Event = {
      ...event,
      id: Date.now().toString()
    };
    setEvents(prev => [newEvent, ...prev]);
  };

  const updateEvent = (id: string, updates: Partial<Event>) => {
    setEvents(prev => prev.map(event => 
      event.id === id ? { ...event, ...updates } : event
    ));
  };

  const deleteEvent = (id: string) => {
    setEvents(prev => prev.filter(event => event.id !== id));
  };

  // Team functions
  const addTeamMember = (member: Omit<TeamMember, 'id'>) => {
    const newMember: TeamMember = {
      ...member,
      id: Date.now().toString()
    };
    setTeamMembers(prev => [...prev, newMember]);
  };

  const updateTeamMember = (id: string, updates: Partial<TeamMember>) => {
    setTeamMembers(prev => prev.map(member => 
      member.id === id ? { ...member, ...updates } : member
    ));
  };

  const deleteTeamMember = (id: string) => {
    setTeamMembers(prev => prev.filter(member => member.id !== id));
  };

  return (
    <DataContext.Provider value={{
      blogPosts,
      addBlogPost,
      updateBlogPost,
      deleteBlogPost,
      events,
      addEvent,
      updateEvent,
      deleteEvent,
      teamMembers,
      addTeamMember,
      updateTeamMember,
      deleteTeamMember
    }}>
      {children}
    </DataContext.Provider>
  );
};