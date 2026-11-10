import React from 'react';
import { Users, Trophy, BookOpen, GitBranch, Target, Award, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

export default function Leadership() {
  const leadershipPillars = [
    {
      icon: GitBranch,
      title: 'Collaborative Development',
      description: 'Coordinating sprints among student developers to design real-world tools, websites, and community repositories.'
    },
    {
      icon: BookOpen,
      title: 'Workshop Organization',
      description: 'Conducting practical, hands-on workshops on modern web stacks, Git workflows, and coding foundations.'
    },
    {
      icon: Trophy,
      title: 'Competition Management',
      description: 'Designing campus challenges, problem sets, scoring rubrics, and automated evaluation platforms.'
    },
    {
      icon: Target,
      title: 'Student Mentoring',
      description: 'Guiding junior students in algorithmic thinking, data structures, and navigating their full-stack journey.'
    }
  ];

  return (
    <section id="leadership" className="py-24 relative bg-slate-100/50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-xs font-bold tracking-wide uppercase">
            <span>Leadership & Community</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Team Lead — Team IMPACT
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base">
            Driving collaborative development, student mentoring, and technical initiatives at Amal Jyothi College of Engineering Autonomous.
          </p>
        </div>

        {/* Spotlight Card */}
        <div className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md p-8 sm:p-10 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                <Users className="w-4 h-4" />
                <span>Student Technical Initiative</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                Fostering an active developer culture on campus.
              </h3>

              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                As the <strong className="text-slate-900 dark:text-white font-semibold">Team Lead of Team IMPACT</strong>, Dennis coordinates student-driven technical initiatives, hackathons, and collaborative projects. He spearheads initiatives designed to bridge classroom theory with hands-on software development.
              </p>

              <div className="p-4 rounded-2xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/60 space-y-2">
                <div className="text-xs font-bold text-blue-700 dark:text-blue-300 uppercase tracking-wide flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  Key Leadership Project Spotlight
                </div>
                <div className="text-sm font-bold text-slate-900 dark:text-white">
                  30-Day LeetCode Challenge Platform
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Engineered a full-stack platform to automate daily problem tracking, scoring algorithms, and live leaderboards for 100+ participating students.
                </p>
              </div>
            </div>

            {/* Right Pillars Grid */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {leadershipPillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 space-y-2"
                  >
                    <div className="p-2 w-fit rounded-xl bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h4 className="text-xs font-bold text-slate-900 dark:text-white">
                      {pillar.title}
                    </h4>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                );
              })}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
