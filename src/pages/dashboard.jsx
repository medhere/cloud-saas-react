import React from 'react';
import { 
  Server, 
  CreditCard, 
  Users, 
  Activity,
  Cpu,
  HardDrive,
  Database,
  AlertTriangle,
  Bell,
  ChevronRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { StatsCard } from '@/components/stats-card';
import { ProjectCard } from '@/components/project-card';
import { ActivityItem } from '@/components/activity-item';
import { AnnouncementCard } from '@/components/announcement-card';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

// Sample data
const projects = [
  {
    id: 1,
    name: "Web API",
    description: "Production REST API for mobile applications",
    status: "running",
    resourceUsage: { cpu: 45, memory: 60, storage: 25 },
    lastDeployed: "Today at 10:30 AM"
  },
  {
    id: 2,
    name: "Database Cluster",
    description: "PostgreSQL database cluster for analytics",
    status: "running",
    resourceUsage: { cpu: 75, memory: 40, storage: 65 },
    lastDeployed: "Yesterday at 3:15 PM"
  },
  {
    id: 3,
    name: "Frontend App",
    description: "React application for customer dashboard",
    status: "stopped",
    resourceUsage: { cpu: 0, memory: 5, storage: 30 },
    lastDeployed: "3 days ago"
  }
];

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
  }
];

export function Dashboard() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back, John! Here's an overview of your projects.</p>
        </div>
        <Button asChild>
          <Link to="/projects/new">Create New Project</Link>
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard 
          title="Active Projects" 
          value="12" 
          description="2 projects added this month" 
          icon={<Server className="h-4 w-4 text-muted-foreground" />}
          trend={{ value: 8, positive: true }}
        />
        <StatsCard 
          title="Monthly Spending" 
          value="$1,234" 
          description="$321 less than last month" 
          icon={<CreditCard className="h-4 w-4 text-muted-foreground" />}
          trend={{ value: 12, positive: false }}
        />
        <StatsCard 
          title="Team Members" 
          value="8" 
          description="2 pending invitations" 
          icon={<Users className="h-4 w-4 text-muted-foreground" />}
        />
        <StatsCard 
          title="Deployments" 
          value="142" 
          description="24 this week" 
          icon={<Activity className="h-4 w-4 text-muted-foreground" />}
          trend={{ value: 18, positive: true }}
        />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {projects.map(project => (
              <Card key={project.id} className="overflow-hidden">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Server className="h-4 w-4 text-muted-foreground" />
                      <CardTitle className="text-sm font-medium">{project.name}</CardTitle>
                    </div>
                    <div className="flex items-center">
                      <div className={`h-2 w-2 rounded-full ${
                        project.status === 'running' ? 'bg-green-500' : 
                        project.status === 'stopped' ? 'bg-amber-500' : 'bg-red-500'
                      } mr-2`}></div>
                      <span className="text-xs capitalize text-muted-foreground">{project.status}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="text-muted-foreground">CPU</span>
                      <span className="font-medium">{project.resourceUsage.cpu}%</span>
                    </div>
                    <div className="h-1 w-full bg-muted rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-primary rounded-full" 
                        style={{ width: `${project.resourceUsage.cpu}%` }}
                      ></div>
                    </div>
                    
                    <div className="flex justify-between text-xs">
                      <span className="text-muted-foreground">Memory</span>
                      <span className="font-medium">{project.resourceUsage.memory}%</span>
                    </div>
                    <div className="h-1 w-full bg-muted rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-primary rounded-full" 
                        style={{ width: `${project.resourceUsage.memory}%` }}
                      ></div>
                    </div>
                    
                    <div className="flex justify-between text-xs">
                      <span className="text-muted-foreground">Storage</span>
                      <span className="font-medium">{project.resourceUsage.storage}%</span>
                    </div>
                    <div className="h-1 w-full bg-muted rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-primary rounded-full" 
                        style={{ width: `${project.resourceUsage.storage}%` }}
                      ></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle>Quick Billing Overview</CardTitle>
                <Button variant="ghost" size="sm" asChild>
                  <Link to="/billing" className="flex items-center">
                    View details <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="border rounded-md p-3">
                  <div className="text-sm text-muted-foreground mb-1">Current Balance</div>
                  <div className="text-2xl font-bold">$2,450.00</div>
                  <div className="text-xs text-muted-foreground mt-1">Next invoice: Oct 15, 2023</div>
                </div>
                <div className="border rounded-md p-3">
                  <div className="text-sm text-muted-foreground mb-1">Monthly Cost</div>
                  <div className="text-2xl font-bold">$1,234.00</div>
                  <div className="text-xs text-green-500 mt-1">$321 less than last month</div>
                </div>
                <div className="border rounded-md p-3">
                  <div className="text-sm text-muted-foreground mb-1">Active Resources</div>
                  <div className="text-2xl font-bold">12 Projects</div>
                  <div className="text-xs text-muted-foreground mt-1">8 running, 4 stopped</div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold">Recent Projects</h2>
              <Button variant="link" asChild>
                <Link to="/projects">View all projects</Link>
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ProjectCard 
                name="Web API"
                description="Production REST API for mobile applications"
                status="running"
                resourceUsage={{ cpu: 45, memory: 60, storage: 25 }}
                lastDeployed="Today at 10:30 AM"
              />
              <ProjectCard 
                name="Database Cluster"
                description="PostgreSQL database cluster for analytics"
                status="running"
                resourceUsage={{ cpu: 75, memory: 40, storage: 65 }}
                lastDeployed="Yesterday at 3:15 PM"
              />
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Announcements</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {announcements.map(announcement => (
                <AnnouncementCard 
                  key={announcement.id} 
                  announcement={announcement} 
                  compact={true} 
                />
              ))}
              <Button variant="outline" size="sm" className="w-full" asChild>
                <Link to="/support/announcements">View all announcements</Link>
              </Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>System Alerts</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-3 bg-amber-50 border border-amber-200 rounded-md">
                  <AlertTriangle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-medium">High CPU Usage</h4>
                    <p className="text-xs text-muted-foreground mt-1">ML Pipeline server is experiencing high CPU load (90%)</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-red-50 border border-red-200 rounded-md">
                  <AlertTriangle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-medium">Service Down</h4>
                    <p className="text-xs text-muted-foreground mt-1">ML Pipeline service is currently unavailable</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative">
                <ActivityItem 
                  icon={<Server className="h-4 w-4 text-white" />}
                  title="Project Created"
                  description="You created a new project 'Web API'"
                  timestamp="Today at 10:30 AM"
                />
                <ActivityItem 
                  icon={<Activity className="h-4 w-4 text-white" />}
                  title="Deployment Successful"
                  description="Web API was deployed to production"
                  timestamp="Today at 10:45 AM"
                  iconColor="bg-green-500"
                />
                <ActivityItem 
                  icon={<Users className="h-4 w-4 text-white" />}
                  title="Team Member Added"
                  description="You invited Sarah Johnson to the team"
                  timestamp="Yesterday at 2:15 PM"
                  iconColor="bg-blue-500"
                />
                <div className="flex justify-center mt-4">
                  <Button variant="link" size="sm" asChild>
                    <Link to="/activity">View all activity</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
