// import React from "react";
// import { motion } from "framer-motion";
// import { FaArrowRight, FaDownload, FaCode, FaServer, FaCheckCircle } from "react-icons/fa";
// import profileImg from "../assets/ALI.jpeg";

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.15,
//       delayChildren: 0.2,
//     },
//   },
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: 30 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.7, ease: [0.25, 0.4, 0.25, 1] },
//   },
// };

// const Hero = () => {
//   return (
//     <section
//       id="home"
//       className="min-h-screen relative flex items-center pt-28 pb-20 bg-dark-200 overflow-hidden"
//     >
//       {/* BACKGROUND GLOW ACCENTS */}
//       <div className="absolute top-1/4 left-10 w-72 h-72 bg-purple/20 rounded-full blur-[120px] pointer-events-none" />
//       <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-indigo-500/15 rounded-full blur-[140px] pointer-events-none" />

//       <div className="container mx-auto px-6 max-w-6xl relative z-10">
//         <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          
//           {/* LEFT CONTENT */}
//           <motion.div
//             variants={containerVariants}
//             initial="hidden"
//             animate="visible"
//             className="lg:w-7/12 w-full text-center lg:text-left"
//           >
//             {/* TOP AVAILABILITY BADGE */}
//             <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple/10 border border-purple/30 mb-6">
//               <span className="relative flex h-2 w-2">
//                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
//                 <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
//               </span>
//               <span className="text-xs font-semibold text-purple tracking-wide">
//                 Available for New Projects & Roles
//               </span>
//             </motion.div>

//             {/* MAIN HEADING */}
//             <motion.h1
//               variants={itemVariants}
//               className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.15] mb-4 tracking-tight"
//             >
//               Hi, I'm <span className="bg-gradient-to-r from-purple via-indigo-400 to-pink-500 bg-clip-text text-transparent">Ali Hamza</span>
//             </motion.h1>

//             {/* SUBTITLE ROLE */}
//             <motion.h2
//               variants={itemVariants}
//               className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-300 mb-6 flex flex-wrap items-center justify-center lg:justify-start gap-2"
//             >
//               <span>Full-Stack</span>
//               <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-purple font-mono text-lg sm:text-xl">
//                 MERN Developer
//               </span>
//             </motion.h2>

//             {/* DESCRIPTION */}
//             <motion.p
//               variants={itemVariants}
//               className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-8"
//             >
//               Engineering scalable backend architecture with Node.js & MongoDB, paired with high-performance, animation-rich React frontends. Focused on clean code and exceptional UI performance.
//             </motion.p>

//             {/* ACTION BUTTONS */}
//             <motion.div
//               variants={itemVariants}
//               className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
//             >
//               <a
//                 href="#projects"
//                 className="w-full sm:w-auto px-7 py-3.5 bg-purple hover:bg-purple/80 text-white font-semibold rounded-xl text-sm transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-purple/25 group"
//               >
//                 <span>View My Work</span>
//                 <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
//               </a>

//               <a
//                 href="/cv.pdf"
//                 download="Ali_Hamza_CV.pdf"
//                 className="w-full sm:w-auto px-7 py-3.5 border border-white/20 hover:border-purple/60 hover:bg-purple/10 text-white font-semibold rounded-xl text-sm transition-all duration-300 flex items-center justify-center gap-2"
//               >
//                 <FaDownload className="text-xs text-purple" />
//                 <span>Download CV</span>
//               </a>
//             </motion.div>
//           </motion.div>

//           {/* RIGHT HERO IMAGE */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8, delay: 0.3 }}
//             className="lg:w-5/12 w-full flex justify-center relative"
//           >
//             <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              
//               {/* GRADIENT RING GLOW */}
//               <div className="absolute -inset-1.5 bg-gradient-to-r from-purple via-indigo-500 to-pink-500 rounded-full blur-lg opacity-60 animate-pulse"></div>

//               {/* FLOATING ANIMATED CONTAINER */}
//               <motion.div
//                 animate={{ y: [0, -12, 0] }}
//                 transition={{
//                   duration: 5,
//                   repeat: Infinity,
//                   repeatType: "mirror",
//                   ease: "easeInOut",
//                 }}
//                 className="relative w-full h-full rounded-full border-2 border-white/10 overflow-hidden shadow-2xl bg-dark-300"
//               >
//                 <img
//                   className="w-full h-full object-cover object-center"
//                   src={profileImg}
//                   alt="Ali Hamza"
//                 />
//               </motion.div>

