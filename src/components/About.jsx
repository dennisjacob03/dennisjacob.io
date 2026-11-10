import React from 'react';
import { GraduationCap, Briefcase, Users, Code, Sparkles, MapPin, CheckCircle2, ArrowUpRight, Compass, HeartHandshake } from 'lucide-react';
import profilePic from '../assets/profile.jpg';

export default function About({ onOpenResume }) {
  const highlights = [
    {
      icon: GraduationCap,
      title: 'Integrated MCA',
      subtitle: 'Amal Jyothi College of Engineering Autonomous',
      metric: 'Expected May 2027',
      description: '5-year integrated program building deep computer science and software engineering fundamentals.',
      badgeColor: 'blue'
    },
    {
      icon: Briefcase,
      title: '2 Internships',
      subtitle: 'NeST Digital & Leopard Tech Labs',
      metric: 'Frontend & Backend',
      description: 'Hands-on industry experience building Angular UIs, Node.js REST APIs, and database schemas.',
      badgeColor: 'indigo'
    },
    {
      icon: Users,
      title: 'Team IMPACT Lead',
      subtitle: 'Student Technical Community',
      metric: 'Campus Leadership',
      description: 'Leading workshops, hackathons, and developing a 30-Day LeetCode Challenge platform.',
      badgeColor: 'emerald'
    },
    {
      icon: Code,
      title: 'Full Stack Focus',
      subtitle: 'Modern Web & Cloud',
      metric: 'End-to-End',
      description: 'Expertise bridging intuitive frontend UX with robust, secure backend architectures.',
      badgeColor: 'sky'
    }
  ];

  const interestTags = [
    'Full Stack Development',
    'Software Engineering',
    'AI Technologies & Recognition',
    'RESTful APIs & Microservices',
    'Cloud-backed Architectures',
    'Algorithmic Problem Solving',
    'Practical Technology Solutions',
    'IoT Integrations'
  ];

  return (
    <section id="about" className="py-24 relative bg-slate-100/50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-xs font-bold tracking-wide uppercase">
            <span>About Dennis Jacob</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Engineering robust web systems with curiosity & precision.
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Based in Idukki, Kerala — combining solid engineering foundations with practical internship experience.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Bio Narrative & Career Goal */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Story Paragraphs */}
            <div className="space-y-4 text-slate-700 dark:text-slate-300 text-base leading-relaxed">
              <p>
                I am a passionate <strong className="text-slate-900 dark:text-white font-semibold">Full Stack Developer</strong> currently pursuing an <strong className="text-slate-900 dark:text-white font-semibold">Integrated MCA</strong> at <strong className="text-blue-600 dark:text-blue-400 font-semibold">Amal Jyothi College of Engineering Autonomous</strong> in Kanjirappally, Kerala, with an expected graduation in May 2027.
              </p>
              <p>
                My development background spans both ends of the software stack: from crafting responsive, accessible client interfaces in <strong className="text-slate-900 dark:text-white font-semibold">Angular, React, and modern CSS</strong> to building secure, scalable server-side systems and RESTful APIs using <strong className="text-slate-900 dark:text-white font-semibold">Node.js, Express.js, MongoDB, and MySQL</strong>.
              </p>
              <p>
                Beyond standard web development, I am continuously exploring emerging <strong className="text-slate-900 dark:text-white font-semibold">AI technologies</strong> and have hands-on experience integrating AI recognition modules and IoT sensors into practical solutions like <strong className="text-blue-600 dark:text-blue-400 font-semibold">ResQNet</strong> (Smart Animal Rescue Platform).
              </p>
            </div>

            {/* Career Goal Card */}
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-blue-200 dark:border-blue-900/60 shadow-md shadow-blue-500/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 dark:bg-blue-600/15 rounded-full blur-2xl pointer-events-none"></div>
              
              <div className="flex items-center gap-2.5 text-blue-600 dark:text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">
                <Compass className="w-4 h-4" />
                <span>Career Goal</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                Building high-performance software and AI-driven platforms.
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Dennis is seeking a Full Stack Development role where he can apply his engineering foundations and adaptability to build high-performance applications using modern technologies and AI-powered solutions.
              </p>
            </div>

            {/* Core Interest Badges */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Core Interests & Technical Domains
              </h4>
              <div className="flex flex-wrap gap-2">
                {interestTags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-lg text-xs font-medium bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/80 text-slate-700 dark:text-slate-300 shadow-xs hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: 4 Highlight Cards Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs hover:shadow-md hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all duration-300 group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                        {item.metric}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-0.5">
                      {item.subtitle}
                    </p>
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-4 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}

            {/* Quick Contact Link Card spanning 2 columns */}
            <div className="sm:col-span-2 p-5 rounded-2xl bg-gradient-to-r from-blue-900 to-indigo-950 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg shadow-blue-950/20">
              <div className="space-y-1 text-center sm:text-left">
                <div className="text-xs font-bold text-blue-300 uppercase tracking-wide">
                  Location & Contact
                </div>
                <div className="text-sm font-semibold flex items-center justify-center sm:justify-start gap-1.5 text-slate-100">
                  <MapPin className="w-4 h-4 text-blue-400" />
                  <span>Idukki, Kerala, India</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={onOpenResume}
                  className="px-4 py-2 text-xs font-semibold bg-white/10 hover:bg-white/20 text-white rounded-xl border border-white/20 transition-colors cursor-pointer"
                >
                  View Resume
                </button>
                <a
                  href="#contact"
                  className="px-4 py-2 text-xs font-bold bg-blue-500 hover:bg-blue-400 text-white rounded-xl transition-colors shadow-sm"
                >
                  Get In Touch
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
