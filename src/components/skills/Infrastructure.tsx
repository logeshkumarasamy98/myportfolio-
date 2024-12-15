import React from 'react';
import { motion } from 'framer-motion';
import { Code, Terminal } from 'lucide-react';

const infrastructureTools = [
  { 
    name: "Terraform",
    icon: "https://static-00.iconduck.com/assets.00/terraform-icon-1803x2048-hodrzd3t.png",
    description: "Infrastructure as Code tool"
  },
  { 
    name: "Ansible",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Ansible_logo.svg/800px-Ansible_logo.svg.png",
    description: "Automation platform"
  }
];

const operatingSystems = [
  {
    name: "Linux",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg"
  },
  {
    name: "Windows",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/windows8/windows8-original.svg"
  },
  {
    name: "Mac OS",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/apple/apple-original.svg"
  }
];

export default function Infrastructure() {
  return (
    <div className="grid gap-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-lg shadow-xl"
      >
        <div className="flex items-center mb-6">
          <Code className="w-8 h-8 text-blue-400 mr-3" />
          <h3 className="text-2xl font-semibold text-white">Infrastructure as Code</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {infrastructureTools.map((tool) => (
            <motion.div
              key={tool.name}
              whileHover={{ scale: 1.05 }}
              className="bg-slate-600 p-6 rounded-lg"
            >
              <div className="flex items-center mb-4">
                <img src={tool.icon} alt={tool.name} className="w-12 h-12 object-contain mr-4 invert" />
                <div>
                  <h4 className="text-xl font-medium text-white">{tool.name}</h4>
                  <p className="text-gray-300 text-sm">{tool.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-lg shadow-xl"
      >
        <div className="flex items-center mb-6">
          <Terminal className="w-8 h-8 text-blue-400 mr-3" />
          <h3 className="text-2xl font-semibold text-white">Operating Systems</h3>
        </div>
        
        <div className="grid grid-cols-3 gap-6">
          {operatingSystems.map((os) => (
            <motion.div
              key={os.name}
              whileHover={{ scale: 1.05 }}
              className="bg-slate-600 p-6 rounded-lg flex flex-col items-center"
            >
              <img src={os.icon} alt={os.name} className="w-16 h-16 mb-4 object-contain" />
              <span className="text-lg font-medium text-gray-200">{os.name}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}