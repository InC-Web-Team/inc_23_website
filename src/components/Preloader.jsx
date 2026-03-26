import { useEffect } from "react";

const Preloader = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 2300);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="fixed inset-0 grid place-items-center bg-black text-white z-50">
      
        <video
          src="/videos/incintro.mp4"
          autoPlay
          muted
          playsInline
className="w-[95vw] max-w-[1100px] mx-auto"
        />

        
    </div>
  );
};

export default Preloader;
