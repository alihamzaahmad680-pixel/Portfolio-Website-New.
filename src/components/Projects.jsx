// import React from "react";
// import { FaGithub, FaExternalLinkAlt, FaFolderOpen } from "react-icons/fa";
// import { motion } from "framer-motion";

// import projectImg1 from "../assets/project1.jpeg";
// import projectImg2 from "../assets/project2.jpeg";
// import projectImg3 from "../assets/project3.jpeg";
// import projectImg4 from "../assets/project4.jpeg";
// import projectImg5 from "../assets/project5.jpeg";
// import projectImg6 from "../assets/project6.jpeg";

// const projects = [
//   {
//     title: "ZenithCart - Full-Stack E-Commerce",
//     category: "Full Stack MERN",
//     tech: ["React", "Node.js", "MongoDB", "Express", "JWT"],
//     description:
//       "A professional e-commerce platform built using the MERN stack. Features JWT authentication, dynamic filtering, interactive cart, and payment gateway integration.",
//     image: projectImg1,
//     live: "https://greencart-iota-one.vercel.app/",
//     github: "https://github.com/alihamzaahmad680-pixel/client",
//   },
//   {
//     title: "VoyageVista - Travel Booking Platform",
//     category: "Frontend Architecture",
//     tech: ["React", "Tailwind CSS", "REST API"],
//     description:
//       "A modern travel booking platform built with React. Features intuitive destination browsing and smooth dynamic UI for effortless trip planning.",
//     image: projectImg2,
//     live: "https://tour-and-travel-app-68nr.vercel.app/",
//     github: "https://github.com/alihamzaahmad680-pixel/Tour-and-Travel-App",
//   },
//   {
//     title: "NexusMart - Multi-Vendor Marketplace",
//     category: "Full Stack MERN",
//     tech: ["React", "Node.js", "MongoDB", "Redux"],
//     description:
//       "A feature-rich multi-vendor e-commerce web application supporting multiple sellers, dynamic product management, and secure cart functionality.",
//     image: projectImg3,
//     live: "https://e-shop-frontened-phi.vercel.app/",
//     github: "https://github.com/alihamzaahmad680-pixel/E-Shop-Project",
//   },
//   {
//     title: "FlavorFleet - Food Ordering Platform",
//     category: "UI/UX & Frontend",
//     tech: ["HTML5", "CSS3", "JavaScript"],
//     description:
//       "A sleek, responsive food delivery frontend interface designed to provide a smooth and engaging browsing experience for food ordering.",
//     image: projectImg4,
//     live: "https://food-website-project-lemon.vercel.app/",
//     github: "https://github.com/alihamzaahmad680-pixel/Food_Website_Frontend",
//   },
//   {
//     title: "ChronicleNews - Real-Time News Portal",
//     category: "API Integration",
//     tech: ["React", "News API", "Tailwind CSS"],
//     description:
//       "A dynamic news platform fetching real-time global news via API. Features category filters and clean responsive article layouts.",
//     image: projectImg5,
//     live: "https://news-website-theta-orcin.vercel.app/",
//     github: "https://github.com/alihamzaahmad680-pixel/News-Website",
//   },
//   {
//     title: "CorpPulse - Corporate Business Site",
//     category: "Corporate Web",
//     tech: ["HTML5", "CSS3", "JavaScript"],
//     description:
//       "A clean, structured corporate website layout built for displaying business services, team details, and client inquiry forms.",
//     image: projectImg6,
//     live: "https://alihamzaahmad680-pixel.github.io/companies--website/#",
//     github: "https://github.com/alihamzaahmad680-pixel/companies--website",
//   },
// ];

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.15,
//     },
//   },
// };

// const cardVariants = {
//   hidden: { opacity: 0, y: 35 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] },
//   },
// };

// const Projects = () => {
//   return (
//     <section id="projects" className="py-24 bg-dark-200 relative overflow-hidden">
//       {/* AMBIENT BACKGROUND GLOWS */}
//       <div className="absolute top-1/3 left-10 w-96 h-96 bg-purple/10 rounded-full blur-[150px] pointer-events-none" />
//       <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-[150px] pointer-events-none" />

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
//             <FaFolderOpen className="text-xs" />
//             <span>Featured Portfolio</span>
//           </motion.div>

