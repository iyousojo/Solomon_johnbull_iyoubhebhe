import React, { useState, useRef, useEffect } from 'react';
import { getIntent } from '../services/wit';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi! I'm IY's virtual assistant. Ask me about his skills or projects!", isBot: true }
  ]);
  const [input, setInput] = useState("");
  const scrollRef = useRef(null);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = input;
    setMessages(prev => [...prev, { text: userMsg, isBot: false }]);
    setInput("");

    // Get Intent from Wit.ai
    const data = await getIntent(userMsg);
    
    // Logic for bot response based on Wit.ai data
    let botResponse = "That's interesting! You should check out the Projects section for more details.";
    
    if (data?.intents?.length > 0) {
      const intent = data.intents[0].name;
      if (intent === 'get_skills') botResponse = "IY excels in React, Node.js, and PostgreSQL.";
      if (intent === 'get_contact') botResponse = "You can reach him via the contact form below or email directly!";
    }

    setMessages(prev => [...prev, { text: botResponse, isBot: true }]);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] font-sans">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-80 h-96 bg-[#0F0F0F] border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden backdrop-blur-xl">
          <div className="p-4 border-b border-white/5 bg-white/5 flex justify-between items-center">
            <span className="text-xs font-bold uppercase tracking-widest text-accent-blue">IY Assistant</span>
            <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-white">✕</button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}>
                <div className={`max-w-[80%] p-3 rounded-xl text-sm ${
                  msg.isBot ? 'bg-white/5 text-gray-300' : 'bg-accent-blue text-white'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={scrollRef} />
          </div>

          <form onSubmit={handleSend} className="p-4 border-t border-white/5 bg-white/5">
            <input 
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask something..."
              className="w-full bg-black/20 border border-white/10 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-accent-blue/50 transition-all"
            />
          </form>
        </div>
      )}

      {/* Floating Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-white text-black rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all"
      >
        {isOpen ? '↓' : '💬'}
      </button>
    </div>
  );
};

export default Chatbot;