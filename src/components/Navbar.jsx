// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { FaBars, FaPaperPlane } from "react-icons/fa";
// import { FaXmark } from "react-icons/fa6";

// const Navbar = () => {
//   const [showMenu, setShowMenu] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [activeSection, setActiveSection] = useState("home");

//   const navItems = [
//     { href: "#home", label: "Home" },
//     { href: "#about", label: "About" },
//     { href: "#skills", label: "Skills" },
//     { href: "#experience", label: "Experience" },
//     { href: "#projects", label: "Projects" },
//     { href: "#certifications", label: "Certifications" },
//     { href: "#contact", label: "Contact" },
//   ];

//   // Scroll listener for sticky background blur & active link detection
//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 20);

//       const sections = navItems.map((item) => item.href.substring(1));
//       const scrollPosition = window.scrollY + 200;

//       for (const section of sections) {
//         const element = document.getElementById(section);
//         if (element) {
//           const top = element.offsetTop;
//           const height = element.offsetHeight;
//           if (scrollPosition >= top && scrollPosition < top + height) {
//             setActiveSection(section);
//             break;
//           }
//         }
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <header
//       className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
//         scrolled
//           ? "bg-dark-100/80 backdrop-blur-md py-3 shadow-xl border-b border-white/5"
//           : "bg-transparent py-5"
//       }`}
//     >
//       <div className="container mx-auto px-6 max-w-6xl flex justify-between items-center">
//         {/* LOGO */}
//         <a
//           href="#home"
//           className="text-2xl sm:text-3xl font-extrabold text-white flex items-center gap-2 group cursor-pointer"
//         >
//           <span>
//             Ali{" "}
//             <span className="bg-gradient-to-r from-purple via-indigo-400 to-pink-500 bg-clip-text text-transparent">
//               Hamza
//             </span>
//           </span>
//           <div className="w-2.5 h-2.5 bg-purple rounded-full group-hover:scale-125 transition-transform duration-300" />
//         </a>

//         {/* DESKTOP MENU */}
//         <nav className="hidden lg:flex items-center space-x-8">
//           {navItems.map((item) => (
//             <a
//               key={item.href}
//               href={item.href}
//               className={`relative text-sm font-medium transition-colors duration-300 ${
//                 activeSection === item.href.substring(1)
//                   ? "text-purple font-semibold"
//                   : "text-gray-300 hover:text-white"
//               }`}
//             >
//               {item.label}
//               {activeSection === item.href.substring(1) && (
//                 <motion.span
//                   layoutId="activeIndicator"
//                   className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple to-pink-500 rounded-full"
//                   transition={{ type: "spring", stiffness: 380, damping: 30 }}
//                 />
//               )}
//             </a>
//           ))}
//         </nav>

//         {/* DESKTOP HIRE ME BUTTON */}
//         <div className="hidden lg:block">
//           <a
//             href="#contact"
//             className="px-5 py-2.5 rounded-xl bg-purple/10 border border-purple/30 text-purple hover:bg-purple hover:text-white font-semibold text-xs transition-all duration-300 flex items-center gap-2 shadow-lg shadow-purple/10 group"
//           >
//             <span>Hire Me</span>
//             <FaPaperPlane className="text-[10px] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
//           </a>
//         </div>

//         {/* MOBILE TOGGLE BUTTON */}
//         <button
//           onClick={() => setShowMenu(!showMenu)}
//           className="lg:hidden p-2.5 rounded-xl bg-white/5 border border-white/10 text-white hover:text-purple focus:outline-none z-50 cursor-pointer"
//           aria-label="Toggle Navigation"
//         >
//           {showMenu ? <FaXmark className="text-xl" /> : <FaBars className="text-xl" />}
//         </button>
//       </div>

