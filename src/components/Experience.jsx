// import React from "react";
// import { motion } from "framer-motion";
// import { FaBriefcase, FaGraduationCap, FaTrophy, FaCalendarAlt, FaBuilding } from "react-icons/fa";

// const experiences = [
//   {
//     role: "Freelance MERN Stack Developer",
//     company: "Fiverr",
//     period: "2026 – Present",
//     type: "Freelance",
//     icon: FaBriefcase,
//     iconBg: "bg-purple/20 text-purple border-purple/30",
//     description:
//       "Engineered production-grade web applications and full-stack client solutions globally utilizing MongoDB, Express.js, React.js, and Node.js with scalable REST APIs.",
//     skills: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
//   },
//   {
//     role: "Web Development Intern",
//     company: "CodeAlpha",
//     period: "3 Months",
//     type: "Internship",
//     icon: FaBriefcase,
//     iconBg: "bg-blue-500/20 text-blue-400 border-blue-500/30",
//     description:
//       "Built interactive frontend UI components, optimized client-side performance, and collaborated on clean React architecture and cross-browser responsiveness.",
//     skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Git"],
//   },
//   {
//     role: "1st Place Winner – AI Project Expo",
//     company: "University Project Exhibition",
//     period: "Award",
//     type: "Achievement",
//     icon: FaTrophy,
//     iconBg: "bg-amber-500/20 text-amber-400 border-amber-500/30",
//     description:
//       "Awarded 1st place certificate for engineering an intelligent AI Chatbot platform, implementing dynamic backend logic and custom REST API integrations.",
//     skills: ["AI Chatbot", "Node.js", "RESTful APIs", "UI/UX Design"],
//   },
// ];

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.2,
//     },
//   },
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: 30 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] },
//   },
// };

// const Experience = () => {
//   return (
//     <section id="experience" className="py-24 bg-dark-200 relative overflow-hidden">
//       {/* AMBIENT BACKGROUND GLOWS */}
//       <div className="absolute top-1/3 left-0 w-80 h-80 bg-purple/10 rounded-full blur-[140px] pointer-events-none" />
//       <div className="absolute bottom-10 right-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none" />

//       <div className="container mx-auto px-6 max-w-5xl relative z-10">
//         {/* SECTION HEADING */}
//         <div className="text-center mb-16">
//           <motion.div
//             initial={{ opacity: 0, y: -10 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5 }}
//             className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple/10 border border-purple/20 text-purple text-xs font-semibold uppercase tracking-widest mb-3"
//           >
//             <FaBriefcase className="text-xs" />
//             <span>Career Milestones</span>
//           </motion.div>

//           <motion.h2
//             initial={{ opacity: 0, y: 15 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4"
//           >
//             Work <span className="bg-gradient-to-r from-purple via-indigo-400 to-pink-500 bg-clip-text text-transparent">Experience</span>
//           </motion.h2>

//           <motion.div
//             initial={{ scaleX: 0 }}
//             whileInView={{ scaleX: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="w-20 h-1 bg-gradient-to-r from-purple to-pink-500 mx-auto rounded-full mb-4 origin-left"
//           />
//         </div>

//         {/* TIMELINE CONTAINER */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           className="relative pl-6 md:pl-8 border-l-2 border-white/10 space-y-12 ml-2 md:ml-6"
//         >
//           {experiences.map((exp, index) => {
//             const Icon = exp.icon;
//             return (
//               <motion.div
//                 key={index}
//                 variants={itemVariants}
//                 className="relative group"
//               >
//                 {/* TIMELINE NODE ICON */}
//                 <div className={`absolute -left-[33px] md:-left-[41px] top-1.5 p-2.5 rounded-xl border backdrop-blur-md ${exp.iconBg} group-hover:scale-110 transition-transform duration-300 shadow-xl`}>
//                   <Icon className="text-sm md:text-base" />
//                 </div>

//                 {/* EXPERIENCE CARD */}
//                 <div className="bg-dark-300/40 backdrop-blur-md border border-white/10 rounded-2xl p-6 sm:p-8 hover:border-purple/40 hover:bg-dark-300/70 transition-all duration-300 shadow-2xl relative overflow-hidden">
//                   {/* TOP ACCENT BORDER ON HOVER */}
//                   <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

//                   {/* METADATA HEADER */}
//                   <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
//                     <span className="text-xs font-semibold uppercase tracking-wider text-purple bg-purple/10 px-3 py-1 rounded-full border border-purple/20">
//                       {exp.type}
//                     </span>

