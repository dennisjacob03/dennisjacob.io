import React from 'react';
import { Trophy, Award, ShieldCheck, Rocket, CheckCircle2, Sparkles, Star } from 'lucide-react';

export default function Achievements() {
  const topAchievements = [
    {
      icon: Trophy,
      title: 'STARKSCRIPT AI Coding Challenge',
      rank: '3rd Place Winner',
      issuer: 'SAHYA Fest • Marian College Kuttikkanam',
      year: '2026',
      badgeColor: 'amber',
      description: 'Competitive coding achievement demonstrating rapid algorithmic problem solving, automated code synthesis, and technical resilience under time pressure.'
    },
    {
      icon: Rocket,
      title: 'NASA Space Apps Challenge',
      rank: 'Participant & Innovation Challenge',
      issuer: 'NASA Global Hackathon',
      year: '2025',
      badgeColor: 'blue',
      description: 'Collaborated on developing practical technology solutions tackling space and earth science challenges using open NASA datasets.'
    },
    {
      icon: ShieldCheck,
      title: 'Google Cybersecurity Professional Certificate',
      rank: 'Professional Certification',
      issuer: 'Coursera / Google',
      year: '2025',
      badgeColor: 'emerald',
      description: 'Demonstrated broader technical knowledge beyond application development, including network security, threat mitigation, and secure system design.'
    }
  ];

  const otherCertifications = [
    {
      name: 'Introduction to Android Studio Course Certificate',
      issuer: 'Simplilearn',
      year: '2025'
    },
    {
      name: 'MuFest 3-Day Event & No-Code Workshop',
      issuer: 'MuFest Technical Initiative',
      year: '2025'
    },
    {
      name: 'Smart India Hackathon & GDG Solution Challenge',
      issuer: 'SIH & Google Developer Student Clubs',
      year: '2024–2025'
    }
  ];

  return (
    <section id="achievements" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-xs font-bold tracking-wide uppercase">
            <span>Honors & Certifications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Key Achievements & Accreditations
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base">
            Competitive programming accolades, innovation challenges, and verified industry credentials.
          </p>
        </div>

        {/* Top 3 Major Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {topAchievements.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-2xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>

                    <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                      {item.rank}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h3>

                  <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-1 mb-3">
                    {item.issuer} • {item.year}
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified Distinction</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Compact Verified Certifications Bar */}
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-2 mb-4 text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
            <Award className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span>Additional Accreditations & Workshop Certifications</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {otherCertifications.map((cert, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs"
              >
                <div className="text-xs font-bold text-slate-900 dark:text-white leading-snug">
                  {cert.name}
                </div>
                <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400 mt-1">
                  {cert.issuer} • {cert.year}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
