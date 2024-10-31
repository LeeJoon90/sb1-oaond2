import React from 'react';
import { CreditCard, Shield } from 'lucide-react';
import type { BookingData } from './BookingFlow';

type Props = {
  bookingData: BookingData;
  onSuccess: () => void;
};

export default function PaymentSection({ bookingData, onSuccess }: Props) {
  const basePrice = bookingData.package?.price || 0;
  const extraHoursPrice = (bookingData.extraHours || 0) * 150;
  const total = basePrice + extraHoursPrice;

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-gray-800">Payment Details</h2>

      {/* Order Summary */}
      <div className="bg-gray-50 p-6 rounded-lg space-y-4">
        <h3 className="text-xl font-semibold text-gray-800">Order Summary</h3>
        
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-gray-600">{bookingData.package?.name}</span>
            <span className="font-semibold">${basePrice}</span>
          </div>
          
          {bookingData.extraHours > 0 && (
            <div className="flex justify-between">
              <span className="text-gray-600">
                Extra Hours ({bookingData.extraHours} × $150)
              </span>
              <span className="font-semibold">${extraHoursPrice}</span>
            </div>
          )}
          
          <div className="pt-2 border-t border-gray-200">
            <div className="flex justify-between text-lg font-bold">
              <span>Total</span>
              <span>${total}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Form */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-lg font-semibold text-gray-700">
          <CreditCard className="w-5 h-5 text-purple-600" />
          <span>Card Information</span>
        </div>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Card Number"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all"
          />
          
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="MM/YY"
              className="px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all"
            />
            <input
              type="text"
              placeholder="CVC"
              className="px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all"
            />
          </div>
        </div>

        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Shield className="w-4 h-4" />
          <span>Your payment information is secure and encrypted</span>
        </div>
      </div>

      <button
        onClick={onSuccess}
        className="w-full py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
      >
        Pay ${total} and Confirm Booking
      </button>
    </div>
  );
}