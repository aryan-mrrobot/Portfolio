import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Blog from './components/Blog';
import Contact from './components/Contact';
import { Terminal } from './components/Terminal';
import Navbar from './components/Navbar';

function App() {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleToggleNavbar = () => setShowNavbar(true);
    const handleHideNavbar = () => setShowNavbar(false);
    
    document.addEventListener('toggleNavbar', handleToggleNavbar);
    document.addEventListener('hideNavbar', handleHideNavbar);
    
    return () => {
      document.removeEventListener('toggleNavbar', handleToggleNavbar);
      document.removeEventListener('hideNavbar', handleHideNavbar);
    };
  }, []);

  return (
    <div className="bg-black min-h-screen">
      {showNavbar && <Navbar />}
      <div className="min-h-screen flex flex-col justify-center">
        <Hero />
        <div className="container mx-auto px-4 py-12 mt-8">
          <Terminal />
        </div>
      </div>
      <About />
      <Blog />
      <Contact />
    </div>
  );
}

export default App;