import React from 'react';
import { motion } from 'framer-motion';
import { GitBranch, Server } from 'lucide-react';

const containerTools = [
  { name: "Docker", icon: "https://www.docker.com/wp-content/uploads/2022/03/vertical-logo-monochromatic.png" },
  { name: "Kubernetes", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Kubernetes_logo_without_workmark.svg/926px-Kubernetes_logo_without_workmark.svg.png" }
];

const cicdTools = [
  { name: "Jenkins", icon: "https://www.jenkins.io/images/logos/jenkins/jenkins.png" },
  { name: "GitHub Actions", icon: "https://github.githubassets.com/images/modules/site/features/actions-icon-actions.svg" },
  { name: "Git", icon: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" }
];

export default function DevOpsTools() {
  return (
    <div className="grid gap-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-lg shadow-xl"
      >
        <div className="flex items-center mb-6">
          <Server className="w-8 h-8 text-blue-400 mr-3" />
          <h3 className="text-2xl font-semibold text-white">Containerization & Orchestration</h3>
        </div>
        
        <div className="grid grid-cols-2 gap-6">
          {containerTools.map((tool) => (
            <motion.div
              key={tool.name}
              whileHover={{ scale: 1.05 }}
              className="bg-slate-600 p-6 rounded-lg flex flex-col items-center"
            >
              <img src={tool.icon} alt={tool.name} className="w-16 h-16 mb-4 object-contain" />
              <span className="text-lg font-medium text-gray-200">{tool.name}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-lg shadow-xl"
      >
        <div className="flex items-center mb-6">
          <GitBranch className="w-8 h-8 text-blue-400 mr-3" />
          <h3 className="text-2xl font-semibold text-white">CI/CD & Version Control</h3>
        </div>
        
        <div className="grid grid-cols-3 gap-4">
          {cicdTools.map((tool) => (
            <motion.div
              key={tool.name}
              whileHover={{ scale: 1.05 }}
              className="bg-slate-600 p-4 rounded-lg flex flex-col items-center"
            >
              <img src={tool.icon} alt={tool.name} className="w-12 h-12 mb-3 object-contain" />
              <span className="text-sm text-center text-gray-200">{tool.name}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}