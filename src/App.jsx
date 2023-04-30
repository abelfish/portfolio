import React from 'react';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Carousel from './components/TechCarousel';
import Resume from './components/Resume';

function App() {
 
  return (
    <div className="App">
      <Header />
      <Portfolio />
      <Carousel />
      <Resume />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
