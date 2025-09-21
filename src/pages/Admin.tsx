import React, { useState } from 'react';
import { useData } from '@/contexts/DataContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { PlusCircle, Edit2, Trash2, Calendar, Users, FileText, Home } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

const Admin = () => {
  const { 
    blogPosts, addBlogPost, updateBlogPost, deleteBlogPost,
    events, addEvent, updateEvent, deleteEvent,
    teamMembers, addTeamMember, updateTeamMember, deleteTeamMember
  } = useData();
  
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('blog');

  // Blog form state
  const [blogForm, setBlogForm] = useState({
    title: '',
    content: '',
    excerpt: '',
    author: '',
    image: '',
    tags: ''
  });

  // Event form state
  const [eventForm, setEventForm] = useState({
    title: '',
    description: '',
    date: '',
    time: '',
    location: '',
    image: '',
    category: '',
    registrationOpen: true
  });

  // Team form state
  const [teamForm, setTeamForm] = useState({
    name: '',
    role: '',
    image: '',
    bio: '',
    linkedin: '',
    twitter: '',
    email: ''
  });

  const [editingItem, setEditingItem] = useState<any>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleBlogSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const blogData = {
      ...blogForm,
      date: new Date().toISOString().split('T')[0],
      tags: blogForm.tags.split(',').map(tag => tag.trim())
    };

    if (editingItem) {
      updateBlogPost(editingItem.id, blogData);
      toast({ title: "Blog post updated successfully!" });
    } else {
      addBlogPost(blogData);
      toast({ title: "Blog post created successfully!" });
    }
    
    setBlogForm({ title: '', content: '', excerpt: '', author: '', image: '', tags: '' });
    setEditingItem(null);
    setDialogOpen(false);
  };

  const handleEventSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingItem) {
      updateEvent(editingItem.id, eventForm);
      toast({ title: "Event updated successfully!" });
    } else {
      addEvent(eventForm);
      toast({ title: "Event created successfully!" });
    }
    
    setEventForm({ title: '', description: '', date: '', time: '', location: '', image: '', category: '', registrationOpen: true });
    setEditingItem(null);
    setDialogOpen(false);
  };

  const handleTeamSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingItem) {
      updateTeamMember(editingItem.id, teamForm);
      toast({ title: "Team member updated successfully!" });
    } else {
      addTeamMember(teamForm);
      toast({ title: "Team member added successfully!" });
    }
    
    setTeamForm({ name: '', role: '', image: '', bio: '', linkedin: '', twitter: '', email: '' });
    setEditingItem(null);
    setDialogOpen(false);
  };

  const handleEdit = (item: any, type: string) => {
    setEditingItem(item);
    if (type === 'blog') {
      setBlogForm({
        title: item.title,
        content: item.content,
        excerpt: item.excerpt,
        author: item.author,
        image: item.image,
        tags: item.tags.join(', ')
      });
    } else if (type === 'event') {
      setEventForm(item);
    } else if (type === 'team') {
      setTeamForm(item);
    }
    setDialogOpen(true);
  };

  const handleDelete = (id: string, type: string) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      if (type === 'blog') {
        deleteBlogPost(id);
        toast({ title: "Blog post deleted successfully!" });
      } else if (type === 'event') {
        deleteEvent(id);
        toast({ title: "Event deleted successfully!" });
      } else if (type === 'team') {
        deleteTeamMember(id);
        toast({ title: "Team member removed successfully!" });
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <div className="container mx-auto p-6">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div className="animate-fade-in">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              E-Cell Admin Dashboard
            </h1>
            <p className="text-muted-foreground mt-2">Manage your website content with ease</p>
          </div>
          <Link to="/">
            <Button variant="outline" className="gap-2 hover:scale-105 transition-transform duration-200">
              <Home className="w-4 h-4" />
              Back to Website
            </Button>
          </Link>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="hover:scale-105 transition-transform duration-200 animate-slide-in-left bg-gradient-to-br from-card to-primary/5">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Blog Posts</CardTitle>
              <FileText className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">{blogPosts.length}</div>
            </CardContent>
          </Card>
          
          <Card className="hover:scale-105 transition-transform duration-200 animate-fade-in bg-gradient-to-br from-card to-accent/5">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Events</CardTitle>
              <Calendar className="h-4 w-4 text-accent" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-accent">{events.length}</div>
            </CardContent>
          </Card>
          
          <Card className="hover:scale-105 transition-transform duration-200 animate-slide-in-right bg-gradient-to-br from-card to-secondary/5">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Team Members</CardTitle>
              <Users className="h-4 w-4 text-secondary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-secondary">{teamMembers.length}</div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 bg-card/50 backdrop-blur-sm">
            <TabsTrigger value="blog" className="data-[state=active]:bg-primary/20">Blog Posts</TabsTrigger>
            <TabsTrigger value="events" className="data-[state=active]:bg-accent/20">Events</TabsTrigger>
            <TabsTrigger value="team" className="data-[state=active]:bg-secondary/20">Team</TabsTrigger>
          </TabsList>

          {/* Blog Management */}
          <TabsContent value="blog" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Manage Blog Posts</h2>
              <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                <DialogTrigger asChild>
                  <Button className="gap-2 hover:scale-105 transition-transform duration-200 animate-glow-pulse">
                    <PlusCircle className="w-4 h-4" />
                    Add New Post
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>{editingItem ? 'Edit' : 'Create'} Blog Post</DialogTitle>
                  </DialogHeader>
                  <form onSubmit={handleBlogSubmit} className="space-y-4">
                    <Input
                      placeholder="Post Title"
                      value={blogForm.title}
                      onChange={(e) => setBlogForm({ ...blogForm, title: e.target.value })}
                      required
                    />
                    <Input
                      placeholder="Author Name"
                      value={blogForm.author}
                      onChange={(e) => setBlogForm({ ...blogForm, author: e.target.value })}
                      required
                    />
                    <Input
                      placeholder="Image URL"
                      value={blogForm.image}
                      onChange={(e) => setBlogForm({ ...blogForm, image: e.target.value })}
                      required
                    />
                    <Textarea
                      placeholder="Excerpt (Brief description)"
                      value={blogForm.excerpt}
                      onChange={(e) => setBlogForm({ ...blogForm, excerpt: e.target.value })}
                      required
                    />
                    <Textarea
                      placeholder="Full Content"
                      value={blogForm.content}
                      onChange={(e) => setBlogForm({ ...blogForm, content: e.target.value })}
                      rows={6}
                      required
                    />
                    <Input
                      placeholder="Tags (comma separated)"
                      value={blogForm.tags}
                      onChange={(e) => setBlogForm({ ...blogForm, tags: e.target.value })}
                    />
                    <div className="flex gap-2 pt-4">
                      <Button type="submit" className="hover:scale-105 transition-transform duration-200">
                        {editingItem ? 'Update' : 'Create'} Post
                      </Button>
                      <Button type="button" variant="outline" onClick={() => {
                        setDialogOpen(false);
                        setEditingItem(null);
                        setBlogForm({ title: '', content: '', excerpt: '', author: '', image: '', tags: '' });
                      }}>
                        Cancel
                      </Button>
                    </div>
                  </form>
                </DialogContent>
              </Dialog>
            </div>

            <div className="grid gap-4">
              {blogPosts.map((post, index) => (
                <Card key={post.id} className="hover:scale-[1.02] transition-all duration-200 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>{post.title}</CardTitle>
                        <CardDescription>By {post.author} • {post.date}</CardDescription>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" onClick={() => handleEdit(post, 'blog')}>
                          <Edit2 className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="destructive" onClick={() => handleDelete(post.id, 'blog')}>
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-3">{post.excerpt}</p>
                    <div className="flex gap-2 flex-wrap">
                      {post.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary">{tag}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Events Management */}
          <TabsContent value="events" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Manage Events</h2>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="gap-2 hover:scale-105 transition-transform duration-200 animate-glow-pulse">
                    <PlusCircle className="w-4 h-4" />
                    Add New Event
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle>{editingItem ? 'Edit' : 'Create'} Event</DialogTitle>
                  </DialogHeader>
                  <form onSubmit={handleEventSubmit} className="space-y-4">
                    <Input
                      placeholder="Event Title"
                      value={eventForm.title}
                      onChange={(e) => setEventForm({ ...eventForm, title: e.target.value })}
                      required
                    />
                    <Textarea
                      placeholder="Event Description"
                      value={eventForm.description}
                      onChange={(e) => setEventForm({ ...eventForm, description: e.target.value })}
                      required
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <Input
                        type="date"
                        value={eventForm.date}
                        onChange={(e) => setEventForm({ ...eventForm, date: e.target.value })}
                        required
                      />
                      <Input
                        type="time"
                        value={eventForm.time}
                        onChange={(e) => setEventForm({ ...eventForm, time: e.target.value })}
                        required
                      />
                    </div>
                    <Input
                      placeholder="Location"
                      value={eventForm.location}
                      onChange={(e) => setEventForm({ ...eventForm, location: e.target.value })}
                      required
                    />
                    <Input
                      placeholder="Category"
                      value={eventForm.category}
                      onChange={(e) => setEventForm({ ...eventForm, category: e.target.value })}
                      required
                    />
                    <Input
                      placeholder="Image URL"
                      value={eventForm.image}
                      onChange={(e) => setEventForm({ ...eventForm, image: e.target.value })}
                      required
                    />
                    <div className="flex gap-2 pt-4">
                      <Button type="submit" className="hover:scale-105 transition-transform duration-200">
                        {editingItem ? 'Update' : 'Create'} Event
                      </Button>
                    </div>
                  </form>
                </DialogContent>
              </Dialog>
            </div>

            <div className="grid gap-4">
              {events.map((event, index) => (
                <Card key={event.id} className="hover:scale-[1.02] transition-all duration-200 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>{event.title}</CardTitle>
                        <CardDescription>{event.date} at {event.time} • {event.location}</CardDescription>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" onClick={() => handleEdit(event, 'event')}>
                          <Edit2 className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="destructive" onClick={() => handleDelete(event.id, 'event')}>
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-3">{event.description}</p>
                    <Badge variant={event.registrationOpen ? "default" : "secondary"}>
                      {event.registrationOpen ? 'Registration Open' : 'Registration Closed'}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Team Management */}
          <TabsContent value="team" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Manage Team</h2>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="gap-2 hover:scale-105 transition-transform duration-200 animate-glow-pulse">
                    <PlusCircle className="w-4 h-4" />
                    Add Team Member
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle>{editingItem ? 'Edit' : 'Add'} Team Member</DialogTitle>
                  </DialogHeader>
                  <form onSubmit={handleTeamSubmit} className="space-y-4">
                    <Input
                      placeholder="Full Name"
                      value={teamForm.name}
                      onChange={(e) => setTeamForm({ ...teamForm, name: e.target.value })}
                      required
                    />
                    <Input
                      placeholder="Role/Position"
                      value={teamForm.role}
                      onChange={(e) => setTeamForm({ ...teamForm, role: e.target.value })}
                      required
                    />
                    <Input
                      placeholder="Profile Image URL"
                      value={teamForm.image}
                      onChange={(e) => setTeamForm({ ...teamForm, image: e.target.value })}
                      required
                    />
                    <Textarea
                      placeholder="Bio"
                      value={teamForm.bio}
                      onChange={(e) => setTeamForm({ ...teamForm, bio: e.target.value })}
                      required
                    />
                    <Input
                      placeholder="LinkedIn URL"
                      value={teamForm.linkedin}
                      onChange={(e) => setTeamForm({ ...teamForm, linkedin: e.target.value })}
                    />
                    <Input
                      placeholder="Twitter URL"
                      value={teamForm.twitter}
                      onChange={(e) => setTeamForm({ ...teamForm, twitter: e.target.value })}
                    />
                    <Input
                      placeholder="Email"
                      type="email"
                      value={teamForm.email}
                      onChange={(e) => setTeamForm({ ...teamForm, email: e.target.value })}
                      required
                    />
                    <div className="flex gap-2 pt-4">
                      <Button type="submit" className="hover:scale-105 transition-transform duration-200">
                        {editingItem ? 'Update' : 'Add'} Member
                      </Button>
                    </div>
                  </form>
                </DialogContent>
              </Dialog>
            </div>

            <div className="grid gap-4">
              {teamMembers.map((member, index) => (
                <Card key={member.id} className="hover:scale-[1.02] transition-all duration-200 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div className="flex gap-4">
                        <img 
                          src={member.image} 
                          alt={member.name}
                          className="w-16 h-16 rounded-full object-cover"
                        />
                        <div>
                          <CardTitle>{member.name}</CardTitle>
                          <CardDescription>{member.role}</CardDescription>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" onClick={() => handleEdit(member, 'team')}>
                          <Edit2 className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="destructive" onClick={() => handleDelete(member.id, 'team')}>
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;