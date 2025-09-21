import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import axios from 'axios';

// Data models interfaces
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
  team: string;
}

export interface Contact {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  submittedAt: string;
}

// Context interface with contact added
interface DataContextType {
  blogPosts: BlogPost[];
  addBlogPost: (post: Omit<BlogPost, 'id'>) => Promise<void>;
  updateBlogPost: (id: string, post: Partial<BlogPost>) => Promise<void>;
  deleteBlogPost: (id: string) => Promise<void>;

  events: Event[];
  addEvent: (event: Omit<Event, 'id'>) => Promise<void>;
  updateEvent: (id: string, event: Partial<Event>) => Promise<void>;
  deleteEvent: (id: string) => Promise<void>;

  teamMembers: TeamMember[];
  addTeamMember: (member: Omit<TeamMember, 'id'>) => Promise<void>;
  updateTeamMember: (id: string, member: Partial<TeamMember>) => Promise<void>;
  deleteTeamMember: (id: string) => Promise<void>;

  contacts: Contact[];
  addContact: (contact: Omit<Contact, 'id' | 'submittedAt'>) => Promise<void>;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

const API_BASE = 'https://ecellback.onrender.com/api'; // Your backend URL

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};

export const DataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [events, setEvents] = useState<Event[]>([]);
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [contacts, setContacts] = useState<Contact[]>([]); // Contact state

  // Fetch initial data once
  useEffect(() => {
    async function fetchData() {
      try {
        const [blogRes, eventRes, teamRes] = await Promise.all([
          axios.get(`${API_BASE}/blogposts`),
          axios.get(`${API_BASE}/events`),
          axios.get(`${API_BASE}/team`),
        ]);

        setBlogPosts(blogRes.data.map((post: any) => ({ ...post, id: post._id })));
        setEvents(eventRes.data.map((event: any) => ({ ...event, id: event._id })));
        setTeamMembers(teamRes.data.map((mem: any) => ({ ...mem, id: mem._id })));
      } catch (error) {
        console.error('Failed to fetch data from API:', error);
      }
    }
    fetchData();
  }, []);

  // Blog CRUD
  const addBlogPost = async (post: Omit<BlogPost, 'id'>) => {
    const res = await axios.post(`${API_BASE}/blogposts`, post);
    setBlogPosts(prev => [{ ...res.data, id: res.data._id }, ...prev]);
  };

  const updateBlogPost = async (id: string, updates: Partial<BlogPost>) => {
    const res = await axios.put(`${API_BASE}/blogposts/${id}`, updates);
    setBlogPosts(prev => prev.map(post => (post.id === id ? { ...res.data, id: res.data._id } : post)));
  };

  const deleteBlogPost = async (id: string) => {
    await axios.delete(`${API_BASE}/blogposts/${id}`);
    setBlogPosts(prev => prev.filter(post => post.id !== id));
  };

  // Event CRUD
  const addEvent = async (event: Omit<Event, 'id'>) => {
    const res = await axios.post(`${API_BASE}/events`, event);
    setEvents(prev => [{ ...res.data, id: res.data._id }, ...prev]);
  };

  const updateEvent = async (id: string, updates: Partial<Event>) => {
    const res = await axios.put(`${API_BASE}/events/${id}`, updates);
    setEvents(prev => prev.map(event => (event.id === id ? { ...res.data, id: res.data._id } : event)));
  };

  const deleteEvent = async (id: string) => {
    await axios.delete(`${API_BASE}/events/${id}`);
    setEvents(prev => prev.filter(event => event.id !== id));
  };

  // Team CRUD
  const addTeamMember = async (member: Omit<TeamMember, 'id'>) => {
    const res = await axios.post(`${API_BASE}/team`, member);
    setTeamMembers(prev => [...prev, { ...res.data, id: res.data._id }]);
  };

  const updateTeamMember = async (id: string, updates: Partial<TeamMember>) => {
    const res = await axios.put(`${API_BASE}/team/${id}`, updates);
    setTeamMembers(prev => prev.map(member => (member.id === id ? { ...res.data, id: res.data._id } : member)));
  };

  const deleteTeamMember = async (id: string) => {
    await axios.delete(`${API_BASE}/team/${id}`);
    setTeamMembers(prev => prev.filter(member => member.id !== id));
  };

  // Contact form add (only add implemented here)
  const addContact = async (contact: Omit<Contact, 'id' | 'submittedAt'>) => {
    const res = await axios.post(`${API_BASE}/contacts`, contact);
    setContacts(prev => [{ ...res.data, id: res.data._id }, ...prev]);
  };

  return (
    <DataContext.Provider
      value={{
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
        deleteTeamMember,
        contacts,
        addContact,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
