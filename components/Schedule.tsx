
import React from 'react';
import { SCHEDULE } from '../constants';
import { Calendar } from 'lucide-react';

const Schedule: React.FC = () => {
  const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

  return (
    <section id="schedule" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-lime-400 font-bold uppercase tracking-widest text-xs mb-4">
            <Calendar size={14} /> Weekly Timetable
          </div>
          <h2 className="text-4xl md:text-5xl font-black uppercase font-oswald italic">
            CLASS <span className="text-lime-400">SCHEDULE</span>
          </h2>
        </div>

        <div className="overflow-x-auto rounded-3xl border border-white/10 bg-zinc-900/50 backdrop-blur-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10">
                <th className="p-6 font-oswald uppercase text-gray-500 text-sm italic">Time</th>
                {days.map(day => (
                  <th key={day} className="p-6 font-oswald uppercase text-lime-400 italic text-lg">{day}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {SCHEDULE.map((slot, idx) => (
                <tr key={idx} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="p-6 font-bold text-gray-400">{slot.time}</td>
                  {days.map(day => (
                    <td key={day} className="p-6">
                      {slot[day as keyof typeof slot] !== '-' ? (
                        <div className="bg-lime-400/10 border border-lime-400/20 text-lime-400 px-3 py-1 rounded-lg text-sm font-bold inline-block whitespace-nowrap">
                          {slot[day as keyof typeof slot]}
                        </div>
                      ) : (
                        <span className="text-gray-700">-</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="mt-8 text-center">
          <button className="bg-white text-black px-8 py-3 rounded-full font-bold uppercase text-sm hover:bg-lime-400 transition-colors">
            Download PDF Schedule
          </button>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