//       {/* MOBILE OVERLAY MENU */}
//       <AnimatePresence>
//         {showMenu && (
//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             transition={{ duration: 0.3 }}
//             className="lg:hidden fixed inset-0 h-screen bg-dark-200/95 backdrop-blur-xl flex flex-col justify-center items-center z-40 px-6"
//           >
//             <div className="flex flex-col items-center space-y-6 text-center w-full max-w-xs">
//               {navItems.map((item) => (
//                 <a
//                   key={item.href}
//                   href={item.href}
//                   onClick={() => setShowMenu(false)}
//                   className={`text-lg font-medium transition-colors duration-200 ${
//                     activeSection === item.href.substring(1)
//                       ? "text-purple font-bold text-xl"
//                       : "text-gray-300 hover:text-white"
//                   }`}
//                 >
//                   {item.label}
//                 </a>
//               ))}

//               <a
//                 href="#contact"
//                 onClick={() => setShowMenu(false)}
//                 className="w-full mt-4 py-3 rounded-xl bg-purple text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-lg shadow-purple/20"
//               >
//                 <span>Hire Me</span>
//                 <FaPaperPlane className="text-xs" />
//               </a>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </header>
//   );
// };

// export default Navbar;
// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { FaBars, FaPaperPlane } from "react-icons/fa";
// import { FaXmark } from "react-icons/fa6";

// const Navbar = () => {
//   // State to manage mobile menu open/close status
//   const [showMenu, setShowMenu] = useState(false);
  
//   // State to track whether the page has been scrolled past a threshold
//   const [scrolled, setScrolled] = useState(false);
  
//   // State to keep track of the currently active section in view
//   const [activeSection, setActiveSection] = useState("home");

//   // Navigation items mapping for cleaner rendering and maintainability
//   const navItems = [
//     { href: "#home", label: "Home" },
//     { href: "#about", label: "About" },
//     { href: "#skills", label: "Skills" },
//     { href: "#experience", label: "Experience" },
//     { href: "#projects", label: "Projects" },
//     { href: "#certifications", label: "Certifications" },
//     { href: "#contact", label: "Contact" },
//   ];

//   // Handle scroll events: dynamic glassmorphic header background + active section highlighting
//   useEffect(() => {
//     const handleScroll = () => {
//       // Toggle sticky style when user scrolls down more than 20px
//       setScrolled(window.scrollY > 20);

//       // Section positions detection logic for smooth navbar spying
//       const sections = navItems.map((item) => item.href.substring(1));
//       const scrollPosition = window.scrollY + 200;

//       for (const section of sections) {
//         const element = document.getElementById(section);
//         if (element) {
//           const top = element.offsetTop;
//           const height = element.offsetHeight;
//           if (scrollPosition >= top && scrollPosition < top + height) {
//             setActiveSection(section);
//             break;
//           }
//         }
//       }
//     };

//     window.addEventListener("scroll", handleScroll, { passive: true });
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Prevent background scrolling when mobile menu is open
//   useEffect(() => {
//     if (showMenu) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "unset";
//     }
//   }, [showMenu]);

//   return (
//     <header
//       className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
//         scrolled
//           ? "bg-[#0B0F19]/85 backdrop-blur-md py-3 shadow-2xl border-b border-white/5"
//           : "bg-transparent py-5"
//       }`}
//     >
//       <div className="container mx-auto px-6 max-w-6xl flex justify-between items-center">
        
//         {/* LOGO - Professional branding touch with subtle hover animation */}
//         <a
//           href="#home"
//           className="text-2xl sm:text-3xl font-extrabold text-white flex items-center gap-2 group cursor-pointer"
//         >
//           <span className="tracking-tight">
//             Ali{" "}
//             <span className="bg-gradient-to-r from-purple-500 via-indigo-400 to-pink-500 bg-clip-text text-transparent">
//               Hamza
//             </span>
//           </span>
//           {/* Active status indicator dot */}
//           <div className="w-2 h-2 bg-purple-500 rounded-full group-hover:scale-125 transition-transform duration-300 shadow-[0_0_10px_#a855f7]" />
//         </a>

