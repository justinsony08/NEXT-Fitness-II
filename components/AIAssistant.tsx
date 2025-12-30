
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Bot, Sparkles } from 'lucide-react';
import { getFitnessAdvice } from '../services/geminiService';

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'ai'; content: string }[]>([
    { role: 'ai', content: "Hi! I'm your NEXT Fitness II virtual coach. Need a quick workout tip or nutrition advice?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);

    const aiResponse = await getFitnessAdvice(userMsg);
    setMessages(prev => [...prev, { role: 'ai', content: aiResponse }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      {isOpen ? (
        <div className="bg-zinc-900 border border-white/10 w-[350px] h-[500px] rounded-3xl flex flex-col shadow-2xl overflow-hidden animate-in slide-in-from-bottom-10 duration-300">
          <div className="bg-lime-400 p-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="bg-black p-2 rounded-full">
                <Bot size={18} className="text-lime-400" />
              </div>
              <div>
                <p className="text-black font-black text-sm uppercase leading-tight">AI Coach</p>
                <p className="text-black/60 text-[10px] font-bold uppercase tracking-tighter">Powered by NEXT AI</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-black/50 hover:text-black">
              <X size={20} />
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                  msg.role === 'user' 
                    ? 'bg-lime-400 text-black font-medium' 
                    : 'bg-white/5 text-gray-300 border border-white/10'
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white/5 p-3 rounded-2xl text-gray-300 border border-white/10 flex items-center gap-2">
                  <div className="w-2 h-2 bg-lime-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-lime-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                  <div className="w-2 h-2 bg-lime-400 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-white/10 bg-black/50">
            <div className="relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask me anything..."
                className="w-full bg-white/5 border border-white/10 p-3 pr-12 rounded-xl text-sm focus:outline-none focus:border-lime-400"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-lime-400 hover:text-lime-300 transition-colors"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-lime-400 text-black p-4 rounded-2xl shadow-xl hover:scale-110 transition-transform flex items-center gap-2 font-black uppercase text-sm tracking-widest group"
        >
          <Sparkles size={20} className="group-hover:rotate-12 transition-transform" />
          <span>Next AI</span>
        </button>
      )}
    </div>
  );
};

export default AIAssistant;
