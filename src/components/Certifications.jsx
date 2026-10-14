// import React from "react";
// import { motion } from "framer-motion";
// import { FaTrophy, FaCertificate, FaGraduationCap, FaAward, FaCalendarAlt, FaBuilding } from "react-icons/fa";

// const certs = [
//   {
//     icon: FaTrophy,
//     title: "1st Place Winner – AI Project Expo",
//     issuer: "University Project Exhibition",
//     date: "2026",
//     desc: "Awarded 1st place certificate for engineering an intelligent AI Chatbot solution with custom backend dynamic response logic.",
//     type: "Award",
//     badgeBg: "bg-amber-500/10 text-amber-400 border-amber-500/30",
//     iconBg: "bg-amber-500/15 text-amber-400 border-amber-500/25",
//     glowColor: "group-hover:border-amber-500/40",
//     accentGradient: "from-amber-500 via-orange-500 to-amber-300",
//   },
//   {
//     icon: FaGraduationCap,
//     title: "Dev Weekend Fellowship",
//     issuer: "Dev Weekend",
//     date: "2026",
//     desc: "Successfully completed the competitive developer fellowship program, building modern full-stack web applications and collaborating on technical projects.",
//     type: "Fellowship",
//     badgeBg: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
//     iconBg: "bg-emerald-500/15 text-emerald-400 border-emerald-500/25",
//     glowColor: "group-hover:border-emerald-500/40",
//     accentGradient: "from-emerald-500 via-teal-400 to-emerald-300",
//   },
//   {
//     icon: FaCertificate,
//     title: "Web Development Internship Certificate",
//     issuer: "CodeAlpha",
//     date: "2026",
//     desc: "Successfully completed hands-on frontend web development training, building scalable React components and interactive UI layouts.",
//     type: "Internship",
//     badgeBg: "bg-purple/10 text-purple border-purple/30",
//     iconBg: "bg-purple/15 text-purple border-purple/25",
//     glowColor: "group-hover:border-purple/40",
//     accentGradient: "from-purple via-indigo-500 to-pink-500",
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

// const Certifications = () => {
//   return (
//     <section id="certifications" className="py-24 bg-dark-200 relative overflow-hidden">
//       {/* AMBIENT BACKGROUND GLOWS */}
//       <div className="absolute top-1/4 right-0 w-80 h-80 bg-purple/10 rounded-full blur-[140px] pointer-events-none" />
//       <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

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
//             <FaAward className="text-xs" />
//             <span>Honors & Credentials</span>
//           </motion.div>

//           <motion.h2
//             initial={{ opacity: 0, y: 15 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4"
//           >
//             Certifications & <span className="bg-gradient-to-r from-purple via-indigo-400 to-pink-500 bg-clip-text text-transparent">Awards</span>
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
//             Verified technical achievements, hackathon recognitions, and professional software engineering fellowships.
//           </motion.p>
//         </div>

//         {/* CERTIFICATES GRID */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
//         >
//           {certs.map((item, idx) => {
//             const Icon = item.icon;
//             return (
//               <motion.div
//                 key={idx}
//                 variants={cardVariants}
//                 whileHover={{ y: -8, transition: { duration: 0.3 } }}
//                 className={`bg-dark-300/40 backdrop-blur-md border border-white/10 rounded-2xl p-6 sm:p-7 shadow-2xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden ${item.glowColor}`}
//               >
//                 {/* TOP ACCENT BORDER ON HOVER */}
//                 <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.accentGradient} opacity-30 group-hover:opacity-100 transition-opacity duration-300`} />

//                 <div>
//                   {/* CARD TOP BAR */}
//                   <div className="flex items-center justify-between mb-5">
//                     <div className={`p-3 rounded-xl border ${item.iconBg} group-hover:scale-110 transition-transform duration-300 shadow-md`}>
//                       <Icon className="text-xl sm:text-2xl" />
//                     </div>

//                     <div className="flex items-center gap-1.5 text-xs text-gray-400 font-mono bg-white/5 px-2.5 py-1 rounded-full border border-white/10">
//                       <FaCalendarAlt className="text-purple/70 text-[10px]" />
//                       <span>{item.date}</span>
//                     </div>
//                   </div>

