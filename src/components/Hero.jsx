import { motion } from "framer-motion";
import { useWindowSize } from 'react-use';
import gsap from "gsap";
import SplitTextJS from "split-text-js";
import { useEffect, useRef } from "react";
import { fadeIn, textVariant, zoomIn } from "../utils/motion";

import { styles } from "../styles";
import { css, git, html, javascript, mongodb, nodejs, reactjs, redux, tailwind, } from '../index';

const Hero = () => {

  const { width } = useWindowSize();

  const titles = [
    { head: 'Web' },
    { head: 'Frontend' },
    { head: 'Backend' },
    { head: 'React' },
  ];

  const titleRefs = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(SplitTextJS);
    const tl = gsap.timeline({
      repeat: -1
    });

    titles.forEach((title, index) => {
      const splitTitle = new SplitTextJS(titleRefs.current[index], { type: 'chars' });

      tl.from(splitTitle.chars, {
        opacity: 0,
        y: 30,
        rotateX: -90,
        stagger: 0.02
      }, "<")
        .to(splitTitle.chars, {
          opacity: 0,
          y: -30,
          rotateX: 90,
          stagger: 0.02
        }, "<2");
    });
  }, []);



  return (
    <section className={`relative w-full h-screen mx-auto bottom-8`}>

      <motion.div variants={fadeIn("", "", 0.1, 1)}  initial="hidden" animate="show">
        <img src={reactjs} className={`circlePosition w-[60px] rounded-[100%] absolute z-1 top-[52%] left-[25%] translate-x-[-50%] translate-y-[-50%] dxs:blur-[5px] sm:blur-[4px] ${ width <= 500 ? "hidden": ""}`} alt="" />
        <img src={nodejs} className="circlePosition dxs:hidden w-[60px] rounded-[100%] absolute z-1 top-[79%] left-[15%] translate-x-[-50%] translate-y-[-50%] dxs:blur-[5px] sm:blur-[4px]" alt="" />
        <img src={css} className="circlePosition  w-[60px] rounded-[100%] absolute z-1 top-[83%] dxs:left-[59%] sm:left-[70%]  translate-x-[-50%] translate-y-[-50%] dxs:blur-[5px] sm:blur-[4px]" alt="" />
        <img src={git} className="circlePosition w-[60px] dxs:top-[23%] rounded-[100%] absolute z-1 sm:top-[29%] left-[85%] translate-x-[-50%] translate-y-[-50%] dxs:blur-[5px] sm:blur-[4px]" alt="" />
        <img src={tailwind} className="circlePosition dxs:left-[20%] w-[60px] rounded-[100%] absolute z-1 top-[72%] sm:left-[20%] translate-x-[-50%] translate-y-[-50%] dxs:blur-[5px] sm:blur-[4px]" alt="" />
        <img src={mongodb} className="circlePosition dxs:hidden w-[60px] rounded-[100%] absolute z-1 top-[48%] left-[90%] translate-x-[-50%] translate-y-[-50%] dxs:blur-[5px] sm:blur-[4px]" alt="" />
        <img src={javascript} className="circlePosition dxs:left-[45%] dxs:top-[30%] w-[60px] rounded-[100%] absolute z-1 sm:top-[18%] left-[40%] translate-x-[-50%] translate-y-[-50%] dxs:blur-[5px] sm:blur-[4px]" alt="" />
        <img src={html} className="circlePosition dxs:left-[20%] w-[60px] rounded-[100%] absolute z-1 top-[20%] left-[10%] translate-x-[-50%] translate-y-[-50%] dxs:blur-[5px] sm:blur-[4px]" alt="" />
        <img src={redux} className="circlePosition w-[60px] rounded-[100%] absolute z-1 top-[60%] left-[83%] translate-x-[-50%] translate-y-[-50%] dxs:blur-[5px] sm:blur-[4px]" alt="" />
      </motion.div>

      <div
        className={`absolute inset-0 bottom-0 max-w-7xl sm:mx-auto dxs:ml-2 ${styles.paddingX} flex flex-row items-center gap-10 justify-center`}
      >
        <div className="flex flex-col py-1 px-5 justify-center">
          <motion.h2 variants={textVariant(0.3)} initial="hidden" animate="show"  className={`${styles.heroHeadText} text-[#ffffffaf]`}>
            HI! I'M <span className={`${styles.heroSpanText} text-[#fb442c]`}>SANJITH</span>
          </motion.h2>
          <motion.div variants={fadeIn("left", "", 0.5, 1)} initial="hidden" animate="show" className={`${styles.heroSubText} mt-2 mb-10 text-white-100`}>
            {titles.map((title, index) => (
              <p
                key={index}
                ref={el => (titleRefs.current[index] = el)}
                className="lg:text-[40px] sm:text-[26px] xs:text-[30px] dxs:text-[28px] font-semibold p-0 text-[#689775] m-0 items-center leading-[0] change"
              >
                {title.head} Developer
              </p>
            ))}
          </motion.div>
          
          <motion.div variants={zoomIn(0.1, 1)} initial="hidden" animate="show" className="flex gap-5 justify-center">

            <div className="group relative">
              <button onClick={() => window.open("https://github.com/sanjithrk06", "_blank")}>
              <svg stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" className=" stroke-white w-8 hover:scale-125 duration-200 hover:stroke-[#fb442ce2] active:stroke-white active:scale-0" width="24" height="24" ><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              </button>
              <span className="absolute dxs:invisible sm:visible top-7 left-[50%] -translate-x-[50%] 
              z-20 origin-left scale-0 px-3 rounded-lg  text-[#689775] py-2 text-sm font-bold
              shadow-md transition-all duration-300 ease-in-out 
              group-hover:scale-100">GitHub</span></div>


            <div className="group relative">
              <button onClick={() => window.open("https://linkedin.com/in/sanjithrk06", "_blank")}>
              <svg  stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" className=" stroke-white w-8 hover:scale-125 duration-200 hover:stroke-[#fb442ce2] active:stroke-white active:scale-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>
              </button>
              <span className="absolute dxs:invisible sm:visible top-7 left-[50%] -translate-x-[50%] 
              z-20 origin-left scale-0 px-3 rounded-lg  text-[#689775] py-2 text-sm font-bold
              shadow-md transition-all duration-300 ease-in-out 
              group-hover:scale-100">Linkedin</span></div>
            
            <div className="group relative">
            <button onClick={() => window.open("https://x.com/sanjithrk06", "_blank")}>
            <svg  stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" className=" stroke-white w-8 hover:scale-125 duration-200 hover:stroke-[#fb442ce2] active:stroke-white active:scale-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
            </button>
            <span className="absolute dxs:invisible sm:visible top-7 left-[50%] -translate-x-[50%] 
              z-20 origin-left scale-0 px-3 rounded-lg  text-[#689775] py-2 text-sm font-bold
              shadow-md transition-all duration-300 ease-in-out 
              group-hover:scale-100">Twitter</span></div>
            
            <div className="group relative">
            <button onClick={() => window.open("/resume.pdf", "_blank")} >
            <svg  stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" className="  stroke-white w-8 hover:scale-125 duration-200 hover:stroke-[#fb442ce2] active:stroke-white active:scale-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M16.965 2.381c3.593 1.946 6.035 5.749 6.035 10.119 0 6.347-5.153 11.5-11.5 11.5s-11.5-5.153-11.5-11.5c0-4.37 2.442-8.173 6.035-10.119l.608.809c-3.353 1.755-5.643 5.267-5.643 9.31 0 5.795 4.705 10.5 10.5 10.5s10.5-4.705 10.5-10.5c0-4.043-2.29-7.555-5.643-9.31l.608-.809zm-4.965-2.381v14.826l3.747-4.604.753.666-5 6.112-5-6.101.737-.679 3.763 4.608v-14.828h1z"/></svg>
            </button>
            <span className="absolute dxs:invisible sm:visible top-7 left-[50%] -translate-x-[50%] 
              z-20 origin-left scale-0 px-3 rounded-lg  text-[#689775] py-2 text-sm font-bold
              shadow-md transition-all duration-300 ease-in-out 
              group-hover:scale-100">CV</span></div>

          </motion.div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