//               {/* FLOATING BADGE 1: FRONTEND */}
//               <motion.div
//                 animate={{ y: [0, 8, 0] }}
//                 transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//                 className="absolute -top-2 -left-4 bg-dark-100/90 backdrop-blur-md border border-white/10 px-3.5 py-2 rounded-xl flex items-center gap-2.5 shadow-xl text-white text-xs font-semibold"
//               >
//                 <div className="p-1.5 rounded-lg bg-blue-500/20 text-blue-400">
//                   <FaCode className="text-sm" />
//                 </div>
//                 <span>React Specialist</span>
//               </motion.div>

//               {/* FLOATING BADGE 2: BACKEND */}
//               <motion.div
//                 animate={{ y: [0, -8, 0] }}
//                 transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
//                 className="absolute -bottom-2 -right-4 bg-dark-100/90 backdrop-blur-md border border-white/10 px-3.5 py-2 rounded-xl flex items-center gap-2.5 shadow-xl text-white text-xs font-semibold"
//               >
//                 <div className="p-1.5 rounded-lg bg-emerald-500/20 text-emerald-400">
//                   <FaServer className="text-sm" />
//                 </div>
//                 <span>Node & Express API</span>
//               </motion.div>

//             </div>
//           </motion.div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

// import React from "react";
// import { motion } from "framer-motion";
// import { FaArrowRight, FaDownload, FaCode, FaServer } from "react-icons/fa";
// import profileImg from "../assets/ALI.jpeg";

// // Framer Motion container variants for staggered children entrance animations
// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.15,
//       delayChildren: 0.2,
//     },
//   },
// };

// // Individual item fade-up slide animation config
// const itemVariants = {
//   hidden: { opacity: 0, y: 30 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.7, ease: [0.25, 0.4, 0.25, 1] },
//   },
// };

// const Hero = () => {
//   return (
//     <section
//       id="home"
//       className="min-h-screen relative flex items-center pt-28 pb-20 bg-[#0B0F19] overflow-hidden"
//     >
//       {/* BACKGROUND AMBIENT GLOW ACCENTS (Soft vibrant purple & indigo lighting) */}
//       <div className="absolute top-1/4 left-10 w-72 h-72 bg-purple-600/15 rounded-full blur-[120px] pointer-events-none" />
//       <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none" />

//       <div className="container mx-auto px-6 max-w-6xl relative z-10">
//         <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          
//           {/* LEFT CONTENT COLUMN */}
//           <motion.div
//             variants={containerVariants}
//             initial="hidden"
//             animate="visible"
//             className="lg:w-7/12 w-full text-center lg:text-left"
//           >
//             {/* LIVE AVAILABILITY BADGE */}
//             <motion.div 
//               variants={itemVariants} 
//               className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 mb-6 shadow-inner"
//             >
//               <span className="relative flex h-2 w-2">
//                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
//                 <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
//               </span>
//               <span className="text-xs font-semibold text-purple-300 tracking-wide">
//                 Available for New Projects & Roles
//               </span>
//             </motion.div>

//             {/* MAIN INTRODUCTION HEADING */}
//             <motion.h1
//               variants={itemVariants}
//               className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.15] mb-4 tracking-tight"
//             >
//               Hi, I'm{" "}
//               <span className="bg-gradient-to-r from-purple-400 via-indigo-400 to-pink-500 bg-clip-text text-transparent">
//                 Ali Hamza
//               </span>
//             </motion.h1>

//             {/* PROFESSIONAL ROLE SUBTITLE */}
//             <motion.h2
//               variants={itemVariants}
//               className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-300 mb-6 flex flex-wrap items-center justify-center lg:justify-start gap-2.5"
//             >
//               <span>Full-Stack</span>
//               <span className="px-3.5 py-1 rounded-xl bg-white/[0.03] border border-white/10 text-purple-400 font-mono text-lg sm:text-xl shadow-sm">
//                 MERN Developer
//               </span>
//             </motion.h2>

