import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

export function PaymentCard({ card, onDelete }) {
  const getCardIcon = (type) => {
    switch (type.toLowerCase()) {
      case 'visa':
        return (
          <div className="h-8 w-12 bg-blue-600 rounded flex items-center justify-center text-white font-bold text-xs">
            VISA
          </div>
        );
      case 'mastercard':
        return (
          <div className="h-8 w-12 rounded flex items-center justify-center">
            <div className="relative">
              <div className="absolute w-5 h-5 bg-red-500 rounded-full left-0 opacity-80"></div>
              <div className="absolute w-5 h-5 bg-yellow-400 rounded-full left-2 opacity-80"></div>
            </div>
          </div>
        );
      case 'amex':
        return (
          <div className="h-8 w-12 bg-blue-400 rounded flex items-center justify-center text-white font-bold text-xs">
            AMEX
          </div>
        );
      default:
        return (
          <div className="h-8 w-12 bg-gray-200 rounded flex items-center justify-center text-gray-500 font-bold text-xs">
            CARD
          </div>
        );
    }
  };

  return (
    <Card className="overflow-hidden">
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {getCardIcon(card.type)}
            <div>
              <p className="font-medium">{card.type} •••• {card.last4}</p>
              <p className="text-xs text-muted-foreground">Expires {card.expiry}</p>
            </div>
          </div>
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-8 w-8 text-destructive hover:text-destructive hover:bg-destructive/10"
            onClick={() => onDelete(card.id)}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
