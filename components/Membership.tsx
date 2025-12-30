
import React from 'react';
import { MEMBERSHIPS } from '../constants';
import { Check, Star } from 'lucide-react';

const Membership: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black uppercase font-oswald italic">
            MEMBERSHIP <span className="text-lime-400">PLANS</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto italic font-medium">Choose the tier that fits your journey. No hidden fees, just results.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {MEMBERSHIPS.map((plan) => (
            <div 
              key={plan.name} 
              className={`relative p-8 rounded-3xl border ${plan.recommended ? 'border-lime-400 bg-zinc-900' : 'border-white/10 bg-zinc-950'} transition-transform hover:scale-105 duration-300`}
            >
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-lime-400 text-black px-4 py-1 rounded-full text-xs font-black uppercase flex items-center gap-1">
                  <Star size={12} fill="currentColor" /> Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-xl font-bold uppercase tracking-widest text-gray-400 mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-black font-oswald italic text-white">{plan.price}</span>
                  <span className="text-gray-500 font-bold uppercase text-sm">HUF {plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-10">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <div className="p-1 bg-lime-400/20 rounded-full">
                      <Check size={14} className="text-lime-400" />
                    </div>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button 
                className={`w-full py-4 rounded-xl font-black uppercase tracking-widest transition-all ${
                  plan.recommended 
                    ? 'bg-lime-400 text-black hover:bg-lime-300' 
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                Choose {plan.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Membership;
