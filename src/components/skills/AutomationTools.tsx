import React from 'react';
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';

const automationTools = [
  { 
    name: "Zapier",
    icon: "https://cdn.zapier.com/zapier/images/favicon.ico",
    description: "Workflow automation and integration platform"
  },
  {
    name: "Google Apps Script",
    icon: "https://www.gstatic.com/images/branding/product/2x/apps_script_48dp.png",
    description: "Automation and extension of Google Workspace"
  }
];

export default function AutomationTools() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-lg shadow-xl"
    >
      <div className="flex items-center mb-6">
        <Zap className="w-8 h-8 text-blue-400 mr-3" />
        <h3 className="text-2xl font-semibold text-white">Automation Tools</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {automationTools.map((tool) => (
          <motion.div
            key={tool.name}
            whileHover={{ scale: 1.05 }}
            className="bg-slate-600 p-6 rounded-lg"
          >
            <div className="flex items-center mb-4">
              <img src={tool.icon} alt={tool.name} className="w-12 h-12 object-contain mr-4" />
              <h4 className="text-xl font-medium text-white">{tool.name}</h4>
            </div>
            <p className="text-gray-300">{tool.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}