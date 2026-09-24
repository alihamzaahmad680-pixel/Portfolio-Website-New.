// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   FaEnvelope,
//   FaGithub,
//   FaLinkedin,
//   FaMapMarkerAlt,
//   FaPhone,
//   FaWhatsapp,
//   FaPaperPlane,
//   FaCheckCircle,
//   FaPaperclip,
// } from "react-icons/fa";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   });

//   const [submitted, setSubmitted] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setLoading(true);

//     // Simulated API submissiondelay (Formspree / EmailJS ready)
//     setTimeout(() => {
//       setLoading(false);
//       setSubmitted(true);

//       // Auto reset success message after 5 seconds
//       setTimeout(() => {
//         setSubmitted(false);
//         setFormData({
//           name: "",
//           email: "",
//           subject: "",
//           message: "",
//         });
//       }, 5000);
//     }, 1000);
//   };

//   return (
//     <section id="contact" className="py-24 bg-dark-200 relative overflow-hidden">
//       {/* AMBIENT BACKGROUND GLOWS */}
//       <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple/10 rounded-full blur-[160px] pointer-events-none" />
//       <div className="absolute bottom-10 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-[160px] pointer-events-none" />

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
//             <FaEnvelope className="text-xs" />
//             <span>Let's Build Together</span>
//           </motion.div>

//           <motion.h2
//             initial={{ opacity: 0, y: 15 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4"
//           >
//             Get In <span className="bg-gradient-to-r from-purple via-indigo-400 to-pink-500 bg-clip-text text-transparent">Touch</span>
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
//             Have a web development project, internship opportunity, or freelancing inquiry? Let's connect and transform your vision into production-ready software.
//           </motion.p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
//           {/* FORM CONTAINER (LG: 7 COLS) */}
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="lg:col-span-7 bg-dark-300/40 backdrop-blur-md border border-white/10 p-7 sm:p-9 rounded-2xl shadow-2xl relative overflow-hidden"
//           >
//             {/* TOP ACCENT BORDER */}
//             <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple via-indigo-500 to-pink-500" />

//             <AnimatePresence>
//               {submitted && (
//                 <motion.div
//                   initial={{ opacity: 0, y: -15 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -15 }}
//                   className="mb-6 p-4 rounded-xl bg-purple/15 border border-purple/30 text-purple flex items-center gap-3 text-xs sm:text-sm font-medium shadow-lg"
//                 >
//                   <FaCheckCircle className="text-xl flex-shrink-0 text-purple" />
//                   <span>Thank you! Your message has been sent successfully. I'll get back to you shortly.</span>
//                 </motion.div>
//               )}
//             </AnimatePresence>

//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//                 <div>
//                   <label className="block text-gray-300 text-xs font-semibold uppercase tracking-wider mb-2">
//                     Your Name
//                   </label>
//                   <input
//                     type="text"
//                     placeholder="Ali Hamza"
//                     value={formData.name}
//                     onChange={(e) =>
//                       setFormData({ ...formData, name: e.target.value })
//                     }
//                     className="w-full bg-dark-100/90 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-purple focus:ring-1 focus:ring-purple transition duration-300 shadow-inner"
//                     required
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-gray-300 text-xs font-semibold uppercase tracking-wider mb-2">
//                     Email Address
//                   </label>
//                   <input
//                     type="email"
//                     placeholder="alihamzaahmad680@gmail.com"
//                     value={formData.email}
//                     onChange={(e) =>
//                       setFormData({ ...formData, email: e.target.value })
//                     }
//                     className="w-full bg-dark-100/90 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-purple focus:ring-1 focus:ring-purple transition duration-300 shadow-inner"
//                     required
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-gray-300 text-xs font-semibold uppercase tracking-wider mb-2">
//                   Subject
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="Project Inquiry / Job Opportunity"
//                   value={formData.subject}
//                   onChange={(e) =>
//                     setFormData({ ...formData, subject: e.target.value })
//                   }
//                   className="w-full bg-dark-100/90 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-purple focus:ring-1 focus:ring-purple transition duration-300 shadow-inner"
//                   required
//                 />
//               </div>