//           <motion.h2
//             initial={{ opacity: 0, y: 15 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4"
//           >
//             Featured <span className="bg-gradient-to-r from-purple via-indigo-400 to-pink-500 bg-clip-text text-transparent">Projects</span>
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
//             A curated showcase of full-stack MERN engines, interactive frontends, and dynamic web applications engineering real-world solutions.
//           </motion.p>
//         </div>

//         {/* PROJECTS GRID */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
//         >
//           {projects.map((project, index) => (
//             <motion.div
//               key={index}
//               variants={cardVariants}
//               whileHover={{ y: -8, transition: { duration: 0.3 } }}
//               className="bg-dark-300/40 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden shadow-2xl hover:border-purple/50 transition-all duration-300 flex flex-col justify-between group relative"
//             >
//               {/* ACCENT BORDER ON HOVER */}
//               <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple via-indigo-500 to-pink-500 opacity-20 group-hover:opacity-100 transition-opacity duration-300 z-20" />

//               <div>
//                 {/* IMAGE CONTAINER WITH ZOOM EFFECT */}
//                 <div className="relative overflow-hidden h-52 w-full bg-dark-100">
//                   <img
//                     src={project.image}
//                     alt={project.title}
//                     className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-dark-300 via-dark-300/40 to-transparent opacity-90" />

//                   {/* OVERLAY CATEGORY BADGE */}
//                   <span className="absolute top-4 left-4 text-[10px] font-bold uppercase tracking-wider text-white bg-dark-100/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 shadow-md">
//                     {project.category}
//                   </span>
//                 </div>

//                 {/* CONTENT AREA */}
//                 <div className="p-6">
//                   <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple transition-colors duration-300 leading-snug">
//                     {project.title}
//                   </h3>

//                   {/* TECH BADGES */}
//                   <div className="flex flex-wrap gap-2 mb-4">
//                     {project.tech?.map((t, tIdx) => (
//                       <span
//                         key={tIdx}
//                         className="text-[11px] font-mono font-medium text-purple/90 bg-purple/10 px-2.5 py-0.5 rounded-md border border-purple/20"
//                       >
//                         {t}
//                       </span>
//                     ))}
//                   </div>

//                   <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3">
//                     {project.description}
//                   </p>
//                 </div>
//               </div>

//               {/* ACTION BUTTONS FOOTER */}
//               <div className="p-6 pt-0 flex gap-3">
//                 <a
//                   href={project.live}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-purple hover:bg-purple/80 text-white rounded-xl text-xs sm:text-sm font-semibold transition duration-300 shadow-lg shadow-purple/20 group/btn"
//                 >
//                   <FaExternalLinkAlt className="text-xs group-hover/btn:translate-x-0.5 transition-transform" />
//                   <span>Live Demo</span>
//                 </a>

//                 <a
//                   href={project.github}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex-1 flex items-center justify-center gap-2 py-2.5 border border-white/20 hover:border-purple/60 hover:bg-purple/10 text-gray-300 hover:text-white rounded-xl text-xs sm:text-sm font-semibold transition duration-300"
//                 >
//                   <FaGithub className="text-sm" />
//                   <span>GitHub</span>
//                 </a>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// // export default Projects;
// import React from "react";
// import { FaGithub, FaExternalLinkAlt, FaFolderOpen } from "react-icons/fa";
// import { motion } from "framer-motion";

// import projectImg1 from "../assets/project1.jpeg";
// import projectImg2 from "../assets/project2.jpeg";
// import projectImg3 from "../assets/project3.jpeg";
// import projectImg4 from "../assets/project4.jpeg";
// import projectImg5 from "../assets/project5.jpeg";
// import projectImg6 from "../assets/project6.jpeg";

