"use client";

import React from "react";
import { motion } from "framer-motion";
import { FolderGit2, ArrowUpRight, Github, BarChart3, Activity, Cpu, GraduationCap, Sparkles, TrendingUp, Users, ShoppingBag, DollarSign } from "lucide-react";

export const Projects: React.FC = () => {
  return (
    <section id="work" className="relative py-28 bg-[#08090e] overflow-hidden border-t border-white/5">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-sky-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[600px] h-[600px] bg-orange-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-950/40 border border-sky-500/20 text-sky-400 font-mono text-xs uppercase tracking-widest"
          >
            <FolderGit2 className="w-3.5 h-3.5" />
            Selected Portfolio
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            Selected <span className="text-gradient-cyan">Work</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl text-base font-light"
          >
            Featured case studies spanning Business Intelligence dashboards, Generative AI applications, and RAG architectures.
          </motion.p>
        </div>

        <div className="space-y-12">
          {/* PROJECT 01 — E-COMMERCE SALES ANALYSIS (LARGE HORIZONTAL FEATURE) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-panel glass-panel-hover p-8 md:p-12 rounded-[32px] border border-orange-500/30 relative group overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Info Column */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-4xl font-black text-orange-500/80">
                    01
                  </span>
                  <span className="px-3.5 py-1 text-xs font-mono font-semibold uppercase tracking-wider text-orange-400 bg-orange-950/60 border border-orange-500/30 rounded-full">
                    Data Analytics / Business Intelligence
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-3xl md:text-4xl font-extrabold text-white group-hover:text-orange-300 transition-colors">
                    E-Commerce Sales Analysis Dashboard
                  </h3>
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed font-light">
                    Interactive e-commerce sales dashboard analyzing sales performance, customer behavior, product performance, and order trends. Used Power Query and DAX for data transformation, calculations, data modeling and interactive dashboard analysis.
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {["Power BI", "DAX", "Power Query", "Data Modeling", "Business Intelligence"].map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 text-xs font-mono font-medium text-orange-200 bg-orange-950/70 border border-orange-500/30 rounded-lg"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* GitHub link */}
                <div className="pt-4 border-t border-white/5 flex items-center gap-4">
                  <a
                    href="https://github.com/BrovinQuadros"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-orange-500/10 hover:bg-orange-500/20 border border-orange-500/30 text-orange-300 text-xs font-mono font-semibold transition-all"
                  >
                    <Github className="w-4 h-4" />
                    View Repository
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Right Visual Breakdown Card */}
              <div className="lg:col-span-5 glass-panel p-6 rounded-2xl border border-white/10 bg-black/40 space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span className="text-xs font-mono text-gray-400 uppercase tracking-widest flex items-center gap-1.5">
                    <BarChart3 className="w-4 h-4 text-orange-400" />
                    Dashboard Metrics
                  </span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                </div>

                {/* Visual KPI Mock grid */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/5 space-y-1">
                    <span className="text-[10px] font-mono text-gray-400 uppercase">Key Metric</span>
                    <div className="text-sm font-bold text-white">Total Sales</div>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/5 space-y-1">
                    <span className="text-[10px] font-mono text-gray-400 uppercase">Volume</span>
                    <div className="text-sm font-bold text-white">Total Orders</div>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/5 space-y-1">
                    <span className="text-[10px] font-mono text-gray-400 uppercase">Basket Size</span>
                    <div className="text-sm font-bold text-white">Avg Order Value</div>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/5 space-y-1">
                    <span className="text-[10px] font-mono text-gray-400 uppercase">Reach</span>
                    <div className="text-sm font-bold text-white">Total Customers</div>
                  </div>
                </div>

                {/* Visual breakdown list */}
                <div className="space-y-1.5 pt-2">
                  <span className="text-[11px] font-mono text-gray-400 uppercase">Visual Breakdown</span>
                  <div className="flex flex-wrap gap-1.5 text-[11px] font-mono text-gray-300">
                    <span className="px-2 py-0.5 rounded bg-white/5">Monthly Sales Trends</span>
                    <span className="px-2 py-0.5 rounded bg-white/5">Top Selling Products</span>
                    <span className="px-2 py-0.5 rounded bg-white/5">Sales by State</span>
                    <span className="px-2 py-0.5 rounded bg-white/5">Order Status</span>
                    <span className="px-2 py-0.5 rounded bg-white/5">Customer Analysis</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* PROJECT 02 — WELLNEST AI (LARGE VISUAL FEATURE) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass-panel glass-panel-hover p-8 md:p-12 rounded-[32px] border border-sky-500/30 relative group overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Info Column */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-4xl font-black text-sky-500/80">
                    02
                  </span>
                  <span className="px-3.5 py-1 text-xs font-mono font-semibold uppercase tracking-wider text-sky-400 bg-sky-950/60 border border-sky-500/30 rounded-full">
                    Generative AI / AI Application
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-3xl md:text-4xl font-extrabold text-white group-hover:text-sky-300 transition-colors">
                    WellNest AI
                  </h3>
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed font-light">
                    AI-powered mental health companion system for personalized wellness support. Features real-time mood tracking, journaling, AI-generated coping strategies, analytics-based insights, context-aware AI responses, RESTful APIs, interactive dashboards, and wellness reports powered by NVIDIA AI endpoints (GPT-OSS-120B).
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {["React", "FastAPI", "MongoDB", "NVIDIA AI (GPT-OSS-120B)", "REST APIs"].map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 text-xs font-mono font-medium text-sky-200 bg-sky-950/70 border border-sky-500/30 rounded-lg"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="pt-4 border-t border-white/5 flex items-center gap-4">
                  <a
                    href="https://github.com/BrovinQuadros"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-sky-500/10 hover:bg-sky-500/20 border border-sky-500/30 text-sky-300 text-xs font-mono font-semibold transition-all"
                  >
                    <Github className="w-4 h-4" />
                    View Repository
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Right Feature Highlights */}
              <div className="lg:col-span-5 glass-panel p-6 rounded-2xl border border-white/10 bg-black/40 space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span className="text-xs font-mono text-gray-400 uppercase tracking-widest flex items-center gap-1.5">
                    <Activity className="w-4 h-4 text-sky-400" />
                    System Capabilities
                  </span>
                  <span className="px-2 py-0.5 text-[10px] font-mono text-sky-300 bg-sky-950/80 rounded border border-sky-500/30">
                    NVIDIA AI
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2.5 text-xs font-mono text-gray-300">
                  <div className="p-2.5 rounded-lg bg-white/5 border border-white/5">✓ Mood Tracking</div>
                  <div className="p-2.5 rounded-lg bg-white/5 border border-white/5">✓ Journaling Logs</div>
                  <div className="p-2.5 rounded-lg bg-white/5 border border-white/5">✓ Coping Strategies</div>
                  <div className="p-2.5 rounded-lg bg-white/5 border border-white/5">✓ Wellness Reports</div>
                  <div className="p-2.5 rounded-lg bg-white/5 border border-white/5">✓ Context-aware LLM</div>
                  <div className="p-2.5 rounded-lg bg-white/5 border border-white/5">✓ RESTful FastAPI</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ALTERNATING GRID FOR PROJECT 03 & PROJECT 04 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* PROJECT 03 — MEDICAL RAG CHATBOT */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="glass-panel glass-panel-hover p-8 rounded-[32px] border border-indigo-500/30 flex flex-col justify-between group"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-3xl font-black text-indigo-500/80">03</span>
                  <span className="px-3 py-1 text-[11px] font-mono font-semibold uppercase tracking-wider text-indigo-300 bg-indigo-950/60 border border-indigo-500/30 rounded-full">
                    RAG / LLM / AI Engineering
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                    Medical RAG Chatbot
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed font-light">
                    An end-to-end Retrieval-Augmented Generation chatbot designed to ground an LLM using academic medical texts. Integrates vector embeddings, Pinecone semantic index, LangChain orchestration, NVIDIA AI inference, Hugging Face embeddings, and a Streamlit UI.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-1">
                  {["Python", "LangChain", "NVIDIA AI", "Pinecone", "Streamlit", "Hugging Face"].map((t) => (
                    <span key={t} className="px-2.5 py-1 text-xs font-mono text-indigo-200 bg-indigo-950/60 border border-indigo-500/30 rounded-lg">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between">
                <a
                  href="https://github.com/BrovinQuadros"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-gray-400 hover:text-white transition-colors"
                >
                  <Github className="w-4 h-4" />
                  View Repository
                </a>
                <a
                  href="https://github.com/BrovinQuadros"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-white/5 hover:bg-indigo-600 hover:text-white text-gray-300 transition-all hover:scale-110"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>

            {/* PROJECT 04 — STUDENT SURVEY ANALYSIS */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-panel glass-panel-hover p-8 rounded-[32px] border border-orange-500/30 flex flex-col justify-between group"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-3xl font-black text-orange-500/80">04</span>
                  <span className="px-3 py-1 text-[11px] font-mono font-semibold uppercase tracking-wider text-orange-300 bg-orange-950/60 border border-orange-500/30 rounded-full">
                    Data Analytics / Visualization
                  </span>
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-mono text-orange-400 uppercase tracking-widest block">
                    India vs Abroad Studies
                  </span>
                  <h3 className="text-2xl font-bold text-white group-hover:text-orange-300 transition-colors">
                    Student Survey Analysis
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed font-light">
                    Primary-data analysis exploring student preferences for higher education in India versus abroad. Features primary data collection via Google Forms, data cleaning, transformation, and Exploratory Data Analysis in Python/Pandas, ending with an interactive Tableau dashboard.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-1">
                  {["Google Forms", "Python", "Pandas", "Tableau", "EDA"].map((t) => (
                    <span key={t} className="px-2.5 py-1 text-xs font-mono text-orange-200 bg-orange-950/60 border border-orange-500/30 rounded-lg">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between">
                <a
                  href="https://github.com/BrovinQuadros"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-gray-400 hover:text-white transition-colors"
                >
                  <Github className="w-4 h-4" />
                  View Repository
                </a>
                <a
                  href="https://github.com/BrovinQuadros"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-white/5 hover:bg-orange-500 hover:text-white text-gray-300 transition-all hover:scale-110"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
