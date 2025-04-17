import React, { useEffect } from 'react';
import './Contact.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Contact() {

    // Initialize AOS on component mount
    useEffect(() => {
        AOS.init({
            duration: 1000, // Slow down the animation duration
            once: true, // Trigger animation only once
            easing: 'ease-in-out',
        });
    }, []);

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "e11b6e80-2f86-4fac-bd68-6beb3101daff");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            alert(res.message);
        }
    }

    return (
        <div id='contact' className='contact'>
            <div className="contact-title" data-aos="fade-up">
                <h1>Get in touch</h1>
                {/* <img src={theme_pattern} alt="Theme Pattern" /> */}
            </div>

            <div className="contact-section">
                {/* Left Section: Contact Details */}
                <div className="contact-left" data-aos="fade-left" data-aos-delay="200">
                    <h1>Let's talk</h1>
                    <p>Have any query</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mail_icon} alt="Mail Icon" />
                            <p>jaiswalshweta021@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                            <img src={call_icon} alt="Call Icon" />
                            <p>+91 8102364598</p>
                        </div>
                        <div className="contact-detail">
                            <img src={location_icon} alt="Location Icon" />
                            <p>Phagwara Punjab India</p>
                        </div>
                    </div>
                </div>

                {/* Right Section: Contact Form */}
                <form onSubmit={onSubmit} className="contact-right" data-aos="fade-right" data-aos-delay="400">
                    <label htmlFor='name'>Your Name</label>
                    <input type='text' placeholder='Enter your name' name='name' />

                    <label htmlFor='email'>Your Email</label>
                    <input type='email' placeholder='Enter your email' name='email' />

                    <label htmlFor='message'>Write your message</label>
                    <textarea name='message' rows="8" placeholder='Enter Your message'></textarea>

                    <button type='submit' className="contact-submit">Submit now</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;
