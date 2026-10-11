// import React from "react";
// import { motion } from "framer-motion";
// import {
//   FaHtml5,
//   FaCss3Alt,
//   FaJs,
//   FaReact,
//   FaNodeJs,
//   FaGitAlt,
//   FaGithub,
//   FaLayerGroup,
//   FaTerminal,
// } from "react-icons/fa";
// import {
//   SiTailwindcss,
//   SiExpress,
//   SiMongodb,
//   SiRedux,
//   SiVercel,
//   SiPostman,
//   SiCplusplus,
// } from "react-icons/si";

// const skillCategories = [
//   {
//     category: "Frontend Architecture",
//     description: "Building responsive, state-driven, interactive client applications.",
//     skills: [
//       { name: "React JS", level: 90, status: "Advanced", icon: <FaReact />, color: "text-blue-400", glow: "shadow-blue-500/20" },
//       { name: "JavaScript (ES6+)", level: 88, status: "Advanced", icon: <FaJs />, color: "text-yellow-400", glow: "shadow-yellow-500/20" },
//       { name: "Tailwind CSS", level: 92, status: "Expert", icon: <SiTailwindcss />, color: "text-cyan-400", glow: "shadow-cyan-500/20" },
//       { name: "Redux Toolkit", level: 82, status: "Proficient", icon: <SiRedux />, color: "text-purple-400", glow: "shadow-purple-500/20" },
//       { name: "HTML5 & CSS3", level: 95, status: "Expert", icon: <FaHtml5 />, color: "text-orange-500", glow: "shadow-orange-500/20" },
//     ],
//   },
//   {
//     category: "Backend & Database Engineering",
//     description: "Architecting REST APIs, scalable servers, and database schemas.",
//     skills: [
//       { name: "Node.js", level: 85, status: "Advanced", icon: <FaNodeJs />, color: "text-emerald-500", glow: "shadow-emerald-500/20" },
//       { name: "Express.js", level: 86, status: "Advanced", icon: <SiExpress />, color: "text-gray-300", glow: "shadow-gray-400/20" },
//       { name: "MongoDB & Mongoose", level: 82, status: "Proficient", icon: <SiMongodb />, color: "text-green-500", glow: "shadow-green-500/20" },
//       { name: "RESTful APIs & Postman", level: 90, status: "Advanced", icon: <SiPostman />, color: "text-orange-400", glow: "shadow-orange-400/20" },
//       { name: "C++ Programming", level: 80, status: "Proficient", icon: <SiCplusplus />, color: "text-blue-500", glow: "shadow-blue-500/20" },
//     ],
//   },
//   {
//     category: "Tooling & Cloud Deployment",
//     description: "Version control, CI/CD workflows, and production hosting platforms.",
//     skills: [
//       { name: "Git & GitHub", level: 88, status: "Advanced", icon: <FaGitAlt />, color: "text-orange-600", glow: "shadow-orange-600/20" },
//       { name: "Vercel Deployment", level: 90, status: "Advanced", icon: <SiVercel />, color: "text-white", glow: "shadow-white/20" },
//     ],
//   },
// ];

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.18,
//     },
//   },
// };

// const cardVariants = {
//   hidden: { opacity: 0, y: 30 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] },
//   },
// };

// const Skills = () => {
//   return (
//     <section
//       id="skills"
//       className="py-24 bg-dark-200 relative overflow-hidden"
//     >
//       {/* BACKGROUND AMBIENT GLOWS */}
//       <div className="absolute top-10 right-10 w-96 h-96 bg-purple/10 rounded-full blur-[150px] pointer-events-none" />
//       <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-[150px] pointer-events-none" />

//       <div className="container mx-auto px-6 max-w-6xl relative z-10">
//         {/* SECTION HEADER */}
//         <div className="text-center mb-16">
//           <motion.div
//             initial={{ opacity: 0, y: -10 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5 }}
//             className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple/10 border border-purple/20 text-purple text-xs font-semibold uppercase tracking-widest mb-3"
//           >
//             <FaLayerGroup className="text-xs" />
//             <span>Technical Capabilities</span>
//           </motion.div>

//           <motion.h2
//             initial={{ opacity: 0, y: 15 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4"
//           >
//             Technical <span className="bg-gradient-to-r from-purple via-indigo-400 to-pink-500 bg-clip-text text-transparent">Proficiency</span>
//           </motion.h2>

