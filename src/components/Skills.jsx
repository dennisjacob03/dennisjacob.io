import React, { useState } from 'react';
import { 
  Code2, 
  Layout, 
  Server, 
  Database, 
  Wrench, 
  CheckCircle2, 
  Sparkles,
  Layers,
  Terminal,
  Cpu
} from 'lucide-react';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all');

  const categories = [
    {
      id: 'languages',
      title: 'Programming Languages',
      icon: Code2,
      description: 'Foundational and modern programming languages used for algorithmic problem solving and system development.',
      skills: [
        { name: 'JavaScript', proficiency: 'Advanced', highlight: true },
        { name: 'Python', proficiency: 'Proficient', highlight: true },
        { name: 'Java', proficiency: 'Proficient', highlight: false },
        { name: 'C', proficiency: 'Proficient', highlight: false },
        { name: 'C++', proficiency: 'Proficient', highlight: false },
        { name: 'PHP', proficiency: 'Practical', highlight: false },
        { name: 'HTML5', proficiency: 'Advanced', highlight: true },
        { name: 'CSS3', proficiency: 'Advanced', highlight: true },
      ]
    },
    {
      id: 'frontend',
      title: 'Frontend Development',
      icon: Layout,
      description: 'Building responsive, dynamic, and accessible user interfaces and web applications.',
      skills: [
        { name: 'Angular', proficiency: 'Core / Internship', highlight: true },
        { name: 'React', proficiency: 'Core / Production', highlight: true },
        { name: 'Bootstrap', proficiency: 'Advanced', highlight: true },
        { name: 'Tailwind CSS', proficiency: 'Proficient', highlight: true },
        { name: 'Responsive Web Design', proficiency: 'Expert', highlight: false },
        { name: 'Component Architecture', proficiency: 'Proficient', highlight: false },
        { name: 'DOM & Modern Web APIs', proficiency: 'Proficient', highlight: false },
      ]
    },
    {
      id: 'backend',
      title: 'Backend & APIs',
      icon: Server,
      description: 'Designing high-performance server logic, RESTful API endpoints, and authentication workflows.',
      skills: [
        { name: 'Node.js', proficiency: 'Core / Internship', highlight: true },
        { name: 'Express.js', proficiency: 'Core / Production', highlight: true },
        { name: 'REST APIs', proficiency: 'Advanced', highlight: true },
        { name: 'User Authentication & JWT', proficiency: 'Proficient', highlight: false },
        { name: 'API Routing & Middleware', proficiency: 'Advanced', highlight: false },
        { name: 'MVC Architecture', proficiency: 'Proficient', highlight: false },
      ]
    },
    {
      id: 'database',
      title: 'Databases & Cloud',
      icon: Database,
      description: 'Designing efficient database schemas, relational data structures, and cloud integrations.',
      skills: [
        { name: 'MongoDB', proficiency: 'Core NoSQL', highlight: true },
        { name: 'MySQL', proficiency: 'Relational DB', highlight: true },
        { name: 'Firebase Firestore', proficiency: 'Realtime Cloud', highlight: true },
        { name: 'Firebase Authentication', proficiency: 'OAuth / Auth', highlight: true },
        { name: 'Schema Design & Queries', proficiency: 'Proficient', highlight: false },
      ]
    },
    {
      id: 'tools',
      title: 'Tools & Platforms',
      icon: Wrench,
      description: 'Modern development workflows, version control, design prototyping, and IDE tooling.',
      skills: [
        { name: 'Git', proficiency: 'Daily Driver', highlight: true },
        { name: 'GitHub', proficiency: 'Collaboration', highlight: true },
        { name: 'Figma', proficiency: 'UI/UX Prototyping', highlight: false },
        { name: 'Android Studio', proficiency: 'Mobile App Dev', highlight: false },
        { name: 'VS Code', proficiency: 'Primary IDE', highlight: false },
        { name: 'Postman', proficiency: 'API Testing', highlight: false },
      ]
    }
  ];

  const filterTabs = [
    { id: 'all', label: 'All Domains' },
    { id: 'languages', label: 'Languages' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend & APIs' },
    { id: 'database', label: 'Databases & Cloud' },
    { id: 'tools', label: 'Tools & Platforms' },
  ];

  const filteredCategories = activeTab === 'all' 
    ? categories 
    : categories.filter(c => c.id === activeTab);

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-xs font-bold tracking-wide uppercase">
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Comprehensive Skills & Technologies
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base">
            Categorized technical stack based on real-world internship and academic project development.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-12">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/25'
                  : 'bg-white dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700/80'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.id}
                className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs hover:shadow-lg hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {cat.title}
                      </h3>
                      <span className="text-[11px] font-medium text-slate-400">
                        {cat.skills.length} core technologies
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-5 leading-relaxed">
                    {cat.description}
                  </p>

                  {/* Skills Badges Grid */}
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill, idx) => (
                      <div
                        key={idx}
                        className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all duration-200 flex items-center justify-between gap-2 border ${
                          skill.highlight
                            ? 'bg-blue-50/80 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800/80 hover:scale-105 shadow-xs'
                            : 'bg-slate-50 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700/80 hover:bg-slate-100 dark:hover:bg-slate-800'
                        }`}
                      >
                        <span className="font-semibold">{skill.name}</span>
                        <span className="text-[10px] text-slate-400 dark:text-slate-500 font-mono">
                          • {skill.proficiency}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400 font-medium">
                  <span>Production Ready</span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
