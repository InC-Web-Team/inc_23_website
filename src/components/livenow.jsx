import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { FlipWords } from "./flip-words";

// NOTE: Change this date to whatever date you want to countdown to :)
const COUNTDOWN_FROM = "2025-03-20T23:59:00+05:30";

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

const ShiftingCountdown = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showFlipWords, setShowFlipWords] = useState(false);
  const [countdownReached, setCountdownReached] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0); // Track remaining time in milliseconds
  const words = [
    "We are officially live!",
    "The wait is over - join us now!",
    "Experience it in real time - live now!",
    "Tune in and be part of the moment!",
  ];

  // Calculate remaining time
  useEffect(() => {
    const targetDate = new Date(COUNTDOWN_FROM).getTime();
    const interval = setInterval(() => {
      const currentTime = new Date().getTime();
      const difference = targetDate - currentTime;
      if (difference <= 0) {
        clearInterval(interval);
        setCountdownReached(true);
      } else {
        setTimeLeft(difference);
      }
    }, 1000); // Update every second
    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);

  // Trigger confetti when countdown reaches zero
  useEffect(() => {
    if (countdownReached) {
      // Confetti effect when countdown is reached
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
    }
  }, [countdownReached]);

  const formatTime = (time) => {
    const days = "We";
    const hours = "are";
    const minutes = "Live";
    const seconds = "Now";
    return { days, hours, minutes, seconds };
  };

  const { days, hours, minutes, seconds } = formatTime(timeLeft);

  const animationVariants = {
    initial: { 
      scale: 4, 
      x: "0%", 
      y: "1%", 
      rotate: "-30deg", // Rotate to the left by 30 degrees
    },
    animate: { 
      scale: 1, 
      x: 0, 
      y: 0, 
      rotate: "0deg", // Reset rotation back to 0 degrees (no rotation)
    },
  };

  useEffect(() => {
    const hasTimerAnimated = window.sessionStorage.getItem("hasTimerAnimated");
    if (!hasTimerAnimated) {
      setHasAnimated(true);
      setTimeout(() => {
        setShowFlipWords(true);
      }, 3000);
      sessionStorage.setItem("hasTimerAnimated", true);
    } else {
      setShowFlipWords(true);
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
      className={"w-full max-sm:hidden z-2 pb-6"}>
      
      <div className={"border-secondary border-[1px]"}>
       


<motion.h1
  initial={{ opacity: 0, scale: 0.8 }} // Start smaller
  animate={{ opacity: 1, scale: 1 }} // Pop to normal size
  transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 300 }} // Smooth "pop" with spring effect
  className="text-white text-4xl font-bold tracking-wider relative transition-all duration-300
  bg-gradient-to-r from-sky-400 to-yellow-400 bg-clip-text text-transparent
  hover:shadow-[0_0_20px_rgba(255,255,255,0.8)] hover:scale-105
  p-5 flex justify-center items-center" // Padding and flex centering
>
  WE ARE LIVE NOW!
</motion.h1>



        </div>
    </motion.div>
  ) : null;
};


export default ShiftingCountdown;