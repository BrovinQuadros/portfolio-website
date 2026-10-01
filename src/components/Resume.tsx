"use client";

import React from "react";
import { motion } from "framer-motion";
import { FileText, Download, ExternalLink, Sparkles } from "lucide-react";

export const Resume: React.FC = () => {
  return (
    <section id="resume" className="relative py-24 bg-[#08090e] overflow-hidden border-t border-white/5">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-panel glass-panel-hover p-8 md:p-12 rounded-[32px] border border-indigo-500/30 text-center space-y-6 shadow-2xl relative overflow-hidden"
        >
          {/* Header pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-indigo-300 font-mono text-xs uppercase tracking-widest">
            <FileText className="w-3.5 h-3.5 text-sky-400" />
            Curriculum Vitae
          </div>

          <div className="space-y-2">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Resume
            </h2>
            <p className="text-gray-300 text-base md:text-lg font-light max-w-xl mx-auto leading-relaxed">
              Explore my experience, skills, projects, and education.
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            {/* View Resume -> Opens in new tab */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white font-medium text-sm transition-all hover:scale-105 active:scale-95 shadow-lg backdrop-blur-md"
              title="View Resume in New Tab"
            >
              <ExternalLink className="w-4 h-4 text-sky-400" />
              View Resume
            </a>

            {/* Download Resume -> Direct PDF download */}
            <a
              href="/resume.pdf"
              download="Brovin_Henry_Quadros_Resume.pdf"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-sky-500 via-indigo-600 to-purple-600 hover:from-sky-400 hover:to-purple-500 text-white font-semibold text-sm transition-all hover:scale-105 active:scale-95 shadow-lg shadow-sky-500/25"
              title="Download Resume PDF"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
