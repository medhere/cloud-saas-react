import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronRight, Bell } from 'lucide-react';
import { Link } from 'react-router-dom';

export function AnnouncementCard({ announcement, compact = false }) {
  if (compact) {
    return (
      <Card className="overflow-hidden">
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Bell className="h-4 w-4 text-primary" />
              <CardTitle className="text-sm font-medium">{announcement.title}</CardTitle>
            </div>
            <span className="text-xs text-muted-foreground">{announcement.date}</span>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground line-clamp-2">{announcement.excerpt}</p>
          <Link to={`/support/announcements/${announcement.id}`}>
            <Button variant="link" size="sm" className="px-0 mt-1">
              Read more <ChevronRight className="h-3 w-3 ml-1" />
            </Button>
          </Link>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl">{announcement.title}</CardTitle>
          <span className="text-sm text-muted-foreground">{announcement.date}</span>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4">{announcement.content}</p>
        {announcement.link && (
          <Button variant="outline" size="sm" asChild>
            <a href={announcement.link} target="_blank" rel="noopener noreferrer">
              Learn more
            </a>
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