//               <div>
//                 <label className="block text-gray-300 text-xs font-semibold uppercase tracking-wider mb-2">
//                   Your Message
//                 </label>
//                 <textarea
//                   rows="5"
//                   placeholder="Write your project details or message here..."
//                   value={formData.message}
//                   onChange={(e) =>
//                     setFormData({ ...formData, message: e.target.value })
//                   }
//                   className="w-full bg-dark-100/90 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-purple focus:ring-1 focus:ring-purple transition duration-300 resize-none shadow-inner"
//                   required
//                 ></textarea>
//               </div>

//               <button
//                 type="submit"
//                 disabled={loading}
//                 className="w-full py-4 bg-purple hover:bg-purple/80 text-white font-semibold rounded-xl text-sm transition duration-300 flex items-center justify-center gap-2 shadow-xl shadow-purple/20 group disabled:opacity-50 cursor-pointer"
//               >
//                 <span>{loading ? "Sending Message..." : "Send Message"}</span>
//                 <FaPaperPlane className={`text-xs ${loading ? "animate-pulse" : "group-hover:translate-x-1 group-hover:-translate-y-0.5"} transition-transform`} />
//               </button>
//             </form>
//           </motion.div>

//           {/* CONTACT INFO (LG: 5 COLS) */}
//           <motion.div
//             initial={{ opacity: 0, x: 30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="lg:col-span-5 space-y-6"
//           >
//             {/* DIRECT INFO CARD */}
//             <div className="bg-dark-300/40 border border-white/10 rounded-2xl p-7 backdrop-blur-md space-y-6 shadow-2xl relative overflow-hidden">
//               <h3 className="text-xl font-bold text-white border-l-4 border-purple pl-3">
//                 Contact Details
//               </h3>

//               {/* LOCATION */}
//               <div className="flex items-start gap-4 group">
//                 <div className="w-12 h-12 rounded-xl bg-purple/10 border border-purple/20 flex items-center justify-center text-purple text-lg flex-shrink-0 group-hover:scale-105 transition-transform">
//                   <FaMapMarkerAlt />
//                 </div>
//                 <div>
//                   <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Location</h4>
//                   <p className="text-white text-base font-semibold mt-0.5">Lahore, Pakistan</p>
//                 </div>
//               </div>

//               {/* EMAIL */}
//               <a
//                 href="mailto:alihamzaahmad680@gmail.com"
//                 className="flex items-start gap-4 group cursor-pointer"
//               >
//                 <div className="w-12 h-12 rounded-xl bg-purple/10 border border-purple/20 flex items-center justify-center text-purple text-lg flex-shrink-0 group-hover:bg-purple group-hover:text-white transition duration-300 group-hover:scale-105">
//                   <FaEnvelope />
//                 </div>
//                 <div>
//                   <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Email Address</h4>
//                   <p className="text-white text-sm sm:text-base font-semibold mt-0.5 group-hover:text-purple transition duration-300 break-all">
//                     alihamzaahmad680@gmail.com
//                   </p>
//                 </div>
//               </a>

//               {/* PHONE */}
//               <a
//                 href="tel:+923211186522"
//                 className="flex items-start gap-4 group cursor-pointer"
//               >
//                 <div className="w-12 h-12 rounded-xl bg-purple/10 border border-purple/20 flex items-center justify-center text-purple text-lg flex-shrink-0 group-hover:bg-purple group-hover:text-white transition duration-300 group-hover:scale-105">
//                   <FaPhone />
//                 </div>
//                 <div>
//                   <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Phone & WhatsApp</h4>
//                   <p className="text-white text-base font-semibold mt-0.5 group-hover:text-purple transition duration-300">
//                     +92 321 1186522
//                   </p>
//                 </div>
//               </a>
//             </div>

//             {/* DIRECT WHATSAPP ACTION BUTTON */}
//             <a
//               href="https://wa.me/923211186522?text=Hi%20Ali%2C%20I%20want%20to%20discuss%20a%20project."
//               target="_blank"
//               rel="noopener noreferrer"
//               className="w-full py-4 bg-emerald-600/20 border border-emerald-500/30 hover:bg-emerald-600 text-emerald-400 hover:text-white font-semibold rounded-2xl text-sm transition duration-300 flex items-center justify-center gap-3 shadow-xl group"
//             >
//               <FaWhatsapp className="text-xl group-hover:scale-110 transition-transform" />
//               <span>Chat directly on WhatsApp</span>
//             </a>

//             {/* SOCIAL PROFILES */}
//             <div className="bg-dark-300/40 border border-white/10 rounded-2xl p-6 backdrop-blur-md shadow-2xl">
//               <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
//                 Professional Networks
//               </h4>