//                   {/* TYPE BADGE */}
//                   <span className={`inline-block text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md border mb-3 ${item.badgeBg}`}>
//                     {item.type}
//                   </span>

//                   {/* TITLE */}
//                   <h3 className="text-lg sm:text-xl font-bold text-white mb-2 leading-snug group-hover:text-purple transition-colors duration-300">
//                     {item.title}
//                   </h3>

//                   {/* ISSUER */}
//                   <div className="flex items-center gap-2 text-xs font-semibold text-purple/90 mb-4">
//                     <FaBuilding className="text-[10px] text-purple/70" />
//                     <span>{item.issuer}</span>
//                   </div>

//                   {/* DESCRIPTION */}
//                   <p className="text-gray-300 text-xs sm:text-sm leading-relaxed font-normal">
//                     {item.desc}
//                   </p>
//                 </div>

//                 {/* VERIFIED BADGE FOOTER */}
//                 <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
//                   <span className="text-[11px] text-emerald-400 font-medium flex items-center gap-1.5">
//                     <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
//                     Verified Credential
//                   </span>
//                   <span className="text-xs text-gray-500 font-mono">Ali Hamza</span>
//                 </div>
//               </motion.div>
//             );
//           })}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Certifications;
// import React from "react";
// import { motion } from "framer-motion";
// import { FaTrophy, FaCertificate, FaGraduationCap, FaAward, FaCalendarAlt, FaBuilding } from "react-icons/fa";

// const certs = [
//   {
//     icon: FaTrophy,
//     title: "1st Place Winner – AI Project Expo",
//     issuer: "University Project Exhibition",
//     date: "2026",
//     desc: "Awarded 1st place certificate for engineering an intelligent AI Chatbot solution with custom backend dynamic response logic.",
//     type: "Award",
//     badgeBg: "bg-amber-500/10 text-amber-400 border-amber-500/30",
//     iconBg: "bg-amber-500/15 text-amber-400 border-amber-500/25",
//     glowColor: "group-hover:border-amber-500/40",
//     accentGradient: "from-amber-500 via-orange-500 to-amber-300",
//   },
//   {
//     icon: FaGraduationCap,
//     title: "Dev Weekend Fellowship",
//     issuer: "Dev Weekend",
//     date: "2026",
//     desc: "Successfully completed the competitive developer fellowship program, building modern full-stack web applications and collaborating on technical projects.",
//     type: "Fellowship",
//     badgeBg: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
//     iconBg: "bg-emerald-500/15 text-emerald-400 border-emerald-500/25",
//     glowColor: "group-hover:border-emerald-500/40",
//     accentGradient: "from-emerald-500 via-teal-400 to-emerald-300",
//   },
//   {
//     icon: FaCertificate,
//     title: "Web Development Internship Certificate",
//     issuer: "CodeAlpha",
//     date: "2026",
//     desc: "Successfully completed hands-on frontend web development training, building scalable React components and interactive UI layouts.",
//     type: "Internship",
//     badgeBg: "bg-purple-500/10 text-purple-300 border-purple-500/30",
//     iconBg: "bg-purple-500/15 text-purple-300 border-purple-500/25",
//     glowColor: "group-hover:border-purple-500/40",
//     accentGradient: "from-purple-500 via-indigo-500 to-pink-500",
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

// const Certifications = () => {
//   return (
//     <section id="certifications" className="py-24 bg-[#0B0F19] relative overflow-hidden text-white">
//       {/* AMBIENT BACKGROUND GLOWS */}
//       <div className="absolute top-1/4 right-0 w-80 h-80 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />
//       <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

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
//             <FaAward className="text-xs" />
//             <span>Honors & Credentials</span>
//           </motion.div>

//           <motion.h2
//             initial={{ opacity: 0, y: 15 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4"
//           >
//             Certifications & <span className="bg-gradient-to-r from-purple-400 via-indigo-400 to-pink-500 bg-clip-text text-transparent">Awards</span>
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
//             Verified technical achievements, hackathon recognitions, and professional software engineering fellowships.
//           </motion.p>
//         </div>

