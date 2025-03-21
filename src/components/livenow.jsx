import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";

const ShiftingCountdown = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Trigger confetti effect on load
  useEffect(() => {
    const count = 200;
    const defaults = { origin: { x: 1, y: 1 } };

    function fire(particleRatio, opts) {
      confetti(
        Object.assign({}, defaults, opts, {
          particleCount: Math.floor(count * particleRatio),
        })
      );
    }

    fire(0.25, { spread: 26, startVelocity: 55 });
    fire(0.2, { spread: 60 });
    fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
    fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
    fire(0.1, { spread: 120, startVelocity: 45 });
  }, []);

  const animationVariants = {
    initial: { scale: 4, x: "0%", y: "1%", rotate: "-30deg" },
    animate: { scale: 1, x: 0, y: 0, rotate: "0deg" },
  };

  useEffect(() => {
    const hasTimerAnimated = window.sessionStorage.getItem("hasTimerAnimated");
    if (!hasTimerAnimated) {
      setHasAnimated(true);
      sessionStorage.setItem("hasTimerAnimated", true);
    }
    setIsLoaded(true);
  }, []);

  return isLoaded ? (
    <motion.div
      initial={hasAnimated ? "initial" : "animate"}
      animate="animate"
      variants={animationVariants}
      transition={{ duration: 1, ease: "easeInOut", delay: 2 }}
      onAnimationComplete={() => setHasAnimated(false)}
      className="w-full max-sm:hidden z-2 pb-6"
    >
      <div className="border-secondary border-[1px]">
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 300 }}
          className="text-white text-4xl font-bold tracking-wider relative transition-all duration-300
          bg-gradient-to-r from-sky-400 to-yellow-400 bg-clip-text text-transparent
          hover:shadow-[0_0_20px_rgba(255,255,255,0.8)] hover:scale-105
          p-5 flex justify-center items-center"
        >
          WE ARE LIVE NOW!
        </motion.h1>
      </div>
    </motion.div>
  ) : null;
};

export default ShiftingCountdown;