//               <div className="flex items-center gap-3">
//                 <a
//                   href="https://github.com/alihamzaahmad680-pixel"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex-1 py-3 rounded-xl bg-dark-100 border border-white/10 flex items-center justify-center gap-2 text-gray-300 hover:text-white hover:border-purple/60 hover:bg-purple/10 text-xs font-semibold transition-all duration-300 shadow-md"
//                   title="GitHub Profile"
//                 >
//                   <FaGithub className="text-base text-gray-300" />
//                   <span>GitHub</span>
//                 </a>

//                 <a
//                   href="https://www.linkedin.com/in/ali-hamza-547b6b38a"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex-1 py-3 rounded-xl bg-dark-100 border border-white/10 flex items-center justify-center gap-2 text-blue-400 hover:text-white hover:border-blue-400/60 hover:bg-blue-500/10 text-xs font-semibold transition-all duration-300 shadow-md"
//                   title="LinkedIn Profile"
//                 >
//                   <FaLinkedin className="text-base text-blue-400" />
//                   <span>LinkedIn</span>
//                 </a>

//                 <a
//                   href="https://wa.me/923211186522"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex-1 py-3 rounded-xl bg-dark-100 border border-white/10 flex items-center justify-center gap-2 text-emerald-400 hover:text-white hover:border-emerald-400/60 hover:bg-emerald-500/10 text-xs font-semibold transition-all duration-300 shadow-md"
//                   title="WhatsApp Contact"
//                 >
//                   <FaWhatsapp className="text-base text-emerald-400" />
//                   <span>WhatsApp</span>
//                 </a>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
  FaWhatsapp,
  FaPaperPlane,
  FaCheckCircle,
  FaHeadset,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulated API submission delay (Formspree / EmailJS ready)
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);

      // Auto reset success message after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      }, 5000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-28 bg-[#05070B] relative overflow-hidden text-white">
      {/* ADVANCED AMBIENT BACKGROUND GLOWS */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-emerald-500/[0.07] rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-cyan-500/[0.07] rounded-full blur-[160px] pointer-events-none" />

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
            <FaHeadset className="text-sm animate-pulse text-emerald-400" />
            <span>Let's Build Together</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6 leading-tight"
          >
            Get In <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">Touch</span>
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
            Have a web development project, internship opportunity, or freelancing inquiry? Let's connect and transform your vision into production-ready software.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* FORM CONTAINER (LG: 7 COLS) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 bg-gradient-to-b from-white/[0.04] to-white/[0.01] backdrop-blur-2xl border border-white/10 p-8 sm:p-10 rounded-3xl shadow-2xl relative overflow-hidden group hover:border-emerald-500/40 transition-all duration-500"
          >
            {/* TOP ACCENT GRADIENT LINE */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-500 shadow-sm" />

            <AnimatePresence>
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  className="mb-8 p-5 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 flex items-center gap-3.5 text-sm font-semibold shadow-lg backdrop-blur-md"
                >
                  <FaCheckCircle className="text-2xl flex-shrink-0 text-emerald-400 animate-bounce" />
                  <span>Thank you! Your message has been sent successfully. I'll get back to you shortly.</span>
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-300 text-xs font-bold uppercase tracking-wider mb-2.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="Ali Hamza"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full bg-[#030508]/80 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition duration-300 shadow-inner"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-300 text-xs font-bold uppercase tracking-wider mb-2.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="alihamzaahmad680@gmail.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full bg-[#030508]/80 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition duration-300 shadow-inner"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-300 text-xs font-bold uppercase tracking-wider mb-2.5">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Project Inquiry / Job Opportunity"
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  className="w-full bg-[#030508]/80 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition duration-300 shadow-inner"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-300 text-xs font-bold uppercase tracking-wider mb-2.5">
                  Your Message
                </label>
                <textarea
                  rows="5"
                  placeholder="Write your project details or message here..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full bg-[#030508]/80 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition duration-300 resize-none shadow-inner"
                  required
                ></textarea>
              </div>

              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="w-full py-4.5 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-[#05070B] font-extrabold rounded-2xl text-sm transition duration-300 flex items-center justify-center gap-2.5 shadow-[0_0_25px_rgba(16,185,129,0.3)] group cursor-pointer disabled:opacity-50"
              >
                <span>{loading ? "Sending Message..." : "Send Message"}</span>
                <FaPaperPlane className={`text-xs ${loading ? "animate-pulse" : "group-hover:translate-x-1 group-hover:-translate-y-0.5"} transition-transform`} />
              </motion.button>
            </form>
          </motion.div>

          {/* CONTACT INFO (LG: 5 COLS) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* DIRECT INFO CARD */}
            <div className="bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/10 rounded-3xl p-8 backdrop-blur-2xl space-y-6 shadow-2xl relative overflow-hidden group hover:border-emerald-500/40 transition-all duration-500">
              <h3 className="text-2xl font-extrabold text-white border-l-4 border-emerald-400 pl-4">
                Contact Details
              </h3>

              {/* LOCATION */}
              <div className="flex items-center gap-4.5 group/item">
                <div className="w-13 h-13 rounded-2xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-emerald-400 text-xl flex-shrink-0 group-hover/item:scale-110 group-hover/item:bg-emerald-500/20 transition-all duration-300 shadow-md">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Location</h4>
                  <p className="text-white text-base font-bold mt-0.5">Lahore, Pakistan</p>
                </div>
              </div>

              {/* EMAIL */}
              <a
                href="mailto:alihamzaahmad680@gmail.com"
                className="flex items-center gap-4.5 group/item cursor-pointer"
              >
                <div className="w-13 h-13 rounded-2xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-emerald-400 text-xl flex-shrink-0 group-hover/item:scale-110 group-hover/item:bg-emerald-500/20 transition-all duration-300 shadow-md">
                  <FaEnvelope />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Email Address</h4>
                  <p className="text-white text-sm sm:text-base font-bold mt-0.5 group-hover/item:text-emerald-400 transition duration-300 break-all">
                    alihamzaahmad680@gmail.com
                  </p>
                </div>
              </a>

              {/* PHONE */}
              <a
                href="tel:+923211186522"
                className="flex items-center gap-4.5 group/item cursor-pointer"
              >
                <div className="w-13 h-13 rounded-2xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-emerald-400 text-xl flex-shrink-0 group-hover/item:scale-110 group-hover/item:bg-emerald-500/20 transition-all duration-300 shadow-md">
                  <FaPhone />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Phone & WhatsApp</h4>
                  <p className="text-white text-base font-bold mt-0.5 group-hover/item:text-emerald-400 transition duration-300">
                    +92 321 1186522
                  </p>
                </div>
              </a>
            </div>

            {/* DIRECT WHATSAPP ACTION BUTTON */}
            <motion.a
              href="https://wa.me/923211186522?text=Hi%20Ali%2C%20I%20want%20to%20discuss%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4.5 bg-emerald-500/15 border border-emerald-500/40 hover:bg-emerald-500 text-emerald-300 hover:text-[#05070B] font-extrabold rounded-2xl text-sm transition duration-300 flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(16,185,129,0.15)] group backdrop-blur-md"
            >
              <FaWhatsapp className="text-2xl group-hover:scale-110 transition-transform" />
              <span>Chat directly on WhatsApp</span>
            </motion.a>

            {/* SOCIAL PROFILES */}
            <div className="bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/10 rounded-3xl p-7 backdrop-blur-2xl shadow-2xl">
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">
                Professional Networks
              </h4>

              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/alihamzaahmad680-pixel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3.5 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center gap-2 text-gray-300 hover:text-white hover:border-emerald-500/50 hover:bg-emerald-500/10 text-xs font-bold transition-all duration-300 shadow-md"
                  title="GitHub Profile"
                >
                  <FaGithub className="text-base text-gray-300" />
                  <span>GitHub</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/ali-hamza-547b6b38a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3.5 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center gap-2 text-cyan-400 hover:text-white hover:border-cyan-400/50 hover:bg-cyan-500/10 text-xs font-bold transition-all duration-300 shadow-md"
                  title="LinkedIn Profile"
                >
                  <FaLinkedin className="text-base text-cyan-400" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href="https://wa.me/923211186522"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3.5 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center gap-2 text-emerald-400 hover:text-white hover:border-emerald-400/50 hover:bg-emerald-500/10 text-xs font-bold transition-all duration-300 shadow-md"
                  title="WhatsApp Contact"
                >
                  <FaWhatsapp className="text-base text-emerald-400" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;