//                     <div className="flex items-center gap-1.5 text-xs text-gray-400 font-medium">
//                       <FaCalendarAlt className="text-purple/80 text-xs" />
//                       <span>{exp.period}</span>
//                     </div>
//                   </div>

//                   {/* TITLE & COMPANY */}
//                   <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-purple transition-colors duration-300 mb-1">
//                     {exp.role}
//                   </h3>

//                   <div className="flex items-center gap-2 text-gray-400 text-sm font-medium mb-4">
//                     <FaBuilding className="text-xs text-purple/70" />
//                     <span>{exp.company}</span>
//                   </div>

//                   {/* DESCRIPTION */}
//                   <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6 font-normal">
//                     {exp.description}
//                   </p>

//                   {/* SKILLS TAGS */}
//                   <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
//                     {exp.skills.map((skill, sIdx) => (
//                       <span
//                         key={sIdx}
//                         className="text-xs font-medium bg-white/5 text-gray-300 px-3 py-1 rounded-lg border border-white/10 hover:border-purple/40 hover:text-purple transition-colors duration-200"
//                       >
//                         {skill}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               </motion.div>
//             );
//           })}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Experience;
// import React from "react";
// import { motion } from "framer-motion";
// import { FaBriefcase, FaTrophy, FaCalendarAlt, FaBuilding } from "react-icons/fa";

// // Structured career milestones, internships, and professional achievements
// const experiences = [
//   {
//     role: "Freelance MERN Stack Developer",
//     company: "Fiverr & Upwork",
//     period: "2026 – Present",
//     type: "Freelance",
//     icon: FaBriefcase,
//     iconBg: "bg-purple-500/20 text-purple-400 border-purple-500/30",
//     description:
//       "Engineered production-grade web applications and full-stack client solutions globally utilizing MongoDB, Express.js, React.js, and Node.js with scalable REST APIs.",
//     skills: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
//   },
//   {
//     role: "Full Stack Developer Intern",
//     company: "CodeAlpha",
//     period: "Jan 2026 – Apr 2026",
//     type: "Internship",
//     icon: FaBriefcase,
//     iconBg: "bg-blue-500/20 text-blue-400 border-blue-500/30",
//     description:
//       "Built interactive frontend UI components, optimized client-side performance, and collaborated on clean React architecture and cross-browser responsiveness during remote internship.",
//     skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Git"],
//   },
//   {
//     role: "Full-Stack Web Development Fellow",
//     company: "Dev Weekend Fellowship",
//     period: "September 2026",
//     type: "Certification",
//     icon: FaTrophy,
//     iconBg: "bg-amber-500/20 text-amber-400 border-amber-500/30",
//     description:
//       "Completed intensive fellowship training, building full-stack applications, managing state with Redux Toolkit, and earning official certification in September 2026.",
//     skills: ["MERN Stack", "Redux Toolkit", "API Integration", "Deployment"],
//   },
// ];

// // Framer motion container for staggered items
// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.2,
//     },
//   },
// };

// // Individual milestone entry animation variants
// const itemVariants = {
//   hidden: { opacity: 0, y: 30 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] },
//   },
// };

// const Experience = () => {
//   return (
//     <section id="experience" className="py-24 bg-[#0B0F19] relative overflow-hidden text-white">
//       {/* AMBIENT BACKGROUND GLOWS */}
//       <div className="absolute top-1/3 left-0 w-80 h-80 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />
//       <div className="absolute bottom-10 right-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none" />

//       <div className="container mx-auto px-6 max-w-5xl relative z-10">
        
//         {/* SECTION HEADING */}
//         <div className="text-center mb-16">
//           <motion.div
//             initial={{ opacity: 0, y: -10 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5 }}
//             className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold uppercase tracking-widest mb-3 shadow-inner"
//           >
//             <FaBriefcase className="text-xs" />
//             <span>Career Milestones</span>
//           </motion.div>

//           <motion.h2
//             initial={{ opacity: 0, y: 15 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4"
//           >
//             Work <span className="bg-gradient-to-r from-purple-400 via-indigo-400 to-pink-500 bg-clip-text text-transparent">Experience</span>
//           </motion.h2>

//           <motion.div
//             initial={{ scaleX: 0 }}
//             whileInView={{ scaleX: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-4 origin-left"
//           />
//         </div>

