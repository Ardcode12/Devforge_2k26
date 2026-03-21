import React, { useState } from 'react';
import './App.css';
import Loading from './components/Loading';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Domains from './components/Domains';
import Timeline from './components/Timeline';
import Prizes from './components/Prizes';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading ? (
        <Loading onComplete={handleLoadingComplete} />
      ) : (
        <div className="App">
          <Navbar />
          <main>
            <Hero />
            <About />
            <Domains />
            <Timeline />
            <Prizes />
            <FAQ />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