//         {/* CERTIFICATES GRID */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
//         >
//           {certs.map((item, idx) => {
//             const Icon = item.icon;
//             return (
//               <motion.div
//                 key={idx}
//                 variants={cardVariants}
//                 whileHover={{ y: -8, transition: { duration: 0.3 } }}
//                 className={`bg-white/[0.02] backdrop-blur-md border border-white/10 rounded-2xl p-6 sm:p-7 shadow-2xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden ${item.glowColor}`}
//               >
//                 {/* TOP ACCENT BORDER ON HOVER */}
//                 <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.accentGradient} opacity-30 group-hover:opacity-100 transition-opacity duration-300`} />

//                 <div>
//                   {/* CARD TOP BAR */}
//                   <div className="flex items-center justify-between mb-5">
//                     <div className={`p-3 rounded-xl border ${item.iconBg} group-hover:scale-110 transition-transform duration-300 shadow-md`}>
//                       <Icon className="text-xl sm:text-2xl" />
//                     </div>

//                     <div className="flex items-center gap-1.5 text-xs text-gray-400 font-mono bg-white/5 px-2.5 py-1 rounded-full border border-white/10">
//                       <FaCalendarAlt className="text-purple-400/70 text-[10px]" />
//                       <span>{item.date}</span>
//                     </div>
//                   </div>

//                   {/* TYPE BADGE */}
//                   <span className={`inline-block text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md border mb-3 shadow-sm ${item.badgeBg}`}>
//                     {item.type}
//                   </span>

//                   {/* TITLE */}
//                   <h3 className="text-lg sm:text-xl font-bold text-gray-100 mb-2 leading-snug group-hover:text-purple-300 transition-colors duration-300">
//                     {item.title}
//                   </h3>

//                   {/* ISSUER */}
//                   <div className="flex items-center gap-2 text-xs font-semibold text-purple-300 mb-4">
//                     <FaBuilding className="text-[10px] text-purple-400" />
//                     <span>{item.issuer}</span>
//                   </div>

//                   {/* DESCRIPTION */}
//                   <p className="text-gray-300 text-xs sm:text-sm leading-relaxed font-normal">
//                     {item.desc}
//                   </p>
//                 </div>

//                 {/* VERIFIED BADGE FOOTER */}
//                 <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
//                   <span className="text-[11px] text-emerald-400 font-medium flex items-center gap-1.5">
//                     <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
//                     Verified Credential
//                   </span>
//                   <span className="text-xs text-gray-500 font-mono">Ali Hamza</span>
//                 </div>
//               </motion.div>
//             );
//           })}
//         </motion.div>

//       </div>
//     </section>
//   );
// };

// export default Certifications;
import React from "react";
import { motion } from "framer-motion";
import { FaTrophy, FaCertificate, FaGraduationCap, FaAward, FaCalendarAlt, FaBuilding } from "react-icons/fa";

const certs = [
  {
    icon: FaTrophy,
    title: "1st Place Winner – AI Project Expo",
    issuer: "University Project Exhibition",
    date: "2026",
    desc: "Awarded 1st place certificate for engineering an intelligent AI Chatbot solution with custom backend dynamic response logic.",
    type: "Award",
    badgeBg: "bg-amber-500/10 text-amber-300 border-amber-500/30",
    iconBg: "bg-amber-500/20 text-amber-400 border-amber-500/40",
    glowColor: "group-hover:shadow-[0_0_30px_rgba(245,158,11,0.25)] group-hover:border-amber-500/60",
    accentGradient: "from-amber-400 via-yellow-500 to-orange-500",
  },
  {
    icon: FaGraduationCap,
    title: "Dev Weekend Fellowship",
    issuer: "Dev Weekend",
    date: "2026",
    desc: "Successfully completed the competitive developer fellowship program, building modern full-stack web applications and collaborating on technical projects.",
    type: "Fellowship",
    badgeBg: "bg-emerald-500/10 text-emerald-300 border-emerald-500/30",
    iconBg: "bg-emerald-500/20 text-emerald-400 border-emerald-500/40",
    glowColor: "group-hover:shadow-[0_0_30px_rgba(16,185,129,0.25)] group-hover:border-emerald-500/60",
    accentGradient: "from-emerald-400 via-teal-500 to-cyan-500",
  },
  {
    icon: FaCertificate,
    title: "Web Development Internship Certificate",
    issuer: "CodeAlpha",
    date: "2026",
    desc: "Successfully completed hands-on frontend web development training, building scalable React components and interactive UI layouts.",
    type: "Internship",
    badgeBg: "bg-cyan-500/10 text-cyan-300 border-cyan-500/30",
    iconBg: "bg-cyan-500/20 text-cyan-400 border-cyan-500/40",
    glowColor: "group-hover:shadow-[0_0_30px_rgba(6,182,212,0.25)] group-hover:border-cyan-500/60",
    accentGradient: "from-cyan-400 via-blue-500 to-indigo-500",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.215, 0.61, 0.355, 1] },
  },
};

