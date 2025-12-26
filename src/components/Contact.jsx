'use client'

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { MdEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import "./Contact.scss";

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

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    // Using Web3Forms - Get your access key from https://web3forms.com
    // Just enter your email and copy the access key, then replace it below
    const formData = {
      access_key: "d6ed02e4-a1f3-4b64-ba51-85b96a8e9619",
      name: form.name,
      email: form.email,
      message: form.message,
      subject: `Contact Form Submission from ${form.name}`,
      to_email: "nehmanmain@gmail.com",
      from_name: form.name,
      from_email: form.email,
    };

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await res.json();
      
      if (data.success) {
        setLoading(false);
        alert("Thank you! I'll get back to you as soon as possible.");
        setForm({
          name: "",
          email: "",
          message: "",
        });
      } else {
        throw new Error(data.message || "Submission failed");
      }
    } catch (error) {
      setLoading(false);
      console.error("Contact form error:", error);
      alert("Something went wrong. Please try again or email me directly at nehmanmain@gmail.com");
    }
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setLoading(true);

  //   emailjs
  //     .send(
  //       'service_6y5vft7',
  //       'template_5g175sf',
  //       {
  //         from_name: form.name,
  //         to_name: "Aarti Rathi",
  //         from_email: form.email,
  //         to_email: "aarti.rathi1710@gmail.com",
  //         message: form.message,
  //       },
  //       'FMQ4a1hK5NSAkumfj',
  //     )
  //     .then(
  //       () => {
  //         setLoading(false);
  //         alert("Thank you. I will get back to you as soon as possible.");

  //         setForm({
  //           name: "",
  //           email: "",
  //           message: "",
  //         });
  //       },
  //       (error) => {
  //         setLoading(false);
  //         console.error(error);

  //         alert("Ahh, something went wrong. Please try again.");
  //       }
  //     );
  // };

  return (
    <div className={`xl:mt-12 flex flex-col lg:flex-row gap-8 lg:gap-12 overflow-hidden contact ${styles.paddingX}`}>
      {/* Spinning Globe Section */}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.5] xl:h-auto md:h-[600px] h-[400px] earth flex items-center justify-center'
      >
        <EarthCanvas />
      </motion.div>

      {/* Contact Form Section */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='flex-[0.5] bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] p-8 md:p-10 rounded-3xl border-2 border-[#ffd700]/30 hover:border-[#ffd700]/50 transition-all shadow-xl shadow-[#ffd700]/10 earth'
      >
        <div className="mb-8">
          <p className={styles.sectionSubText}>Get in Touch</p>
          <h3 className={`${styles.sectionHeadText} text-4xl md:text-5xl`}>Contact.</h3>
          <p className="mt-4 text-gray-300 text-base leading-relaxed normal-case">
            I'm always open to discussing new opportunities, projects, or just having a chat about tech. Feel free to reach out!
          </p>
          <div className="mt-4 inline-block bg-gradient-to-r from-[#ffd700]/20 to-[#ffed4e]/20 border border-[#ffd700]/50 rounded-lg px-4 py-2">
            <p className="text-[#ffd700] text-sm font-semibold">🚀 Currently Open to Opportunities</p>
          </div>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-6 flex flex-col gap-6 form1'
          noValidate
        >
          <label className='flex flex-col group'>
            <span className='text-[#ffd700] font-semibold mb-2 text-sm uppercase tracking-wide'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              required
              className='bg-[#0a0a0a] py-4 px-4 placeholder:text-gray-500 text-white rounded-xl border-2 border-[#ffd700]/20 focus:border-[#ffd700] focus:outline-none font-medium transition-all group-hover:border-[#ffd700]/40'
            />
          </label>
          
          <label className='flex flex-col group'>
            <span className='text-[#ffd700] font-semibold mb-2 text-sm uppercase tracking-wide'>Your Email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="your.email@example.com"
              required
              className='bg-[#0a0a0a] py-4 px-4 placeholder:text-gray-500 text-white rounded-xl border-2 border-[#ffd700]/20 focus:border-[#ffd700] focus:outline-none font-medium transition-all group-hover:border-[#ffd700]/40'
            />
          </label>
          
          <label className='flex flex-col group'>
            <span className='text-[#ffd700] font-semibold mb-2 text-sm uppercase tracking-wide'>Your Message</span>
            <textarea
              rows={6}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='Tell me about your project or just say hello!'
              required
              className='bg-[#0a0a0a] py-4 px-4 placeholder:text-gray-500 text-white rounded-xl border-2 border-[#ffd700]/20 focus:border-[#ffd700] focus:outline-none font-medium resize-none transition-all group-hover:border-[#ffd700]/40'
            />
          </label>

          <motion.button
            type='submit'
            disabled={loading}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className='bg-gradient-to-r from-[#ffd700] to-[#ffed4e] py-4 px-8 rounded-xl outline-none w-full md:w-fit text-black font-bold shadow-lg shadow-[#ffd700]/50 hover:shadow-xl hover:shadow-[#ffd700]/70 transition-all disabled:opacity-50 disabled:cursor-not-allowed mt-2'
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <span className="animate-spin">⏳</span>
                Sending...
              </span>
            ) : (
              "Send Message"
            )}
          </motion.button>
        </form>

        {/* Contact Options */}
        <div className="mt-8 pt-8 border-t border-[#ffd700]/20">
          <div className="flex flex-col gap-4 contact__options">
            <motion.a
              href="mailto:nehmanmain@gmail.com"
              whileHover={{ scale: 1.05, x: 5 }}
              className="contact__option group"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-[#ffd700] to-[#ffed4e] rounded-lg flex items-center justify-center text-black">
                <MdEmail className="text-xl" />
              </div>
              <span className="text-white group-hover:text-[#ffd700] transition-colors font-medium">nehmanmain@gmail.com</span>
            </motion.a>
            
            <motion.a
              href="https://api.whatsapp.com/send/?phone=14167276134&text&app_absent=0&lang=en"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, x: 5 }}
              className="contact__option group"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-[#ffd700] to-[#ffed4e] rounded-lg flex items-center justify-center text-black">
                <BsWhatsapp className="text-xl" />
              </div>
              <span className="text-white group-hover:text-[#ffd700] transition-colors font-medium">+1 (416) 727-6134</span>
            </motion.a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");