// // import React from "react";
// // import { useEffect } from "react";
// // import { useState, useMemo } from "react";
// import { useMemo } from "react";

// import { motion } from "framer-motion";
// // import { useNavigate } from "react-router-dom";

// const VirtualAssistant = () => {
//   // const navigate = useNavigate();

//   // -----------------------------
//   // MESSAGE ROTATION + TYPING FX
//   // -----------------------------
//   // const messages = [
//     // "Hello 👋",
//     // "How can I assist you today?",
//     // "Need help with schedules or events? 📅",
//     // "Ask me anything about INC 2026 ⚡",
//     // "I'm here to guide you 🤖",
//   // ];

//   // const [messageIndex, setMessageIndex] = useState(0);
//   // const [displayText, setDisplayText] = useState("");


//   const particles = useMemo(() => {
//     return Array.from({ length: 12 }).map(() => ({
//       left: `${Math.random() * 90}%`,
//       top: `${Math.random() * 85}%`,
//       delay: `${Math.random() * 4}s`,
//     }));
//   }, []);


//   // useEffect(() => {
//   //   let char = 0;
//   //   const msg = messages[messageIndex];
//   //   setDisplayText("");

//   //   const timer = setInterval(() => {
//   //     setDisplayText(msg.slice(0, char + 1));
//   //     char++;

//   //     if (char >= msg.length) {
//   //       clearInterval(timer);
//   //       setTimeout(() => {
//   //         setMessageIndex((prev) => (prev + 1) % messages.length);
//   //       }, 1800);
//   //     }
//   //   }, 55);

//   //   return () => clearInterval(timer);
//   // }, [messageIndex]);

//   // -----------------------------

//   return (
//     <motion.div
//       initial={{ opacity: 0, x: 24 }}
//       animate={{ opacity: 1, x: 0 }}
//       transition={{ duration: 0.7, ease: "easeOut" }}
//       className="w-full lg:w-[330px] flex flex-col items-center lg:pl-4"
//     >
//       <p className="text-[11px] tracking-[0.24em] text-cyan-100/80 uppercase mt-2  text-center">
//         VIRTUAL ASSISTANT
//       </p>

//       {/* MAIN HOLOGRAM PANEL ------------------- */}
//       <div className="relative w-full max-w-[330px] min-h-[520px] flex items-center justify-center overflow-visible">

//         {/* FLOATING PARTICLES */}
//         <div className="absolute inset-0 pointer-events-none z-0">
//           {particles.map((p, i) => (
//             <div
//               key={i}
//               className="absolute w-[3px] h-[3px] bg-cyan-300/70 rounded-full animate-floatParticle"
//               style={{
//                 left: p.left,
//                 top: p.top,
//                 animationDelay: p.delay,
//               }}
//             ></div>
//           ))}
//         </div>


//         {/* MODEL + MESSAGE */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0, scale: [1, 1.02, 1] }}
//           transition={{ duration: 1.2, ease: "easeOut" }}
//           className="relative w-full h-full z-10 overflow-visible"
//         >
//           {/* TYPING BUBBLE ----------------------- */}
//           {/* <motion.div
//             initial={{ opacity: 0, scale: 0.3, y: -8 }}
//             animate={{ opacity: 1, scale: [0.3, 1.2, 1], y: 0 }}
//             transition={{ duration: 0.45, ease: "easeOut" }}
//             className="absolute z-30 flex items-center gap-2"
//             style={{
//               top: "38%",
//               right: "7%",
//               transform: "translateY(-50%)",
//             }}
//           >
//             <div
//               className="
//                 px-4 py-1.5 rounded-full min-w-[140px]
//                 bg-[rgba(0,20,40,0.45)] backdrop-blur-md
//                 border border-cyan-300/40
//                 shadow-[0_0_14px_rgba(56,189,248,0.45)]
//                 text-white text-[13px] font-medium
//                 animate-holoFloat text-center
//               "
//             >
//               {displayText}
//               <span className="text-cyan-300 animate-blink">▌</span>
//             </div>

//             {/* TAIL */}
//           {/*<div
//               className="
//                 w-0 h-0 mt-[3px]
//                 border-l-[5px] border-l-transparent
//                 border-r-[5px] border-r-transparent
//                 border-t-[10px] border-t-cyan-400/40
//               "
//             ></div>
//           </motion.div> */}

//           {/* FIXED MODEL */}
//           <model-viewer
//             id="assistant-model"
//             src="https://res.cloudinary.com/dwvkine0i/image/upload/v1774279344/Untitled_we775k.glb"
//             autoplay
//             loop
//             disable-zoom
//             disable-pan
//             disable-tap
//             disable-rotate
//             interaction-prompt="none"
//             camera-controls
//             camera-orbit="0deg 90deg 80%"
//             camera-target="0m 0.8m -0.8m"

