import React from 'react';
import Hero from './components/Hero';
import Problems from './components/Problems';
import Description from './components/Description';
import UseCases from './components/UseCases';
import CaseStudies from './components/CaseStudies';
import DataSource from './components/DataSource';
import SupportedGenres from './components/SupportedGenres';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Hero />
      <Problems />
      <Description />
      <UseCases />
      <CaseStudies />
      <DataSource />
      <SupportedGenres />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;