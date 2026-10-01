"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, Building2, CheckCircle2, FolderGit2 } from "lucide-react";

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  points: string[];
  project: string;
  tech: string[];
}

const experiences: ExperienceItem[] = [
  {
    role: "AI Engineer Intern",
    company: "Engagesphere Technology Private Limited (Euron)",
    period: "Jan 2026 – Apr 2026",
    points: [
      "Worked on AI-based applications involving generative AI and data-driven systems.",
      "Developed and integrated intelligent features using large language models via APIs.",
      "Implemented prompt engineering techniques for context-aware responses.",
      "Collaborated with development teams to design scalable and modular AI solutions.",
    ],
    project: "WellNest AI",
    tech: ["Generative AI", "LLM APIs", "Prompt Engineering", "FastAPI", "Python"],
  },
  {
    role: "Data Analytics Intern",
    company: "CODELAB Systems",
    period: "December 2023",
    points: [
      "Worked with databases to store, access, manipulate and analyze data using Power BI tools.",
      "Assisted in data visualization, dashboard creation and generating insights for business decisions.",
      "Collaborated with cross-functional teams in an Agile development environment.",
    ],
    project: "Sales Performance Analysis Dashboard",
    tech: ["Power BI", "SQL", "Databases", "Data Visualization", "Agile"],
  },
];

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="relative py-28 bg-[#08090e] overflow-hidden border-t border-white/5">
      {/* Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-950/40 border border-sky-500/20 text-sky-400 font-mono text-xs uppercase tracking-widest"
          >
            <Briefcase className="w-3.5 h-3.5" />
            Career Journey
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            Work <span className="text-gradient-cyan">Experience</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl text-base font-light"
          >
            Factual internship roles in AI Engineering and Data Analytics.
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.role + exp.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="glass-panel glass-panel-hover p-8 md:p-10 rounded-3xl border border-white/10 relative"
            >
              <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                <div>
                  <span className="text-xs font-mono font-semibold text-sky-400 uppercase tracking-widest flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5" />
                    {exp.company}
                  </span>
                  <h3 className="text-2xl font-bold text-white mt-1">
                    {exp.role}
                  </h3>
                </div>

                <div className="flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-gray-300">
                  <Calendar className="w-3.5 h-3.5 text-sky-400" />
                  {exp.period}
                </div>
              </div>

              <ul className="space-y-3 mb-6">
                {exp.points.map((pt, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-300 leading-relaxed font-light">
                    <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-white/5 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs font-mono text-gray-400">
                  <FolderGit2 className="w-4 h-4 text-sky-400" />
                  Key Project: <span className="text-white font-medium">{exp.project}</span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 text-xs font-mono font-medium text-sky-300 bg-sky-950/40 border border-sky-500/20 rounded-lg"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
