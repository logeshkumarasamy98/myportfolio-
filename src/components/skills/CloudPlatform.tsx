import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, Network, Server, Lock, Database, Code2 } from 'lucide-react';

const gcpServices = [
  { 
    name: "Cloud Run",
    description: "Serverless container platform",
    Icon: Server,
    color: "text-green-400"
  },
  { 
    name: "Compute Engine",
    description: "Virtual machines",
    Icon: Server,
    color: "text-yellow-400"
  },
  { 
    name: "Cloud Storage",
    description: "Object storage service",
    Icon: Database,
    color: "text-blue-400"
  },
  { 
    name: "Cloud Functions",
    description: "Serverless functions",
    Icon: Code2,
    color: "text-purple-400"
  },
  { 
    name: "IAM",
    description: "Identity and Access Management",
    Icon: Lock,
    color: "text-red-400"
  }
];

const networkingServices = [
  { 
    name: "Load Balancers",
    description: "Global and regional load distribution",
    Icon: Network
  },
  { 
    name: "VPC Networks",
    description: "Software-defined networking",
    Icon: Cloud
  },
  { 
    name: "Cloud CDN",
    description: "Content delivery network",
    Icon: Network
  },
  { 
    name: "Cloud DNS",
    description: "Domain name system",
    Icon: Network
  }
];

// Extracted card components for better reusability
const ServiceCard = ({ name, description, Icon, color }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-slate-600 p-6 rounded-lg"
  >
    <div className="flex items-center mb-3">
      <Icon className={`w-6 h-6 ${color || 'text-blue-400'} mr-3`} />
      <h5 className="text-lg font-medium text-white">{name}</h5>
    </div>
    <p className="text-sm text-gray-300">{description}</p>
  </motion.div>
);

const SectionHeader = ({ icon: Icon, title, className = "" }) => (
  <div className={`flex items-center mb-6 ${className}`}>
    {title === "Google Cloud Platform (GCP)" ? (
      <img 
        src="https://cdn.prod.website-files.com/6449405754e757db07f25327/6656429d1776bd09704334e8_google.webp" 
        alt="Google Cloud Logo"
        className="w-8 h-8 mr-3"
      />
    ) : (
      <Icon className="w-8 h-8 text-blue-400 mr-3" />
    )}
    <h3 className="text-2xl font-semibold text-white">{title}</h3>
  </div>
);

export default function CloudPlatform() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-lg shadow-xl"
    >
      <SectionHeader icon={Cloud} title="Cloud Platforms" />

      <div className="mb-8">
        <SectionHeader 
          icon={Cloud} 
          title="Google Cloud Platform (GCP)" 
          className="mb-6" 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {gcpServices.map((service) => (
            <ServiceCard key={service.name} {...service} />
          ))}
        </div>
      </div>

      <div className="mt-8">
        <SectionHeader 
          icon={Network} 
          title="Cloud Networking" 
          className="mb-4" 
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {networkingServices.map((service) => (
            <ServiceCard key={service.name} {...service} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
