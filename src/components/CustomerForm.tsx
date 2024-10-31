import React, { useState } from 'react';
import { User, Mail, Phone, MessageSquare } from 'lucide-react';

type CustomerData = {
  name: string;
  email: string;
  phone: string;
  notes: string;
};

type Props = {
  customerData?: CustomerData;
  onSubmit: (data: CustomerData) => void;
};

export default function CustomerForm({ customerData, onSubmit }: Props) {
  const [formData, setFormData] = useState<CustomerData>(customerData || {
    name: '',
    email: '',
    phone: '',
    notes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-800">Your Details</h2>
      
      <div className="space-y-4">
        <div className="relative">
          <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Full Name"
            required
            value={formData.name}
            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
            className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all"
          />
        </div>

        <div className="relative">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="email"
            placeholder="Email Address"
            required
            value={formData.email}
            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
            className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all"
          />
        </div>

        <div className="relative">
          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="tel"
            placeholder="Phone Number"
            required
            value={formData.phone}
            onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
            className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all"
          />
        </div>

        <div className="relative">
          <MessageSquare className="absolute left-3 top-[1.15rem] w-5 h-5 text-gray-400" />
          <textarea
            placeholder="Additional Notes or Requirements"
            value={formData.notes}
            onChange={(e) => setFormData(prev => ({ ...prev, notes: e.target.value }))}
            className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all min-h-[120px]"
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
      >
        Continue to Payment
      </button>
    </form>
  );
}