import React, { useEffect, useState } from 'react';
import './Contact.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

function Contact() {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // You can add email sending logic here (e.g., EmailJS, backend API)
  };

  return (
    <section id="contact" className="contact-section" data-aos="fade-up">
      <div className="contact-title">
        <h1>Contact Me</h1>
        <p>I'd love to hear from you! Fill out the form or reach out via email/socials below.</p>
      </div>
      <form className="contact-form" onSubmit={handleSubmit} data-aos="fade-up">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
        />
        <button type="submit" className="contact-btn">
          {submitted ? 'Message Sent!' : 'Send Message'}
        </button>
      </form>
      <div className="contact-socials" data-aos="fade-up">
        <a href="mailto:jaiswalshweta021@gmail.com" target="_blank" rel="noopener noreferrer" title="Email">
          <FaEnvelope />
        </a>
        <a href="https://www.linkedin.com/in/shweta-jaiswal-b5b538252/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
          <FaLinkedin />
        </a>
        <a href="https://github.com/2004shweta" target="_blank" rel="noopener noreferrer" title="GitHub">
          <FaGithub />
        </a>
      </div>
    </section>
  );
}

export default Contact; 