//         {/* TIMELINE CONTAINER */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           className="relative pl-6 md:pl-8 border-l-2 border-white/10 space-y-12 ml-2 md:ml-6"
//         >
//           {experiences.map((exp, index) => {
//             const Icon = exp.icon;
//             return (
//               <motion.div
//                 key={index}
//                 variants={itemVariants}
//                 className="relative group"
//               >
//                 {/* TIMELINE NODE ICON */}
//                 <div className={`absolute -left-[33px] md:-left-[41px] top-1.5 p-2.5 rounded-xl border backdrop-blur-md ${exp.iconBg} group-hover:scale-110 transition-transform duration-300 shadow-xl`}>
//                   <Icon className="text-sm md:text-base" />
//                 </div>

//                 {/* EXPERIENCE CARD */}
//                 <div className="bg-white/[0.02] backdrop-blur-md border border-white/10 rounded-2xl p-6 sm:p-8 hover:border-purple-500/40 hover:bg-white/[0.04] transition-all duration-300 shadow-2xl relative overflow-hidden">
                  
//                   {/* TOP ACCENT BORDER ON HOVER */}
//                   <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

//                   {/* METADATA HEADER */}
//                   <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
//                     <span className="text-xs font-semibold uppercase tracking-wider text-purple-300 bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20">
//                       {exp.type}
//                     </span>

//                     <div className="flex items-center gap-1.5 text-xs text-gray-400 font-medium">
//                       <FaCalendarAlt className="text-purple-400 text-xs" />
//                       <span>{exp.period}</span>
//                     </div>
//                   </div>

//                   {/* TITLE & COMPANY */}
//                   <h3 className="text-xl sm:text-2xl font-bold text-gray-100 group-hover:text-purple-300 transition-colors duration-300 mb-1">
//                     {exp.role}
//                   </h3>

//                   <div className="flex items-center gap-2 text-gray-400 text-sm font-medium mb-4">
//                     <FaBuilding className="text-xs text-purple-400" />
//                     <span>{exp.company}</span>
//                   </div>

//                   {/* DESCRIPTION */}
//                   <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6 font-normal">
//                     {exp.description}
//                   </p>

//                   {/* SKILLS TAGS */}
//                   <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
//                     {exp.skills.map((skill, sIdx) => (
//                       <span
//                         key={sIdx}
//                         className="text-xs font-medium bg-white/5 text-gray-300 px-3 py-1 rounded-lg border border-white/10 hover:border-purple-500/40 hover:text-purple-300 transition-colors duration-200"
//                       >
//                         {skill}
//                       </span>
//                     ))}
//                   </div>

//                 </div>
//               </motion.div>
//             );
//           })}
//         </motion.div>

//       </div>
//     </section>
//   );
// };

// export default Experience;
import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaTrophy, FaCalendarAlt, FaBuilding, FaRocket } from "react-icons/fa";

// Structured career milestones, internships, and professional achievements
const experiences = [
  {
    role: "Freelance MERN Stack Developer",
    company: "Fiverr & Upwork",
    period: "2026 – Present",
    type: "Freelance",
    icon: FaBriefcase,
    badgeBg: "bg-emerald-500/10 text-emerald-300 border-emerald-500/30",
    iconBg: "bg-emerald-500/20 text-emerald-400 border-emerald-500/40",
    glowColor: "group-hover:shadow-[0_0_30px_rgba(16,185,129,0.25)] group-hover:border-emerald-500/60",
    accentGradient: "from-emerald-400 via-teal-500 to-cyan-500",
    description:
      "Engineered production-grade web applications and full-stack client solutions globally utilizing MongoDB, Express.js, React.js, and Node.js with scalable REST APIs.",
    skills: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
  },
  {
    role: "Full Stack Developer Intern",
    company: "CodeAlpha",
    period: "Jan 2026 – Apr 2026",
    type: "Internship",
    icon: FaRocket,
    badgeBg: "bg-cyan-500/10 text-cyan-300 border-cyan-500/30",
    iconBg: "bg-cyan-500/20 text-cyan-400 border-cyan-500/40",
    glowColor: "group-hover:shadow-[0_0_30px_rgba(6,182,212,0.25)] group-hover:border-cyan-500/60",
    accentGradient: "from-cyan-400 via-blue-500 to-indigo-500",
    description:
      "Built interactive frontend UI components, optimized client-side performance, and collaborated on clean React architecture and cross-browser responsiveness during remote internship.",
    skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Git"],
  },
  {
    role: "Full-Stack Web Development Fellow",
    company: "Dev Weekend Fellowship",
    period: "September 2026",
    type: "Certification",
    icon: FaTrophy,
    badgeBg: "bg-amber-500/10 text-amber-300 border-amber-500/30",
    iconBg: "bg-amber-500/20 text-amber-400 border-amber-500/40",
    glowColor: "group-hover:shadow-[0_0_30px_rgba(245,158,11,0.25)] group-hover:border-amber-500/60",
    accentGradient: "from-amber-400 via-yellow-500 to-orange-500",
    description:
      "Completed intensive fellowship training, building full-stack applications, managing state with Redux Toolkit, and earning official certification in September 2026.",
    skills: ["MERN Stack", "Redux Toolkit", "API Integration", "Deployment"],
  },
];

