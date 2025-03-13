import React, { useState } from 'react';
import { 
  CreditCard, 
  Download, 
  ChevronRight, 
  CheckCircle2, 
  Wallet,
  X,
  Plus
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { StatsCard } from '@/components/stats-card';
import { PaymentCard } from '@/components/payment-card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';

// Sample payment methods
const paymentMethods = [
  { id: 1, type: 'Visa', last4: '4242', expiry: '12/2025' },
  { id: 2, type: 'Mastercard', last4: '5555', expiry: '10/2024' },
  { id: 3, type: 'Amex', last4: '0001', expiry: '08/2026' }
];

// Sample invoices
const invoices = [
  { id: 1, description: 'Pro Plan - Monthly', date: 'Sep 15, 2023', amount: 99.00 },
  { id: 2, description: 'Pro Plan - Monthly', date: 'Aug 15, 2023', amount: 99.00 },
  { id: 3, description: 'Pro Plan - Monthly', date: 'Jul 15, 2023', amount: 99.00 },
  { id: 4, description: 'Pro Plan - Monthly', date: 'Jun 15, 2023', amount: 99.00 }
];

export function Billing() {
  const [showDepositDialog, setShowDepositDialog] = useState(false);
  const [depositAmount, setDepositAmount] = useState('100');
  const [selectedCard, setSelectedCard] = useState(1);
  
  const handleDeleteCard = (id) => {
    console.log(`Delete card with ID: ${id}`);
    // In a real app, you would call an API to delete the card
  };
  
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
          title="Active Projects" 
          value="12" 
          description="2 projects added this month" 
          icon={<CheckCircle2 className="h-4 w-4 text-muted-foreground" />}
        />
        <StatsCard 
          title="Team Members" 
          value="8" 
          description="2 pending invitations" 
          icon={<CheckCircle2 className="h-4 w-4 text-muted-foreground" />}
        />
        <StatsCard 
          title="Support Hours" 
          value="10" 
          description="5 hours used this month" 
          icon={<CheckCircle2 className="h-4 w-4 text-muted-foreground" />}
        />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Wallet Balance</CardTitle>
              <CardDescription>Your current balance and deposit options</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between p-4 border rounded-lg bg-muted/30">
                <div>
                  <div className="text-sm text-muted-foreground">Current Balance</div>
                  <div className="text-3xl font-bold mt-1">$2,450.00</div>
                </div>
                <Button onClick={() => setShowDepositDialog(true)}>
                  Add Funds
                </Button>
              </div>
              
              <div className="mt-4 space-y-2">
                <h3 className="text-sm font-medium">Recent Transactions</h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-center p-3 border-b">
                    <div>
                      <p className="font-medium">Deposit</p>
                      <p className="text-xs text-muted-foreground">Sep 10, 2023</p>
                    </div>
                    <span className="text-green-500 font-medium">+$500.00</span>
                  </div>
                  <div className="flex justify-between items-center p-3 border-b">
                    <div>
                      <p className="font-medium">Project: Web API</p>
                      <p className="text-xs text-muted-foreground">Sep 5, 2023</p>
                    </div>
                    <span className="text-red-500 font-medium">-$45.00</span>
                  </div>
                  <div className="flex justify-between items-center p-3">
                    <div>
                      <p className="font-medium">Project: Database Cluster</p>
                      <p className="text-xs text-muted-foreground">Sep 1, 2023</p>
                    </div>
                    <span className="text-red-500 font-medium">-$75.00</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Payment Methods</CardTitle>
              <CardDescription>Manage your payment methods</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {paymentMethods.map(card => (
                  <PaymentCard 
                    key={card.id} 
                    card={card} 
                    onDelete={handleDeleteCard} 
                  />
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Billing History</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {invoices.map(invoice => (
                <Link key={invoice.id} to={`/billing/invoices/${invoice.id}`}>
                  <div className="border-b pb-4 hover:bg-muted/20 p-2 rounded-md transition-colors">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">{invoice.description}</p>
                        <p className="text-sm text-muted-foreground">{invoice.date}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">${invoice.amount.toFixed(2)}</p>
                        <Button variant="ghost" size="sm" className="flex items-center gap-1 h-7">
                          <Download className="h-3 w-3" />
                          <span className="text-xs">PDF</span>
                        </Button>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </CardContent>
            <CardFooter>
              <Button variant="link" className="mx-auto flex items-center gap-1" asChild>
                <Link to="/billing/invoices">
                  <span>View all invoices</span>
                  <ChevronRight className="h-4 w-4" />
                </Link>
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
      
      {/* Deposit Dialog */}
      <Dialog open={showDepositDialog} onOpenChange={setShowDepositDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add Funds to Wallet</DialogTitle>
            <DialogDescription>
              Deposit funds to your account wallet to pay for your projects and services.
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4 py-4">
            <div>
              <label className="text-sm font-medium block mb-2">Amount to Deposit</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">$</span>
                <input 
                  type="text" 
                  value={depositAmount}
                  onChange={(e) => setDepositAmount(e.target.value)}
                  className="w-full pl-8 pr-4 py-2 border rounded-md"
                />
              </div>
            </div>
            
            <div>
              <label className="text-sm font-medium block mb-2">Select Payment Method</label>
              <div className="space-y-3">
                {paymentMethods.map(card => (
                  <div 
                    key={card.id}
                    className={`border rounded-lg p-3 cursor-pointer transition-colors ${selectedCard === card.id ? 'border-primary bg-primary/5' : 'hover:border-primary/50'}`}
                    onClick={() => setSelectedCard(card.id)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        {card.type === 'Visa' && (
                          <div className="h-8 w-12 bg-blue-600 rounded flex items-center justify-center text-white font-bold text-xs">
                            VISA
                          </div>
                        )}
                        {card.type === 'Mastercard' && (
                          <div className="h-8 w-12 rounded flex items-center justify-center">
                            <div className="relative">
                              <div className="absolute w-5 h-5 bg-red-500 rounded-full left-0 opacity-80"></div>
                              <div className="absolute w-5 h-5 bg-yellow-400 rounded-full left-2 opacity-80"></div>
                            </div>
                          </div>
                        )}
                        {card.type === 'Amex' && (
                          <div className="h-8 w-12 bg-blue-400 rounded flex items-center justify-center text-white font-bold text-xs">
                            AMEX
                          </div>
                        )}
                        <div>
                          <p className="font-medium">{card.type} •••• {card.last4}</p>
                          <p className="text-xs text-muted-foreground">Expires {card.expiry}</p>
                        </div>
                      </div>
                      {selectedCard === card.id && (
                        <CheckCircle2 className="h-5 w-5 text-primary" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowDepositDialog(false)}>
              Cancel
            </Button>
            <Button onClick={() => {
              console.log(`Depositing $${depositAmount} using card ID: ${selectedCard}`);
              setShowDepositDialog(false);
              // In a real app, you would call an API to process the deposit
            }}>
              Deposit ${depositAmount}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
