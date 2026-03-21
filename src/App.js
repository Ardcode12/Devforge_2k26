import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Domains from './components/Domains';
import Timeline from './components/Timeline';
import Prizes from './components/Prizes';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
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
  );
}

export default App;
