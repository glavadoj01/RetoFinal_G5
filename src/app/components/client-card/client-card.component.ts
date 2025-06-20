import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-client-card',
  templateUrl: './client-card.component.html',
  styleUrls: ['./client-card.component.css'],
})
export class ClientCardComponent {
  @Input() client: Client = {
    id: 1,
    name: 'María Rodríguez',
    email: 'maria.rodriguez@example.com',
    phone: '+1 234 567 890',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    status: 'active',
    tier: 'premium',
    lastPurchase: '2023-10-15',
    totalSpent: 2450.00,
    ordersCount: 12,
    joinDate: '2022-01-15',
    rating: 4.8,
    reviewsCount: 128
  };

  getStatusClass(): string {
    return {
      'active': 'status-active',
      'inactive': 'status-inactive',
      'pending': 'status-pending'
    }[this.client.status] || '';
  }

  getTierBadge(): { text: string, color: string } {
    const tiers = {
      'basic': { text: 'Cliente Básico', color: 'bg-gray-100 text-gray-800' },
      'premium': { text: 'Cliente Premium', color: 'bg-blue-100 text-blue-800' },
      'vip': { text: 'Cliente VIP', color: 'bg-purple-100 text-purple-800' }
    };
    return tiers[this.client.tier] || tiers.basic;
  }

  formatCurrency(amount: number): string {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  }

  formatDate(dateString: string): string {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('es-ES', options);
  }
}

interface Client {
  id: number;
  name: string;
  email: string;
  phone: string;
  avatar: string;
  status: 'active' | 'inactive' | 'pending';
  tier: 'basic' | 'premium' | 'vip';
  lastPurchase: string;
  totalSpent: number;
  ordersCount: number;
  joinDate: string;
  rating: number;
  reviewsCount: number;
}
