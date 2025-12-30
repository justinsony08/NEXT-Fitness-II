
import React from 'react';
import { TRAINERS } from '../constants';
import { Shield, Target, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h2 className="text-4xl md:text-5xl font-black uppercase font-oswald mb-8 italic">
              OUR <span className="text-lime-400">MISSION</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              At NEXT Fitness II, we believe fitness is not a destination but a journey of continuous improvement. Founded in the heart of Kecskemét, we've built more than just a gym—we've created a movement center focused on results, community, and longevity.
            </p>
            
            <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <Shield className="text-lime-400 mb-4" />
                <h3 className="font-bold uppercase text-sm mb-2">Quality</h3>
                <p className="text-xs text-gray-500">Only the best equipment and certified staff.</p>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <Target className="text-lime-400 mb-4" />
                <h3 className="font-bold uppercase text-sm mb-2">Results</h3>
                <p className="text-xs text-gray-500">Goal-oriented training programs for everyone.</p>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <Users className="text-lime-400 mb-4" />
                <h3 className="font-bold uppercase text-sm mb-2">Community</h3>
                <p className="text-xs text-gray-500">A supportive environment that feels like family.</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=1000"
              alt="Gym environment"
              className="rounded-3xl object-cover h-[500px] w-full shadow-2xl shadow-lime-400/10"
            />
            <div className="absolute -bottom-6 -left-6 bg-lime-400 p-8 rounded-2xl hidden md:block">
              <p className="text-black font-black text-4xl italic font-oswald">EST. 2018</p>
              <p className="text-black/70 font-bold uppercase tracking-widest text-sm">Kecskemét Pride</p>
            </div>
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-4xl font-black uppercase font-oswald italic">
            MEET THE <span className="text-lime-400">ELITE</span> TEAM
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">Our coaches are more than just trainers—they are mentors dedicated to your physical and mental transformation.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {TRAINERS.map((trainer) => (
            <div key={trainer.name} className="group relative overflow-hidden rounded-3xl bg-zinc-900 border border-white/5 hover:border-lime-400/50 transition-all duration-500">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
              <div className="absolute bottom-0 p-8 w-full">
                <h3 className="text-2xl font-black uppercase font-oswald italic text-white mb-1">{trainer.name}</h3>
                <p className="text-lime-400 font-bold text-sm uppercase tracking-widest mb-4">{trainer.specialty}</p>
                <p className="text-gray-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">{trainer.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
