
// import React from "react";
// import { motion } from "framer-motion";
// import { FaLaptopCode, FaGraduationCap, FaAward, FaHandshake } from "react-icons/fa";
// import profileImg from "../assets/ALI.jpeg";

// const aboutInfo = [
//   {
//     icon: FaLaptopCode,
//     title: "Full-Stack Development",
//     description: "Building robust MERN stack applications with clean architecture and seamless UI/UX.",
//   },
//   {
//     icon: FaGraduationCap,
//     title: "Education & Learning",
//     description: "BSIT student at University of Education, continuously expanding software engineering skills.",
//   },
//   {
//     icon: FaAward,
//     title: "Certifications",
//     description: "Completed Dev Weekend fellowship and CodeAlpha full-stack internship.",
//   },
//   {
//     icon: FaHandshake,
//     title: "Freelancing & Collaboration",
//     description: "Active on Fiverr and Upwork, delivering tailored web development solutions to clients.",
//   },
// ];

// const About = () => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 50 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6, ease: "easeOut" }}
//       viewport={{ once: true }}
//       id="about"
//       className="py-20 bg-dark-200 text-white"
//     >
//       <div className="container mx-auto px-6">
//         <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
//           About <span className="text-purple">Me</span>
//         </h2>

//         <p className="text-gray-400 text-center mx-auto mb-16 max-w-2xl text-base sm:text-lg">
//           Get to know more about my journey as a Full Stack Developer
//         </p>

//         <div className="flex flex-col items-center md:flex-row gap-12">
//           {/* IMAGE */}
//           <div className="md:w-1/2 rounded-2xl overflow-hidden w-full">
//             <motion.img
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true, margin: "-50px" }}
//               className="w-full h-full object-cover rounded-2xl shadow-xl"
//               src={profileImg}
//               alt="profile"
//             />
//           </div>

//           {/* TEXT */}
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true, margin: "-50px" }}
//             className="md:w-1/2 w-full"
//           >
//             <div className="rounded-2xl p-0 md:p-8">
//               <h3 className="text-2xl sm:text-3xl font-semibold mb-6">My Journey</h3>

//               <p className="text-gray-300 mb-6 text-base sm:text-lg leading-relaxed">
//                 I am a passionate Full Stack Developer. I build responsive
//                 frontend interfaces with React and design powerful backend
//                 systems using Node.js, Express, and MongoDB.
//               </p>

//               <p className="text-gray-300 mb-6 text-base sm:text-lg leading-relaxed">
//                 I enjoy solving complex problems and creating seamless
//                 end-to-end web applications that provide great user experiences.
//               </p>

//               {/* CARDS */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 {aboutInfo.map((data, index) => {
//                   const IconComponent = data.icon;
//                   return (
//                     <div
//                       key={index}
//                       className="bg-dark-300 text-white rounded-2xl p-5 transition-all duration-200 hover:-translate-y-2 cursor-pointer hover:bg-purple active:bg-purple active:-translate-y-1"
//                     >
//                       <div className="text-white text-3xl sm:text-4xl mb-4">
//                         {IconComponent && <IconComponent />}
//                       </div>

//                       <h3 className="text-lg sm:text-xl font-semibold mb-2">{data.title}</h3>

//                       <p className="text-gray-300 text-sm sm:text-base leading-relaxed">{data.description}</p>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default About;
// import React from "react";
// import { motion } from "framer-motion";
// import { FaLaptopCode, FaGraduationCap, FaAward, FaHandshake } from "react-icons/fa";
// import profileImg from "../assets/ALI.jpeg";

// // Structured data for about section feature cards highlighting experience & background
// const aboutInfo = [
//   {
//     icon: FaLaptopCode,
//     title: "Full-Stack Development",
//     description: "Building robust MERN stack applications with clean architecture and seamless UI/UX.",
//   },
//   {
//     icon: FaGraduationCap,
//     title: "Education & Learning",
//     description: "BSIT student at University of Education, continuously expanding software engineering skills.",
//   },
//   {
//     icon: FaAward,
//     title: "Certifications",
//     description: "Completed Dev Weekend fellowship and CodeAlpha full-stack internship.",
//   },
//   {
//     icon: FaHandshake,
//     title: "Freelancing & Collaboration",
//     description: "Active on Fiverr and Upwork, delivering tailored web development solutions to clients.",
//   },
// ];

