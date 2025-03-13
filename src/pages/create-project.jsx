import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  Server, 
  Cpu, 
  HardDrive, 
  Database, 
  Gauge, 
  CreditCard,
  Check
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { PaymentCard } from '@/components/payment-card';

// Sample payment methods
const paymentMethods = [
  { id: 1, type: 'Visa', last4: '4242', expiry: '12/2025' },
  { id: 2, type: 'Mastercard', last4: '5555', expiry: '10/2024' },
  { id: 3, type: 'Amex', last4: '0001', expiry: '08/2026' }
];

// Pricing configuration
const pricing = {
  basePriceCPU: 10, // per CPU core
  basePriceRAM: 5,  // per GB
  basePriceDisk: 0.1, // per GB
  basePriceNetwork: 20, // per 1 Gbps
  currencies: {
    USD: { symbol: '$', rate: 1 },
    EUR: { symbol: '€', rate: 0.92 },
    GBP: { symbol: '£', rate: 0.82 },
  }
};

export function CreateProject() {
  const [projectSpecs, setProjectSpecs] = useState({
    slug: '',
    cpu: 2,
    ram: 4,
    disk: 100,
    network: 1,
  });
  
  const [currency, setCurrency] = useState('USD');
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
  const [showNewCard, setShowNewCard] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  
  // Calculate total price whenever specs or currency changes
  useEffect(() => {
    const cpuCost = projectSpecs.cpu * pricing.basePriceCPU;
    const ramCost = projectSpecs.ram * pricing.basePriceRAM;
    const diskCost = projectSpecs.disk * pricing.basePriceDisk;
    const networkCost = projectSpecs.network * pricing.basePriceNetwork;
    
    const total = (cpuCost + ramCost + diskCost + networkCost) * pricing.currencies[currency].rate;
    setTotalPrice(total.toFixed(2));
  }, [projectSpecs, currency]);
  
  const handleSpecChange = (spec, value) => {
    setProjectSpecs(prev => ({
      ...prev,
      [spec]: value
    }));
  };
  
  const handleCurrencyChange = (e) => {
    setCurrency(e.target.value);
  };
  
  const handlePaymentMethodSelect = (id) => {
    setSelectedPaymentMethod(id);
    setShowNewCard(false);
  };
  
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center gap-2 mb-6">
        <Button variant="ghost" size="sm" asChild>
          <Link to="/projects">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to Projects
          </Link>
        </Button>
      </div>
      
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Create New Project</h1>
        <p className="text-muted-foreground">Configure your server specifications and deployment options</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Project Details</CardTitle>
              <CardDescription>Enter basic information about your project</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium block mb-1">Project Name</label>
                <input 
                  type="text" 
                  placeholder="my-awesome-project" 
                  className="w-full px-3 py-2 border rounded-md"
                  value={projectSpecs.slug}
                  onChange={(e) => handleSpecChange('slug', e.target.value)}
                />
                <p className="text-xs text-muted-foreground mt-1">
                  This will be used as the project identifier and hostname
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Server Specifications</CardTitle>
              <CardDescription>Configure the resources for your server</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Cpu className="h-4 w-4 text-muted-foreground" />
                    <label className="text-sm font-medium">CPU Cores</label>
                  </div>
                  <span className="text-sm font-medium">{projectSpecs.cpu} Cores</span>
                </div>
                <input 
                  type="range" 
                  min="1" 
                  max="16" 
                  step="1" 
                  value={projectSpecs.cpu}
                  onChange={(e) => handleSpecChange('cpu', parseInt(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>1 Core</span>
                  <span>16 Cores</span>
                </div>
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Server className="h-4 w-4 text-muted-foreground" />
                    <label className="text-sm font-medium">Memory (RAM)</label>
                  </div>
                  <span className="text-sm font-medium">{projectSpecs.ram} GB</span>
                </div>
                <input 
                  type="range" 
                  min="1" 
                  max="64" 
                  step="1" 
                  value={projectSpecs.ram}
                  onChange={(e) => handleSpecChange('ram', parseInt(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>1 GB</span>
                  <span>64 GB</span>
                </div>
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <HardDrive className="h-4 w-4 text-muted-foreground" />
                    <label className="text-sm font-medium">Disk Space</label>
                  </div>
                  <span className="text-sm font-medium">{projectSpecs.disk} GB</span>
                </div>
                <input 
                  type="range" 
                  min="10" 
                  max="1000" 
                  step="10" 
                  value={projectSpecs.disk}
                  onChange={(e) => handleSpecChange('disk', parseInt(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>10 GB</span>
                  <span>1000 GB</span>
                </div>
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Gauge className="h-4 w-4 text-muted-foreground" />
                    <label className="text-sm font-medium">Network Speed</label>
                  </div>
                  <span className="text-sm font-medium">{projectSpecs.network} Gbps</span>
                </div>
                <input 
                  type="range" 
                  min="1" 
                  max="10" 
                  step="1" 
                  value={projectSpecs.network}
                  onChange={(e) => handleSpecChange('network', parseInt(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>1 Gbps</span>
                  <span>10 Gbps</span>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Payment Method</CardTitle>
              <CardDescription>Select a payment method for this project</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                {paymentMethods.map(method => (
                  <div 
                    key={method.id} 
                    className={`border rounded-lg p-4 cursor-pointer transition-colors ${selectedPaymentMethod === method.id ? 'border-primary bg-primary/5' : 'hover:border-primary/50'}`}
                    onClick={() => handlePaymentMethodSelect(method.id)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        {method.type === 'Visa' && (
                          <div className="h-8 w-12 bg-blue-600 rounded flex items-center justify-center text-white font-bold text-xs">
                            VISA
                          </div>
                        )}
                        {method.type === 'Mastercard' && (
                          <div className="h-8 w-12 rounded flex items-center justify-center">
                            <div className="relative">
                              <div className="absolute w-5 h-5 bg-red-500 rounded-full left-0 opacity-80"></div>
                              <div className="absolute w-5 h-5 bg-yellow-400 rounded-full left-2 opacity-80"></div>
                            </div>
                          </div>
                        )}
                        {method.type === 'Amex' && (
                          <div className="h-8 w-12 bg-blue-400 rounded flex items-center justify-center text-white font-bold text-xs">
                            AMEX
                          </div>
                        )}
                        <div>
                          <p className="font-medium">{method.type} •••• {method.last4}</p>
                          <p className="text-xs text-muted-foreground">Expires {method.expiry}</p>
                        </div>
                      </div>
                      {selectedPaymentMethod === method.id && (
                        <Check className="h-5 w-5 text-primary" />
                      )}
                    </div>
                  </div>
                ))}
                
                <div 
                  className={`border rounded-lg p-4 cursor-pointer transition-colors ${showNewCard ? 'border-primary bg-primary/5' : 'hover:border-primary/50'}`}
                  onClick={() => {
                    setShowNewCard(true);
                    setSelectedPaymentMethod(null);
                  }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-12 bg-muted rounded flex items-center justify-center">
                        <CreditCard className="h-5 w-5 text-muted-foreground" />
                      </div>
                      <div>
                        <p className="font-medium">Add new payment method</p>
                        <p className="text-xs text-muted-foreground">Enter your card details</p>
                      </div>
                    </div>
                    {showNewCard && (
                      <Check className="h-5 w-5 text-primary" />
                    )}
                  </div>
                </div>
                
                {showNewCard && (
                  <div className="border rounded-lg p-4 mt-3 space-y-4">
                    <div>
                      <label className="text-sm font-medium block mb-1">Card Number</label>
                      <input 
                        type="text" 
                        placeholder="1234 5678 9012 3456" 
                        className="w-full px-3 py-2 border rounded-md"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium block mb-1">Expiry Date</label>
                        <input 
                          type="text" 
                          placeholder="MM/YY" 
                          className="w-full px-3 py-2 border rounded-md"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium block mb-1">CVC</label>
                        <input 
                          type="text" 
                          placeholder="123" 
                          className="w-full px-3 py-2 border rounded-md"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium block mb-1">Cardholder Name</label>
                      <input 
                        type="text" 
                        placeholder="John Doe" 
                        className="w-full px-3 py-2 border rounded-md"
                      />
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div>
          <div className="sticky top-6 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm">CPU ({projectSpecs.cpu} Cores)</span>
                  <span className="font-medium">
                    {pricing.currencies[currency].symbol}{(projectSpecs.cpu * pricing.basePriceCPU * pricing.currencies[currency].rate).toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">RAM ({projectSpecs.ram} GB)</span>
                  <span className="font-medium">
                    {pricing.currencies[currency].symbol}{(projectSpecs.ram * pricing.basePriceRAM * pricing.currencies[currency].rate).toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Disk ({projectSpecs.disk} GB)</span>
                  <span className="font-medium">
                    {pricing.currencies[currency].symbol}{(projectSpecs.disk * pricing.basePriceDisk * pricing.currencies[currency].rate).toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Network ({projectSpecs.network} Gbps)</span>
                  <span className="font-medium">
                    {pricing.currencies[currency].symbol}{(projectSpecs.network * pricing.basePriceNetwork * pricing.currencies[currency].rate).toFixed(2)}
                  </span>
                </div>
                <div className="border-t pt-4 mt-4">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Total Monthly Cost</span>
                    <div className="flex items-center gap-2">
                      <select 
                        value={currency} 
                        onChange={handleCurrencyChange}
                        className="border rounded px-2 py-1 text-sm"
                      >
                        {Object.keys(pricing.currencies).map(curr => (
                          <option key={curr} value={curr}>{curr}</option>
                        ))}
                      </select>
                      <span className="text-xl font-bold">
                        {pricing.currencies[currency].symbol}{totalPrice}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full" size="lg" disabled={!projectSpecs.slug || (!selectedPaymentMethod && !showNewCard)}>
                  Create Project
                </Button>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Need Help?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  If you need assistance with selecting the right configuration for your workload, our support team is here to help.
                </p>
                <Button variant="outline" className="w-full mt-4">Contact Support</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