//           <motion.div
//             initial={{ scaleX: 0 }}
//             whileInView={{ scaleX: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="w-20 h-1 bg-gradient-to-r from-purple to-pink-500 mx-auto rounded-full mb-4 origin-left"
//           />

//           <motion.p
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.3 }}
//             className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed"
//           >
//             A detailed breakdown of my full-stack engineering toolset, framework mastery, and production deployment standards.
//           </motion.p>
//         </div>

//         {/* SKILLS CATEGORIES GRID */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           className="grid grid-cols-1 lg:grid-cols-2 gap-8"
//         >
//           {skillCategories.map((cat, catIdx) => (
//             <motion.div
//               key={catIdx}
//               variants={cardVariants}
//               className={`bg-dark-300/40 backdrop-blur-md border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden group hover:border-purple/40 transition-all duration-500 ${
//                 catIdx === 2 ? "lg:col-span-2" : ""
//               }`}
//             >
//               {/* ACCENT LINE ON TOP */}
//               <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple via-indigo-500 to-pink-500 opacity-20 group-hover:opacity-100 transition-opacity duration-500" />

//               {/* CATEGORY HEADER */}
//               <div className="mb-8">
//                 <div className="flex items-center gap-3 mb-1.5">
//                   <div className="p-2 rounded-lg bg-purple/10 text-purple border border-purple/20">
//                     <FaTerminal className="text-sm" />
//                   </div>
//                   <h3 className="text-xl font-bold text-white tracking-wide">
//                     {cat.category}
//                   </h3>
//                 </div>
//                 <p className="text-gray-400 text-xs sm:text-sm pl-11">
//                   {cat.description}
//                 </p>
//               </div>

//               {/* SKILLS PROGRESS BARS */}
//               <div className={`space-y-6 ${catIdx === 2 ? "grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 space-y-0" : ""}`}>
//                 {cat.skills.map((skill, index) => (
//                   <div key={index} className="space-y-2">
//                     {/* TITLE, ICON & STATUS */}
//                     <div className="flex justify-between items-center">
//                       <div className="flex items-center gap-2.5">
//                         <span className={`text-xl sm:text-2xl ${skill.color} p-1 rounded-lg bg-white/5 border border-white/5`}>
//                           {skill.icon}
//                         </span>
//                         <span className="text-white font-semibold text-sm sm:text-base tracking-wide">
//                           {skill.name}
//                         </span>
//                       </div>

//                       <div className="flex items-center gap-2.5">
//                         <span className="text-[11px] font-medium text-gray-400 bg-white/5 px-2.5 py-0.5 rounded-full border border-white/10">
//                           {skill.status}
//                         </span>
//                         <span className="text-sm font-bold text-purple font-mono">
//                           {skill.level}%
//                         </span>
//                       </div>
//                     </div>

//                     {/* PROGRESS BAR TRACK */}
//                     <div className="w-full h-2.5 bg-dark-100 rounded-full overflow-hidden p-0.5 border border-white/5 relative">
//                       <motion.div
//                         initial={{ width: 0 }}
//                         whileInView={{ width: `${skill.level}%` }}
//                         transition={{ duration: 1.1, delay: index * 0.08, ease: [0.25, 0.4, 0.25, 1] }}
//                         viewport={{ once: true }}
//                         className={`h-full bg-gradient-to-r from-purple/80 via-purple to-indigo-500 rounded-full ${skill.glow}`}
//                       />
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Skills;
// import React from "react";
// import { motion } from "framer-motion";
// import {
//   FaHtml5,
//   FaJs,
//   FaReact,
//   FaNodeJs,
//   FaGitAlt,
//   FaLayerGroup,
//   FaTerminal,
// } from "react-icons/fa";
// import {
//   SiTailwindcss,
//   SiExpress,
//   SiMongodb,
//   SiRedux,
//   SiVercel,
//   SiPostman,
//   SiCplusplus,
// } from "react-icons/si";

