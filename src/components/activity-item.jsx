import React from 'react';
import { cn } from '@/lib/utils';

export function ActivityItem({ 
  icon, 
  title, 
  description, 
  timestamp, 
  iconColor = "bg-primary" 
}) {
  return (
    <div className="flex gap-4">
      <div className="relative flex-shrink-0">
        <div className={cn("h-8 w-8 rounded-full flex items-center justify-center", iconColor)}>
          {icon}
        </div>
        <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-px h-full bg-border"></div>
      </div>
      <div className="flex-1 pb-8">
        <div className="flex items-center justify-between">
          <h4 className="text-sm font-medium">{title}</h4>
          <span className="text-xs text-muted-foreground">{timestamp}</span>
        </div>
        <p className="text-sm text-muted-foreground mt-1">{description}</p>
      </div>
    </div>
  );
}