//             field-of-view="22deg"
//             style={{
//               width: "100%",
//               height: "100%",
//               objectFit: "contain",
//               pointerEvents: "none",
//             }}
//           ></model-viewer>
//         </motion.div>

//         {/* HOLOGRAM FLOOR */}
//         <div
//           className="
//             absolute bottom-4 w-[220px] h-[60px] rounded-full
//             bg-[radial-gradient(circle,_rgba(56,189,248,0.55),transparent_65%)]
//             blur-xl opacity-80 animate-holoPulse z-0
//           "
//         ></div>
//       </div>

//       {/* CTA BUTTON --------------------------------- */}
//       {/* <motion.button
//         onClick={() => navigate("/assistant-room")}
//         whileHover={{ scale: 1.06 }}
//         whileTap={{ scale: 0.94 }}
//         animate={{ y: [0, -3, 0] }}
//         transition={{
//           duration: 2.4,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//         className="
//     -mt-6 relative inline-block p-px font-semibold leading-6 
//     text-white-100 rounded-full cursor-pointer group/btn
//     bg-tertiary shadow-2xl shadow-zinc-900 
//     transition-transform duration-300 ease-in-out
//   "
//       >
//         {/* Gradient Border (always visible, brighter on hover) */}
//         {/* <span
//           className="
//       absolute inset-0 rounded-full p-[4px]
//       bg-gradient-to-r from-dark-blue via-light-blue to-orange-100
//       opacity-40 group-hover/btn:opacity-100
//       transition-opacity duration-500
//     "
//         ></span> */}

//         {/* Button Inner */}
//         {/* <span
//           className="
//       relative z-10 block px-5 py-2 rounded-full 
//       bg-gray-950 text-white
//     "
//         >
//           <div className="flex items-center space-x-2">
//             <span className="transition-all duration-500 group-hover/btn:translate-x-1">
//               Launch Virtual Assistant
//             </span>

//             <svg
//               className="w-5 h-5 transition-transform duration-500 group-hover/btn:translate-x-1"
//               fill="currentColor"
//               viewBox="0 0 20 20"
//             >
//               <path
//                 clipRule="evenodd"
//                 fillRule="evenodd"
//                 d="M8.22 5.22a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 11-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 010-1.06z"
//               />
//             </svg>
//           </div>
//         </span> */}

//         {/* Soft shadow glow (matches other buttons) */}
//         {/* <span
//           className="
//       absolute inset-0 rounded-full pointer-events-none
//       shadow-[0_0_22px_rgba(255,140,50,0.45)]
//     "
//         ></span> */}
//       {/* </motion.button> */} 



//       {/* <button
//                 className="relative -mt-12 inline-block p-px font-semibold leading-6 text-white-100 bg-tertiary shadow-2xl cursor-pointer shadow-zinc-900 
//              transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95 z-10 group/canvas-card"
//               >
//                 <span className="absolute inset-0 bg-gradient-to-r from-dark-blue via-light-blue to-orange-100 p-[4px] 
//                    opacity-90 transition-opacity duration-500 group-hover/canvas-card:opacity-100"></span>

//                 <span className="relative z-10 block px-4 py-2 bg-gray-950 ">
//                   <div className="relative z-10 flex items-center space-x-2">
//                     <span className="transition-all duration-500 group-hover/canvas-card:translate-x-1">
//                       Launching Soon!
//                     </span>

//                     <svg
//                       className="w-6 h-6 transition-transform duration-500 group-hover/canvas-card:translate-x-1"
//                       aria-hidden="true"
//                       fill="currentColor"
//                       viewBox="0 0 20 20"
//                     >
//                       <path
//                         clipRule="evenodd"
//                         fillRule="evenodd"
//                         d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
//                       />
//                     </svg>
//                   </div>
//                 </span>
//               </button> */}




//       {/* FOOTER TEXT */}
//       {/* <p className="text-[11px] mt-4 text-center px-3 leading-relaxed">
//         <span
//           className="text-white/90"
//           style={{ textShadow: "0 0 4px rgba(0,0,0,0.8)" }}
//         >
//           Your{" "}
//         </span>

//         <span
//           className="text-cyan-300 tracking-wide font-semibold"
//           style={{ textShadow: "0 0 6px rgba(0,0,0,0.95)" }}
//         >
//           Smart Companion
//         </span>

//         <span
//           className="text-white/90"
//           style={{ textShadow: "0 0 4px rgba(0,0,0,0.8)" }}
//         >
//           {" "}
//           for INC 2026.
//         </span>
//       </p> */}


