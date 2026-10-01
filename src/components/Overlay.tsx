"use client";

import React from "react";
import { motion, MotionValue, useTransform } from "framer-motion";
import { Github, Linkedin, Mail, Download, Sparkles, ChevronDown, Cpu, BarChart3, Layers } from "lucide-react";

interface OverlayProps {
  scrollProgress: MotionValue<number>;
}

export const Overlay: React.FC<OverlayProps> = ({ scrollProgress }) => {
  // Section 1: Hero Intro (0% - 20%)
  const opacity1 = useTransform(scrollProgress, [0, 0.14, 0.22], [1, 1, 0]);
  const scale1 = useTransform(scrollProgress, [0, 0.22], [1, 0.96]);
  const y1 = useTransform(scrollProgress, [0, 0.22], [0, -30]);

  // Section 2: AI Engineering (25% - 45%)
  const opacity2 = useTransform(scrollProgress, [0.24, 0.32, 0.40, 0.46], [0, 1, 1, 0]);
  const x2 = useTransform(scrollProgress, [0.24, 0.32, 0.40, 0.46], [-50, 0, 0, -30]);

  // Section 3: Data Analytics (50% - 70%)
  const opacity3 = useTransform(scrollProgress, [0.48, 0.56, 0.64, 0.70], [0, 1, 1, 0]);
  const x3 = useTransform(scrollProgress, [0.48, 0.56, 0.64, 0.70], [50, 0, 0, 30]);

  // Section 4: AI + Data (74% - 92%)
  const opacity4 = useTransform(scrollProgress, [0.72, 0.80, 0.88, 0.95], [0, 1, 1, 0]);
  const scale4 = useTransform(scrollProgress, [0.72, 0.80], [0.95, 1]);

  return (
    <div className="absolute inset-0 z-10 pointer-events-none w-full h-full flex items-center justify-center p-6 md:p-12">
      {/* SECTION 1: HERO INTRO (CENTERED COMPOSITION) */}
      <motion.div
        style={{ opacity: opacity1, scale: scale1, y: y1 }}
        className="w-full max-w-4xl flex flex-col items-center text-center space-y-5 md:space-y-6 pt-8 md:pt-12"
      >
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 text-sky-400 animate-pulse" />
          <span className="text-xs md:text-sm font-medium tracking-wide text-gray-300">
            Portfolio 2026
          </span>
        </div>

        {/* Heading & Subtitle */}
        <div className="space-y-3">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white drop-shadow-2xl font-sans">
            Brovin Henry Quadros
          </h1>

          <div className="inline-block bg-gradient-to-r from-sky-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[40px] tracking-tight">
            AI Engineer & Data Analyst
          </div>
        </div>

        {/* Tagline */}
        <p className="text-lg md:text-2xl text-gray-300 font-light max-w-2xl leading-relaxed drop-shadow-md">
          Building intelligent systems. Turning data into insights.
        </p>

        {/* Skill Pills (4 Pill-Shaped Badges) */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 max-w-3xl pt-1">
          {["Machine Learning", "Generative AI", "LLMs", "Data Analytics"].map((item) => (
            <span
              key={item}
              className="px-4 py-1.5 text-xs md:text-sm font-medium text-sky-200 bg-sky-950/60 border border-sky-500/30 rounded-full backdrop-blur-md shadow-sm"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Action Buttons: GitHub | LinkedIn | Download Resume | Contact Me */}
        <div className="pointer-events-auto flex flex-wrap items-center justify-center gap-3.5 md:gap-4 pt-4">
          <a
            href="https://github.com/BrovinQuadros"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white font-medium text-xs md:text-sm transition-all hover:scale-105 active:scale-95 shadow-lg backdrop-blur-md"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/brovinquadros"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 rounded-full bg-sky-600 hover:bg-sky-500 border border-sky-400/40 text-white font-medium text-xs md:text-sm transition-all hover:scale-105 active:scale-95 shadow-lg shadow-sky-500/20 backdrop-blur-md"
          >
            <Linkedin className="w-4 h-4" />
            LinkedIn
          </a>
          <a
            href="/resume.pdf"
            download="Brovin_Henry_Quadros_Resume.pdf"
            className="flex items-center gap-2 px-5 py-3 rounded-full bg-indigo-600/80 hover:bg-indigo-500 border border-indigo-400/40 text-white font-medium text-xs md:text-sm transition-all hover:scale-105 active:scale-95 shadow-lg shadow-indigo-500/25 backdrop-blur-md"
          >
            <Download className="w-4 h-4" />
            Download Resume
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-sky-500 via-indigo-600 to-purple-600 hover:from-sky-400 hover:to-purple-500 text-white font-medium text-xs md:text-sm transition-all hover:scale-105 active:scale-95 shadow-lg shadow-indigo-500/25"
          >
            <Mail className="w-4 h-4" />
            Contact Me
          </a>
        </div>
      </motion.div>

      {/* Global Scroll Indicator (Bottom Center) */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-gray-400 text-[11px] font-mono tracking-widest uppercase animate-bounce pointer-events-none">
        <span>SCROLL TO EXPLORE</span>
        <ChevronDown className="w-4 h-4 text-sky-400" />
      </div>

      {/* SECTION 2: AI ENGINEERING (LEFT ALIGNED) */}
      <motion.div
        style={{ opacity: opacity2, x: x2 }}
        className="absolute left-[5vw] sm:left-[10vw] md:left-[14vw] lg:left-[17vw] inset-y-0 flex items-center justify-start pointer-events-none"
      >
        <div className="max-w-xl glass-panel p-8 md:p-10 rounded-3xl border border-sky-500/20 shadow-2xl space-y-5">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-sky-500/10 border border-sky-500/30 text-sky-400">
              <Cpu className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-mono text-sky-400 uppercase tracking-widest">
                AI Engineering Focus
              </span>
              <h2 className="text-2xl md:text-4xl font-bold text-white">
                I build intelligent systems.
              </h2>
            </div>
          </div>

          <p className="text-gray-300 text-sm md:text-base leading-relaxed">
            From machine learning models to Generative AI and LLM-powered applications. Architecting scalable RAG pipelines, fine-tuning open weights, and deploying production services.
          </p>

          <div className="flex flex-wrap gap-2 pt-1">
            {["Machine Learning", "Generative AI", "LLMs", "RAG", "LangChain"].map((kw) => (
              <span
                key={kw}
                className="px-3 py-1 text-xs font-mono font-medium text-sky-300 bg-sky-950/70 border border-sky-500/30 rounded-lg"
              >
                {kw}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* SECTION 3: DATA ANALYTICS (RIGHT ALIGNED) */}
      <motion.div
        style={{ opacity: opacity3, x: x3 }}
        className="absolute right-[5vw] sm:right-[10vw] md:right-[14vw] lg:right-[17vw] inset-y-0 flex items-center justify-end pointer-events-none"
      >
        <div className="max-w-xl glass-panel p-8 md:p-10 rounded-3xl border border-orange-500/20 shadow-2xl space-y-5">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-orange-500/10 border border-orange-500/30 text-orange-400">
              <BarChart3 className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-mono text-orange-400 uppercase tracking-widest">
                Data Analytics Focus
              </span>
              <h2 className="text-2xl md:text-4xl font-bold text-white">
                I turn data into insights.
              </h2>
            </div>
          </div>

          <p className="text-gray-300 text-sm md:text-base leading-relaxed">
            Using Python, SQL and modern analytics tools to transform data into meaningful insights. Performing rigorous EDA, statistical modeling, and interactive dashboard visual analytics.
          </p>

          <div className="flex flex-wrap gap-2 pt-1">
            {["Python", "SQL", "Pandas", "Power BI", "Tableau", "Data Visualization"].map((kw) => (
              <span
                key={kw}
                className="px-3 py-1 text-xs font-mono font-medium text-orange-300 bg-orange-950/70 border border-orange-500/30 rounded-lg"
              >
                {kw}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* SECTION 4: AI + DATA (CENTERED TRANSITION) */}
      <motion.div
        style={{ opacity: opacity4, scale: scale4 }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center space-y-5 pointer-events-none px-6"
      >
        <div className="max-w-2xl glass-panel p-8 md:p-12 rounded-3xl border border-indigo-500/30 shadow-2xl space-y-5 backdrop-blur-xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-mono uppercase tracking-widest">
            <Layers className="w-3.5 h-3.5" />
            Synergy & Solution Design
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            AI meets <span className="text-gradient-cyan">data.</span>
          </h2>

          <p className="text-gray-300 text-base md:text-lg font-light leading-relaxed">
            Combining artificial intelligence, analytics and engineering to build practical solutions. Explore selected case studies below.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {["AI Engineering", "Data Analytics", "RAG Systems", "BI Dashboards"].map((pill) => (
              <span
                key={pill}
                className="px-3 py-1 text-xs font-mono text-indigo-200 bg-indigo-950/60 border border-indigo-500/30 rounded-full"
              >
                {pill}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};
