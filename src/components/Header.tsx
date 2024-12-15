import React from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="fixed w-full z-50">
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="backdrop-blur-md bg-slate-900/80 border-b border-slate-700"
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text"
            >
              Logesh K.
            </motion.span>
            
            <div className="hidden md:flex items-center space-x-8">
              <NavLinks />
              <SocialLinks />
            </div>

            <button 
              className="md:hidden text-white hover:text-blue-400 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {isOpen && <MobileMenu />}
        </div>
      </motion.nav>
    </header>
  );
}

const NavLinks = () => (
  <div className="flex space-x-8">
    {['About', 'Skills'].map((item) => (
      <motion.a
        key={item}
        href={`#${item.toLowerCase()}`}
        whileHover={{ scale: 1.05 }}
        className="relative text-gray-300 hover:text-white transition-colors group"
      >
        {item}
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform" />
      </motion.a>
    ))}
  </div>
);

const SocialLinks = () => (
  <div className="flex items-center space-x-4">
    {[
      { Icon: Github, href: 'https://github.com/logeshkumarasamy98', label: 'GitHub' },
      { Icon: Linkedin, href: 'https://www.linkedin.com/in/logesh-kumarasamy-590473188/', label: 'LinkedIn' },
      { Icon: Mail, href: 'mailto:logesh.kumarasamy98@gmail.com', label: 'Email' }
    ].map(({ Icon, href, label }) => (
      <motion.a
        key={label}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1, rotate: 5 }}
        className="text-gray-300 hover:text-blue-400 transition-colors"
      >
        <Icon size={24} />
      </motion.a>
    ))}
  </div>
);

const MobileMenu = () => (
  <motion.div
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.2 }}
    className="md:hidden py-4 space-y-4"
  >
    <div className="flex flex-col space-y-4">
      <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
      <a href="#skills" className="text-gray-300 hover:text-white transition-colors">Skills</a>
    </div>
    <div className="flex space-x-4 pt-4 border-t border-slate-700">
      <SocialLinks />
    </div>
  </motion.div>
);