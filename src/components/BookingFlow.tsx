import React, { useState } from 'react';
import PackageSelection from './PackageSelection';
import DateSelection from './DateSelection';
import CustomerForm from './CustomerForm';
import PaymentSection from './PaymentSection';
import BookingSummary from './BookingSummary';

export type Package = {
  id: string;
  name: string;
  price: number;
  hours: number;
  features: string[];
};

export type BookingData = {
  package?: Package;
  date?: Date;
  extraHours: number;
  customer?: {
    name: string;
    email: string;
    phone: string;
    notes: string;
  };
};

const STEPS = ['Package', 'Date & Time', 'Details', 'Payment', 'Confirmation'];

export default function BookingFlow() {
  const [currentStep, setCurrentStep] = useState(0);
  const [bookingData, setBookingData] = useState<BookingData>({
    extraHours: 0,
  });

  const updateBookingData = (data: Partial<BookingData>) => {
    setBookingData(prev => ({ ...prev, ...data }));
  };

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, STEPS.length - 1));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 0));

  return (
    <div className="max-w-4xl mx-auto">
      {/* Progress Steps */}
      <div className="mb-8">
        <div className="flex justify-between items-center">
          {STEPS.map((step, index) => (
            <React.Fragment key={step}>
              <div className="flex flex-col items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  index <= currentStep ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-600'
                }`}>
                  {index + 1}
                </div>
                <span className="text-sm mt-2">{step}</span>
              </div>
              {index < STEPS.length - 1 && (
                <div className={`flex-1 h-0.5 ${
                  index < currentStep ? 'bg-purple-600' : 'bg-gray-200'
                }`} />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Step Content */}
      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        {currentStep === 0 && (
          <PackageSelection 
            selectedPackage={bookingData.package}
            onSelect={(pkg) => {
              updateBookingData({ package: pkg });
              nextStep();
            }}
          />
        )}
        {currentStep === 1 && (
          <DateSelection
            selectedDate={bookingData.date}
            extraHours={bookingData.extraHours}
            onSelect={(date, extraHours) => {
              updateBookingData({ date, extraHours });
              nextStep();
            }}
          />
        )}
        {currentStep === 2 && (
          <CustomerForm
            customerData={bookingData.customer}
            onSubmit={(customerData) => {
              updateBookingData({ customer: customerData });
              nextStep();
            }}
          />
        )}
        {currentStep === 3 && (
          <PaymentSection
            bookingData={bookingData}
            onSuccess={() => nextStep()}
          />
        )}
        {currentStep === 4 && (
          <BookingSummary bookingData={bookingData} />
        )}
      </div>

      {/* Navigation Buttons */}
      {currentStep < STEPS.length - 1 && currentStep > 0 && (
        <div className="flex justify-between">
          <button
            onClick={prevStep}
            className="px-6 py-2 text-purple-600 border border-purple-600 rounded-lg hover:bg-purple-50 transition-colors"
          >
            Back
          </button>
          <button
            onClick={nextStep}
            className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          >
            Continue
          </button>
        </div>
      )}
    </div>
  );
}