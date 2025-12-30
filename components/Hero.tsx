
import React from 'react';
import { ChevronRight, Play } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&q=80&w=2000"
          className="w-full h-full object-cover"
          alt="Gym background"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-2xl">
          <div className="inline-block px-4 py-1 mb-6 border border-lime-400/50 rounded-full bg-lime-400/10 backdrop-blur-sm">
            <span className="text-lime-400 text-xs font-bold uppercase tracking-widest">Premium Fitness in Kecskemét</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black italic uppercase leading-tight mb-6 font-oswald tracking-tighter">
            TRANSFORM <br />
            YOUR <span className="text-lime-400 underline decoration-2 underline-offset-8">FITNESS</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-lg">
            Experience the most advanced training facility in Kecskemét. Elite trainers, premium equipment, and a community that pushes you further.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#pricing"
              className="flex items-center justify-center space-x-2 bg-lime-400 text-black px-8 py-4 rounded-xl font-bold uppercase text-lg hover:bg-lime-300 transition-all group"
            >
              <span>Get Started</span>
              <ChevronRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <button className="flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-xl font-bold uppercase text-lg hover:bg-white/20 transition-all">
              <Play fill="currentColor" size={18} />
              <span>Tour Facility</span>
            </button>
          </div>
          
          <div className="mt-12 flex items-center space-x-8 text-sm uppercase tracking-widest font-bold">
            <div className="flex flex-col">
              <span className="text-lime-400 text-2xl font-black">1000+</span>
              <span className="text-gray-400">Members</span>
            </div>
            <div className="w-px h-8 bg-white/20"></div>
            <div className="flex flex-col">
              <span className="text-lime-400 text-2xl font-black">20+</span>
              <span className="text-gray-400">Classes</span>
            </div>
            <div className="w-px h-8 bg-white/20"></div>
            <div className="flex flex-col">
              <span className="text-lime-400 text-2xl font-black">24/7</span>
              <span className="text-gray-400">Access</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