// // Structured categories defining frontend, backend, and tooling expertise with proficiency percentages
// const skillCategories = [
//   {
//     category: "Frontend Architecture",
//     description: "Building responsive, state-driven, interactive client applications.",
//     skills: [
//       { name: "React JS", level: 90, status: "Advanced", icon: <FaReact />, color: "text-blue-400", glow: "shadow-blue-500/20" },
//       { name: "JavaScript (ES6+)", level: 88, status: "Advanced", icon: <FaJs />, color: "text-yellow-400", glow: "shadow-yellow-500/20" },
//       { name: "Tailwind CSS", level: 92, status: "Expert", icon: <SiTailwindcss />, color: "text-cyan-400", glow: "shadow-cyan-500/20" },
//       { name: "Redux Toolkit", level: 82, status: "Proficient", icon: <SiRedux />, color: "text-purple-400", glow: "shadow-purple-500/20" },
//       { name: "HTML5 & CSS3", level: 95, status: "Expert", icon: <FaHtml5 />, color: "text-orange-500", glow: "shadow-orange-500/20" },
//     ],
//   },
//   {
//     category: "Backend & Database Engineering",
//     description: "Architecting REST APIs, scalable servers, and database schemas.",
//     skills: [
//       { name: "Node.js", level: 85, status: "Advanced", icon: <FaNodeJs />, color: "text-emerald-500", glow: "shadow-emerald-500/20" },
//       { name: "Express.js", level: 86, status: "Advanced", icon: <SiExpress />, color: "text-gray-300", glow: "shadow-gray-400/20" },
//       { name: "MongoDB & Mongoose", level: 82, status: "Proficient", icon: <SiMongodb />, color: "text-green-500", glow: "shadow-green-500/20" },
//       { name: "RESTful APIs & Postman", level: 90, status: "Advanced", icon: <SiPostman />, color: "text-orange-400", glow: "shadow-orange-400/20" },
//       { name: "C++ Programming", level: 80, status: "Proficient", icon: <SiCplusplus />, color: "text-blue-500", glow: "shadow-blue-500/20" },
//     ],
//   },
//   {
//     category: "Tooling & Cloud Deployment",
//     description: "Version control, CI/CD workflows, and production hosting platforms.",
//     skills: [
//       { name: "Git & GitHub", level: 88, status: "Advanced", icon: <FaGitAlt />, color: "text-orange-600", glow: "shadow-orange-600/20" },
//       { name: "Vercel Deployment", level: 90, status: "Advanced", icon: <SiVercel />, color: "text-white", glow: "shadow-white/20" },
//     ],
//   },
// ];

// // Framer Motion container variants for staggered grid items
// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.18,
//     },
//   },
// };

// // Individual card slide-up animation variants
// const cardVariants = {
//   hidden: { opacity: 0, y: 30 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] },
//   },
// };

// const Skills = () => {
//   return (
//     <section
//       id="skills"
//       className="py-24 bg-[#0B0F19] relative overflow-hidden text-white"
//     >
//       {/* BACKGROUND AMBIENT GLOWS */}
//       <div className="absolute top-10 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-[150px] pointer-events-none" />
//       <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-[150px] pointer-events-none" />

//       <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
//         {/* SECTION HEADER */}
//         <div className="text-center mb-16">
//           <motion.div
//             initial={{ opacity: 0, y: -10 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5 }}
//             className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold uppercase tracking-widest mb-3 shadow-inner"
//           >
//             <FaLayerGroup className="text-xs" />
//             <span>Technical Capabilities</span>
//           </motion.div>

//           <motion.h2
//             initial={{ opacity: 0, y: 15 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4"
//           >
//             Technical <span className="bg-gradient-to-r from-purple-400 via-indigo-400 to-pink-500 bg-clip-text text-transparent">Proficiency</span>
//           </motion.h2>

//           <motion.div
//             initial={{ scaleX: 0 }}
//             whileInView={{ scaleX: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-4 origin-left"
//           />

//           <motion.p
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.3 }}
//             className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed"
//           >
//             A detailed breakdown of my full-stack engineering toolset, framework mastery, and production deployment standards.
//           </motion.p>
//         </div>

