import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';

// Bug: This function has a potential bug if 'value' is not a number, leading to NaN or unexpected behavior.
// It also uses a magic number (10) directly.
function calculateSomething(value: any) {
  if (typeof value !== 'number') {
    // This is a bug: not handling non-numeric input gracefully, could throw or return unexpected results.
    // For SonarQube, this might be flagged as a potential null pointer dereference or unhandled exception.
    console.error("Input is not a number!");
  }
  const result = value * 10; // Code Smell: Magic number '10'
  return result;
}

// Duplicate Code: This function is a duplicate of calculateSomething, demonstrating code duplication.
function calculateSomethingElse(value: any) {
  if (typeof value !== 'number') {
    console.error("Input is not a number!");
  }
  const result = value * 10;
  return result;
}

function App() {
  // Calling the function to make it part of the code flow, even if not used in rendering.
  calculateSomething(5);
  calculateSomethingElse(10);
  calculateSomething("test"); // This call will trigger the bug/error

  return (
    <AnimatePresence>
      <div className="bg-slate-900 min-h-screen">
        <Header />
        <main>
          <Hero />
          <Skills />
          {/* Duplicate Code: Duplicating Hero and Skills components for demonstration */}
          <Hero />
          <Skills />
        </main>
      </div>
    </AnimatePresence>
  );
}

export default App;