// const About = () => {
//   return (
//     <motion.section
//       initial={{ opacity: 0, y: 50 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.7, ease: "easeOut" }}
//       viewport={{ once: true }}
//       id="about"
//       className="py-24 bg-[#0B0F19] text-white relative overflow-hidden"
//     >
//       {/* AMBIENT BACKGROUND GLOW */}
//       <div className="absolute top-1/2 left-0 w-80 h-80 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

//       <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
//         {/* SECTION HEADER TITLE */}
//         <div className="text-center mb-16">
//           <motion.h2 
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-3xl sm:text-4xl font-extrabold mb-4 tracking-tight"
//           >
//             About <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Me</span>
//           </motion.h2>
//           <motion.p 
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.1 }}
//             viewport={{ once: true }}
//             className="text-gray-400 max-w-xl mx-auto text-base sm:text-lg"
//           >
//             Get to know more about my journey as a Full-Stack MERN Developer & Software Engineer.
//           </motion.p>
//         </div>

//         <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
//           {/* LEFT COLUMN: PROFILE IMAGE WITH STYLISH BORDER FRAME */}
//           <motion.div
//             initial={{ opacity: 0, x: -40 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//             viewport={{ once: true }}
//             className="lg:w-5/12 w-full flex justify-center"
//           >
//             <div className="relative w-full max-w-sm sm:max-w-md aspect-square rounded-3xl overflow-hidden border-2 border-white/10 shadow-2xl group bg-gray-900">
//               {/* Subtle background glow wrapper */}
//               <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-3xl blur-md opacity-30 group-hover:opacity-60 transition duration-500"></div>
              
//               <img
//                 className="relative w-full h-full object-cover rounded-3xl transform group-hover:scale-105 transition-transform duration-700"
//                 src={profileImg}
//                 alt="Ali Hamza profile"
//               />
//             </div>
//           </motion.div>

//           {/* RIGHT COLUMN: BIO & HIGHLIGHT CARDS */}
//           <motion.div
//             initial={{ opacity: 0, x: 40 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//             viewport={{ once: true }}
//             className="lg:w-7/12 w-full"
//           >
//             <div className="space-y-6">
//               <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
//                 Crafting Digital Experiences with Code & Passion
//               </h3>

//               <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
//                 I am a passionate Full-Stack Developer specializing in the MERN stack. I build responsive frontend interfaces with React and design powerful, scalable backend systems using Node.js, Express, and MongoDB.
//               </p>

//               <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
//                 Whether working on complex full-stack applications, managing databases, or optimizing web performance, I enjoy solving challenging problems and creating seamless end-to-end solutions.
//               </p>

//               {/* CARDS GRID */}
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
//                 {aboutInfo.map((data, index) => {
//                   const IconComponent = data.icon;
//                   return (
//                     <motion.div
//                       key={index}
//                       whileHover={{ y: -5 }}
//                       className="bg-white/[0.03] border border-white/10 hover:border-purple-500/50 hover:bg-purple-500/[0.04] text-white rounded-2xl p-5 transition-all duration-300 shadow-lg group cursor-pointer"
//                     >
//                       <div className="text-purple-400 text-2xl sm:text-3xl mb-3.5 p-3 rounded-xl bg-purple-500/10 w-fit group-hover:scale-110 transition-transform">
//                         {IconComponent && <IconComponent />}
//                       </div>

//                       <h4 className="text-base sm:text-lg font-semibold mb-2 group-hover:text-purple-300 transition-colors">
//                         {data.title}
//                       </h4>

//                       <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
//                         {data.description}
//                       </p>
//                     </motion.div>
//                   );
//                 })}
//               </div>

//             </div>
//           </motion.div>

//         </div>
//       </div>
//     </motion.section>
//   );
// };

// export default About;
import React from "react";
import { motion } from "framer-motion";
import { FaLaptopCode, FaGraduationCap, FaAward, FaHandshake, FaUser } from "react-icons/fa";
import profileImg from "../assets/ALI.jpeg";

