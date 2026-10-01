"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Award, Calendar, Building, CheckCircle } from "lucide-react";

interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  cgpa: string;
}

const educationData: EducationItem[] = [
  {
    degree: "MSc in Data Science",
    institution: "St Aloysius Institute of Management and IT (AIMIT)",
    period: "08/2024 – 04/2026",
    cgpa: "8.74",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "St Aloysius College (Autonomous)",
    period: "08/2021 – 04/2024",
    cgpa: "8.00",
  },
];

const certifications = [
  "Python For All",
  "Full Stack Data Science",
];

export const Education: React.FC = () => {
  return (
    <section id="education" className="relative py-20 bg-[#08090e] overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col items-center text-center space-y-3 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-950/40 border border-indigo-500/20 text-indigo-400 font-mono text-xs uppercase tracking-widest"
          >
            <GraduationCap className="w-3.5 h-3.5" />
            Academic Background & Certifications
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            Education & <span className="text-gradient-cyan">Certifications</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-10">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass-panel glass-panel-hover p-6 rounded-2xl border border-white/10 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-indigo-400 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {edu.period}
                  </span>
                  <span className="px-2.5 py-0.5 text-xs font-mono font-semibold text-emerald-300 bg-emerald-950/60 border border-emerald-500/30 rounded-full flex items-center gap-1">
                    <Award className="w-3 h-3 text-emerald-400" />
                    CGPA: {edu.cgpa}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white">
                  {edu.degree}
                </h3>

                <p className="text-xs font-mono text-gray-400 flex items-center gap-1.5">
                  <Building className="w-3.5 h-3.5 text-gray-400" />
                  {edu.institution}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto glass-panel p-6 rounded-2xl border border-sky-500/20 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-sky-500/10 border border-sky-500/30 text-sky-400">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-mono text-sky-400 uppercase tracking-widest block">Recognitions</span>
              <h4 className="text-base font-bold text-white">Certifications & Training</h4>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {certifications.map((cert) => (
              <span
                key={cert}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium text-sky-300 bg-sky-950/60 border border-sky-500/30 rounded-lg"
              >
                <CheckCircle className="w-3.5 h-3.5 text-sky-400" />
                {cert}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