// // Structured portfolio projects highlighting MERN stack apps and frontend solutions
// const projects = [
//   {
//     title: "ZenithCart - Full-Stack E-Commerce",
//     category: "Full Stack MERN",
//     tech: ["React", "Node.js", "MongoDB", "Express", "JWT"],
//     description:
//       "A professional e-commerce platform built using the MERN stack. Features JWT authentication, dynamic filtering, interactive cart, and payment gateway integration.",
//     image: projectImg1,
//     live: "https://greencart-iota-one.vercel.app/",
//     github: "https://github.com/alihamzaahmad680-pixel/client",
//   },
//   {
//     title: "VoyageVista - Travel Booking Platform",
//     category: "Frontend Architecture",
//     tech: ["React", "Tailwind CSS", "REST API"],
//     description:
//       "A modern travel booking platform built with React. Features intuitive destination browsing and smooth dynamic UI for effortless trip planning.",
//     image: projectImg2,
//     live: "https://tour-and-travel-app-68nr.vercel.app/",
//     github: "https://github.com/alihamzaahmad680-pixel/Tour-and-Travel-App",
//   },
//   {
//     title: "NexusMart - Multi-Vendor Marketplace",
//     category: "Full Stack MERN",
//     tech: ["React", "Node.js", "MongoDB", "Redux"],
//     description:
//       "A feature-rich multi-vendor e-commerce web application supporting multiple sellers, dynamic product management, and secure cart functionality.",
//     image: projectImg3,
//     live: "https://e-shop-frontened-phi.vercel.app/",
//     github: "https://github.com/alihamzaahmad680-pixel/E-Shop-Project",
//   },
//   {
//     title: "FlavorFleet - Food Ordering Platform",
//     category: "UI/UX & Frontend",
//     tech: ["HTML5", "CSS3", "JavaScript"],
//     description:
//       "A sleek, responsive food delivery frontend interface designed to provide a smooth and engaging browsing experience for food ordering.",
//     image: projectImg4,
//     live: "https://food-website-project-lemon.vercel.app/",
//     github: "https://github.com/alihamzaahmad680-pixel/Food_Website_Frontend",
//   },
//   {
//     title: "ChronicleNews - Real-Time News Portal",
//     category: "API Integration",
//     tech: ["React", "News API", "Tailwind CSS"],
//     description:
//       "A dynamic news platform fetching real-time global news via API. Features category filters and clean responsive article layouts.",
//     image: projectImg5,
//     live: "https://news-website-theta-orcin.vercel.app/",
//     github: "https://github.com/alihamzaahmad680-pixel/News-Website",
//   },
//   {
//     title: "CorpPulse - Corporate Business Site",
//     category: "Corporate Web",
//     tech: ["HTML5", "CSS3", "JavaScript"],
//     description:
//       "A clean, structured corporate website layout built for displaying business services, team details, and client inquiry forms.",
//     image: projectImg6,
//     live: "https://alihamzaahmad680-pixel.github.io/companies--website/#",
//     github: "https://github.com/alihamzaahmad680-pixel/companies--website",
//   },
// ];

// // Framer motion container for staggered children animation
// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.15,
//     },
//   },
// };

// // Individual project card slide-up variants
// const cardVariants = {
//   hidden: { opacity: 0, y: 35 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] },
//   },
// };

// const Projects = () => {
//   return (
//     <section id="projects" className="py-24 bg-[#0B0F19] relative overflow-hidden text-white">
//       {/* AMBIENT BACKGROUND GLOWS */}
//       <div className="absolute top-1/3 left-10 w-96 h-96 bg-purple-600/10 rounded-full blur-[150px] pointer-events-none" />
//       <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-[150px] pointer-events-none" />

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
//             <FaFolderOpen className="text-xs" />
//             <span>Featured Portfolio</span>
//           </motion.div>

//           <motion.h2
//             initial={{ opacity: 0, y: 15 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4"
//           >
//             Featured <span className="bg-gradient-to-r from-purple-400 via-indigo-400 to-pink-500 bg-clip-text text-transparent">Projects</span>
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
//             A curated showcase of full-stack MERN engines, interactive frontends, and dynamic web applications engineering real-world solutions.
//           </motion.p>
//         </div>

//         {/* PROJECTS GRID */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
//         >
//           {projects.map((project, index) => (
//             <motion.div
//               key={index}
//               variants={cardVariants}
//               whileHover={{ y: -8, transition: { duration: 0.3 } }}
//               className="bg-white/[0.02] backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden shadow-2xl hover:border-purple-500/50 hover:bg-white/[0.04] transition-all duration-300 flex flex-col justify-between group relative"
//             >
//               {/* ACCENT BORDER ON HOVER */}
//               <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-indigo-500 to-pink-500 opacity-20 group-hover:opacity-100 transition-opacity duration-300 z-20" />

