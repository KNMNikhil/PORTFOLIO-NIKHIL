import React, { useState, useEffect } from 'react';

import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/ProjectsNew';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import LoadingScreen from './components/LoadingScreen';
import { NavBarDemo } from './components/NavBarDemo';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="App">
      <NavBarDemo />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Resume />
      <Achievements />
      <Contact />
    </div>
  );
}

export default App;