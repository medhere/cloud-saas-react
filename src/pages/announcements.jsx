import React from 'react';
import { 
  ArrowLeft, 
  Bell, 
  Search,
  Calendar
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
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
  },
  {
    id: 5,
    title: "API Version 2.0 Released",
    date: "1 month ago",
    excerpt: "Our new API version includes performance improvements and new endpoints.",
    content: "We're excited to announce the release of API version 2.0, which includes significant performance improvements and new endpoints for managing your projects programmatically. The previous version will remain supported for the next 6 months to allow time for migration."
  },
  {
    id: 6,
    title: "New Documentation Portal",
    date: "1 month ago",
    excerpt: "We've launched a new documentation portal with improved search and examples.",
    content: "We've launched a completely redesigned documentation portal with improved search functionality, interactive examples, and comprehensive guides. The new portal makes it easier to find the information you need to get the most out of our platform."
  }
];

export function Announcements() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center gap-2 mb-6">
        <Button variant="ghost" size="sm" asChild>
          <Link to="/support">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to Support
          </Link>
        </Button>
      </div>
      
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Announcements</h1>
          <p className="text-muted-foreground">Stay updated with the latest news and updates</p>
        </div>
      </div>
      
      <div className="flex items-center justify-between">
        <div className="relative w-full max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search announcements..."
            className="w-full pl-10 pr-4 py-2 text-sm rounded-md border border-input bg-background"
          />
        </div>
        
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span>Filter by Date</span>
          </Button>
        </div>
      </div>
      
      <div className="space-y-6">
        {announcements.map(announcement => (
          <AnnouncementCard 
            key={announcement.id} 
            announcement={announcement} 
          />
        ))}
      </div>
    </div>
  );
}
