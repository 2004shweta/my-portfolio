import React, { useEffect, useState } from 'react';
import './Contact.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isLoading, setIsLoading] = useState(false);
    const [submitStatus, setSubmitStatus] = useState({
        success: false,
        message: ''
    });

    // Initialize AOS on component mount
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            easing: 'ease-in-out',
        });
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        setSubmitStatus({ success: false, message: '' });

        const formDataToSubmit = new FormData();
        Object.entries(formData).forEach(([key, value]) => {
            formDataToSubmit.append(key, value);
        });
        formDataToSubmit.append("access_key", "e11b6e80-2f86-4fac-bd68-6beb3101daff");

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: JSON.stringify(Object.fromEntries(formDataToSubmit))
            }).then((res) => res.json());

            if (res.success) {
                setSubmitStatus({ success: true, message: res.message });
                setFormData({ name: '', email: '', message: '' });
            } else {
                setSubmitStatus({ success: false, message: res.message || 'Something went wrong. Please try again.' });
            }
        } catch (error) {
            setSubmitStatus({ success: false, message: 'Network error. Please try again.' });
        } finally {
            setIsLoading(false);
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
                    <input 
                        type='text' 
                        placeholder='Enter your name' 
                        name='name' 
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                    />

                    <label htmlFor='email'>Your Email</label>
                    <input 
                        type='email' 
                        placeholder='Enter your email' 
                        name='email' 
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                    />

                    <label htmlFor='message'>Write your message</label>
                    <textarea 
                        name='message' 
                        rows="8" 
                        placeholder='Enter Your message'
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                    ></textarea>

                    {submitStatus.message && (
                        <div className={`submit-status ${submitStatus.success ? 'success' : 'error'}`}>
                            {submitStatus.message}
                        </div>
                    )}

                    <button 
                        type='submit' 
                        className="contact-submit"
                        disabled={isLoading}
                    >
                        {isLoading ? 'Submitting...' : 'Submit now'}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Contact;
