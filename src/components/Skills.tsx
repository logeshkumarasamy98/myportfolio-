import React from 'react';
import CloudPlatform from './skills/CloudPlatform';
import DevOpsTools from './skills/DevOpsTools';
import Infrastructure from './skills/Infrastructure';
import AutomationTools from './skills/AutomationTools';
import MonitoringTools from './skills/MonitoringTools';
import { motion } from 'framer-motion';

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-white mb-16"
        >
          Technical Skills
        </motion.h2>
        
        <div className="grid grid-cols-1 gap-12">
          <CloudPlatform />
          <DevOpsTools />
          <Infrastructure />
          <MonitoringTools />
          <AutomationTools />
        </div>
      </div>
    </section>
  );
}