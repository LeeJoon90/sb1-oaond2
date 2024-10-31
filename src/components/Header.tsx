import React from 'react';
import { Sparkles } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white/80 backdrop-blur-sm border-b border-purple-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Sparkles className="w-8 h-8 text-purple-600" />
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 text-transparent bg-clip-text">
            LED Dance Floor Rentals
          </h1>
        </div>
        <nav>
          <ul className="flex gap-6">
            <li>
              <a href="#packages" className="text-gray-600 hover:text-purple-600 transition-colors">
                Packages
              </a>
            </li>
            <li>
              <a href="#book-now" className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                Book Now
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}