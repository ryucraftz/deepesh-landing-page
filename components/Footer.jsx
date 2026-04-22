import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-slate-200/60 text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-100/50 -z-10" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-4xl mx-auto space-y-3"
      >
        <p className="text-slate-500 text-sm sm:text-base font-medium tracking-tight">
          © 2025 Brand Buzzar, Vadodara. Built for Manufacturers and Exporters in India.
        </p>
        
        <div className="pt-1">
          <a 
            href="mailto:hello@brandbuzzar.com" 
            className="group relative inline-block text-amber-600 hover:text-amber-700 transition-colors text-sm sm:text-base font-semibold"
          >
            hello@brandbuzzar.com
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-amber-600 transition-all duration-300 group-hover:w-full" />
          </a>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
