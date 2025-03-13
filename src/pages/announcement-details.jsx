import React from 'react';
import { 
  ArrowLeft, 
  Calendar, 
  Share2
} from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

// Sample announcements
const announcements = [
  {
    id: "1",
    title: "New Features Released",
    date: "October 10, 2023",
    content: "We're excited to announce the release of several new features that will enhance your experience with our platform. These include improved monitoring dashboards, enhanced team collaboration tools, and a completely redesigned project creation workflow.\n\nThe new monitoring dashboards provide real-time insights into your server performance, with customizable views and alerts. Team collaboration tools now include shared notes, task assignments, and activity logs to keep everyone on the same page.\n\nOur project creation workflow has been streamlined to make it faster and easier to deploy new servers. You can now select from pre-configured templates or customize every aspect of your server configuration.\n\nThese features are available now to all users. We hope you enjoy them and welcome your feedback!",
    link: "https://example.com/blog/new-features"
  },
  {
    id: "2",
    title: "Scheduled Maintenance",
    date: "October 14, 2023",
    content: "We will be performing scheduled maintenance on our infrastructure on October 15th from 2:00 AM to 4:00 AM UTC. During this time, you may experience brief periods of unavailability. We apologize for any inconvenience this may cause.\n\nThis maintenance is necessary to apply important security updates and performance improvements to our systems. We've scheduled it during a time of typically low usage to minimize disruption.\n\nYour servers will continue to run during this period, but the management dashboard may be intermittently unavailable. Any automated processes, such as backups or scaling, will continue to function normally.\n\nIf you have any concerns or questions about this maintenance, please contact our support team.",
    link: null
  },
  {
    id: "3",
    title: "Security Update",
    date: "October 5, 2023",
    content: "We have applied important security patches to all servers to address recent vulnerabilities. These updates enhance the security of your projects and data. No action is required on your part, but we recommend reviewing your security settings regularly.\n\nThe vulnerabilities addressed were related to the underlying operating system and did not affect any customer data. Our security team proactively monitors for such issues and applies patches as soon as they become available.\n\nAs always, we recommend following security best practices, such as using strong passwords, enabling two-factor authentication, and regularly reviewing access logs for suspicious activity.\n\nIf you have any questions about our security practices or need assistance with securing your projects, please contact our support team.",
    link: "https://example.com/security/updates"
  }
];

export function AnnouncementDetails() {
  const { id } = useParams();
  
  // Find the announcement with the matching ID
  const announcement = announcements.find(a => a.id === id);
  
  if (!announcement) {
    return (
      <div className="p-6">
        <div className="flex items-center gap-2 mb-6">
          <Button variant="ghost" size="sm" asChild>
            <Link to="/support/announcements">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to Announcements
            </Link>
          </Button>
        </div>
        
        <div className="text-center py-12">
          <h1 className="text-2xl font-bold mb-2">Announcement Not Found</h1>
          <p className="text-muted-foreground">The announcement you're looking for doesn't exist or has been removed.</p>
          <Button className="mt-6" asChild>
            <Link to="/support/announcements">View All Announcements</Link>
          </Button>
        </div>
      </div>
    );
  }
  
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center gap-2 mb-6">
        <Button variant="ghost" size="sm" asChild>
          <Link to="/support/announcements">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to Announcements
          </Link>
        </Button>
      </div>
      
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-2xl">{announcement.title}</CardTitle>
            <Button variant="ghost" size="sm" className="flex items-center gap-1">
              <Share2 className="h-4 w-4" />
              <span>Share</span>
            </Button>
          </div>
          <div className="flex items-center text-sm text-muted-foreground mt-2">
            <Calendar className="h-4 w-4 mr-2" />
            <span>{announcement.date}</span>
          </div>
        </CardHeader>
        <CardContent>
          <div className="prose max-w-none">
            {announcement.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-4">{paragraph}</p>
            ))}
            
            {announcement.link && (
              <div className="mt-6">
                <Button variant="outline" asChild>
                  <a href={announcement.link} target="_blank" rel="noopener noreferrer">
                    Learn more
                  </a>
                </Button>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
      
      <div className="flex justify-between items-center">
        <Button variant="outline" asChild>
          <Link to="/support">Back to Support</Link>
        </Button>
        <Button asChild>
          <Link to="/support/contact">Contact Support</Link>
        </Button>
      </div>
    </div>
  );
}
