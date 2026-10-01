"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, BarChart3, Database, Layers, Sparkles, SlidersHorizontal, Terminal, Wrench } from "lucide-react";

interface SkillCategory {
  id: string;
  title: string;
  icon: React.ReactNode;
  color: "sky" | "orange" | "indigo" | "purple";
  skills: string[];
}

const categories: SkillCategory[] = [
  {
    id: "ai-engineering",
    title: "AI Engineering",
    icon: <Cpu className="w-5 h-5 text-sky-400" />,
    color: "sky",
    skills: [
      "Python",
      "Machine Learning",
      "Generative AI",
      "LLMs",
      "RAG",
      "LangChain",
      "Hugging Face",
      "FastAPI",
      "NVIDIA AI",
      "Pinecone",
    ],
  },
  {
    id: "data-analytics",
    title: "Data Analytics",
    icon: <BarChart3 className="w-5 h-5 text-orange-400" />,
    color: "orange",
    skills: [
      "Python",
      "Pandas",
      "NumPy",
      "SQL",
      "Excel",
      "Statistics",
      "Exploratory Data Analysis",
      "Power BI",
      "Tableau",
      "Matplotlib",
      "Seaborn",
      "Plotly",
    ],
  },
  {
    id: "bi-data-prep",
    title: "BI & Data Preparation",
    icon: <SlidersHorizontal className="w-5 h-5 text-indigo-400" />,
    color: "indigo",
    skills: [
      "Power Query",
      "DAX",
      "Data Cleaning",
      "Data Transformation",
      "Data Modeling",
    ],
  },
  {
    id: "databases-tools",
    title: "Databases & Tools",
    icon: <Database className="w-5 h-5 text-purple-400" />,
    color: "purple",
    skills: [
      "MySQL",
      "MongoDB",
      "PySpark",
      "Jupyter Notebook",
      "Git",
      "GitHub",
    ],
  },
];

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("all");

  return (
    <section id="skills" className="relative py-28 bg-[#08090e] overflow-hidden border-t border-white/5">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-sky-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-950/40 border border-sky-500/20 text-sky-400 font-mono text-xs uppercase tracking-widest"
          >
            <Layers className="w-3.5 h-3.5" />
            Capabilities
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            Skills & <span className="text-gradient-cyan">Expertise</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl text-base font-light"
          >
            Organized across technical domains in Artificial Intelligence, Data Science, Business Intelligence, and Software Engineering.
          </motion.p>

          {/* Tab Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl glass-panel border border-white/10 mt-4"
          >
            <button
              onClick={() => setActiveTab("all")}
              className={`px-4 py-2 rounded-xl text-xs md:text-sm font-medium transition-all ${
                activeTab === "all"
                  ? "bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-lg"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              All Categories
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs md:text-sm font-medium transition-all ${
                  activeTab === cat.id
                    ? "bg-white/15 border border-white/20 text-white shadow-lg"
                    : "text-gray-400 hover:text-gray-200"
                }`}
              >
                {cat.icon}
                {cat.title}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories
            .filter((cat) => activeTab === "all" || activeTab === cat.id)
            .map((cat, index) => {
              const borderAccent =
                cat.color === "sky"
                  ? "border-sky-500/20 hover:border-sky-500/40"
                  : cat.color === "orange"
                  ? "border-orange-500/20 hover:border-orange-500/40"
                  : cat.color === "indigo"
                  ? "border-indigo-500/20 hover:border-indigo-500/40"
                  : "border-purple-500/20 hover:border-purple-500/40";

              return (
                <motion.div
                  key={cat.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className={`glass-panel glass-panel-hover p-8 rounded-3xl border ${borderAccent} relative group space-y-6`}
                >
                  <div className="flex items-center gap-3.5 pb-4 border-b border-white/5">
                    <div className="p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-105 transition-transform">
                      {cat.icon}
                    </div>
                    <div>
                      <span className="text-[11px] font-mono uppercase tracking-widest text-gray-400">
                        Category 0{index + 1}
                      </span>
                      <h3 className="text-xl font-bold text-white group-hover:text-sky-300 transition-colors">
                        {cat.title}
                      </h3>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2.5">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3.5 py-1.5 text-xs font-mono font-medium text-gray-200 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all duration-200 hover:scale-105"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
        </div>
      </div>
    </section>
  );
};
