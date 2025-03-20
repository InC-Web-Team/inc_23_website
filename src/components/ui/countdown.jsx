import { useAnimate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
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
  const words = ["Counting down to launch!", "We're going live on 21st March!", "Get ready for an exciting experience!", "Join us as the event unfolds!"];

  // console.log('loaded', isLoaded, ' animated', hasAnimated)
  
  useEffect(() => {
    const hasTimerAnimated = window.sessionStorage.getItem("hasTimerAnimated");
    if (!hasTimerAnimated) {
      setHasAnimated(true);
      setTimeout(() => {
        setShowFlipWords(true);
      }, 3000);
      sessionStorage.setItem("hasTimerAnimated", true);
    }
    else{
      setShowFlipWords(true);
    }
    setIsLoaded(true);
  }, []);

  const animationVariants = {
    initial: { scale: 2, x: "-70%", y: "-120%" },
    animate: { scale: 1, x: 0, y: 0 },
  };

  return isLoaded ? (
    <motion.div
      initial={hasAnimated ? "initial" : "animate"}
      animate="animate"
      variants={animationVariants}
      transition={{ duration: 1, ease: "easeInOut", delay: 2 }}
      onAnimationComplete={() => setHasAnimated(false)}
      className={`w-full max-sm:hidden z-2 pb-6`}
      >
      {showFlipWords && <FlipWords words={words} />}
      <div className={"border-secondary border-[1px]"}>
        <div className={`mx-auto flex w-full max-w-5xl items-center ${hasAnimated ? `backdrop-blur-sm` : `bg-[#000609]/50`}`}>
          <CountdownItem unit="Day" text="day" cn={"border-r-[1px]"} />
          <CountdownItem unit="Hour" text="hours" cn={"border-r-[1px]"} />
          <CountdownItem unit="Minute" text="minutes" cn={"border-r-[1px]"} />
          <CountdownItem unit="Second" text="seconds" />
        </div>
      </div>
    </motion.div>
  ) : null;
};


const CountdownItem = ({ unit, text, cn }) => {
  const { ref, time } = useTimer(unit);

  return (
    <div className={`flex h-24 w-1/2 flex-col items-center justify-center gap-1 ${cn} border-white-100 font-mono md:h-36 md:gap-2 pointer-events-none`}>
      <div className="relative w-full overflow-hidden text-center">
        <span
          ref={ref}
          className="block text-2xl font-medium text-white md:text-4xl lg:text-6xl xl:text-7xl"
        >
          {time}
        </span>
      </div>
      <span className="text-xs font-light text-slate-400 md:text-sm lg:text-base">
        {text}
      </span>
    </div>
  );
};

export default ShiftingCountdown;

const useTimer = (unit) => {
  const [ref, animate] = useAnimate();

  const intervalRef = useRef(null);
  const timeRef = useRef(0);

  const [time, setTime] = useState(0);

  useEffect(() => {
    intervalRef.current = setInterval(handleCountdown, 1000);

    return () => clearInterval(intervalRef.current || undefined);
  }, []);

  const handleCountdown = async () => {
    const end = new Date(COUNTDOWN_FROM);
    const now = new Date();
    const distance = +end - +now;

    let newTime = 0;

    if (unit === "Day") {
      newTime = Math.floor(distance / DAY);
    } else if (unit === "Hour") {
      newTime = Math.floor((distance % DAY) / HOUR);
    } else if (unit === "Minute") {
      newTime = Math.floor((distance % HOUR) / MINUTE);
    } else {
      newTime = Math.floor((distance % MINUTE) / SECOND);
    }

    if (newTime !== timeRef.current) {
      await animate(
        ref.current,
        { opacity: [1, 0.1] },
        { duration: 0.26 }
      );

      timeRef.current = newTime;
      setTime(newTime);

      await animate(
        ref.current,
        { opacity: [0.1, 1] },
        { duration: 0.26 }
      );
    }
  };

  return { ref, time };
};