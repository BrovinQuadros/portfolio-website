"use client";

import React from "react";
import { motion } from "framer-motion";
import { Brain, LineChart, Cpu, Sparkles } from "lucide-react";

export const About: React.FC = () => {
  return (
    <section id="about" className="relative py-28 bg-[#08090e] overflow-hidden border-t border-white/5">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-950/40 border border-sky-500/20 text-sky-400 font-mono text-xs uppercase tracking-widest"
          >
            <Brain className="w-3.5 h-3.5" />
            Background
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            About <span className="text-gradient-cyan">Me</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-300 max-w-3xl text-lg md:text-xl font-light leading-relaxed"
          >
            I'm <strong className="text-white font-semibold">Brovin Henry Quadros</strong>, an AI Engineer and Data Analyst focused on building intelligent applications and transforming data into useful insights.
          </motion.p>
        </div>

        {/* 2 Main Pillar Panels: AI Engineering + Data Analytics */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Panel 1: AI Engineering */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass-panel glass-panel-hover p-8 md:p-10 rounded-3xl border border-sky-500/20 relative group space-y-6"
          >
            <div className="flex items-center gap-4">
              <div className="p-3.5 rounded-2xl bg-sky-500/10 border border-sky-500/30 text-sky-400">
                <Cpu className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono text-sky-400 uppercase tracking-widest">
                  Engineering Pillar
                </span>
                <h3 className="text-2xl font-bold text-white">AI & Machine Learning</h3>
              </div>
            </div>

            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              Specializing in <strong className="text-white font-medium">Machine Learning</strong>, <strong className="text-white font-medium">Generative AI</strong>, <strong className="text-white font-medium">LLM applications</strong>, and <strong className="text-white font-medium">RAG systems</strong>. I design context-grounded AI workflows, vector search pipelines, and high-performance backend microservices.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {["Machine Learning", "Generative AI", "LLM Applications", "RAG Systems", "Python", "FastAPI"].map((tag) => (
                <span key={tag} className="px-3 py-1 text-xs font-mono text-sky-300 bg-sky-950/60 border border-sky-500/30 rounded-lg">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Panel 2: Data Analytics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-panel glass-panel-hover p-8 md:p-10 rounded-3xl border border-orange-500/20 relative group space-y-6"
          >
            <div className="flex items-center gap-4">
              <div className="p-3.5 rounded-2xl bg-orange-500/10 border border-orange-500/30 text-orange-400">
                <LineChart className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono text-orange-400 uppercase tracking-widest">
                  Analytics Pillar
                </span>
                <h3 className="text-2xl font-bold text-white">Data Analytics & BI</h3>
              </div>
            </div>

            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              Focused on <strong className="text-white font-medium">Data Analytics</strong> and <strong className="text-white font-medium">Data Visualization</strong> using <strong className="text-white font-medium">Python</strong>, <strong className="text-white font-medium">SQL</strong>, <strong className="text-white font-medium">Power BI</strong>, and <strong className="text-white font-medium">Tableau</strong>. Transforming complex business & survey datasets into quantitative models and interactive executive dashboards.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {["Data Analytics", "Data Visualization", "Python", "SQL", "Power BI", "Tableau"].map((tag) => (
                <span key={tag} className="px-3 py-1 text-xs font-mono text-orange-300 bg-orange-950/60 border border-orange-500/30 rounded-lg">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
