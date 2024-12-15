import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';

function App() {
  return (
    <AnimatePresence>
      <div className="bg-slate-900 min-h-screen">
        <Header />
        <main>
          <Hero />
          <Skills />
        </main>
      </div>
    </AnimatePresence>
  );
}

export default App;