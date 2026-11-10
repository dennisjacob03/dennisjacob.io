import React from 'react';
import { ArrowRight, Download, Eye, Sparkles, Code, Server, Database, CheckCircle2, ShieldCheck } from 'lucide-react';
import profilePic from '../assets/profile.jpg';

export default function Hero({ onOpenResume }) {
  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    const el = document.querySelector(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-[92vh] pt-32 pb-20 flex items-center justify-center overflow-hidden dev-grid-bg"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[550px] h-[350px] bg-blue-600/10 dark:bg-blue-600/15 blur-[120px] rounded-full pointer-events-none -z-10"></div>
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-indigo-600/10 dark:bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Status / Availability Badge */}
            {/* <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800/80 text-blue-700 dark:text-blue-300 text-xs font-semibold shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for Full Stack Opportunities & Internships</span>
            </div> */}

            {/* Small Introduction */}
            <div className="space-y-2">
              <p className="text-sm sm:text-base font-semibold text-blue-600 dark:text-blue-400 tracking-wide uppercase">
                Hello, I'm Dennis Jacob
              </p>
              
              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.1]">
                Full Stack Developer building <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 dark:from-blue-400 dark:via-indigo-300 dark:to-blue-300">modern, scalable</span> web experiences.
              </h1>
            </div>

            {/* Supporting Paragraph */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl font-normal leading-relaxed">
              Integrated MCA candidate at Amal Jyothi College of Engineering with hands-on internship experience. I specialize in frontend development, backend/API engineering, database architecture, and building practical technology solutions with an active interest in AI-powered systems.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
              <a
                href="#projects"
                onClick={(e) => handleScrollTo(e, '#projects')}
                className="px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm rounded-xl shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 hover:-translate-y-0.5 transition-all duration-200 inline-flex items-center gap-2 cursor-pointer"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                onClick={(e) => handleScrollTo(e, '#contact')}
                className="px-6 py-3.5 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-sm rounded-xl shadow-xs hover:-translate-y-0.5 transition-all duration-200 inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Let's Connect</span>
              </a>

              <button
                onClick={onOpenResume}
                className="px-5 py-3.5 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 font-semibold text-sm rounded-xl hover:bg-slate-100/80 dark:hover:bg-slate-800/80 transition-colors inline-flex items-center gap-2 cursor-pointer"
              >
                <Download className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>Download Resume</span>
              </button>
            </div>

            {/* Quick Metrics Bar */}
            <div className="pt-6 border-t border-slate-200/80 dark:border-slate-800/80 grid grid-cols-3 gap-4 max-w-lg">
              <div>
                <div className="text-2xl font-extrabold text-slate-900 dark:text-white">2+</div>
                <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Internship Roles</div>
              </div>
              <div>
                <div className="text-2xl font-extrabold text-blue-600 dark:text-blue-400">5+</div>
                <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Production & Academic Projects</div>
              </div>
              <div>
                <div className="text-2xl font-extrabold text-slate-900 dark:text-white">2027</div>
                <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Expected MCA Grad</div>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Portrait */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            <div className="relative w-full max-w-[380px] sm:max-w-[420px]">
              
              {/* Subtle Geometric Frame / Background Halo */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-indigo-600/20 dark:from-blue-500/20 dark:to-indigo-500/10 rounded-3xl blur-xl -rotate-3 scale-95"></div>
              
              {/* Profile Card Frame */}
              <div className="relative bg-white dark:bg-slate-900/90 rounded-3xl p-3.5 border border-slate-200 dark:border-slate-800 shadow-xl shadow-slate-900/5 dark:shadow-black/40">
                <div className="relative overflow-hidden rounded-2xl aspect-square bg-slate-100 dark:bg-slate-800">
                  <img
                    src={profilePic}
                    alt="Dennis Jacob - Full Stack Developer"
                    className="w-full h-full object-cover object-top hover:scale-102 transition-transform duration-500"
                    loading="eager"
                  />
                  
                  {/* Subtle Gradient Overlays for Natural Integration */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-60"></div>

                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between p-2.5 rounded-xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-white/40 dark:border-slate-700/60 shadow-lg">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
                      <span className="text-xs font-bold text-slate-900 dark:text-white">Dennis Jacob</span>
                    </div>
                    <span className="text-[11px] font-semibold text-blue-600 dark:text-blue-400">Integrated MCA</span>
                  </div>
                </div>
              </div>

              {/* Floating Badge 1: Frontend & Backend */}
              <div className="absolute -top-4 -left-4 sm:-left-6 bg-white dark:bg-slate-900 p-3 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-lg shadow-blue-500/10 flex items-center gap-3 animate-float">
                <div className="p-2 rounded-xl bg-blue-50 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400">
                  <Code className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-slate-900 dark:text-white">Angular & React</div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400">Frontend Interfaces</div>
                </div>
              </div>

              {/* Floating Badge 2: APIs & Backend */}
              <div className="absolute -bottom-4 -right-2 sm:-right-4 bg-white dark:bg-slate-900 p-3 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-lg shadow-indigo-500/10 flex items-center gap-3 animate-float-delayed">
                <div className="p-2 rounded-xl bg-indigo-50 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400">
                  <Server className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-slate-900 dark:text-white">Node.js & REST APIs</div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400">Scalable Backends</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
