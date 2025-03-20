import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { IncCanvas } from './canvas'
import { 
  useMotionTemplate,
  useMotionValue,
  motion,
  animate, } from 'framer-motion'
import { TextHoverEffect } from "./ui/text-hover-effect";
import ShiftingCountdown from './ui/livenow';

import { light, concepts_b, impetus_b, pradnya_b } from '../assets'
import HeroSlider from './HeroSlider';
import scrollToTop from '../utils/scrollToTop';

const COLORS_TOP = ["#1746A2", "#D4621C"];

const Hero = () => {

  const color = useMotionValue(COLORS_TOP[0]);
  const navigate = useNavigate()

  useEffect(() => {
    scrollToTop();
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 5,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  const border = useMotionTemplate`1px solid ${color}`;

  return (
    <section className='relative w-full h-screen'>
      <div className='absolute inset-0'>
        <HeroSlider />
      </div>
    <div className='relative sm:px-12 px-4 mx-auto w-full h-full flex sm:flex-row flex-col-reverse overflow-hidden items-center sm:justify-around justify-end bg-dot-secondary/[0.25]'>

      <img loading='lazy'  src={light} alt="light" className='absolute object-cover pointer-events-none top-[-8%] translate-x-[50%] right-[50%] z-10 opacity-35 sm:hidden'/>

      <p className='absolute sm:left-[50%] top-[10.5%] sm:top-[12%] sm:translate-x-[-50%] uppercase text-slate-400 font-light text-center text-md sm:text-lg'><span className=''>SCTR&apos;s Pune Institute of Computer Technology</span><span className='sm:block text-center'>&nbsp;Presents</span></p>

      <div className='relative flex flex-col items-center justify-center sm:w-[600px]'>

        <img loading='lazy'  src={impetus_b} alt="impetus_logo" className='sm:w-24 sm:h-24 w-11 h-11 absolute bottom-[11.8%] left-[1.2%] sm:bottom-[25.4%] sm:left-[-4%] z-10 cursor-pointer hover:scale-105 duration-300 opacity-70 hover:opacity-100' onClick={() => navigate('/events/impetus')}/>

        <img loading='lazy'  src={pradnya_b} alt="pradnya_logo" className='sm:w-24 sm:h-24 w-11 h-11 absolute left-[45%] top-[9.8%] sm:top-[20.3%] sm:left-[42%] z-10 cursor-pointer hover:scale-105 duration-300 opacity-70 hover:opacity-100' onClick={() => navigate('/events/pradnya')}/>

        <img loading='lazy'  src={concepts_b} alt="concepts_logo" className='sm:w-24 sm:h-24 w-9 h-9 absolute top-[44.5%] right-[-2.5%] sm:top-[42.6%] sm:right-[-8%] rotate-[18deg] z-10 cursor-pointer opacity-70 hover:opacity-100 hover:scale-105 duration-300' onClick={() => navigate('/events/concepts')}/>
        
        <h1 className='relative sm:mt-8'>
          <span className='text-white font-bold text-lg sm:text-5xl absolute top-[14%] left-[3.8%] sm:top-[20.6%] sm:left-[11.4%] pointer-events-none'>PICT</span>
          <TextHoverEffect text={'INC'} />
          <span className='text-[170px] sm:hidden text-white-100/55 font-[Helvetica] font-bold tracking-tight'>INC</span>
          <span className='text-white font-bold text-lg sm:text-5xl absolute bottom-[14%] right-[4%] sm:bottom-[29%] sm:right-[12%] pointer-events-none'>2K25</span>
        </h1>




        {/* <div className="absolute bottom-[-10%] sm:top-[800%] w-[93%] sm:w-[100%] z-10 hover:scale-[1.03] active:scale-95 duration-300"> */}

        <div className="absolute bottom-[-10%] sm:top-[800%] w-[93%] sm:w-[100%] z-10 hover:scale-[1.03] active:scale-95 duration-300 translate-y-[48px] sm:translate-y-0">

  <motion.button
    style={{
      border,
    }}
    className="w-full tracking-wider font-bold bg-[#000609]/50 px-7 py-3 text-white-100 uppercase transition-colors hover:bg-[#000609]/60 mt-[22px] sm:mt-12"  // mobile margin 22px, sm and up uses mt-5
    onClick={() => { navigate(`/register`) }}
  >
    wE ARE OFFICIALLY LIVE NOW!
  </motion.button>
</div>


      </div>
      <div className='flex sm:flex-[0.65] flex-col-reverse max-sm:h-1/2 sm:flex-col sm:justify-center items-center max-sm:-mb-8 mt-10 xl:-mr-9 relative'>
        <img loading='lazy'  src={light} alt="light" className='absolute object-cover pointer-events-none top-[-28%] translate-x-[50%] right-[50%] z-10 opacity-35 max-sm:hidden'/>
        <div className='w-[240px] h-[240px] sm:w-[400px] sm:h-[400px] relative'>
          <IncCanvas />
        </div>
        <ShiftingCountdown />
      </div>
    </div>
    <div className="absolute left-0 top-0 bottom-0 sm:w-10 w-4 bg-gradient-to-l from-[#000609]/0 to-[#000609]" />
    <div className="absolute bottom-0 top-0 right-0 sm:w-10 w-4 bg-gradient-to-r from-[#000609]/0 to-[#000609]" />
    <div className="absolute -bottom-1 left-0 right-0 h-20 bg-gradient-to-b from-[#000609]/0 to-[#000609]" />
  </section>
  )
}

export default Hero