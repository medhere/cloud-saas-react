import React from 'react';
import { 
  CreditCard, 
  Download, 
  ChevronRight, 
  CheckCircle2, 
  PlusCircle,
  ArrowUpRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { StatsCard } from '@/components/stats-card';

export function Billing() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Billing</h1>
          <p className="text-muted-foreground">Manage your subscription and payment methods</p>
        </div>
        <Button variant="outline" className="flex items-center gap-2">
          <Download className="h-4 w-4" />
          <span>Download Invoices</span>
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatsCard 
          title="Current Plan" 
          value="Pro" 
          description="$99/month, billed monthly" 
          icon={<CheckCircle2 className="h-4 w-4 text-muted-foreground" />}
        />
        <StatsCard 
          title="Next Billing Date" 
          value="Oct 15, 2023" 
          description="Your card will be charged $99" 
          icon={<CreditCard className="h-4 w-4 text-muted-foreground" />}
        />
        <StatsCard 
          title="Payment Method" 
          value="•••• 4242" 
          description="Visa, expires 12/2025" 
          icon={<CreditCard className="h-4 w-4 text-muted-foreground" />}
        />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Subscription Plans</CardTitle>
              <CardDescription>Choose the plan that best fits your needs</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="border rounded-lg p-4 bg-muted/30">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-medium">Pro Plan</h3>
                      <span className="bg-primary/10 text-primary text-xs px-2 py-0.5 rounded-full">Current</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">Perfect for small teams and growing businesses</p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        <span>Up to 10 projects</span>
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        <span>5 team members</span>
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        <span>Advanced monitoring</span>
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        <span>Email support</span>
                      </li>
                    </ul>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold">$99</div>
                    <div className="text-sm text-muted-foreground">per month</div>
                    <Button className="mt-4" disabled>Current Plan</Button>
                  </div>
                </div>
              </div>
              
              <div className="border rounded-lg p-4 hover:border-primary transition-colors">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-medium">Enterprise Plan</h3>
                    <p className="text-sm text-muted-foreground mt-1">For large organizations with advanced needs</p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        <span>Unlimited projects</span>
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        <span>Unlimited team members</span>
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        <span>Advanced security features</span>
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        <span>24/7 priority support</span>
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        <span>Custom integrations</span>
                      </li>
                    </ul>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold">$299</div>
                    <div className="text-sm text-muted-foreground">per month</div>
                    <Button className="mt-4" variant="outline">Upgrade</Button>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="link" className="flex items-center gap-1">
                <span>Contact sales for custom pricing</span>
                <ArrowUpRight className="h-3 w-3" />
              </Button>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Payment Methods</CardTitle>
              <CardDescription>Manage your payment methods</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 border rounded-lg bg-muted/30">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-16 bg-muted rounded flex items-center justify-center">
                    <CreditCard className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="font-medium">Visa ending in 4242</p>
                    <p className="text-sm text-muted-foreground">Expires 12/2025</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full mr-4">Default</span>
                  <Button variant="ghost" size="sm">Edit</Button>
                </div>
              </div>
              
              <Button variant="outline" className="w-full flex items-center justify-center gap-2">
                <PlusCircle className="h-4 w-4" />
                <span>Add Payment Method</span>
              </Button>
            </CardContent>
          </Card>
        </div>
        
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Billing History</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="border-b pb-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Pro Plan - Monthly</p>
                    <p className="text-sm text-muted-foreground">Sep 15, 2023</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">$99.00</p>
                    <Button variant="ghost" size="sm" className="flex items-center gap-1 h-7">
                      <Download className="h-3 w-3" />
                      <span className="text-xs">PDF</span>
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="border-b pb-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Pro Plan - Monthly</p>
                    <p className="text-sm text-muted-foreground">Aug 15, 2023</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">$99.00</p>
                    <Button variant="ghost" size="sm" className="flex items-center gap-1 h-7">
                      <Download className="h-3 w-3" />
                      <span className="text-xs">PDF</span>
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="border-b pb-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Pro Plan - Monthly</p>
                    <p className="text-sm text-muted-foreground">Jul 15, 2023</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">$99.00</p>
                    <Button variant="ghost" size="sm" className="flex items-center gap-1 h-7">
                      <Download className="h-3 w-3" />
                      <span className="text-xs">PDF</span>
                    </Button>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Pro Plan - Monthly</p>
                    <p className="text-sm text-muted-foreground">Jun 15, 2023</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">$99.00</p>
                    <Button variant="ghost" size="sm" className="flex items-center gap-1 h-7">
                      <Download className="h-3 w-3" />
                      <span className="text-xs">PDF</span>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="link" className="mx-auto flex items-center gap-1">
                <span>View all invoices</span>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Need Help?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                If you have any questions about your billing or subscription, our support team is here to help.
              </p>
              <Button variant="outline" className="w-full">Contact Support</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
