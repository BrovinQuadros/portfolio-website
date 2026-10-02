"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, Copy, Check, ArrowUpRight, Sparkles, MapPin } from "lucide-react";

export const Contact: React.FC = () => {
  const [emailCopied, setEmailCopied] = useState(false);
  const [phoneCopied, setPhoneCopied] = useState(false);

  const email = "brovin.hquadros@gmail.com";
  const phoneDisplay = "+91 7975623073";
  const phoneTel = "tel:+917975623073";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText("+91 7975623073");
    setPhoneCopied(true);
    setTimeout(() => setPhoneCopied(false), 2000);
  };

  return (
    <section id="contact" className="relative py-32 bg-[#08090e] overflow-hidden border-t border-white/5">
      {/* Ambient background lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-sky-500/10 to-indigo-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-panel p-10 md:p-16 rounded-[40px] border border-sky-500/20 shadow-2xl text-center space-y-8 relative overflow-hidden"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-950/60 border border-sky-500/30 text-sky-400 font-mono text-xs uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            Get In Touch
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight max-w-3xl mx-auto">
            Let's build something <span className="text-gradient-cyan">intelligent.</span>
          </h2>

          <p className="text-gray-300 text-base md:text-xl font-light max-w-xl mx-auto leading-relaxed">
            Have a project, idea, or opportunity? Let's connect.
          </p>

          {/* Location Indicator */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-gray-400">
            <MapPin className="w-3.5 h-3.5 text-sky-400" />
            Mangaluru, India
          </div>

          {/* Quick Contact Info (Email & Phone) */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-2xl mx-auto pt-2">
            {/* Email pill */}
            <div className="w-full flex items-center justify-between px-5 py-3.5 rounded-full bg-white/5 border border-white/10 font-mono text-sm text-gray-200 hover:border-white/20 transition-colors">
              <a
                href={`mailto:${email}`}
                className="flex items-center gap-2.5 hover:text-sky-400 transition-colors truncate"
              >
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <span className="truncate">{email}</span>
              </a>
              <button
                onClick={handleCopyEmail}
                className="p-1.5 rounded-lg text-gray-400 hover:text-sky-400 hover:bg-white/10 transition-colors shrink-0 ml-2"
                title="Copy Email"
              >
                {emailCopied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone pill */}
            <div className="w-full flex items-center justify-between px-5 py-3.5 rounded-full bg-white/5 border border-white/10 font-mono text-sm text-gray-200 hover:border-white/20 transition-colors">
              <a
                href={phoneTel}
                className="flex items-center gap-2.5 hover:text-sky-400 transition-colors truncate"
              >
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <span className="truncate">{phoneDisplay}</span>
              </a>
              <button
                onClick={handleCopyPhone}
                className="p-1.5 rounded-lg text-gray-400 hover:text-sky-400 hover:bg-white/10 transition-colors shrink-0 ml-2"
                title="Copy Phone Number"
              >
                {phoneCopied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Action Links & Socials */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-6 border-t border-white/5">
            <a
              href={phoneTel}
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-950/60 hover:bg-emerald-900/80 border border-emerald-500/30 text-emerald-200 font-medium text-sm transition-all hover:scale-105 active:scale-95 shadow-lg shadow-emerald-500/10"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              Call Me
              <ArrowUpRight className="w-3.5 h-3.5 text-emerald-400" />
            </a>

            <a
              href="https://github.com/BrovinQuadros"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium text-sm transition-all hover:scale-105 active:scale-95"
            >
              <Github className="w-4 h-4" />
              GitHub
              <ArrowUpRight className="w-3.5 h-3.5 text-gray-400" />
            </a>

            <a
              href="https://linkedin.com/in/brovinquadros"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-sky-950/60 hover:bg-sky-900/80 border border-sky-500/30 text-sky-200 font-medium text-sm transition-all hover:scale-105 active:scale-95"
            >
              <Linkedin className="w-4 h-4 text-sky-400" />
              LinkedIn
              <ArrowUpRight className="w-3.5 h-3.5 text-sky-400" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
