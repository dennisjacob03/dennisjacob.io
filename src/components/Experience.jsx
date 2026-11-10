import React, { useState } from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronRight, Building2, Users, Code, Award } from 'lucide-react';

export default function Experience() {
  const [activeExp, setActiveExp] = useState(0);

  const experiences = [
    {
      id: 0,
      role: 'Angular Frontend Development Intern',
      company: 'NeST Digital',
      location: 'Kakkanad, Kerala, India',
      period: 'Jan 2026 – Present',
      type: 'Internship',
      statusBadge: 'Current Role',
      badgeColor: 'emerald',
      technologies: ['Angular', 'Bootstrap', 'TypeScript', 'REST APIs', 'Responsive UI'],
      responsibilities: [
        'Developed responsive user interfaces using Angular and Bootstrap.',
        'Created intuitive web layouts with cross-browser compatibility.',
        'Built reusable frontend components following modular development best practices.',
        'Integrated client-side workflows seamlessly with RESTful backend APIs.'
      ],
      impact: 'Delivered intuitive, high-performance web modules adhering to client-side design guidelines and enterprise workflows.'
    },
    {
      id: 1,
      role: 'Node.js Backend Development Intern',
      company: 'Leopard Tech Labs',
      location: 'Kanjirappally, Kerala, India',
      period: '2025',
      type: 'Internship',
      statusBadge: 'Completed',
      badgeColor: 'blue',
      technologies: ['Node.js', 'Express.js', 'REST APIs', 'MongoDB', 'MySQL', 'Authentication'],
      responsibilities: [
        'Developed RESTful APIs using Node.js and Express.js.',
        'Worked with database schema design for relational and NoSQL databases.',
        'Implemented secure user authentication and authorization mechanisms.',
        'Worked on backend system integration for production web applications.'
      ],
      impact: 'Engineered robust API routes, optimized JSON payloads, and integrated secure authentication modules for live web applications.'
    },
    {
      id: 2,
      role: 'Team Lead — Team IMPACT',
      company: 'Amal Jyothi College of Engineering Autonomous',
      location: 'Kanjirappally, Kerala, India',
      period: '2023 – Present',
      type: 'Leadership & Technical Initiative',
      statusBadge: 'Active Leadership',
      badgeColor: 'indigo',
      technologies: ['React', 'Node.js', 'Firebase', 'Technical Mentoring', 'Competition Management'],
      responsibilities: [
        'Lead student-driven technical initiatives and campus workshops.',
        'Organize hands-on technical activities, hackathons, and collaborative projects.',
        'Coordinate development sprints among student developers.',
        'Develop a custom platform for managing a 30-Day LeetCode Challenge.',
        'Work on student profile tracking, automated point updates, and live leaderboards.'
      ],
      impact: 'Built and deployed the 30-Day LeetCode Challenge platform, automating point calculations and motivating over 100+ students in competitive programming.'
    }
  ];

  return (
    <section id="experience" className="py-24 relative bg-slate-100/50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-xs font-bold tracking-wide uppercase">
            <span>Career Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Professional Experience & Leadership
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base">
            Hands-on internships and community leadership establishing end-to-end development expertise.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="max-w-4xl mx-auto space-y-8 relative before:absolute before:inset-0 before:left-5 sm:before:left-1/2 sm:before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-blue-600 before:via-indigo-500 before:to-slate-300 dark:before:to-slate-700">
          
          {experiences.map((exp, index) => {
            const isEven = index % 2 === 0;
            return (
              <div 
                key={exp.id} 
                className={`relative flex items-center justify-between md:justify-normal ${
                  isEven ? 'md:flex-row-reverse' : ''
                } group`}
              >
                
                {/* Timeline Center Node Icon */}
                <div className="absolute left-5 sm:left-1/2 -translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-slate-900 border-4 border-blue-600 shadow-md shadow-blue-500/30 z-10 group-hover:scale-110 transition-transform">
                  <Briefcase className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                </div>

                {/* Experience Card */}
                <div className={`w-[calc(100%-4rem)] sm:w-[calc(50%-2.5rem)] ml-14 sm:ml-0 ${
                  isEven ? 'sm:mr-auto' : 'sm:ml-auto'
                }`}>
                  <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all duration-300">
                    
                    {/* Header Details */}
                    <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-100 dark:border-slate-800">
                      <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold ${
                        exp.badgeColor === 'emerald'
                          ? 'bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800'
                          : exp.badgeColor === 'indigo'
                          ? 'bg-indigo-50 dark:bg-indigo-950/50 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800'
                          : 'bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800'
                      }`}>
                        {exp.statusBadge}
                      </span>
                      
                      <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                        {exp.period}
                      </span>
                    </div>

                    <div className="mt-3">
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {exp.role}
                      </h3>
                      
                      <div className="flex items-center gap-1.5 text-sm font-semibold text-slate-700 dark:text-slate-300 mt-1">
                        <Building2 className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                        <span>{exp.company}</span>
                      </div>

                      <div className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400 mt-1">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    {/* Bullet List */}
                    <div className="mt-4 space-y-2">
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                        Key Responsibilities:
                      </div>
                      <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                        {exp.responsibilities.map((resp, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Badges */}
                    <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-1.5">
                      {exp.technologies.map((t, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                  </div>
                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
