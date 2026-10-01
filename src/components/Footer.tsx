"use client";

import React from "react";
import { ArrowUp, Brain } from "lucide-react";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 bg-[#050609] border-t border-white/5 text-gray-400 text-sm">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-sky-500/20 text-sky-400 flex items-center justify-center font-bold text-xs">
            <Brain className="w-3.5 h-3.5" />
          </div>
          <span className="font-sans font-bold text-white tracking-widest text-xs">
            BROVIN HENRY QUADROS
          </span>
          <span className="text-gray-600">|</span>
          <span className="text-xs text-gray-400">AI Engineer / Data Analyst</span>
        </div>

        <div className="flex items-center gap-6 text-xs font-mono">
          <span>&copy; {new Date().getFullYear()} All Rights Reserved.</span>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 text-sky-400 hover:text-white transition-colors"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
