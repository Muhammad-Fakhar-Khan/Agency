import React from 'react';
import Navbar from './components/Layout/Navbar';
import CustomCursor from './components/Layout/CustomCursor';
import Hero from './components/Sections/Hero';
import Services from './components/Sections/Services';
import Portfolio from './components/Sections/Portfolio';
import Contact from './components/Sections/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white transition-colors duration-300 selection:bg-primary/30 selection:text-primary-900">
      <CustomCursor />
      <Navbar />

      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Contact />
      </main>

      <footer className="py-8 text-center text-sm text-gray-500 dark:text-gray-400 border-t border-gray-100 dark:border-gray-900">
        <p>© {new Date().getFullYear()} Agency AI. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
