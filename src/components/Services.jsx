import React from 'react';
import { Globe, Layout, Server, Database, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Globe,
      title: 'Full Stack Web Development',
      description: 'Design and develop complete end-to-end web applications, connecting intuitive user interfaces with robust, high-performance backend architectures.',
      tags: ['MERN Stack', 'Angular + Node', 'End-to-End Delivery', 'System Architecture'],
      features: [
        'Complete web application lifecycle from idea to deployment',
        'Cohesive frontend and backend integration',
        'State management & clean code structure'
      ]
    },
    {
      icon: Layout,
      title: 'Frontend & UI Development',
      description: 'Build responsive, engaging, and dynamic interfaces using Angular, React, modern CSS, and Bootstrap with a focus on usability and performance.',
      tags: ['Angular', 'React', 'Tailwind CSS', 'Bootstrap', 'Responsive Design'],
      features: [
        'Component-driven, reusable UI architecture',
        'Mobile-first responsive layouts across all viewports',
        'Intuitive client-side routing and state handling'
      ]
    },
    {
      icon: Server,
      title: 'Backend & API Engineering',
      description: 'Develop secure and scalable server-side logic and RESTful APIs using Node.js and Express.js for production-grade web systems.',
      tags: ['Node.js', 'Express.js', 'REST APIs', 'JWT Auth', 'Middleware'],
      features: [
        'RESTful API design with clean endpoints and JSON schema',
        'Authentication, authorization, and route protection',
        'High-concurrency request handling & optimization'
      ]
    },
    {
      icon: Database,
      title: 'Database Design & Architecture',
      description: 'Design and manage efficient data storage solutions using MongoDB, Firebase, and MySQL, tailored to the unique performance and scaling needs of each project.',
      tags: ['MongoDB', 'MySQL', 'Firebase Firestore', 'Schema Design'],
      features: [
        'Selection of relational vs. NoSQL based on project criteria',
        'Normalized SQL tables and flexible document schemas',
        'Real-time database sync and secure cloud storage'
      ]
    }
  ];

  return (
    <section id="services" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-xs font-bold tracking-wide uppercase">
            <span>What I Do</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Specialized Development Services
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base">
            Crafting tailored web solutions with modern engineering standards, clean architecture, and practical problem-solving.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3.5 rounded-2xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-400 dark:text-slate-500">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Bullet Highlights */}
                  <div className="mt-5 space-y-2">
                    {service.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-5 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-2">
                  {service.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-sm font-bold text-slate-900 dark:text-white">
              Have a custom project or technical role in mind?
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Let's discuss how we can build high-performance solutions together.
            </p>
          </div>
          <a
            href="#contact"
            className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl transition-all shadow-sm flex items-center gap-2"
          >
            <span>Start a Conversation</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
