import React from 'react';
import { CheckCircle, Calendar, Package2, Clock, User } from 'lucide-react';
import type { BookingData } from './BookingFlow';

type Props = {
  bookingData: BookingData;
};

export default function BookingSummary({ bookingData }: Props) {
  return (
    <div className="text-center space-y-8">
      <div className="flex justify-center">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Booking Confirmed!</h2>
        <p className="text-gray-600">
          Thank you for your booking. We've sent a confirmation email to {bookingData.customer?.email}
        </p>
      </div>

      <div className="bg-gray-50 rounded-lg p-6 text-left space-y-4">
        <h3 className="text-xl font-semibold text-gray-800">Booking Details</h3>
        
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <Package2 className="w-5 h-5 text-purple-600" />
            <span className="text-gray-700">{bookingData.package?.name}</span>
          </div>
          
          <div className="flex items-center gap-3">
            <Calendar className="w-5 h-5 text-purple-600" />
            <span className="text-gray-700">
              {bookingData.date?.toLocaleDateString()}
            </span>
          </div>
          
          <div className="flex items-center gap-3">
            <Clock className="w-5 h-5 text-purple-600" />
            <span className="text-gray-700">
              {8 + (bookingData.extraHours || 0)} hours total
              {bookingData.extraHours ? ` (${bookingData.extraHours} extra)` : ''}
            </span>
          </div>
          
          <div className="flex items-center gap-3">
            <User className="w-5 h-5 text-purple-600" />
            <span className="text-gray-700">{bookingData.customer?.name}</span>
          </div>
        </div>
      </div>

      <div className="pt-4">
        <p className="text-sm text-gray-600">
          Need to make changes? Contact us at support@leddancefloors.com
        </p>
      </div>
    </div>
  );
}