const Certifications = () => {
  return (
    <section id="certifications" className="py-28 bg-[#05070B] relative overflow-hidden text-white">
      {/* ADVANCED AMBIENT BACKGROUND GLOWS */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-emerald-500/[0.07] rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-cyan-500/[0.07] rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-amber-500/[0.05] rounded-full blur-[150px] pointer-events-none" />

      {/* GRID PATTERN OVERLAY */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: -15, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-4.5 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-4 shadow-[0_0_20px_rgba(16,185,129,0.15)] backdrop-blur-md"
          >
            <FaAward className="text-sm animate-pulse text-emerald-400" />
            <span>Honors & Industry Credentials</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6 leading-tight"
          >
            Certifications & <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">Awards</span>
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
            Verified technical achievements, hackathon recognitions, and professional software engineering fellowships.
          </motion.p>
        </div>

        {/* CERTIFICATES GRID */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {certs.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover={{ y: -12, scale: 1.02, transition: { duration: 0.3, ease: "easeOut" } }}
                className={`bg-gradient-to-b from-white/[0.04] to-white/[0.01] backdrop-blur-2xl border border-white/10 rounded-3xl p-8 shadow-2xl transition-all duration-500 flex flex-col justify-between group relative overflow-hidden ${item.glowColor}`}
              >
                {/* DYNAMIC SHINE EFFECT ON HOVER */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                {/* TOP ACCENT GRADIENT LINE */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${item.accentGradient} opacity-40 group-hover:opacity-100 transition-opacity duration-300 shadow-sm`} />

                <div>
                  {/* CARD TOP BAR */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`p-4 rounded-2xl border ${item.iconBg} group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 shadow-xl`}>
                      <Icon className="text-2xl sm:text-3xl" />
                    </div>

                    <div className="flex items-center gap-2 text-xs font-mono text-gray-300 bg-white/[0.04] px-3.5 py-1.5 rounded-full border border-white/10 shadow-inner">
                      <FaCalendarAlt className="text-emerald-400 text-xs" />
                      <span>{item.date}</span>
                    </div>
                  </div>

                  {/* TYPE BADGE */}
                  <span className={`inline-block text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-lg border mb-4 shadow-sm ${item.badgeBg}`}>
                    {item.type}
                  </span>

                  {/* TITLE */}
                  <h3 className="text-xl sm:text-2xl font-extrabold text-gray-100 mb-3 leading-snug group-hover:text-emerald-300 transition-colors duration-300">
                    {item.title}
                  </h3>

                  {/* ISSUER */}
                  <div className="flex items-center gap-2 text-sm font-semibold text-emerald-400/90 mb-5">
                    <FaBuilding className="text-xs text-emerald-400" />
                    <span>{item.issuer}</span>
                  </div>

                  {/* DESCRIPTION */}
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-normal mb-6">
                    {item.desc}
                  </p>
                </div>

              
                <div className="pt-5 border-t border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                    </span>
                    <span className="text-xs text-emerald-400 font-semibold tracking-wide">Verified Credential</span>
                  </div>
                  <span className="text-xs text-gray-400 font-mono font-medium">Ali Hamza</span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};

export default Certifications;