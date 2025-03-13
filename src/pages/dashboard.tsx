import React from 'react';
import { 
  Server, 
  CreditCard, 
  Users, 
  Activity,
  Cpu,
  HardDrive,
  Database,
  AlertTriangle
} from 'lucide-react';
import { StatsCard } from '@/components/stats-card';
import { ProjectCard } from '@/components/project-card';
import { ActivityItem } from '@/components/activity-item';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';

export function Dashboard() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back, John! Here's an overview of your projects.</p>
        </div>
        <Button>Create New Project</Button>
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
          <Card>
            <CardHeader>
              <CardTitle>Resource Usage</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="cpu">
                <TabsList className="grid grid-cols-3 mb-4">
                  <TabsTrigger value="cpu">CPU</TabsTrigger>
                  <TabsTrigger value="memory">Memory</TabsTrigger>
                  <TabsTrigger value="storage">Storage</TabsTrigger>
                </TabsList>
                <TabsContent value="cpu" className="h-[300px] flex items-center justify-center border rounded-md">
                  <div className="text-center">
                    <Cpu className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">CPU usage chart would be displayed here</p>
                  </div>
                </TabsContent>
                <TabsContent value="memory" className="h-[300px] flex items-center justify-center border rounded-md">
                  <div className="text-center">
                    <HardDrive className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">Memory usage chart would be displayed here</p>
                  </div>
                </TabsContent>
                <TabsContent value="storage" className="h-[300px] flex items-center justify-center border rounded-md">
                  <div className="text-center">
                    <Database className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">Storage usage chart would be displayed here</p>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
          
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold">Recent Projects</h2>
              <Button variant="link">View all projects</Button>
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
              <ProjectCard 
                name="Frontend App"
                description="React application for customer dashboard"
                status="stopped"
                resourceUsage={{ cpu: 0, memory: 5, storage: 30 }}
                lastDeployed="3 days ago"
              />
              <ProjectCard 
                name="ML Pipeline"
                description="Machine learning data processing pipeline"
                status="error"
                resourceUsage={{ cpu: 90, memory: 85, storage: 45 }}
                lastDeployed="1 week ago"
              />
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
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
                <div className="flex items-start gap-3 p-3 bg-amber-50 border border-amber-200 rounded-md">
                  <AlertTriangle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-medium">Storage Warning</h4>
                    <p className="text-xs text-muted-foreground mt-1">Database Cluster is approaching storage limit (65%)</p>
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
                <ActivityItem 
                  icon={<AlertTriangle className="h-4 w-4 text-white" />}
                  title="Service Alert"
                  description="ML Pipeline service went down"
                  timestamp="2 days ago"
                  iconColor="bg-red-500"
                />
                <div className="flex justify-center mt-4">
                  <Button variant="link" size="sm">View all activity</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
