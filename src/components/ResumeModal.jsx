import React, { useEffect } from 'react';
import { X, Download, Printer, Mail, Phone, MapPin, Globe, Award, Briefcase, GraduationCap, Code2, ExternalLink } from 'lucide-react';

export default function ResumeModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
      {/* Modal Container */}
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Action Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/90">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-blue-600"></div>
            <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">
              Curriculum Vitae — Dennis Jacob
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700/80 transition-colors shadow-sm cursor-pointer"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>

            <a
              href="mailto:dennisjacob330@gmail.com?subject=Inquiry%20Regarding%20Full%20Stack%20Developer%20Role%20-%20Dennis%20Jacob"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Request Official PDF</span>
            </a>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors ml-2 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 space-y-8 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 font-sans text-sm">
          
          {/* Header */}
          <div className="border-b border-slate-200 dark:border-slate-800 pb-6">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Dennis Jacob
            </h1>
            <p className="text-base font-semibold text-blue-600 dark:text-blue-400 mt-1">
              Full Stack Developer & Integrated MCA Student
            </p>
            <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-2 max-w-2xl leading-relaxed">
              Specialized in crafting scalable web applications, RESTful APIs, database architectures, and intuitive user interfaces using Angular, React, Node.js, Express, and modern cloud technologies.
            </p>

            <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-xs text-slate-600 dark:text-slate-400">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                Idukki, Kerala, India
              </span>
              <a href="mailto:dennisjacob330@gmail.com" className="flex items-center gap-1.5 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <Mail className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                dennisjacob330@gmail.com
              </a>
              <a href="tel:+919747012188" className="flex items-center gap-1.5 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <Phone className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                +91 9747012188
              </a>
              <a href="https://linkedin.com/in/dennisjacob03" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <Globe className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                linkedin.com/in/dennisjacob03
              </a>
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 flex items-center gap-2 mb-3">
              <GraduationCap className="w-4 h-4" /> Education
            </h2>
            <div className="space-y-4">
              <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <h3 className="font-bold text-slate-900 dark:text-white">Integrated MCA (Master of Computer Applications)</h3>
                  <span className="text-xs font-medium text-slate-500 dark:text-slate-400">Oct 2022 – May 2027 (Expected)</span>
                </div>
                <div className="text-xs font-semibold text-slate-700 dark:text-slate-300 mt-0.5">
                  Amal Jyothi College of Engineering Autonomous, Kanjirappally, Kerala
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-2">
                  5-year integrated postgraduate curriculum in core Computer Science, Data Structures & Algorithms, Full Stack Web Engineering, Database Design, System Architecture, and Software Engineering.
                </p>
              </div>
            </div>
          </div>

          {/* Work Experience */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 flex items-center gap-2 mb-3">
              <Briefcase className="w-4 h-4" /> Professional Experience
            </h2>
            <div className="space-y-4">
              <div className="border-l-2 border-blue-600 pl-4 space-y-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <h3 className="font-bold text-slate-900 dark:text-white">Angular Frontend Development Intern</h3>
                  <span className="text-xs font-medium text-slate-500 dark:text-slate-400">Jan 2026 – Present</span>
                </div>
                <div className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                  NeST Digital • Kakkanad, Kerala, India
                </div>
                <ul className="list-disc list-inside text-xs text-slate-600 dark:text-slate-400 space-y-1 mt-2">
                  <li>Developed responsive user interfaces using Angular and Bootstrap, ensuring intuitive web layouts.</li>
                  <li>Built reusable frontend components and integrated client-side workflows with RESTful backend APIs.</li>
                  <li>Collaborated on enterprise web applications with an emphasis on performance and clean architecture.</li>
                </ul>
              </div>

              <div className="border-l-2 border-slate-300 dark:border-slate-700 pl-4 space-y-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <h3 className="font-bold text-slate-900 dark:text-white">Node.js Backend Development Intern</h3>
                  <span className="text-xs font-medium text-slate-500 dark:text-slate-400">2025</span>
                </div>
                <div className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                  Leopard Tech Labs • Kanjirappally, Kerala, India
                </div>
                <ul className="list-disc list-inside text-xs text-slate-600 dark:text-slate-400 space-y-1 mt-2">
                  <li>Developed RESTful APIs using Node.js and Express.js for production web platforms.</li>
                  <li>Designed optimized database schemas and integrated secure user authentication mechanisms.</li>
                  <li>Participated in backend system integration and API endpoint testing.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 flex items-center gap-2 mb-3">
              <Code2 className="w-4 h-4" /> Technical Arsenal
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 bg-slate-50 dark:bg-slate-800/40 rounded-lg border border-slate-200 dark:border-slate-800">
                <span className="font-bold text-slate-900 dark:text-white block mb-1">Programming Languages</span>
                <span className="text-slate-600 dark:text-slate-400">JavaScript, Python, Java, C, C++, PHP, HTML5, CSS3</span>
              </div>
              <div className="p-3 bg-slate-50 dark:bg-slate-800/40 rounded-lg border border-slate-200 dark:border-slate-800">
                <span className="font-bold text-slate-900 dark:text-white block mb-1">Frontend Development</span>
                <span className="text-slate-600 dark:text-slate-400">Angular, React, Bootstrap, Tailwind CSS, Responsive Web Design</span>
              </div>
              <div className="p-3 bg-slate-50 dark:bg-slate-800/40 rounded-lg border border-slate-200 dark:border-slate-800">
                <span className="font-bold text-slate-900 dark:text-white block mb-1">Backend & APIs</span>
                <span className="text-slate-600 dark:text-slate-400">Node.js, Express.js, REST APIs, Authentication, MVC Architecture</span>
              </div>
              <div className="p-3 bg-slate-50 dark:bg-slate-800/40 rounded-lg border border-slate-200 dark:border-slate-800">
                <span className="font-bold text-slate-900 dark:text-white block mb-1">Databases & Tools</span>
                <span className="text-slate-600 dark:text-slate-400">MongoDB, MySQL, Firebase (Auth & Firestore), Git, GitHub, Figma, Android Studio</span>
              </div>
            </div>
          </div>

          {/* Key Projects */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 flex items-center gap-2 mb-3">
              <Award className="w-4 h-4" /> Notable Projects & Leadership
            </h2>
            <div className="space-y-3 text-xs">
              <div>
                <span className="font-bold text-slate-900 dark:text-white">ResQNet — Smart Animal Rescue and Welfare Platform (Final Year Project)</span>
                <p className="text-slate-600 dark:text-slate-400">MERN Stack, Firebase, AI animal recognition, and IoT collar tracking for shelter and rescue operations.</p>
              </div>
              <div>
                <span className="font-bold text-slate-900 dark:text-white">SpotOn — Stadium Ticket Booking System</span>
                <p className="text-slate-600 dark:text-slate-400">Interactive seat selection, Google OAuth, automated email verification, and payment gateway integration.</p>
              </div>
              <div>
                <span className="font-bold text-slate-900 dark:text-white">Team Lead — Team IMPACT & 30-Day LeetCode Platform</span>
                <p className="text-slate-600 dark:text-slate-400">Led departmental technical initiatives and built a custom competition leaderboard platform for student profile tracking.</p>
              </div>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/90 flex items-center justify-between text-xs text-slate-500">
          <span>Dennis Jacob • Integrated MCA (Expected 2027)</span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-700 font-medium transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}