//         {/* SKILLS CATEGORIES GRID */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           className="grid grid-cols-1 lg:grid-cols-2 gap-8"
//         >
//           {skillCategories.map((cat, catIdx) => (
//             <motion.div
//               key={catIdx}
//               variants={cardVariants}
//               className={`bg-white/[0.02] backdrop-blur-md border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden group hover:border-purple-500/40 transition-all duration-500 ${
//                 catIdx === 2 ? "lg:col-span-2" : ""
//               }`}
//             >
//               {/* TOP ACCENT BORDER HIGHLIGHT ON HOVER */}
//               <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 via-indigo-500 to-pink-500 opacity-20 group-hover:opacity-100 transition-opacity duration-500" />

//               {/* CATEGORY HEADER */}
//               <div className="mb-8">
//                 <div className="flex items-center gap-3 mb-1.5">
//                   <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20 shadow-inner">
//                     <FaTerminal className="text-sm" />
//                   </div>
//                   <h3 className="text-xl font-bold tracking-wide">
//                     {cat.category}
//                   </h3>
//                 </div>
//                 <p className="text-gray-400 text-xs sm:text-sm pl-12">
//                   {cat.description}
//                 </p>
//               </div>

//               {/* SKILLS PROGRESS BARS */}
//               <div className={`space-y-6 ${catIdx === 2 ? "grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 space-y-0" : ""}`}>
//                 {cat.skills.map((skill, index) => (
//                   <div key={index} className="space-y-2">
                    
//                     {/* SKILL TITLE, ICON & PERCENTAGE */}
//                     <div className="flex justify-between items-center">
//                       <div className="flex items-center gap-3">
//                         <span className={`text-xl sm:text-2xl ${skill.color} p-1.5 rounded-xl bg-white/5 border border-white/10 shadow-sm`}>
//                           {skill.icon}
//                         </span>
//                         <span className="font-semibold text-sm sm:text-base tracking-wide text-gray-200">
//                           {skill.name}
//                         </span>
//                       </div>

//                       <div className="flex items-center gap-2.5">
//                         <span className="text-[11px] font-medium text-gray-400 bg-white/5 px-2.5 py-0.5 rounded-full border border-white/10">
//                           {skill.status}
//                         </span>
//                         <span className="text-sm font-bold text-purple-400 font-mono">
//                           {skill.level}%
//                         </span>
//                       </div>
//                     </div>

//                     {/* ANIMATED PROGRESS BAR TRACK */}
//                     <div className="w-full h-2.5 bg-black/40 rounded-full overflow-hidden p-0.5 border border-white/5 relative">
//                       <motion.div
//                         initial={{ width: 0 }}
//                         whileInView={{ width: `${skill.level}%` }}
//                         transition={{ duration: 1.1, delay: index * 0.08, ease: [0.25, 0.4, 0.25, 1] }}
//                         viewport={{ once: true }}
//                         className={`h-full bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-500 rounded-full shadow-[0_0_12px_rgba(168,85,247,0.4)]`}
//                       />
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>

//       </div>
//     </section>
//   );
// };

// export default Skills;
import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaLayerGroup,
  FaTerminal,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiRedux,
  SiVercel,
  SiPostman,
  SiCplusplus,
} from "react-icons/si";

// Structured categories defining frontend, backend, and tooling expertise with proficiency percentages
const skillCategories = [
  {
    category: "Frontend Architecture",
    description: "Building responsive, state-driven, interactive client applications.",
    skills: [
      { name: "React JS", level: 90, status: "Advanced", icon: <FaReact />, color: "text-blue-400", glow: "shadow-blue-500/20" },
      { name: "JavaScript (ES6+)", level: 88, status: "Advanced", icon: <FaJs />, color: "text-yellow-400", glow: "shadow-yellow-500/20" },
      { name: "Tailwind CSS", level: 92, status: "Expert", icon: <SiTailwindcss />, color: "text-cyan-400", glow: "shadow-cyan-500/20" },
      { name: "Redux Toolkit", level: 82, status: "Proficient", icon: <SiRedux />, color: "text-purple-400", glow: "shadow-purple-500/20" },
      { name: "HTML5 & CSS3", level: 95, status: "Expert", icon: <FaHtml5 />, color: "text-orange-500", glow: "shadow-orange-500/20" },
    ],
  },
  {
    category: "Backend & Database Engineering",
    description: "Architecting REST APIs, scalable servers, and database schemas.",
    skills: [
      { name: "Node.js", level: 85, status: "Advanced", icon: <FaNodeJs />, color: "text-emerald-500", glow: "shadow-emerald-500/20" },
      { name: "Express.js", level: 86, status: "Advanced", icon: <SiExpress />, color: "text-gray-300", glow: "shadow-gray-400/20" },
      { name: "MongoDB & Mongoose", level: 82, status: "Proficient", icon: <SiMongodb />, color: "text-green-500", glow: "shadow-green-500/20" },
      { name: "RESTful APIs & Postman", level: 90, status: "Advanced", icon: <SiPostman />, color: "text-orange-400", glow: "shadow-orange-400/20" },
      { name: "C++ Programming", level: 80, status: "Proficient", icon: <SiCplusplus />, color: "text-blue-500", glow: "shadow-blue-500/20" },
    ],
  },
  {
    category: "Tooling & Cloud Deployment",
    description: "Version control, CI/CD workflows, and production hosting platforms.",
    skills: [
      { name: "Git & GitHub", level: 88, status: "Advanced", icon: <FaGitAlt />, color: "text-orange-600", glow: "shadow-orange-600/20" },
      { name: "Vercel Deployment", level: 90, status: "Advanced", icon: <SiVercel />, color: "text-white", glow: "shadow-white/20" },
    ],
  },
];

