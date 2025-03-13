import React from 'react';
import { 
  HelpCircle, 
  MessageSquare, 
  FileText, 
  Bell, 
  ChevronRight,
  Search
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { AnnouncementCard } from '@/components/announcement-card';

// Sample announcements
const announcements = [
  {
    id: 1,
    title: "New Features Released",
    date: "Today",
    excerpt: "We've just released new features including improved monitoring and team collaboration tools.",
    content: "We're excited to announce the release of several new features that will enhance your experience with our platform. These include improved monitoring dashboards, enhanced team collaboration tools, and a completely redesigned project creation workflow."
  },
  {
    id: 2,
    title: "Scheduled Maintenance",
    date: "Tomorrow",
    excerpt: "Scheduled maintenance will occur on October 15th from 2:00 AM to 4:00 AM UTC.",
    content: "We will be performing scheduled maintenance on our infrastructure on October 15th from 2:00 AM to 4:00 AM UTC. During this time, you may experience brief periods of unavailability. We apologize for any inconvenience this may cause."
  },
  {
    id: 3,
    title: "Security Update",
    date: "Last week",
    excerpt: "Important security patches have been applied to all servers to address recent vulnerabilities.",
    content: "We have applied important security patches to all servers to address recent vulnerabilities. These updates enhance the security of your projects and data. No action is required on your part, but we recommend reviewing your security settings regularly."
  },
  {
    id: 4,
    title: "New Region Available",
    date: "2 weeks ago",
    excerpt: "We've expanded our infrastructure to include a new region in Asia Pacific.",
    content: "We're pleased to announce that we've expanded our infrastructure to include a new region in Asia Pacific. This new region offers lower latency for users in Asia and provides additional redundancy for your global applications."
  }
];

export function Support() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Support</h1>
          <p className="text-muted-foreground">Get help with your projects and account</p>
        </div>
        <Button>Contact Support</Button>
      </div>
      
      <div className="relative w-full max-w-md mx-auto mb-8">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search help articles..."
          className="w-full pl-10 pr-4 py-2 text-sm rounded-md border border-input bg-background"
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="hover:border-primary cursor-pointer transition-colors">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5 text-primary" />
              <span>Contact Us</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Get in touch with our support team for personalized assistance with your account or projects.
            </p>
          </CardContent>
          <CardFooter>
            <Button variant="link" className="flex items-center gap-1 p-0">
              <span>Open a ticket</span>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
        
        <Card className="hover:border-primary cursor-pointer transition-colors">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-primary" />
              <span>Documentation</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Browse our comprehensive documentation to learn how to use our platform effectively.
            </p>
          </CardContent>
          <CardFooter>
            <Button variant="link" className="flex items-center gap-1 p-0">
              <span>View docs</span>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
        
        <Card className="hover:border-primary cursor-pointer transition-colors">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <HelpCircle className="h-5 w-5 text-primary" />
              <span>FAQs</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Find answers to commonly asked questions about our services, billing, and technical issues.
            </p>
          </CardContent>
          <CardFooter>
            <Button variant="link" className="flex items-center gap-1 p-0">
              <span>View FAQs</span>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
      </div>
      
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">Announcements</h2>
          <Button variant="link" asChild>
            <Link to="/support/announcements">View all announcements</Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {announcements.slice(0, 4).map(announcement => (
            <AnnouncementCard 
              key={announcement.id} 
              announcement={announcement} 
              compact={true} 
            />
          ))}
        </div>
      </div>
    </div>
  );
}
