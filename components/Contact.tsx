
import React from 'react';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-black uppercase font-oswald italic mb-8">
              FIND <span className="text-lime-400">US</span>
            </h2>
            
            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-lime-400 text-black rounded-xl">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-black uppercase text-sm text-gray-400 tracking-widest mb-1">Location</h3>
                  <p className="text-lg font-bold">Rezgő u. 1, 6000 Kecskemét, Hungary</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-lime-400 text-black rounded-xl">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="font-black uppercase text-sm text-gray-400 tracking-widest mb-1">Hours</h3>
                  <p className="text-lg font-bold">Mon - Fri: 06:00 - 22:00</p>
                  <p className="text-lg font-bold">Sat - Sun: 08:00 - 20:00</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-lime-400 text-black rounded-xl">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-black uppercase text-sm text-gray-400 tracking-widest mb-1">Call Us</h3>
                  <p className="text-lg font-bold">+36 76 123 4567</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <a href="#" className="p-4 bg-white/5 rounded-full hover:bg-lime-400 hover:text-black transition-all">
                <Instagram size={24} />
              </a>
              <a href="#" className="p-4 bg-white/5 rounded-full hover:bg-lime-400 hover:text-black transition-all">
                <Facebook size={24} />
              </a>
            </div>
          </div>

          <div className="space-y-8">
            <div className="rounded-3xl overflow-hidden h-[300px] border border-white/10 grayscale hover:grayscale-0 transition-all duration-700">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2724.897818968951!2d19.673859676839382!3d46.92440813491415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4743da3e8c18335f%3A0x6b49704771501705!2sNEXT%20Fitness%20II.!5e0!3m2!1sen!2shu!4v1716200000000!5m2!1sen!2shu" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <form className="grid grid-cols-2 gap-4">
              <input 
                type="text" 
                placeholder="Name" 
                className="col-span-2 md:col-span-1 bg-white/5 border border-white/10 p-4 rounded-xl focus:outline-none focus:border-lime-400 text-white"
              />
              <input 
                type="email" 
                placeholder="Email" 
                className="col-span-2 md:col-span-1 bg-white/5 border border-white/10 p-4 rounded-xl focus:outline-none focus:border-lime-400 text-white"
              />
              <textarea 
                placeholder="How can we help?" 
                rows={4}
                className="col-span-2 bg-white/5 border border-white/10 p-4 rounded-xl focus:outline-none focus:border-lime-400 text-white"
              ></textarea>
              <button className="col-span-2 bg-lime-400 text-black py-4 rounded-xl font-black uppercase tracking-widest hover:bg-lime-300 transition-all">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
