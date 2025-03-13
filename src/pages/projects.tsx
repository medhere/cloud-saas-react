import React from 'react';
import { 
  Server, 
  Plus, 
  Search, 
  Filter, 
  ArrowUpDown,
  MoreVertical,
  ExternalLink,
  Play,
  Square,
  Trash2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ProjectCard } from '@/components/project-card';

const projects = [
  {
    id: 1,
    name: "Web API",
    description: "Production REST API for mobile applications",
    status: "running",
    resourceUsage: { cpu: 45, memory: 60, storage: 25 },
    lastDeployed: "Today at 10:30 AM",
    environment: "Production",
    region: "US East"
  },
  {
    id: 2,
    name: "Database Cluster",
    description: "PostgreSQL database cluster for analytics",
    status: "running",
    resourceUsage: { cpu: 75, memory: 40, storage: 65 },
    lastDeployed: "Yesterday at 3:15 PM",
    environment: "Production",
    region: "US West"
  },
  {
    id: 3,
    name: "Frontend App",
    description: "React application for customer dashboard",
    status: "stopped",
    resourceUsage: { cpu: 0, memory: 5, storage: 30 },
    lastDeployed: "3 days ago",
    environment: "Staging",
    region: "EU West"
  },
  {
    id: 4,
    name: "ML Pipeline",
    description: "Machine learning data processing pipeline",
    status: "error",
    resourceUsage: { cpu: 90, memory: 85, storage: 45 },
    lastDeployed: "1 week ago",
    environment: "Development",
    region: "US East"
  },
  {
    id: 5,
    name: "Auth Service",
    description: "Authentication and authorization service",
    status: "running",
    resourceUsage: { cpu: 30, memory: 45, storage: 15 },
    lastDeployed: "2 days ago",
    environment: "Production",
    region: "Asia Pacific"
  },
  {
    id: 6,
    name: "Message Queue",
    description: "RabbitMQ instance for async processing",
    status: "running",
    resourceUsage: { cpu: 55, memory: 70, storage: 40 },
    lastDeployed: "5 days ago",
    environment: "Production",
    region: "US East"
  }
];

export function Projects() {
  const [view, setView] = React.useState<'grid' | 'list'>('grid');
  
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
          <p className="text-muted-foreground">Manage your server projects and deployments</p>
        </div>
        <Button className="flex items-center gap-2">
          <Plus className="h-4 w-4" />
          <span>Create Project</span>
        </Button>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Project Templates</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border rounded-lg p-4 hover:border-primary cursor-pointer transition-colors">
              <Server className="h-8 w-8 text-primary mb-2" />
              <h3 className="font-medium">Web Server</h3>
              <p className="text-sm text-muted-foreground mt-1">Deploy a Nginx or Apache web server</p>
            </div>
            <div className="border rounded-lg p-4 hover:border-primary cursor-pointer transition-colors">
              <Server className="h-8 w-8 text-primary mb-2" />
              <h3 className="font-medium">Database</h3>
              <p className="text-sm text-muted-foreground mt-1">MySQL, PostgreSQL, or MongoDB</p>
            </div>
            <div className="border rounded-lg p-4 hover:border-primary cursor-pointer transition-colors">
              <Server className="h-8 w-8 text-primary mb-2" />
              <h3 className="font-medium">Full Stack</h3>
              <p className="text-sm text-muted-foreground mt-1">MERN, LAMP, or custom stack</p>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="relative w-full md:w-64">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search projects..."
            className="w-full pl-10 pr-4 py-2 text-sm rounded-md border border-input bg-background"
          />
        </div>
        
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="flex items-center gap-2">
            <Filter className="h-4 w-4" />
            <span>Filter</span>
          </Button>
          <Button variant="outline" size="sm" className="flex items-center gap-2">
            <ArrowUpDown className="h-4 w-4" />
            <span>Sort</span>
          </Button>
          <div className="border rounded-md p-1 flex">
            <Button 
              variant={view === 'grid' ? 'default' : 'ghost'} 
              size="sm" 
              className="h-8 w-8 p-0"
              onClick={() => setView('grid')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="7" height="7" />
                <rect x="14" y="3" width="7" height="7" />
                <rect x="3" y="14" width="7" height="7" />
                <rect x="14" y="14" width="7" height="7" />
              </svg>
            </Button>
            <Button 
              variant={view === 'list' ? 'default' : 'ghost'} 
              size="sm" 
              className="h-8 w-8 p-0"
              onClick={() => setView('list')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
      
      {view === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project) => (
            <ProjectCard 
              key={project.id}
              name={project.name}
              description={project.description}
              status={project.status as any}
              resourceUsage={project.resourceUsage}
              lastDeployed={project.lastDeployed}
            />
          ))}
        </div>
      ) : (
        <div className="border rounded-lg overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-muted/50">
                <th className="text-left p-3 text-sm font-medium text-muted-foreground">Name</th>
                <th className="text-left p-3 text-sm font-medium text-muted-foreground">Status</th>
                <th className="text-left p-3 text-sm font-medium text-muted-foreground">Environment</th>
                <th className="text-left p-3 text-sm font-medium text-muted-foreground">Region</th>
                <th className="text-left p-3 text-sm font-medium text-muted-foreground">Last Deployed</th>
                <th className="text-right p-3 text-sm font-medium text-muted-foreground">Actions</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project) => {
                const statusColors = {
                  running: 'bg-green-500',
                  stopped: 'bg-amber-500',
                  error: 'bg-red-500',
                };
                
                return (
                  <tr key={project.id} className="border-t">
                    <td className="p-3">
                      <div className="flex items-center gap-2">
                        <Server className="h-4 w-4 text-muted-foreground" />
                        <div>
                          <p className="font-medium">{project.name}</p>
                          <p className="text-xs text-muted-foreground">{project.description}</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-3">
                      <div className="flex items-center gap-2">
                        <div className={`h-2 w-2 rounded-full ${statusColors[project.status as keyof typeof statusColors]}`}></div>
                        <span className="text-sm capitalize">{project.status}</span>
                      </div>
                    </td>
                    <td className="p-3 text-sm">{project.environment}</td>
                    <td className="p-3 text-sm">{project.region}</td>
                    <td className="p-3 text-sm">{project.lastDeployed}</td>
                    <td className="p-3 text-right">
                      <div className="flex items-center justify-end gap-2">
                        {project.status === 'running' ? (
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <Square className="h-4 w-4" />
                          </Button>
                        ) : (
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <Play className="h-4 w-4" />
                          </Button>
                        )}
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