//               <div>
//                 {/* IMAGE CONTAINER WITH ZOOM EFFECT */}
//                 <div className="relative overflow-hidden h-52 w-full bg-black/40">
//                   <img
//                     src={project.image}
//                     alt={project.title}
//                     className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-transparent to-transparent opacity-90" />

//                   {/* OVERLAY CATEGORY BADGE */}
//                   <span className="absolute top-4 left-4 text-[10px] font-bold uppercase tracking-wider text-white bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 shadow-md">
//                     {project.category}
//                   </span>
//                 </div>

//                 {/* CONTENT AREA */}
//                 <div className="p-6">
//                   <h3 className="text-xl font-bold text-gray-100 mb-3 group-hover:text-purple-300 transition-colors duration-300 leading-snug">
//                     {project.title}
//                   </h3>

//                   {/* TECH BADGES */}
//                   <div className="flex flex-wrap gap-2 mb-4">
//                     {project.tech?.map((t, tIdx) => (
//                       <span
//                         key={tIdx}
//                         className="text-[11px] font-mono font-medium text-purple-300 bg-purple-500/10 px-2.5 py-0.5 rounded-md border border-purple-500/20 shadow-sm"
//                       >
//                         {t}
//                       </span>
//                     ))}
//                   </div>

//                   <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3">
//                     {project.description}
//                   </p>
//                 </div>
//               </div>

//               {/* ACTION BUTTONS FOOTER */}
//               <div className="p-6 pt-0 flex gap-3">
//                 <a
//                   href={project.live}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-purple-600 hover:bg-purple-500 text-white rounded-xl text-xs sm:text-sm font-semibold transition duration-300 shadow-lg shadow-purple-600/30 group/btn"
//                 >
//                   <FaExternalLinkAlt className="text-xs group-hover/btn:translate-x-0.5 transition-transform" />
//                   <span>Live Demo</span>
//                 </a>

//                 <a
//                   href={project.github}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex-1 flex items-center justify-center gap-2 py-2.5 border border-white/20 hover:border-purple-500/60 hover:bg-purple-500/10 text-gray-300 hover:text-white rounded-xl text-xs sm:text-sm font-semibold transition duration-300"
//                 >
//                   <FaGithub className="text-sm" />
//                   <span>GitHub</span>
//                 </a>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>

//       </div>
//     </section>
//   );
// };

// export default Projects;
import React from "react";
import { FaGithub, FaExternalLinkAlt, FaFolderOpen } from "react-icons/fa";
import { motion } from "framer-motion";

import projectImg1 from "../assets/project1.jpeg";
import projectImg2 from "../assets/project2.jpeg";
import projectImg3 from "../assets/project3.jpeg";
import projectImg4 from "../assets/project4.jpeg";
import projectImg5 from "../assets/project5.jpeg";
import projectImg6 from "../assets/project6.jpeg";

