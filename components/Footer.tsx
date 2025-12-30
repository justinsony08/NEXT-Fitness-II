
import React from 'react';
import { Dumbbell, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div className="flex items-center space-x-2">
            <Dumbbell className="text-lime-400 w-8 h-8" />
            <span className="text-2xl font-bold tracking-tighter uppercase font-oswald italic">
              NEXT <span className="text-lime-400">Fitness II</span>
            </span>
          </div>

          <nav className="flex flex-wrap justify-center gap-8 text-sm font-bold uppercase tracking-widest text-gray-400">
            <a href="#home" className="hover:text-lime-400 transition-colors">Home</a>
            <a href="#about" className="hover:text-lime-400 transition-colors">About</a>
            <a href="#services" className="hover:text-lime-400 transition-colors">Services</a>
            <a href="#pricing" className="hover:text-lime-400 transition-colors">Pricing</a>
            <a href="#contact" className="hover:text-lime-400 transition-colors">Contact</a>
          </nav>

          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="p-4 bg-white/5 rounded-full hover:bg-lime-400 hover:text-black transition-all group"
          >
            <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold text-gray-600 uppercase tracking-widest">
          <p>© 2024 NEXT FITNESS II KECSKEMÉT. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
