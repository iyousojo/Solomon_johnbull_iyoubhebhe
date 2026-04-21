import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formRef.current) return;

    emailjs
      .sendForm(
        "service_hi0gx6q", 
        "template_pjki628", 
        formRef.current,
        "eh6tHKovHMJKsAZdN" 
      )
      .then(
        (result) => {
          toast.success("Message sent successfully!");
          formRef.current.reset();
        },
        (error) => {
          toast.error("Failed to send message: " + (error?.text || "Unknown error"));
        }
      );
  };

  return (
    <section id="contact" className="py-24 px-6 max-w-7xl mx-auto">
      <Toaster position="bottom-right" reverseOrder={false} />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left Side: Contact Text */}
        <div>
          <h2 className="text-accent-blue font-mono text-xs tracking-[0.3em] uppercase mb-4">Contact</h2>
          <h3 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 text-white">
            Let’s start a <br />
            <span className="text-gray-500 italic font-serif font-light">conversation.</span>
          </h3>
          <p className="text-gray-400 text-lg mb-8 max-w-md">
            I’m currently looking for new opportunities in Full-Stack development. 
            Whether you have a question or just want to say hi, I’ll get back to you!
          </p>
          <div className="space-y-4">
            <p className="text-sm font-bold uppercase tracking-widest text-gray-600">Direct Email</p>
            <a href="mailto:iyousojo@example.com" className="text-2xl font-medium hover:text-accent-blue transition-colors text-white">
              iyousojo@example.com
            </a>
          </div>
        </div>

        {/* Right Side: The Form */}
        <form 
          ref={formRef} 
          onSubmit={handleSubmit} 
          className="bg-white/[0.02] border border-white/10 p-10 rounded-3xl backdrop-blur-sm space-y-6"
        >
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold ml-1">Your Name</label>
            <input 
              type="text" 
              name="user_name" 
              required 
              placeholder="John Doe" 
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-gray-700 focus:outline-none focus:border-accent-blue/50 transition-all"
            />
          </div>

          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold ml-1">Email Address</label>
            <input 
              type="email" 
              name="user_email" 
              required 
              placeholder="john@example.com" 
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-gray-700 focus:outline-none focus:border-accent-blue/50 transition-all"
            />
          </div>

          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold ml-1">Message</label>
            <textarea 
              name="message" 
              rows="5" 
              required 
              placeholder="How can I help you?" 
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-gray-700 focus:outline-none focus:border-accent-blue/50 transition-all resize-none"
            />
          </div>

          <button 
            type="submit" 
            className="w-full py-5 bg-white text-black font-bold uppercase tracking-widest rounded-xl hover:bg-accent-blue hover:text-white transition-all duration-500 active:scale-95"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;