//       {/* ANIMATIONS */}
//       <style>{`
//         @keyframes floatParticle {
//           0% { transform: translateY(0); opacity: 0.3; }
//           50% { transform: translateY(-10px); opacity: 0.85; }
//           100% { transform: translateY(0); opacity: 0.3; }
//         }
//         .animate-floatParticle {
//           animation: floatParticle 4.2s ease-in-out infinite;
//         }

//         @keyframes holoPulse {
//           0% { transform: scale(1); opacity: 0.6; }
//           50% { transform: scale(1.15); opacity: 1; }
//           100% { transform: scale(1); opacity: 0.6; }
//         }
//         .animate-holoPulse {
//           animation: holoPulse 3s ease-in-out infinite;
//         }

//         @keyframes holoFloat {
//           0% { transform: translateY(-50%); }
//           50% { transform: translateY(calc(-50% - 3px)); }
//           100% { transform: translateY(-50%); }
//         }
//         .animate-holoFloat {
//           animation: holoFloat 3.1s ease-in-out infinite;
//         }

//         @keyframes blink {
//           0%, 100% { opacity: 1; }
//           50% { opacity: 0; }
//         }
//         .animate-blink {
//           animation: blink 1s infinite;
//         }
//       `}</style>
//     </motion.div>
//   );
// };

// export default VirtualAssistant;


import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const DOMAINS = [
 {
    id: "01",
    title: "ARTIFICIAL INTELLIGENCE",
    subtitle: "Neural Networks, Deep Learning & Intelligent Systems",
    glow: "rgba(56, 189, 248, 0.2)",
    img: "https://images.unsplash.com/photo-1674027444485-cec3da58eef4?q=80&w=1000&auto=format&fit=crop", // Abstract Blue AI Core
  },
  {
    id: "02",
    title: "MULTIMEDIA PROCESSING",
    subtitle: "High-Speed Infrastructure, Audio & Video Analysis",
    glow: "rgba(34, 197, 94, 0.2)",
    img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop", // Green Digital Waveform/Hardware
  },
  {
    id: "03",
    title: "EMBEDDED & VLSI SYSTEMS",
    subtitle: "IoT & Micro-controller Architecture, Advanced Chip Design",
    glow: "rgba(249, 115, 22, 0.2)",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "04",
    title: "COMPUTER NETWORK & SECURITY",
    subtitle: "Secure Communication, Cryptography & Cyber Defense Systems",
    glow: "rgba(239, 68, 68, 0.2)",
    img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1000&auto=format&fit=crop", // Red Cybersecurity/Lock Abstract
  },
];

export default function AutoRotatingDomains() {
  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 3000;
    const intervalTime = 50;
    const step = (intervalTime / duration) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setIndex((prevIdx) => (prevIdx + 1) % DOMAINS.length);
          return 0;
        }
        return prev + step;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [index]);

  return (
    <div className="relative w-full  flex items-center justify-center overflow-hidden text-white font-sans">
      {/* Main Container - Reduced Height */}
      <div className="relative w-[400px] h-[480px]   shadow-2xl overflow-hidden flex flex-col">
        {/* Top Header */}
        <div className="flex justify-between items-center px-8 pt-8 pb-4 z-50">
          <div className="text-[10px] tracking-[0.3em]  opacity-80 uppercase">
            AVAILABLE DOmains
          </div>
          
        </div>

        {/* Content Area */}
        <div className="relative flex-1 flex items-center justify-center px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20, rotateY: 20 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              exit={{ opacity: 0, x: -20, rotateY: -20 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative w-full h-[400px]"
            >
              {/* Image with Content Overlay */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10 group shadow-2xl">
                <img
                  src={DOMAINS[index].img}
                  alt={DOMAINS[index].title}
                  className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
                />

                {/* Gradient Scrim for Text Legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                {/* Text Content Placed ON Image */}
                <div className="absolute bottom-0 left-0 w-full p-8 space-y-2">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <h2 className="text-3xl font-black  leading-none">
                      {DOMAINS[index].title}
                    </h2>
                    <p className="text-[10px] text-white/50 tracking-[0.2em] uppercase font-semibold">
                      {DOMAINS[index].subtitle}
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Progress Navigation - Placed at the very bottom */}
        <div className="flex justify-center gap-1.5 pb-8">
          {DOMAINS.map((_, i) => (
            <div key={i} className="h-[2px] w-8 bg-white/10 rounded-full overflow-hidden">
              {i === index && (
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  className="h-full bg-white shadow-[0_0_10px_#fff]"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}