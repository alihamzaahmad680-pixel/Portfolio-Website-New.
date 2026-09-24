// import React from "react";
// import { FaArrowUp } from "react-icons/fa";

// const Footer = () => {
//   const currentYear = new Date().getFullYear();

//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };

//   return (
//     <footer className="bg-dark-300 relative border-t border-white/10 py-8">
//       {/* TOP GRADIENT ACCENT LINE */}
//       <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple/50 to-transparent" />

//       <div className="container mx-auto px-6 max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
//         {/* COPYRIGHT INFO */}
//         <p className="text-center sm:text-left">
//           © {currentYear} <span className="text-white font-medium">Ali Hamza</span>. All rights reserved.
//         </p>

//         {/* BACK TO TOP BUTTON */}
//         <button
//           onClick={scrollToTop}
//           className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 hover:bg-purple/20 hover:border-purple/40 hover:text-white transition-all duration-300 text-gray-400 cursor-pointer"
//         >
//           <span>Back to Top</span>
//           <FaArrowUp className="text-[10px]" />
//         </button>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
// import React from "react";
// import { FaArrowUp } from "react-icons/fa";

// const Footer = () => {
//   const currentYear = new Date().getFullYear();

//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };

//   return (
//     <footer className="bg-[#070A12] relative border-t border-white/10 py-10 text-white">
//       {/* TOP GRADIENT ACCENT LINE */}
//       <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

//       <div className="container mx-auto px-6 max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-gray-400">
        
//         {/* COPYRIGHT & BRAND INFO */}
//         <p className="text-center sm:text-left">
//           © {currentYear} <span className="text-gray-200 font-medium tracking-wide">Ali Hamza</span>. All rights reserved.
//         </p>

//         {/* BACK TO TOP BUTTON */}
//         <button
//           onClick={scrollToTop}
//           className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.03] border border-white/10 hover:bg-purple-500/10 hover:border-purple-500/40 hover:text-white transition-all duration-300 text-gray-400 cursor-pointer shadow-sm group"
//         >
//           <span>Back to Top</span>
//           <FaArrowUp className="text-[10px] group-hover:-translate-y-0.5 transition-transform" />
//         </button>

//       </div>
//     </footer>
//   );
// };

// export default Footer;
import React from "react";
import { FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-[#030508] relative border-t border-white/10 py-12 text-white overflow-hidden">
      {/* AMBIENT BACKGROUND GLOW */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[150px] bg-emerald-500/[0.05] rounded-full blur-[120px] pointer-events-none" />

      {/* TOP GRADIENT ACCENT LINE */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-400/60 to-transparent shadow-[0_0_15px_rgba(16,185,129,0.5)]" />

      <div className="container mx-auto px-6 max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-6 text-xs sm:text-sm text-gray-400 relative z-10">
        
        {/* COPYRIGHT & BRAND INFO */}
        <p className="text-center sm:text-left font-normal">
          © {currentYear} <span className="text-emerald-400 font-bold tracking-wide">Ali Hamza</span>. All rights reserved. Built with React & Tailwind CSS.
        </p>

        {/* BACK TO TOP BUTTON */}
        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-2xl bg-white/[0.03] border border-white/10 hover:bg-emerald-500/15 hover:border-emerald-500/50 hover:text-emerald-300 transition-all duration-300 text-gray-300 cursor-pointer shadow-md group backdrop-blur-md"
        >
          <span className="font-bold uppercase tracking-wider text-xs">Back to Top</span>
          <FaArrowUp className="text-xs group-hover:-translate-y-1 transition-transform text-emerald-400" />
        </button>

      </div>
    </footer>
  );
};

export default Footer;