import React from 'react';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';

function App() {
  const unusedVariable = "This variable is intentionally unused to trigger a SonarQube warning.";

  // Another intentional bug: empty if statement
  if (true) {
    // This block is intentionally left empty
  }

  // Another intentional bug: hardcoded sensitive information (example)
  const apiKey = "YOUR_HARDCODED_API_KEY_HERE"; // SonarQube might flag this as a security hotspot

  // Another intentional bug: function declared but not used
  const unusedFunction = () => {
    console.log("This function is never called.");
  };

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
