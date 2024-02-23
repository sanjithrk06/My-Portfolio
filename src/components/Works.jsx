import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../index";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

//swiper
import { Swiper, SwiperSlide } from "swiper/react";

//swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

//module
import { FreeMode, Pagination, Mousewheel } from "swiper/modules";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("left", "spring", index * 0.5, 0.5)}>
      <div
        className='modgray-red-gradient p-5 rounded-2xl dxs:w-[300px] sm:w-[320px] w-full'
      >
        <div className='relative w-full h-[180px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end items-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-[#689775] font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-[#ffffffd8] text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Works = () => {

  return (
    <div className=" mt-4 mx-2">
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Following projects showcases my skills and experience through
          real-world examples of my work.
        </motion.p>
      </div>

      <div className=' flex flex-wrap mt-20 dxs:mx-4 sm:mx-4 dxs:gap-4 justify-around'>
        <Swiper
                  breakpoints={{
                    340: {
                      slidesPerView: 1,
                      spaceBetween: 15,
                    },
                    480: {
                      slidesPerView: 1.25,
                      spaceBetween: 15,
                    },
                    680: {
                      slidesPerView: 1.5,
                      spaceBetween: 15,
                    },
                    800: {
                      slidesPerView: 2,
                      spaceBetween: 15,
                    },
                    1000: {
                      slidesPerView: 2.5,
                      spaceBetween: 15,
                    },
                    1200: {
                      slidesPerView: 3,
                      spaceBetween: 15,
                    },
                  }}
                  freeMode={true}
                  pagination={{
                    clickable: true,
                  }}
                  mousewheel={true}
                  speed={15}
                  modules={[FreeMode, Pagination, Mousewheel]}
                  className="mySwiper max-w-[100%] scroll-smooth h-[30rem] cursor-pointer gradient-mask-r-90"
        >
          
          {projects.map((project, index) => (
            <SwiperSlide>
            
              <ProjectCard key={`project-${index}`} index={index} {...project} />
          
            </SwiperSlide>
          ))}
          
        </Swiper>
      </div>
    </div>
  );
};

export default SectionWrapper(Works, "projects");
