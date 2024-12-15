import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="about" className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white pt-20">
      <div className="container mx-auto px-6 py-20">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-8">
            Hi, I'm <span className="text-blue-400">Logesh</span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            A passionate IT professional specializing in Cloud Computing, DevOps, and Automation with expertise in tools like Google Cloud Platform (GCP), Docker, Kubernetes, Jenkins, and Terraform. Skilled in designing scalable infrastructure, implementing CI/CD pipelines, and automating workflows using Bash scripting and JavaScript.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center"
        >
          <img 
            src="https://i.imgur.com/x3bK9lg.png" 
            alt="Profile"
            className="rounded-full w-64 h-64 object-cover border-4 border-blue-400 shadow-xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
