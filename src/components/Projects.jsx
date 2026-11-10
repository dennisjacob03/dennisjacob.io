import React, { useState } from 'react';
import { 
  ExternalLink, 
  Sparkles, 
  Layers, 
  CheckCircle2, 
  X, 
  Calendar, 
  Star, 
  Cpu, 
  Flame, 
  ArrowRight,
  ShieldAlert,
  Ticket,
  Trophy,
  FileSpreadsheet,
  CalendarDays
} from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 'resqnet',
      title: 'ResQNet – Smart Animal Rescue & Welfare Platform',
      subtitle: 'Final Year Major Project',
      status: 'Under Development',
      statusType: 'in-progress',
      isFeatured: true,
      category: 'Academic Projects',
      filterTags: ['Full Stack', 'Backend', 'Academic Projects'],
      icon: ShieldAlert,
      tagline: 'Comprehensive IoT & AI-powered rescue, veterinary, and adoption platform',
      shortDescription: 'A comprehensive web platform designed to streamline animal rescue operations, shelter and veterinary management, and pet adoption workflows with AI recognition and IoT tracking.',
      fullDescription: 'ResQNet is Dennis\'s flagship final-year engineering project. It bridges emergency response teams, animal shelters, veterinary clinics, and pet adopters into a unified, intelligent digital ecosystem. The platform leverages machine learning for image-based animal breed/wound recognition and IoT-enabled smart collar sensors for real-time health and geo-tracking.',
      technologies: ['MERN Stack', 'Firebase', 'AI Recognition', 'IoT Smart Sensors', 'Node.js', 'Express.js', 'React', 'MongoDB'],
      capabilities: [
        'Animal rescue management & emergency dispatch coordinator',
        'Shelter management & volunteer workforce workflow',
        'Veterinary clinic management & digital medical record management',
        'Pet adoption workflows & applicant verification',
        'AI-based animal breed, health, and wound recognition',
        'IoT-enabled smart collar integration for live telemetry and health monitoring',
        'Animal tracking and geofence monitoring'
      ],
      githubUrl: 'https://github.com/dennisjacob03',
      demoUrl: null,
      color: 'blue'
    },
    {
      id: 'spoton',
      title: 'SpotOn – Stadium Ticket Booking System',
      subtitle: 'Mini Project — 2025',
      status: 'Completed',
      statusType: 'completed',
      isFeatured: false,
      category: 'Academic Projects',
      filterTags: ['Full Stack', 'Frontend', 'Academic Projects'],
      icon: Ticket,
      tagline: 'Interactive stadium seat reservation & digital ticket issuance platform',
      shortDescription: 'A web-based stadium ticket booking platform featuring dynamic real-time seat selection, payment handling, and instant digital ticketing.',
      fullDescription: 'SpotOn enables sports and event organizers to manage stadium seating layouts dynamically. Users can browse seat tiers in real-time, authenticate securely via Google OAuth, complete online transactions, and receive digital tickets with verification credentials.',
      technologies: ['MERN Stack', 'Firebase Auth', 'React', 'Node.js', 'Express', 'MongoDB'],
      capabilities: [
        'Secure user authentication with Google Sign-In',
        'Automated email verification workflows',
        'Dynamic visual stadium seat selection matrix',
        'Online payment handling & transaction tracking',
        'Digital ticket generation with scannable verification'
      ],
      githubUrl: 'https://github.com/dennisjacob03',
      demoUrl: 'https://spoton-phi.vercel.app/',
      color: 'emerald'
    },
    {
      id: 'leetcode-platform',
      title: '30 Days LeetCode Challenge Platform',
      subtitle: 'Team IMPACT Technical Initiative',
      status: 'Under Development',
      statusType: 'in-progress',
      isFeatured: false,
      category: 'Personal Projects',
      filterTags: ['Full Stack', 'Backend', 'Personal Projects'],
      icon: Trophy,
      tagline: 'Automated competitive coding competition management & live leaderboard',
      shortDescription: 'A custom competition management platform developed for the Team IMPACT initiative to track and rank student coding performance across a 30-day LeetCode sprint.',
      fullDescription: 'Built to empower campus developer communities, this platform monitors student LeetCode profiles, tracks solved problem difficulties, computes scoring matrices, and generates dynamic campus-wide leaderboards with streak badges.',
      technologies: ['React', 'Node.js', 'Express', 'Firebase', 'REST APIs', 'Tailwind CSS'],
      capabilities: [
        'Student LeetCode profile tracking & problem verification',
        'Completed problem monitoring by difficulty (Easy/Medium/Hard)',
        'Manual admin point adjustments and penalty controls',
        'Automated real-time point updating & streak calculations',
        'Live leaderboard generation & competition analytics'
      ],
      githubUrl: 'https://github.com/dennisjacob03',
      demoUrl: null,
      color: 'amber'
    },
    {
      id: 'daykeeper',
      title: 'DayKeeper – Personal Event Calendar',
      subtitle: 'Productivity Application — 2026',
      status: 'Completed',
      statusType: 'completed',
      isFeatured: false,
      category: 'Personal Projects',
      filterTags: ['Full Stack', 'Frontend', 'Personal Projects'],
      icon: CalendarDays,
      tagline: 'Modern event scheduling with Firebase OAuth & automated reminders',
      shortDescription: 'A calendar-based event management application featuring automated reminders, real-time event tracking, and secure Firebase authentication.',
      fullDescription: 'DayKeeper is a modern personal planner designed for clean task management and event coordination. Users can create, categorize, and schedule events with instant synchronization across devices and automated reminder alerts.',
      technologies: ['React', 'Node.js', 'Firebase Auth', 'Firestore', 'REST APIs', 'CSS3'],
      capabilities: [
        'Firebase OAuth authentication & secure cloud data storage',
        'Real-time event tracking and multi-view calendar rendering',
        'Task scheduling with customizable recurring intervals',
        'Automated reminders & event notification alerts',
        'Clean, accessible, and responsive user interface'
      ],
      githubUrl: 'https://github.com/dennisjacob03',
      demoUrl: 'https://day-keeper-brown.vercel.app/',
      color: 'indigo'
    },
    {
      id: 'formforge',
      title: 'FormForge – Form Generator Extension',
      subtitle: 'Productivity Automation Tool',
      status: 'Under Development',
      statusType: 'in-progress',
      isFeatured: false,
      category: 'Personal Projects',
      filterTags: ['Frontend', 'Personal Projects'],
      icon: FileSpreadsheet,
      tagline: 'Automated spreadsheet-to-Google Forms generation tool',
      shortDescription: 'A productivity-focused web application that converts Excel data directly into Google Forms, eliminating tedious manual form configuration.',
      fullDescription: 'FormForge automates the creation of complex multi-question surveys, quizzes, and institutional forms by parsing tabular Excel/CSV schema and generating native Google Forms via automated workflows.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Google Apps Script', 'Excel Parser'],
      capabilities: [
        'Excel schema parsing (.xlsx/.csv to structured questions)',
        'Automated Google Form creation via API endpoints',
        'Supports multiple choice, checkbox, dropdown, and text fields',
        'Drastically reduces manual data-entry work for educators and admins',
        'Productivity-focused automated workflow'
      ],
      githubUrl: 'https://github.com/dennisjacob03',
      demoUrl: null,
      color: 'purple'
    }
  ];

  const filterOptions = [
    'All',
    'Full Stack',
    'Frontend',
    'Backend',
    'Personal Projects',
    'Academic Projects'
  ];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.filterTags.includes(activeFilter) || p.category === activeFilter);

  const featuredProject = projects.find(p => p.isFeatured);
  const regularProjects = filteredProjects.filter(p => !p.isFeatured || activeFilter !== 'All');

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-xs font-bold tracking-wide uppercase">
            <span>Portfolio Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Featured Projects & Technical Works
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base">
            Production web platforms, academic milestones, and community developer tools.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-12">
          {filterOptions.map((option) => (
            <button
              key={option}
              onClick={() => setActiveFilter(option)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                activeFilter === option
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/25'
                  : 'bg-white dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700/80'
              }`}
            >
              {option}
            </button>
          ))}
        </div>

        {/* Featured Project Showcase (Hero Card) when 'All' is active */}
        {activeFilter === 'All' && featuredProject && (
          <div className="mb-12">
            <div className="relative rounded-3xl bg-gradient-to-br from-blue-900 via-slate-900 to-indigo-950 text-white p-8 sm:p-10 lg:p-12 border border-blue-500/30 shadow-2xl shadow-blue-950/40 overflow-hidden">
              {/* Background ambient lighting */}
              <div className="absolute -top-20 -right-20 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl pointer-events-none"></div>

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="px-3 py-1 rounded-full bg-blue-500/30 border border-blue-400/40 text-blue-300 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                      <Star className="w-3.5 h-3.5 fill-blue-300" />
                      Featured Major Project
                    </span>
                    <span className="px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-300 text-xs font-semibold">
                      Final Year MCA Project • Under Development
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
                    {featuredProject.title}
                  </h3>

                  <p className="text-blue-100/90 text-sm sm:text-base leading-relaxed">
                    {featuredProject.shortDescription}
                  </p>

                  {/* Capabilities highlights */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                    {featuredProject.capabilities.slice(0, 4).map((cap, cIdx) => (
                      <div key={cIdx} className="flex items-center gap-2 text-xs text-blue-200">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 pt-3">
                    {featuredProject.technologies.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white/10 text-white border border-white/10"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Action buttons */}
                  <div className="pt-4 flex flex-wrap items-center gap-3">
                    <button
                      onClick={() => setSelectedProject(featuredProject)}
                      className="px-5 py-2.5 bg-blue-500 hover:bg-blue-400 text-white font-bold text-xs rounded-xl transition-all shadow-md shadow-blue-500/30 cursor-pointer flex items-center gap-2"
                    >
                      <span>Explore Full Project Specs</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <a
                      href={featuredProject.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs rounded-xl border border-white/20 transition-colors inline-flex items-center gap-2"
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>GitHub</span>
                    </a>
                  </div>
                </div>

                {/* Right Visual Card for Featured Project */}
                <div className="lg:col-span-5 bg-slate-900/80 backdrop-blur-md rounded-2xl p-6 border border-blue-400/20 shadow-xl space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-700">
                    <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">
                      Platform Architecture
                    </span>
                    <span className="text-xs font-mono text-slate-400">v1.0-dev</span>
                  </div>

                  <div className="space-y-3 text-xs text-slate-300">
                    <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700/80">
                      <div className="font-bold text-white mb-1 flex items-center gap-1.5">
                        <Cpu className="w-4 h-4 text-blue-400" />
                        AI Breed & Wound Recognition
                      </div>
                      <div className="text-slate-400">Automated classification to expedite rescue assessment and treatment history.</div>
                    </div>

                    <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700/80">
                      <div className="font-bold text-white mb-1 flex items-center gap-1.5">
                        <Layers className="w-4 h-4 text-emerald-400" />
                        IoT Smart Collar Telemetry
                      </div>
                      <div className="text-slate-400">Live geo-tracking and heart/temperature sensor telemetry sync.</div>
                    </div>

                    <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700/80">
                      <div className="font-bold text-white mb-1 flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-amber-400" />
                        End-to-End Adoption & Shelter System
                      </div>
                      <div className="text-slate-400">Integrated verification, medical charts, and volunteer shift coordination.</div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        )}

        {/* Regular Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularProjects.map((project) => {
            const Icon = project.icon;
            return (
              <div
                key={project.id}
                className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all duration-300 group flex flex-col justify-between overflow-hidden"
              >
                <div className="p-6 sm:p-7 space-y-4">
                  {/* Top Bar with Icon & Status */}
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-2xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>

                    <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-semibold ${
                      project.statusType === 'completed'
                        ? 'bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800'
                        : 'bg-amber-50 dark:bg-amber-950/50 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800'
                    }`}>
                      {project.status}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 mt-1">
                      {project.subtitle}
                    </p>
                  </div>

                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
                    {project.shortDescription}
                  </p>

                  {/* Tech stack pills */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.technologies.slice(0, 4).map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-lg text-[11px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 rounded-lg text-[11px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-400">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Footer with Details Modal & External Link */}
                <div className="px-6 py-4 border-t border-slate-100 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/50 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors cursor-pointer flex items-center gap-1"
                  >
                    <span>View Specifications</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex items-center gap-2">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-xs"
                        title="Open Live Demo"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors"
                      title="View GitHub Repository"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-sm animate-fadeIn"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200 dark:border-slate-800 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="space-y-2 pr-8">
              <div className="flex items-center gap-2">
                <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${
                  selectedProject.statusType === 'completed'
                    ? 'bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800'
                    : 'bg-amber-50 dark:bg-amber-950/50 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800'
                }`}>
                  {selectedProject.status}
                </span>
                <span className="text-xs font-semibold text-slate-500">
                  {selectedProject.subtitle}
                </span>
              </div>

              <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                {selectedProject.title}
              </h3>
              <p className="text-xs font-semibold text-blue-600 dark:text-blue-400">
                {selectedProject.tagline}
              </p>
            </div>

            {/* Modal Content */}
            <div className="my-6 space-y-6 text-sm text-slate-700 dark:text-slate-300">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-2">
                  Project Overview & Architecture
                </h4>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  {selectedProject.fullDescription}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-3">
                  Key Capabilities & Features
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm">
                  {selectedProject.capabilities.map((cap, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-2">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-xl text-xs font-mono bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                {selectedProject.demoUrl && (
                  <a
                    href={selectedProject.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl transition-all shadow-md shadow-blue-600/20 inline-flex items-center gap-2"
                  >
                    <span>Launch Live Demo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-semibold text-xs rounded-xl transition-colors inline-flex items-center gap-2"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>View Repository</span>
                </a>
              </div>

              <button
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2 text-xs font-semibold text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
              >
                Close Window
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
