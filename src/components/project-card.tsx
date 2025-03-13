import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Server, ExternalLink, MoreVertical } from 'lucide-react';

interface ProjectCardProps {
  name: string;
  description: string;
  status: 'running' | 'stopped' | 'error';
  resourceUsage: {
    cpu: number;
    memory: number;
    storage: number;
  };
  lastDeployed: string;
}

export function ProjectCard({
  name,
  description,
  status,
  resourceUsage,
  lastDeployed,
}: ProjectCardProps) {
  const statusColors = {
    running: 'bg-green-500',
    stopped: 'bg-amber-500',
    error: 'bg-red-500',
  };

  return (
    <Card className="overflow-hidden">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div className="flex items-center gap-2">
          <Server className="h-5 w-5 text-muted-foreground" />
          <CardTitle className="text-lg font-medium">{name}</CardTitle>
          <div className="flex items-center">
            <div className={`h-2 w-2 rounded-full ${statusColors[status]} mr-2`}></div>
            <span className="text-xs capitalize text-muted-foreground">{status}</span>
          </div>
        </div>
        <Button variant="ghost" size="icon">
          <MoreVertical className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">CPU</span>
            <span className="font-medium">{resourceUsage.cpu}%</span>
          </div>
          <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
            <div 
              className="h-full bg-primary rounded-full" 
              style={{ width: `${resourceUsage.cpu}%` }}
            ></div>
          </div>
          
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Memory</span>
            <span className="font-medium">{resourceUsage.memory}%</span>
          </div>
          <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
            <div 
              className="h-full bg-primary rounded-full" 
              style={{ width: `${resourceUsage.memory}%` }}
            ></div>
          </div>
          
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Storage</span>
            <span className="font-medium">{resourceUsage.storage}%</span>
          </div>
          <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
            <div 
              className="h-full bg-primary rounded-full" 
              style={{ width: `${resourceUsage.storage}%` }}
            ></div>
          </div>
        </div>
        <p className="text-xs text-muted-foreground mt-4">Last deployed: {lastDeployed}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" size="sm">Manage</Button>
        <Button variant="ghost" size="sm" className="flex items-center gap-1">
          <span>Open</span>
          <ExternalLink className="h-3 w-3" />
        </Button>
      </CardFooter>
    </Card>
  );
}