//             {/* BIO DESCRIPTION */}
//             <motion.p
//               variants={itemVariants}
//               className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-8"
//             >
//               Engineering scalable backend architecture with Node.js & MongoDB, paired with high-performance, animation-rich React frontends. Focused on clean code and exceptional UI performance.
//             </motion.p>

//             {/* CALL TO ACTION BUTTONS */}
//             <motion.div
//               variants={itemVariants}
//               className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
//             >
//               <a
//                 href="#projects"
//                 className="w-full sm:w-auto px-7 py-3.5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold rounded-xl text-sm transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-purple-600/25 group"
//               >
//                 <span>View My Work</span>
//                 <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
//               </a>

//               <a
//                 href="/cv.pdf"
//                 download="Ali_Hamza_CV.pdf"
//                 className="w-full sm:w-auto px-7 py-3.5 border border-white/20 hover:border-purple-500/60 hover:bg-purple-500/10 text-white font-semibold rounded-xl text-sm transition-all duration-300 flex items-center justify-center gap-2 shadow-sm"
//               >
//                 <FaDownload className="text-xs text-purple-400" />
//                 <span>Download CV</span>
//               </a>
//             </motion.div>
//           </motion.div>

//           {/* RIGHT HERO IMAGE & FLOATING SKILL BADGES COLUMN */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8, delay: 0.3 }}
//             className="lg:w-5/12 w-full flex justify-center relative"
//           >
//             <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              
//               {/* GRADIENT RING GLOW EFFECT BEHIND PROFILE IMAGE */}
//               <div className="absolute -inset-2 bg-gradient-to-r from-purple-500 via-indigo-500 to-pink-500 rounded-full blur-xl opacity-60 animate-pulse"></div>

//               {/* FLOATING ANIMATED PROFILE CONTAINER */}
//               <motion.div
//                 animate={{ y: [0, -12, 0] }}
//                 transition={{
//                   duration: 5,
//                   repeat: Infinity,
//                   repeatType: "mirror",
//                   ease: "easeInOut",
//                 }}
//                 className="relative w-full h-full rounded-full border-2 border-white/10 overflow-hidden shadow-2xl bg-gray-900"
//               >
//                 <img
//                   className="w-full h-full object-cover object-center"
//                   src={profileImg}
//                   alt="Ali Hamza"
//                 />
//               </motion.div>

//               {/* FLOATING BADGE 1: REACT FRONTEND */}
//               <motion.div
//                 animate={{ y: [0, 8, 0] }}
//                 transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//                 className="absolute -top-2 -left-4 bg-[#0B0F19]/90 backdrop-blur-md border border-white/10 px-4 py-2.5 rounded-2xl flex items-center gap-3 shadow-2xl text-white text-xs font-semibold"
//               >
//                 <div className="p-2 rounded-xl bg-blue-500/20 text-blue-400 shadow-inner">
//                   <FaCode className="text-sm" />
//                 </div>
//                 <span>React Specialist</span>
//               </motion.div>

//               {/* FLOATING BADGE 2: BACKEND API */}
//               <motion.div
//                 animate={{ y: [0, -8, 0] }}
//                 transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
//                 className="absolute -bottom-2 -right-4 bg-[#0B0F19]/90 backdrop-blur-md border border-white/10 px-4 py-2.5 rounded-2xl flex items-center gap-3 shadow-2xl text-white text-xs font-semibold"
//               >
//                 <div className="p-2 rounded-xl bg-emerald-500/20 text-emerald-400 shadow-inner">
//                   <FaServer className="text-sm" />
//                 </div>
//                 <span>Node & Express API</span>
//               </motion.div>

//             </div>
//           </motion.div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;
import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaDownload, FaCode, FaServer } from "react-icons/fa";
import profileImg from "../assets/ALI.jpeg";

// Framer Motion container variants for staggered children entrance animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

