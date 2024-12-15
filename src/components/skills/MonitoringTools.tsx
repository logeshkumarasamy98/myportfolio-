import React from 'react';
import { motion } from 'framer-motion';
import { LineChart } from 'lucide-react';

const monitoringTools = [
  {
    name: "Prometheus",
    icon: "https://raw.githubusercontent.com/cncf/artwork/master/projects/prometheus/icon/color/prometheus-icon-color.svg",
    description: "Open-source monitoring and alerting toolkit"
  },
  {
    name: "Grafana",
    icon: "https://grafana.com/static/img/menu/grafana2.svg",
    description: "Multi-platform analytics and interactive visualization"
  }
];

export default function MonitoringTools() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-lg shadow-xl"
    >
      <div className="flex items-center mb-6">
        <LineChart className="w-8 h-8 text-blue-400 mr-3" />
        <h3 className="text-2xl font-semibold text-white">Monitoring Tools</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {monitoringTools.map((tool) => (
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