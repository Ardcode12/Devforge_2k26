import React, { useState } from 'react';
import './App.css';
import Intro from './components/Intro';
import Loading from './components/Loading';
import BackgroundAudio from './components/BackgroundAudio';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Domains from './components/Domains';
import Timeline from './components/Timeline';
import Prizes from './components/Prizes';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  const handleIntroComplete = () => {
    setShowIntro(false);
  };

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {showIntro ? (
        <Intro onComplete={handleIntroComplete} />
      ) : isLoading ? (
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
          <BackgroundAudio />
        </div>
      )}
    </>
  );
}

export default App;

