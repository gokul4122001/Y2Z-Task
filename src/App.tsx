import React from 'react';
import ItineraryPlanner from './components/ItineraryPlanner';
import { ItineraryProvider } from './contexts/ItineraryContext';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <header className="bg-white shadow-sm py-4">
        <div className="container mx-auto px-4">
        
          <h1 className="text-4xl font-serif text-[#FF0080] font-bold tracking-wide">Y2Z TRAVEL</h1>

         
          <p className="text-2xl text-black font-bold font-medium mt-5 ml-10">Itinerary</p>
           <p className="text-xl font-medium mt-1 ml-10" style={{ color: '#8392AB' }}>
  Day
</p>

        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <ItineraryProvider>
          <ItineraryPlanner />
        </ItineraryProvider>
      </main>
      
      <footer className="bg-gray-800 text-white py-6 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p>© 2025 Y2Z Travel Itinerary  | Made with ❤️....</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