//         {/* DESKTOP NAVIGATION MENU */}
//         <nav className="hidden lg:flex items-center space-x-8 bg-white/[0.02] border border-white/5 px-6 py-2 rounded-full backdrop-blur-sm shadow-inner">
//           {navItems.map((item) => {
//             const isActive = activeSection === item.href.substring(1);
//             return (
//               <a
//                 key={item.href}
//                 href={item.href}
//                 className={`relative text-sm font-medium transition-colors duration-300 py-1 ${
//                   isActive ? "text-purple-400 font-semibold" : "text-gray-300 hover:text-white"
//                 }`}
//               >
//                 {item.label}
//                 {/* Framer Motion LayoutId for slick smooth underline indicator animation */}
//                 {isActive && (
//                   <motion.span
//                     layoutId="activeIndicator"
//                     className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-[0_0_8px_#a855f7]"
//                     transition={{ type: "spring", stiffness: 380, damping: 30 }}
//                   />
//                 )}
//               </a>
//             );
//           })}
//         </nav>

//         {/* DESKTOP HIRE ME BUTTON */}
//         <div className="hidden lg:block">
//           <a
//             href="#contact"
//             className="px-5 py-2.5 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-300 hover:bg-purple-600 hover:text-white font-semibold text-xs transition-all duration-300 flex items-center gap-2 shadow-lg shadow-purple-500/10 hover:shadow-purple-500/25 group"
//           >
//             <span>Hire Me</span>
//             <FaPaperPlane className="text-[10px] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
//           </a>
//         </div>

//         {/* MOBILE TOGGLE BUTTON */}
//         <button
//           onClick={() => setShowMenu(!showMenu)}
//           className="lg:hidden p-2.5 rounded-xl bg-white/5 border border-white/10 text-white hover:text-purple-400 focus:outline-none z-50 cursor-pointer transition-colors"
//           aria-label="Toggle Navigation"
//         >
//           {showMenu ? <FaXmark className="text-xl" /> : <FaBars className="text-xl" />}
//         </button>
//       </div>

//       {/* MOBILE OVERLAY MENU WITH SMOOTH ANIMATION */}
//       <AnimatePresence>
//         {showMenu && (
//           <motion.div
//             initial={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
//             animate={{ opacity: 1, clipPath: "circle(150% at 100% 0%)" }}
//             exit={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
//             transition={{ duration: 0.4, ease: "easeInOut" }}
//             className="lg:hidden fixed inset-0 h-screen bg-[#0B0F19]/98 backdrop-blur-2xl flex flex-col justify-center items-center z-40 px-6 shadow-2xl"
//           >
//             <div className="flex flex-col items-center space-y-6 text-center w-full max-w-xs">
//               {navItems.map((item) => {
//                 const isActive = activeSection === item.href.substring(1);
//                 return (
//                   <a
//                     key={item.href}
//                     href={item.href}
//                     onClick={() => setShowMenu(false)}
//                     className={`text-lg font-medium transition-all duration-200 ${
//                       isActive
//                         ? "text-purple-400 font-bold text-xl tracking-wide scale-105"
//                         : "text-gray-300 hover:text-white"
//                     }`}
//                   >
//                     {item.label}
//                   </a>
//                 );
//               })}

//               <a
//                 href="#contact"
//                 onClick={() => setShowMenu(false)}
//                 className="w-full mt-4 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-xl shadow-purple-600/30 hover:opacity-95 transition-all"
//               >
//                 <span>Hire Me</span>
//                 <FaPaperPlane className="text-xs" />
//               </a>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </header>
//   );
// };

// export default Navbar;
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaPaperPlane } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

