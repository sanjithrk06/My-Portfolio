import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant, zoomIn } from "../utils/motion";


const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };



  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

      //template_1gp8bvf
  //service_2mhlt09
  //_Q80eCE1coadZhpCa 

    emailjs
      .send(
        // import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        // import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        'service_2mhlt09',
        'template_1gp8bvf',
        {
          from_name: form.name,
          to_name: "Sanjith",
          from_email: form.email,
          to_email: "sanjithkarthikeyanr@gmail.com",
          message: form.message,
          mobile: form.mobile
        },
        '_Q80eCE1coadZhpCa'
        // import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            mobile: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className={`xl:mt-4 sm:mt-4 dxs:mt-0 flex flex-col gap-5 overflow-hidden px-8 py-8 rounded-2xl`}
    >
      <motion.div variants={textVariant(0.3)} className=" block mt-10" >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className=' text-secondary text-[17px] mb-12 max-w-3xl'
        >
          Hate forms? Send me an <a href="mailto:sanjithkarthikeyanr@gmail.com" className=" cursor-pointer active:text-[#689775] underline text-[#689775] hover:text-[#ec8476d9]">email</a> instead.
        </motion.p>

      </motion.div>

      <motion.div
        variants={textVariant()}
        className='flex-[100%] p-0 dxs:-mt-4 sm:mt-0 -ml-10'
      >
        <form
           variants={fadeIn("up","tween",0.5, 1)} 
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-0 flex dxs:flex-col sm:flex-row px-7 flex-wrap gap-8 items-center justify-center sm:justify-end'
        >
            <label className='flex flex-col dxs:w-[100%] sm:w-[45%]'>
              <input
                type='text'
                name='name'
                value={form.name}
                onChange={handleChange}
                placeholder="Name"
                className='bg-transparent py-4 px-3 placeholder:text-secondary text-white rounded-none outline-none border-b-2 border-[#191919] font-medium'
              />
            </label>
            <label className='flex flex-col dxs:w-[100%] sm:w-[45%]'>
              <input
                type='email'
                name='email'
                value={form.email}
                onChange={handleChange}
                placeholder="Email address"
                className='bg-transparent py-4 px-3 placeholder:text-secondary text-white rounded-none outline-none border-b-2 border-[#191919] font-medium'
              />
            </label>
            <label className='flex flex-col dxs:w-[100%] sm:w-[45%]'>
              <input
                type='tel'
                name='mobile'
                value={form.mobile}
                onChange={handleChange}
                placeholder="Mobile number"
                className='bg-transparent py-4 px-3 placeholder:text-secondary text-white rounded-none outline-none border-b-2 border-[#191919] font-medium'
              />
            </label>
          <label className='flex flex-col dxs:w-[100%] sm:w-[45%]'>
            <textarea
              rows={1}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className=' bg-transparent py-4 px-3 placeholder:text-secondary text-white rounded-none outline-none border-b-2 border-[#191919] font-medium'
            />
          </label>

          <button
            type='submit'
            onSubmit={handleSubmit}
            className='bg-[#191919] hover:scale-[1.08] dxs:ml-8 sm:m-0 py-3 px-8 rounded-xl outline-none w-fit text-[#fb442c] font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>

          {/* <button class="relative inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-full group">
            <span class="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-[#191919] opacity-[10%]"></span>
            <span class="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-[#191919] opacity-100 group-hover:-translate-x-8"></span>
            <span class="relative w-full text-left text-[#689775] transition-colors duration-200 ease-in-out group-hover:text-[#fb442c]">{loading ? "Connecting..." : "Connect"}</span>
            <span class="absolute inset-0 border-[2px] border-[#191919bc] rounded-full"></span>
          </button> */}
        </form>
      </motion.div>
      </div>
  );
};

export default SectionWrapper(Contact, "contact");
