

import React, { useState } from 'react';
 import './App.css'; // Optional: Create a CSS file for styles

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        session: '',
        message: '',
        story: '',
        referral: '',
        recommendation: ''
    });
    
    const [formErrors, setFormErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        const errors = {};
        if (!formData.name) errors.name = 'Please enter your name.';
        if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'Please enter a valid email address.';
        if (!formData.phone || !/^\+91-\d{10}$/.test(formData.phone)) errors.phone = 'Please enter a valid phone number.';
        if (!formData.message) errors.message = 'Please enter your message.';
        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validateForm();
        if (Object.keys(errors).length === 0) {
            // Handle form submission, e.g., send data to server
            console.log('Form submitted:', formData);
        } else {
            setFormErrors(errors);
        }
    };

    return (
        <>
            <section className="contact-section bg-custom" id="Contact">
                <div className="container px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5">
                        <div className="col-md-12">
                            <div className="card py-4 h-100">
                                <div className="card-body text-center">
                                    <h4 className="text-uppercase m-0 text-black">Contact Us</h4>
                                    <hr className="my-4 mx-auto" />
                                    <form onSubmit={handleSubmit}>
                                        <div className="mb-3">
                                            <label htmlFor="name" className="form-label text-black">Your Name *</label>
                                            <input
                                                type="text"
                                                className={`form-control ${formErrors.name ? 'is-invalid' : ''}`}
                                                id="name"
                                                name="name"
                                                required
                                                placeholder="Enter your full name"
                                                value={formData.name}
                                                onChange={handleChange}
                                            />
                                            <div className="invalid-feedback">{formErrors.name}</div>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="email" className="form-label text-black">Email Address *</label>
                                            <input
                                                type="email"
                                                className={`form-control ${formErrors.email ? 'is-invalid' : ''}`}
                                                id="email"
                                                name="email"
                                                required
                                                placeholder="Enter your email address"
                                                value={formData.email}
                                                onChange={handleChange}
                                            />
                                            <div className="invalid-feedback">{formErrors.email}</div>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="phone" className="form-label text-black">Phone Number *</label>
                                            <input
                                                type="tel"
                                                className={`form-control ${formErrors.phone ? 'is-invalid' : ''}`}
                                                id="phone"
                                                name="phone"
                                                required
                                                placeholder="+91-91xxxxxxxx"
                                                pattern="\+91-\d{10}"
                                                value={formData.phone}
                                                onChange={handleChange}
                                            />
                                            <div className="invalid-feedback">{formErrors.phone}</div>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="session" className="form-label text-black">What type of session are you looking for?</label>
                                            <select
                                                className="form-select"
                                                id="session"
                                                name="session"
                                                required
                                                value={formData.session}
                                                onChange={handleChange}
                                            >
                                                <option value="" disabled>Select option</option>
                                                <option value="Wedding">Wedding</option>
                                                <option value="Engagement">Engagement</option>
                                                <option value="Birthday">Birthday</option>
                                                <option value="Others">Others</option>
                                            </select>
                                            <div className="invalid-feedback">Please select a session type.</div>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="message" className="form-label text-black">Message *</label>
                                            <textarea
                                                className={`form-control ${formErrors.message ? 'is-invalid' : ''}`}
                                                id="message"
                                                name="message"
                                                rows="4"
                                                required
                                                placeholder="Your message here..."
                                                value={formData.message}
                                                onChange={handleChange}
                                            ></textarea>
                                            <div className="invalid-feedback">{formErrors.message}</div>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="story" className="form-label text-black">Your story!</label>
                                            <textarea
                                                className="form-control"
                                                id="story"
                                                name="story"
                                                rows="4"
                                                placeholder="Would love to know about you guys!"
                                                value={formData.story}
                                                onChange={handleChange}
                                            ></textarea>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="referral" className="form-label text-black">How did you hear about us?</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="referral"
                                                name="referral"
                                                placeholder="e.g., Referral, Online Search, Social Media"
                                                value={formData.referral}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="recommendation" className="form-label text-black">If someone has recommended us, would love to know who!</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="recommendation"
                                                name="recommendation"
                                                placeholder="Name of the person who recommended us"
                                                value={formData.recommendation}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <button type="submit" className="btn btn-primary">Send Message</button>
                                    </form>

                                    <hr className="my-4 mx-auto" />
                                    <div className="contact-info text-white">
                                        <p>For any queries, contact us at:</p>
                                        <p><strong>Phone:</strong> +91-1234567890</p>
                                        <p><strong>Email:</strong> <a href="mailto:owner@example.com" className="text-white">owner@example.com</a></p>
                                        <p><strong>Instagram:</strong> <a href="https://www.instagram.com/yourusername" className="text-white" target="_blank" rel="noopener noreferrer">@yourusername</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

           
        </>
    );
};

export default Contact;
