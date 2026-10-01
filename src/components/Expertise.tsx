"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, BarChart3, Database, Layers, Sparkles, Terminal, Code } from "lucide-react";

interface SkillItem {
  name: string;
  category: "ai" | "analytics";
  level: "Advanced" | "Proficient" | "Expert";
  desc: string;
  icon?: string;
}

const skillsList: SkillItem[] = [
  // AI Engineering
  { name: "Machine Learning", category: "ai", level: "Expert", desc: "Supervised/unsupervised algorithms, model evaluation & feature engineering." },
  { name: "Generative AI", category: "ai", level: "Expert", desc: "Prompt optimization, synthetic data generation & fine-tuning workflows." },
  { name: "LLMs", category: "ai", level: "Expert", desc: "Open-source & commercial model integration, agentic frameworks." },
  { name: "RAG Systems", category: "ai", level: "Expert", desc: "Retrieval-Augmented Generation with semantic search & context routing." },
  { name: "LangChain", category: "ai", level: "Advanced", desc: "Complex chain orchestration, agentic memory & tool bindings." },
  { name: "Hugging Face", category: "ai", level: "Advanced", desc: "Transformers, model hub integration & tokenizer pipelines." },
  { name: "Scikit-learn", category: "ai", level: "Expert", desc: "Classification, regression, clustering & preprocessing pipelines." },
  { name: "FastAPI", category: "ai", level: "Advanced", desc: "Async Python REST APIs, OpenAPI schemas & high-performance endpoints." },
  { name: "NVIDIA AI", category: "ai", level: "Advanced", desc: "Accelerated computing & enterprise AI microservices." },
  { name: "Pinecone", category: "ai", level: "Advanced", desc: "Vector indexing, similarity search & metadata filtering." },

  // Data Analytics
  { name: "Python", category: "analytics", level: "Expert", desc: "Primary language for data manipulation, AI scripts & automation." },
  { name: "SQL", category: "analytics", level: "Advanced", desc: "Complex queries, relational schema design, aggregations & joins." },
  { name: "Pandas", category: "analytics", level: "Expert", desc: "Data wrangling, series operations, cleaning & time-series analysis." },
  { name: "NumPy", category: "analytics", level: "Expert", desc: "High-performance vector numerical computations & matrix math." },
  { name: "Statistics", category: "analytics", level: "Advanced", desc: "Hypothesis testing, probability distributions, variance & correlation." },
  { name: "Power BI", category: "analytics", level: "Proficient", desc: "DAX modeling, executive reports & data visualization." },
  { name: "Tableau", category: "analytics", level: "Advanced", desc: "Interactive dashboards, parameter controls & calculated fields." },
  { name: "Data Visualization", category: "analytics", level: "Expert", desc: "Communicating insights through intuitive charts & exploratory plots." },
];

export const Expertise: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"all" | "ai" | "analytics">("all");

  const filteredSkills = activeTab === "all" 
    ? skillsList 
    : skillsList.filter((s) => s.category === activeTab);

  return (
    <section id="skills" className="relative py-28 bg-[#08090e] overflow-hidden border-t border-white/5">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col items-center text-center space-y-4 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-950/40 border border-sky-500/20 text-sky-400 font-mono text-xs uppercase tracking-widest"
          >
            <Layers className="w-3.5 h-3.5" />
            Technical Capability
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            Core Technical <span className="text-gradient-cyan">Expertise</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl text-base font-light"
          >
            Specialized toolsets across AI Engineering and Data Analytics designed for accuracy, speed, and real-world impact.
          </motion.p>

          {/* Interactive Category Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-2 p-1.5 rounded-full glass-panel border border-white/10 mt-6"
          >
            <button
              onClick={() => setActiveTab("all")}
              className={`px-5 py-2 rounded-full text-xs md:text-sm font-medium transition-all ${
                activeTab === "all"
                  ? "bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-lg shadow-sky-500/20"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              All Expertise ({skillsList.length})
            </button>
            <button
              onClick={() => setActiveTab("ai")}
              className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs md:text-sm font-medium transition-all ${
                activeTab === "ai"
                  ? "bg-sky-500/20 border border-sky-500/50 text-sky-300 shadow-lg shadow-sky-500/20"
                  : "text-gray-400 hover:text-sky-300"
              }`}
            >
              <Cpu className="w-4 h-4" />
              AI Engineering (10)
            </button>
            <button
              onClick={() => setActiveTab("analytics")}
              className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs md:text-sm font-medium transition-all ${
                activeTab === "analytics"
                  ? "bg-orange-500/20 border border-orange-500/50 text-orange-300 shadow-lg shadow-orange-500/20"
                  : "text-gray-400 hover:text-orange-300"
              }`}
            >
              <BarChart3 className="w-4 h-4" />
              Data Analytics (8)
            </button>
          </motion.div>
        </div>

        {/* Skills Visual Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          <AnimatePresence>
            {filteredSkills.map((skill, index) => {
              const isAi = skill.category === "ai";
              return (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25, delay: index * 0.03 }}
                  className={`glass-panel glass-panel-hover p-6 rounded-2xl border ${
                    isAi
                      ? "hover:border-sky-500/40 hover:shadow-sky-500/10"
                      : "hover:border-orange-500/40 hover:shadow-orange-500/10"
                  } relative group flex flex-col justify-between`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-semibold uppercase tracking-wider text-gray-400 flex items-center gap-1.5">
                        {isAi ? (
                          <Cpu className="w-3.5 h-3.5 text-sky-400" />
                        ) : (
                          <BarChart3 className="w-3.5 h-3.5 text-orange-400" />
                        )}
                        {isAi ? "AI Engineering" : "Data Analytics"}
                      </span>
                      <span
                        className={`px-2 py-0.5 text-[10px] font-mono rounded border ${
                          isAi
                            ? "bg-sky-950/60 text-sky-300 border-sky-500/30"
                            : "bg-orange-950/60 text-orange-300 border-orange-500/30"
                        }`}
                      >
                        {skill.level}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-white group-hover:text-sky-300 transition-colors">
                      {skill.name}
                    </h3>

                    <p className="text-xs text-gray-400 leading-relaxed font-light">
                      {skill.desc}
                    </p>
                  </div>

                  {/* Bottom glowing underline on hover */}
                  <div
                    className={`mt-4 h-[2px] w-0 group-hover:w-full transition-all duration-300 ${
                      isAi ? "bg-sky-400" : "bg-orange-400"
                    }`}
                  />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
