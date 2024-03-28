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
    mobile: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
    // Clear error message when user starts typing
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation
    const newErrors = {};
    if (!form.name.trim()) {
      newErrors.name = "Please enter your name.";
    }
    if (!form.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!form.mobile.trim()) {
      newErrors.mobile = "Please enter your phone number.";
    } else if (!/^\d{10}$/.test(form.mobile)) {
      newErrors.mobile = "Please enter a valid 10-digit phone number.";
    }
    if (!form.message.trim()) {
      newErrors.message = "Please enter your message.";
    }
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);

    emailjs
      .send(
        'service_2mhlt09',
        'template_1gp8bvf',
        {
          from_name: form.name,
          to_name: "Sanjith",
          from_email: form.email,
          to_email: "sanjithkarthikeyanr@gmail.com",
          message: form.message,
          from_mobile: form.mobile
        },
        '_Q80eCE1coadZhpCa'
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
    <div className={`xl:mt-4 sm:mt-4 dxs:mt-0 flex flex-col gap-5 overflow-hidden px-8 py-8 rounded-2xl`}>
      <div className=" block mt-10">
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <p className='text-secondary text-[17px] mb-12 max-w-3xl'>
          Hate forms? Send me an <a href="mailto:sanjithkarthikeyanr@gmail.com" target="_blank" className="cursor-pointer active:text-[#689775] underline text-[#689775] hover:text-[#ec8476d9]">email</a>/<a href="https://wa.me/9944235449" target="_blank" className="cursor-pointer active:text-[#689775] underline text-[#689775] hover:text-[#ec8476d9]">whatsapp</a>  instead.
        </p>
      </div>

      <div className='flex-[100%] p-0 dxs:-mt-4 sm:mt-0 -ml-10'>
        <form ref={formRef} onSubmit={handleSubmit} className='mt-0 flex dxs:flex-col sm:flex-row px-7 flex-wrap gap-8 items-center justify-center sm:justify-end'>
          <label className='flex flex-col dxs:w-[100%] sm:w-[45%]'>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="Name"
              className={`bg-transparent py-4 px-3 placeholder:text-white/60 text-white rounded-none outline-none border-b-2 border-gray-400 font-medium ${errors.name ? 'border-red-500' : ''}`}
            />
            <p className=" h-1">{errors.name && <span className="text-red-500 text-sm">* {errors.name}</span>}</p>
          </label>
          <label className='flex flex-col dxs:w-[100%] sm:w-[45%]'>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="Email address"
              className={`bg-transparent py-4 px-3 placeholder:text-white/60 text-white rounded-none outline-none border-b-2 border-gray-400 font-medium ${errors.email ? 'border-red-500' : ''}`}
            />
            <p className=" h-1">{errors.email && <span className="text-red-500 text-sm">* {errors.email}</span>}</p>
          </label>
          <label className='flex flex-col dxs:w-[100%] sm:w-[45%]'>
            <input
              type='tel'
              name='mobile'
              value={form.mobile}
              onChange={handleChange}
              placeholder="Mobile number"
              className={`bg-transparent py-4 px-3 placeholder:text-white/60 text-white rounded-none outline-none border-b-2 border-gray-400 font-medium ${errors.mobile ? 'border-red-500' : ''}`}
            />
            <p className=" h-1">{errors.mobile && <span className="text-red-500 text-sm">* {errors.mobile}</span>}</p>
          </label>
          <label className='flex flex-col dxs:w-[100%] sm:w-[45%]'>
            <textarea
              rows={1}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className={`bg-transparent py-4 px-3 placeholder:text-white/60 text-white rounded-none outline-none border-b-2 border-gray-400 font-medium ${errors.message ? 'border-red-500' : ''}`}
            />
            <p className=" h-1">{errors.message && <span className="text-red-500 text-sm">* {errors.message}</span>}</p>
          </label>

          <button
            type='submit'
            className='bg-[#191919] hover:scale-[1.08] dxs:ml-8 sm:m-0 py-3 px-8 rounded-xl outline-none w-fit text-[#fb442c] font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
