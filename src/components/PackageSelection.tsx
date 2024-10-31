import React from 'react';
import { Package2, Music, Clock, Users, Sparkles } from 'lucide-react';
import type { Package } from './BookingFlow';

const PACKAGES: Package[] = [
  {
    id: 'standard',
    name: 'Standard Package',
    price: 999,
    hours: 8,
    features: [
      '16x16 LED Dance Floor',
      'Professional Installation',
      'Basic Pattern Library',
      'RGB Color Selection',
      'Technical Support',
    ],
  },
  {
    id: 'premium',
    name: 'Premium Package',
    price: 1499,
    hours: 8,
    features: [
      '20x20 LED Dance Floor',
      'Professional Installation',
      'Extended Pattern Library',
      'Custom Color Themes',
      'DMX Controller Integration',
      'Dedicated Event Support',
      'Custom Logo Display',
    ],
  },
];

type Props = {
  selectedPackage?: Package;
  onSelect: (pkg: Package) => void;
};

export default function PackageSelection({ selectedPackage, onSelect }: Props) {
  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Select Your Package</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {PACKAGES.map((pkg) => (
          <div
            key={pkg.id}
            className={`relative p-6 rounded-xl border-2 transition-all cursor-pointer hover:shadow-lg ${
              selectedPackage?.id === pkg.id
                ? 'border-purple-600 bg-purple-50'
                : 'border-gray-200 hover:border-purple-300'
            }`}
            onClick={() => onSelect(pkg)}
          >
            {selectedPackage?.id === pkg.id && (
              <div className="absolute -top-3 -right-3">
                <Sparkles className="w-6 h-6 text-purple-600" />
              </div>
            )}
            
            <div className="flex items-center gap-3 mb-4">
              <Package2 className="w-6 h-6 text-purple-600" />
              <h3 className="text-xl font-semibold">{pkg.name}</h3>
            </div>
            
            <div className="mb-4">
              <span className="text-3xl font-bold text-gray-800">${pkg.price}</span>
              <span className="text-gray-600"> / event</span>
            </div>

            <div className="space-y-3">
              {pkg.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2 text-gray-600">
                  <div className="w-5 h-5 rounded-full bg-purple-100 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-purple-600" />
                  </div>
                  {feature}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}