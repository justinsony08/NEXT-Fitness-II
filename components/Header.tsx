
import React, { useState } from 'react';
import { Menu, X, Dumbbell } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Schedule', href: '#schedule' },
    { name: 'Membership', href: '#pricing' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-2">
            <Dumbbell className="text-lime-400 w-8 h-8" />
            <span className="text-2xl font-bold tracking-tighter uppercase font-oswald italic">
              NEXT <span className="text-lime-400">Fitness II</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold uppercase tracking-widest hover:text-lime-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <a
              href="#pricing"
              className="bg-lime-400 text-black px-6 py-2 rounded-full font-bold uppercase text-sm hover:bg-lime-300 transition-all transform hover:scale-105"
            >
              Join Now
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-black border-b border-white/10 px-4 py-6 space-y-4 animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-lg font-bold uppercase tracking-wider hover:text-lime-400"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#pricing"
            onClick={() => setIsOpen(false)}
            className="block bg-lime-400 text-black text-center py-3 rounded-lg font-bold uppercase"
          >
            Join Now
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
