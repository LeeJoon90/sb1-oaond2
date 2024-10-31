import React from 'react';
import { Calendar, Package2, Clock, CreditCard, CheckCircle } from 'lucide-react';
import BookingFlow from './components/BookingFlow';
import Header from './components/Header';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <BookingFlow />
      </main>
    </div>
  );
}

export default App;