// Framer motion container for staggered items
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// Individual milestone entry animation variants
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.215, 0.61, 0.355, 1] },
  },
};

const Experience = () => {
  return (
    <section id="experience" className="py-28 bg-[#05070B] relative overflow-hidden text-white">
      {/* ADVANCED AMBIENT BACKGROUND GLOWS */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-emerald-500/[0.07] rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-cyan-500/[0.07] rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-500/[0.05] rounded-full blur-[150px] pointer-events-none" />

      {/* GRID PATTERN OVERLAY */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        
        {/* SECTION HEADING */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: -15, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-4.5 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-4 shadow-[0_0_20px_rgba(16,185,129,0.15)] backdrop-blur-md"
          >
            <FaBriefcase className="text-sm animate-pulse text-emerald-400" />
            <span>Career Milestones</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6 leading-tight"
          >
            Work <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">Experience</span>
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="w-28 h-1.5 bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-500 mx-auto rounded-full mb-6 origin-center shadow-[0_0_15px_rgba(16,185,129,0.5)]"
          />

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-400 text-base sm:text-lg leading-relaxed font-normal"
          >
            A track record of engineering scalable web applications, delivering high-impact client solutions, and professional full-stack development fellowships.
          </motion.p>
        </div>

        {/* TIMELINE CONTAINER */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative pl-6 md:pl-10 border-l-2 border-emerald-500/30 space-y-12 ml-2 md:ml-6"
        >
          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative group"
              >
                {/* TIMELINE NODE ICON */}
                <div className={`absolute -left-[35px] md:-left-[47px] top-2 p-3 rounded-2xl border backdrop-blur-md ${exp.iconBg} group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-xl`}>
                  <Icon className="text-base sm:text-lg" />
                </div>

                {/* EXPERIENCE CARD */}
                <motion.div
                  whileHover={{ y: -8, scale: 1.01, transition: { duration: 0.3, ease: "easeOut" } }}
                  className={`bg-gradient-to-b from-white/[0.04] to-white/[0.01] backdrop-blur-2xl border border-white/10 rounded-3xl p-8 shadow-2xl transition-all duration-500 relative overflow-hidden ${exp.glowColor}`}
                >
                  
                  {/* TOP ACCENT GRADIENT LINE */}
                  <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${exp.accentGradient} opacity-40 group-hover:opacity-100 transition-opacity duration-300 shadow-sm`} />

                  {/* METADATA HEADER */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                    <span className={`text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-lg border shadow-sm ${exp.badgeBg}`}>
                      {exp.type}
                    </span>

                    <div className="flex items-center gap-2 text-xs font-mono text-gray-300 bg-white/[0.04] px-3.5 py-1.5 rounded-full border border-white/10 shadow-inner">
                      <FaCalendarAlt className="text-emerald-400 text-xs" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* TITLE & COMPANY */}
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-100 group-hover:text-emerald-300 transition-colors duration-300 mb-2">
                    {exp.role}
                  </h3>

                  <div className="flex items-center gap-2 text-emerald-400 text-sm font-semibold mb-5">
                    <FaBuilding className="text-xs text-emerald-400" />
                    <span>{exp.company}</span>
                  </div>

                  {/* DESCRIPTION */}
                  <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6 font-normal">
                    {exp.description}
                  </p>

                  {/* SKILLS TAGS */}
                  <div className="flex flex-wrap gap-2.5 pt-5 border-t border-white/10">
                    {exp.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-xs font-mono font-medium bg-white/[0.04] text-gray-300 px-3.5 py-1.5 rounded-xl border border-white/10 hover:border-emerald-500/50 hover:text-emerald-300 hover:bg-emerald-500/10 transition-all duration-300 shadow-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};

export default Experience;