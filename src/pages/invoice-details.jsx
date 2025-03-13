import React from 'react';
import { 
  ArrowLeft, 
  Download, 
  CreditCard, 
  Calendar, 
  CheckCircle2, 
  XCircle
} from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';

export function InvoiceDetails() {
  const { id } = useParams();
  
  // In a real app, you would fetch the invoice details based on the ID
  const invoice = {
    id: id,
    number: `INV-${id.padStart(6, '0')}`,
    description: 'Pro Plan - Monthly',
    date: 'September 15, 2023',
    dueDate: 'September 15, 2023',
    status: 'Paid',
    amount: 99.00,
    items: [
      { description: 'Pro Plan Subscription', quantity: 1, unitPrice: 99.00, amount: 99.00 }
    ],
    subtotal: 99.00,
    tax: 0.00,
    total: 99.00,
    paymentMethod: 'Visa ending in 4242'
  };
  
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center gap-2 mb-6">
        <Button variant="ghost" size="sm" asChild>
          <Link to="/billing">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to Billing
          </Link>
        </Button>
      </div>
      
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Invoice #{invoice.number}</h1>
          <p className="text-muted-foreground">
            {invoice.status === 'Paid' ? (
              <span className="flex items-center text-green-500">
                <CheckCircle2 className="h-4 w-4 mr-1" />
                Paid on {invoice.date}
              </span>
            ) : (
              <span className="flex items-center text-amber-500">
                <Calendar className="h-4 w-4 mr-1" />
                Due on {invoice.dueDate}
              </span>
            )}
          </p>
        </div>
        <Button className="flex items-center gap-2">
          <Download className="h-4 w-4" />
          <span>Download PDF</span>
        </Button>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Invoice Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground">Invoice Date</h3>
                    <p className="mt-1">{invoice.date}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground">Due Date</h3>
                    <p className="mt-1">{invoice.dueDate}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground">Invoice Number</h3>
                    <p className="mt-1">{invoice.number}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground">Status</h3>
                    <p className="mt-1 flex items-center">
                      {invoice.status === 'Paid' ? (
                        <span className="flex items-center text-green-500">
                          <CheckCircle2 className="h-4 w-4 mr-1" />
                          Paid
                        </span>
                      ) : (
                        <span className="flex items-center text-amber-500">
                          <Calendar className="h-4 w-4 mr-1" />
                          Pending
                        </span>
                      )}
                    </p>
                  </div>
                </div>
                
                <div className="border-t pt-6">
                  <h3 className="text-sm font-medium mb-4">Invoice Items</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-2 text-sm font-medium text-muted-foreground">Description</th>
                          <th className="text-center py-2 text-sm font-medium text-muted-foreground">Quantity</th>
                          <th className="text-right py-2 text-sm font-medium text-muted-foreground">Unit Price</th>
                          <th className="text-right py-2 text-sm font-medium text-muted-foreground">Amount</th>
                        </tr>
                      </thead>
                      <tbody>
                        {invoice.items.map((item, index) => (
                          <tr key={index} className="border-b">
                            <td className="py-3">{item.description}</td>
                            <td className="py-3 text-center">{item.quantity}</td>
                            <td className="py-3 text-right">${item.unitPrice.toFixed(2)}</td>
                            <td className="py-3 text-right">${item.amount.toFixed(2)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                
                <div className="border-t pt-6">
                  <div className="flex justify-between mb-2">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>${invoice.subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-muted-foreground">Tax</span>
                    <span>${invoice.tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span>${invoice.total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Payment Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">Payment Method</h3>
                  <p className="mt-1 flex items-center">
                    <CreditCard className="h-4 w-4 mr-2 text-muted-foreground" />
                    {invoice.paymentMethod}
                  </p>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">Payment Status</h3>
                  <p className="mt-1 flex items-center">
                    {invoice.status === 'Paid' ? (
                      <span className="flex items-center text-green-500">
                        <CheckCircle2 className="h-4 w-4 mr-1" />
                        Paid on {invoice.date}
                      </span>
                    ) : (
                      <span className="flex items-center text-amber-500">
                        <Calendar className="h-4 w-4 mr-1" />
                        Due on {invoice.dueDate}
                      </span>
                    )}
                  </p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col space-y-2">
              {invoice.status !== 'Paid' && (
                <Button className="w-full">Pay Now</Button>
              )}
              <Button variant="outline" className="w-full">Contact Support</Button>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button variant="outline" className="w-full flex items-center justify-center gap-2">
                <Download className="h-4 w-4" />
                <span>Download PDF</span>
              </Button>
              
              {invoice.status !== 'Paid' && (
                <Button variant="outline" className="w-full flex items-center justify-center gap-2 text-destructive hover:text-destructive">
                  <XCircle className="h-4 w-4" />
                  <span>Cancel Invoice</span>
                </Button>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