// Structured data for about section feature cards highlighting experience & background
const aboutInfo = [
  {
    icon: FaLaptopCode,
    title: "Full-Stack Development",
    description: "Building robust MERN stack applications with clean architecture and seamless UI/UX.",
  },
  {
    icon: FaGraduationCap,
    title: "Education & Learning",
    description: "BSIT student at University of Education, continuously expanding software engineering skills.",
  },
  {
    icon: FaAward,
    title: "Certifications",
    description: "Completed Dev Weekend fellowship and CodeAlpha full-stack internship.",
  },
  {
    icon: FaHandshake,
    title: "Freelancing & Collaboration",
    description: "Active on Fiverr and Upwork, delivering tailored web development solutions to clients.",
  },
];

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      id="about"
      className="py-28 bg-[#05070B] text-white relative overflow-hidden"
    >
      {/* ADVANCED AMBIENT BACKGROUND GLOWS */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-emerald-500/[0.07] rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-cyan-500/[0.07] rounded-full blur-[160px] pointer-events-none" />

      {/* GRID PATTERN OVERLAY */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* SECTION HEADER TITLE */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: -15, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-4.5 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-4 shadow-[0_0_20px_rgba(16,185,129,0.15)] backdrop-blur-md"
          >
            <FaUser className="text-sm animate-pulse text-emerald-400" />
            <span>Discover Background</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6 leading-tight"
          >
            About <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">Me</span>
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
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="text-gray-400 text-base sm:text-lg leading-relaxed font-normal"
          >
            Get to know more about my journey as a Full-Stack MERN Developer & Software Engineer.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* LEFT COLUMN: PROFILE IMAGE WITH STYLISH BORDER FRAME */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="lg:w-5/12 w-full flex justify-center"
          >
            <div className="relative w-full max-w-sm sm:max-w-md aspect-square rounded-3xl overflow-hidden border border-white/15 shadow-2xl group bg-gradient-to-b from-white/[0.04] to-white/[0.01]">
              {/* Vibrant background glow wrapper */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-emerald-500 via-teal-500 to-cyan-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-70 transition duration-700 pointer-events-none"></div>
              
              {/* TOP BORDER ACCENT */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 z-20 opacity-80" />

              <img
                className="relative w-full h-full object-cover rounded-3xl transform group-hover:scale-105 transition-transform duration-700 ease-out"
                src={profileImg}
                alt="Ali Hamza profile"
              />

              {/* FLOATING BADGE OVERLAY */}
              <div className="absolute bottom-4 left-4 right-4 bg-[#05070B]/80 backdrop-blur-xl border border-white/15 p-4 rounded-2xl shadow-xl flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_10px_#10b981]" />
                <div>
                  <p className="text-xs text-gray-300 font-mono">Status</p>
                  <p className="text-sm font-bold text-emerald-400">Available for Opportunities</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: BIO & HIGHLIGHT CARDS */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="lg:w-7/12 w-full"
          >
            <div className="space-y-6">
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-100">
                Crafting Digital Experiences with Code & Passion
              </h3>

              <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-normal">
                I am a passionate Full-Stack Developer specializing in the MERN stack. I build responsive frontend interfaces with React and design powerful, scalable backend systems using Node.js, Express, and MongoDB.
              </p>

              <p className="text-gray-400 text-base sm:text-lg leading-relaxed font-normal">
                Whether working on complex full-stack applications, managing databases, or optimizing web performance, I enjoy solving challenging problems and creating seamless end-to-end solutions.
              </p>

              {/* CARDS GRID */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-4">
                {aboutInfo.map((data, index) => {
                  const IconComponent = data.icon;
                  return (
                    <motion.div
                      key={index}
                      whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3 } }}
                      className="bg-gradient-to-b from-white/[0.04] to-white/[0.01] backdrop-blur-xl border border-white/10 hover:border-emerald-500/50 hover:shadow-[0_0_25px_rgba(16,185,129,0.2)] text-white rounded-2xl p-6 transition-all duration-300 group cursor-pointer relative overflow-hidden"
                    >
                      {/* Top hover accent */}
                      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      <div className="text-emerald-400 text-2xl sm:text-3xl mb-4 p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 w-fit group-hover:scale-110 group-hover:rotate-6 transition-transform shadow-md">
                        {IconComponent && <IconComponent />}
                      </div>

                      <h4 className="text-lg font-bold mb-2 text-gray-100 group-hover:text-emerald-300 transition-colors">
                        {data.title}
                      </h4>

                      <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                        {data.description}
                      </p>
                    </motion.div>
                  );
                })}
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
};

export default About;