// Framer Motion container variants for staggered grid items
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
    },
  },
};

// Individual card slide-up animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] },
  },
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-24 bg-[#030508] relative overflow-hidden text-white"
    >
      {/* BACKGROUND AMBIENT GLOWS */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-teal-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        {/* SECTION HEADER */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-semibold uppercase tracking-widest mb-3 shadow-inner backdrop-blur-md"
          >
            <FaLayerGroup className="text-xs text-emerald-400" />
            <span>Technical Capabilities</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4"
          >
            Technical <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">Proficiency</span>
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-20 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 mx-auto rounded-full mb-4 origin-left shadow-[0_0_10px_#10b981]"
          />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed"
          >
            A detailed breakdown of my full-stack engineering toolset, framework mastery, and production deployment standards.
          </motion.p>
        </div>

        {/* SKILLS CATEGORIES GRID */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {skillCategories.map((cat, catIdx) => (
            <motion.div
              key={catIdx}
              variants={cardVariants}
              className={`bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden group hover:border-emerald-500/40 transition-all duration-500 ${
                catIdx === 2 ? "lg:col-span-2" : ""
              }`}
            >
              {/* TOP ACCENT BORDER HIGHLIGHT ON HOVER */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 opacity-20 group-hover:opacity-100 transition-opacity duration-500 shadow-[0_0_10px_#10b981]" />

              {/* CATEGORY HEADER */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-1.5">
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shadow-inner">
                    <FaTerminal className="text-sm" />
                  </div>
                  <h3 className="text-xl font-bold tracking-wide text-gray-100">
                    {cat.category}
                  </h3>
                </div>
                <p className="text-gray-400 text-xs sm:text-sm pl-12">
                  {cat.description}
                </p>
              </div>

              {/* SKILLS PROGRESS BARS */}
              <div className={`space-y-6 ${catIdx === 2 ? "grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 space-y-0" : ""}`}>
                {cat.skills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    
                    {/* SKILL TITLE, ICON & PERCENTAGE */}
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <span className={`text-xl sm:text-2xl ${skill.color} p-1.5 rounded-xl bg-white/[0.04] border border-white/10 shadow-sm`}>
                          {skill.icon}
                        </span>
                        <span className="font-semibold text-sm sm:text-base tracking-wide text-gray-200">
                          {skill.name}
                        </span>
                      </div>

                      <div className="flex items-center gap-2.5">
                        <span className="text-[11px] font-medium text-emerald-300 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                          {skill.status}
                        </span>
                        <span className="text-sm font-bold text-emerald-400 font-mono">
                          {skill.level}%
                        </span>
                      </div>
                    </div>

                    ANIMATED PROGRESS BAR TRACK
                    <div className="w-full h-2.5 bg-black/40 rounded-full overflow-hidden p-0.5 border border-white/5 relative">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.1, delay: index * 0.08, ease: [0.25, 0.4, 0.25, 1] }}
                        viewport={{ once: true }}
                        className="h-full bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 rounded-full shadow-[0_0_12px_rgba(16,185,129,0.5)]"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;