// Individual item fade-up slide animation config
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.4, 0.25, 1] },
  },
};

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center pt-28 pb-20 bg-[#030508] overflow-hidden text-white"
    >
      {/* ADVANCED AMBIENT BACKGROUND GLOW ACCENTS */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-emerald-500/[0.08] rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-cyan-500/[0.07] rounded-full blur-[160px] pointer-events-none" />

      {/* SUBTLE GRID PATTERN OVERLAY */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          
          {/* LEFT CONTENT COLUMN */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:w-7/12 w-full text-center lg:text-left"
          >
            {/* LIVE AVAILABILITY BADGE */}
            <motion.div 
              variants={itemVariants} 
              className="inline-flex items-center gap-2.5 px-4.5 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/25 mb-6 shadow-[0_0_20px_rgba(16,185,129,0.15)] backdrop-blur-md"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-bold text-emerald-300 tracking-wider uppercase">
                Available for New Projects & Roles
              </span>
            </motion.div>

            {/* MAIN INTRODUCTION HEADING */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.15] mb-4 tracking-tight"
            >
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                Ali Hamza
              </span>
            </motion.h1>

            {/* PROFESSIONAL ROLE SUBTITLE */}
            <motion.h2
              variants={itemVariants}
              className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-300 mb-6 flex flex-wrap items-center justify-center lg:justify-start gap-2.5"
            >
              <span>Full-Stack</span>
              <span className="px-4 py-1.5 rounded-xl bg-white/[0.04] border border-white/10 text-emerald-300 font-mono text-lg sm:text-xl shadow-inner">
                MERN Developer
              </span>
            </motion.h2>

            {/* BIO DESCRIPTION */}
            <motion.p
              variants={itemVariants}
              className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-8 font-normal"
            >
              Engineering scalable backend architecture with Node.js & MongoDB, paired with high-performance, animation-rich React frontends. Focused on clean code and exceptional UI performance.
            </motion.p>

            {/* CALL TO ACTION BUTTONS */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <a
                href="#projects"
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-gray-950 font-bold rounded-2xl text-sm transition-all duration-300 flex items-center justify-center gap-2.5 shadow-[0_0_25px_rgba(16,185,129,0.35)] group cursor-pointer"
              >
                <span>View My Work</span>
                <FaArrowRight className="text-xs group-hover:translate-x-1.5 transition-transform" />
              </a>

              <a
                href="/cv.pdf"
                download="Ali_Hamza_CV.pdf"
                className="w-full sm:w-auto px-8 py-4 border border-white/15 hover:border-emerald-500/50 hover:bg-emerald-500/10 text-white font-bold rounded-2xl text-sm transition-all duration-300 flex items-center justify-center gap-2.5 shadow-sm backdrop-blur-md cursor-pointer"
              >
                <FaDownload className="text-xs text-emerald-400" />
                <span>Download CV</span>
              </a>
            </motion.div>
          </motion.div>

          {/* RIGHT HERO IMAGE & FLOATING SKILL BADGES COLUMN */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:w-5/12 w-full flex justify-center relative"
          >
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              
              {/* GRADIENT RING GLOW EFFECT BEHIND PROFILE IMAGE */}
              <div className="absolute -inset-3 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 rounded-full blur-2xl opacity-40 animate-pulse"></div>

              {/* FLOATING ANIMATED PROFILE CONTAINER */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "mirror",
                  ease: "easeInOut",
                }}
                className="relative w-full h-full rounded-full border-2 border-emerald-500/30 overflow-hidden shadow-2xl bg-gray-900 group"
              >
                <img
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  src={profileImg}
                  alt="Ali Hamza"
                />
              </motion.div>

              {/* FLOATING BADGE 1: REACT FRONTEND */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-2 -left-4 bg-[#05070B]/90 backdrop-blur-xl border border-white/10 px-4.5 py-3 rounded-2xl flex items-center gap-3 shadow-2xl text-white text-xs font-bold"
              >
                <div className="p-2 rounded-xl bg-cyan-500/20 text-cyan-400 shadow-inner">
                  <FaCode className="text-sm" />
                </div>
                <span>React Specialist</span>
              </motion.div>

              {/* FLOATING BADGE 2: BACKEND API */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-2 -right-4 bg-[#05070B]/90 backdrop-blur-xl border border-white/10 px-4.5 py-3 rounded-2xl flex items-center gap-3 shadow-2xl text-white text-xs font-bold"
              >
                <div className="p-2 rounded-xl bg-emerald-500/20 text-emerald-400 shadow-inner">
                  <FaServer className="text-sm" />
                </div>
                <span>Node & Express API</span>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;