// Structured portfolio projects highlighting MERN stack apps and frontend solutions
const projects = [
  {
    title: "ZenithCart - Full-Stack E-Commerce",
    category: "Full Stack MERN",
    tech: ["React", "Node.js", "MongoDB", "Express", "JWT"],
    description:
      "A professional e-commerce platform built using the MERN stack. Features JWT authentication, dynamic filtering, interactive cart, and payment gateway integration.",
    image: projectImg1,
    live: "https://greencart-iota-one.vercel.app/",
    github: "https://github.com/alihamzaahmad680-pixel/client",
  },
  {
    title: "VoyageVista - Travel Booking Platform",
    category: "Frontend Architecture",
    tech: ["React", "Tailwind CSS", "REST API"],
    description:
      "A modern travel booking platform built with React. Features intuitive destination browsing and smooth dynamic UI for effortless trip planning.",
    image: projectImg2,
    live: "https://tour-and-travel-app-68nr.vercel.app/",
    github: "https://github.com/alihamzaahmad680-pixel/Tour-and-Travel-App",
  },
  {
    title: "NexusMart - Multi-Vendor Marketplace",
    category: "Full Stack MERN",
    tech: ["React", "Node.js", "MongoDB", "Redux"],
    description:
      "A feature-rich multi-vendor e-commerce web application supporting multiple sellers, dynamic product management, and secure cart functionality.",
    image: projectImg3,
    live: "https://e-shop-frontened-phi.vercel.app/",
    github: "https://github.com/alihamzaahmad680-pixel/E-Shop-Project",
  },
  {
    title: "FlavorFleet - Food Ordering Platform",
    category: "UI/UX & Frontend",
    tech: ["HTML5", "CSS3", "JavaScript"],
    description:
      "A sleek, responsive food delivery frontend interface designed to provide a smooth and engaging browsing experience for food ordering.",
    image: projectImg4,
    live: "https://food-website-project-lemon.vercel.app/",
    github: "https://github.com/alihamzaahmad680-pixel/Food_Website_Frontend",
  },
  {
    title: "ChronicleNews - Real-Time News Portal",
    category: "API Integration",
    tech: ["React", "News API", "Tailwind CSS"],
    description:
      "A dynamic news platform fetching real-time global news via API. Features category filters and clean responsive article layouts.",
    image: projectImg5,
    live: "https://news-website-theta-orcin.vercel.app/",
    github: "https://github.com/alihamzaahmad680-pixel/News-Website",
  },
  {
    title: "CorpPulse - Corporate Business Site",
    category: "Corporate Web",
    tech: ["HTML5", "CSS3", "JavaScript"],
    description:
      "A clean, structured corporate website layout built for displaying business services, team details, and client inquiry forms.",
    image: projectImg6,
    live: "https://alihamzaahmad680-pixel.github.io/companies--website/#",
    github: "https://github.com/alihamzaahmad680-pixel/companies--website",
  },
];

// Framer motion container for staggered children animation
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

// Individual project card slide-up variants
const cardVariants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] },
  },
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-[#030508] relative overflow-hidden text-white">
      {/* AMBIENT BACKGROUND GLOWS */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-teal-500/10 rounded-full blur-[150px] pointer-events-none" />

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
            <FaFolderOpen className="text-xs text-emerald-400" />
            <span>Featured Portfolio</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4"
          >
            Featured <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">Projects</span>
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
            A curated showcase of full-stack MERN engines, interactive frontends, and dynamic web applications engineering real-world solutions.
          </motion.p>
        </div>

        {/* PROJECTS GRID */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl hover:border-emerald-500/50 hover:bg-white/[0.04] transition-all duration-300 flex flex-col justify-between group relative"
            >
              {/* ACCENT BORDER ON HOVER */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 opacity-20 group-hover:opacity-100 transition-opacity duration-300 z-20 shadow-[0_0_10px_#10b981]" />

              <div>
                {/* IMAGE CONTAINER WITH ZOOM EFFECT */}
                <div className="relative overflow-hidden h-52 w-full bg-black/40">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030508] via-transparent to-transparent opacity-90" />

                  {/* OVERLAY CATEGORY BADGE */}
                  <span className="absolute top-4 left-4 text-[10px] font-bold uppercase tracking-wider text-emerald-300 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full border border-emerald-500/20 shadow-md">
                    {project.category}
                  </span>
                </div>

                {/* CONTENT AREA */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-100 mb-3 group-hover:text-emerald-400 transition-colors duration-300 leading-snug">
                    {project.title}
                  </h3>

                  {/* TECH BADGES */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech?.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] font-mono font-medium text-emerald-300 bg-emerald-500/10 px-2.5 py-0.5 rounded-md border border-emerald-500/20 shadow-sm"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* ACTION BUTTONS FOOTER */}
              <div className="p-6 pt-0 flex gap-3">
                

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 border border-white/20 hover:border-emerald-500/60 hover:bg-emerald-500/10 text-gray-300 hover:text-white rounded-xl text-xs sm:text-sm font-semibold transition duration-300 cursor-pointer"
                >
                  <FaGithub className="text-sm" />
                  <span>GitHub</span>
                </a>
              </div>
            </motion.div>
          ))}
       

      </div>
    </section>
  );
};

export default Projects;