const Navbar = () => {
  // State to manage mobile menu open/close status
  const [showMenu, setShowMenu] = useState(false);
  
  // State to track whether the page has been scrolled past a threshold
  const [scrolled, setScrolled] = useState(false);
  
  // State to keep track of the currently active section in view
  const [activeSection, setActiveSection] = useState("home");

  // Navigation items mapping for cleaner rendering and maintainability
  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#certifications", label: "Certifications" },
    { href: "#contact", label: "Contact" },
  ];

  // Handle scroll events: dynamic glassmorphic header background + active section highlighting
  useEffect(() => {
    const handleScroll = () => {
      // Toggle sticky style when user scrolls down more than 20px
      setScrolled(window.scrollY > 20);

      // Section positions detection logic for smooth navbar spying
      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [showMenu]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#030508]/85 backdrop-blur-xl py-3 shadow-[0_10px_30px_rgba(0,0,0,0.5)] border-b border-white/10"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 max-w-6xl flex justify-between items-center">
        
        {/* LOGO - Professional branding touch with subtle hover animation */}
        <a
          href="#home"
          className="text-2xl sm:text-3xl font-black text-white flex items-center gap-2 group cursor-pointer"
        >
          <span className="tracking-tight">
            Ali{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
              Hamza
            </span>
          </span>
          {/* Active status indicator dot */}
          <div className="w-2.5 h-2.5 bg-emerald-400 rounded-full group-hover:scale-125 transition-transform duration-300 shadow-[0_0_12px_#10b981]" />
        </a>

        {/* DESKTOP NAVIGATION MENU */}
        <nav className="hidden lg:flex items-center space-x-6 bg-white/[0.03] border border-white/10 px-6 py-2.5 rounded-full backdrop-blur-xl shadow-inner">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.href}
                href={item.href}
                className={`relative text-xs font-semibold tracking-wide transition-colors duration-300 py-1 ${
                  isActive ? "text-emerald-400" : "text-gray-300 hover:text-white"
                }`}
              >
                {item.label}
                {/* Framer Motion LayoutId for slick smooth underline indicator animation */}
                {isActive && (
                  <motion.span
                    layoutId="activeIndicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full shadow-[0_0_10px_#10b981]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* DESKTOP HIRE ME BUTTON */}
        <div className="hidden lg:block">
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 hover:bg-emerald-500 hover:text-gray-950 font-bold text-xs transition-all duration-300 flex items-center gap-2 shadow-[0_0_20px_rgba(16,185,129,0.15)] hover:shadow-[0_0_25px_rgba(16,185,129,0.4)] group cursor-pointer"
          >
            <span>Hire Me</span>
            <FaPaperPlane className="text-[10px] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* MOBILE TOGGLE BUTTON */}
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="lg:hidden p-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white hover:text-emerald-400 focus:outline-none z-50 cursor-pointer transition-colors backdrop-blur-md"
          aria-label="Toggle Navigation"
        >
          {showMenu ? <FaXmark className="text-xl" /> : <FaBars className="text-xl" />}
        </button>
      </div>

      {/* MOBILE OVERLAY MENU WITH SMOOTH ANIMATION */}
      <AnimatePresence>
        {showMenu && (
          <motion.div
            initial={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 100% 0%)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="lg:hidden fixed inset-0 h-screen bg-[#030508]/98 backdrop-blur-2xl flex flex-col justify-center items-center z-40 px-6 shadow-2xl"
          >
            <div className="flex flex-col items-center space-y-6 text-center w-full max-w-xs">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setShowMenu(false)}
                    className={`text-lg font-bold tracking-wide transition-all duration-200 ${
                      isActive
                        ? "text-emerald-400 text-xl scale-105 drop-shadow-[0_0_10px_rgba(16,185,129,0.5)]"
                        : "text-gray-300 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}

              <a
                href="#contact"
                onClick={() => setShowMenu(false)}
                className="w-full mt-4 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-gray-950 font-bold text-sm flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(16,185,129,0.4)] hover:opacity-95 transition-all cursor-pointer"
              >
                <span>Hire Me</span>
                <FaPaperPlane className="text-xs" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;