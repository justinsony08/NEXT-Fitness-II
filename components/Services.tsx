
import React from 'react';
import { SERVICES } from '../constants';
import { ArrowUpRight } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-black uppercase font-oswald italic mb-4">
              PUSH YOUR <span className="text-lime-400">LIMITS</span>
            </h2>
            <p className="text-gray-400 text-lg">
              We offer a wide range of specialized services designed to help you reach your peak performance, no matter your starting point.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <a href="#contact" className="text-lime-400 font-bold uppercase tracking-widest flex items-center gap-2 hover:gap-4 transition-all">
              See all offerings <ArrowUpRight size={20} />
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div key={service.id} className="group relative bg-zinc-900 rounded-3xl overflow-hidden border border-white/5 hover:border-lime-400/30 transition-all duration-500">
              <div className="h-64 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-black uppercase font-oswald italic mb-3">{service.title}</h3>
                <p className="text-gray-400 mb-6 line-clamp-2">{service.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-lime-400 font-bold text-sm tracking-tighter uppercase">{service.priceRange}</span>
                  <button className="p-3 bg-white/5 rounded-full group-hover:bg-lime-400 group-hover:text-black transition-colors">
                    <ArrowUpRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
