// ContactForm.js
import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaComment, FaPaperPlane } from 'react-icons/fa';

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Basic validation
        const newErrors = {};

        if (!formData.name) {
            newErrors.name = 'Name is required';
        }

        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!validateEmail(formData.email)) {
            newErrors.email = 'Invalid email address';
        }

        if (!formData.message) {
            newErrors.message = 'Message is required';
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length > 0) {
            // Stop submission if there are validation errors
            return;
        }

        // The rest of your form submission logic
    };

    return (
        <div className="flex justify-center p-6">
            <div className="mt-16 w-full lg:w-1/3">
                <h2 className="text-3xl font-bold font-uncial text-emerald-700">Get in touch.</h2>
                <div className="mt-6 mb-12">
                    <p>Embark on your Irish adventure with confidence!</p>
                    <p>Have questions about navigating the Emerald Isle or seeking personalised travel advice?</p>
                    <p> Reach out to us!</p>
                </div>
                <form onSubmit={handleSubmit} className="max-w-md">
                    <div className="mb-4">
                        <label htmlFor="name" className="text-sm font-medium text-gray-600">
                            <FaUser className="inline-block mr-2" />
                            Name:
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className={`w-full p-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md`}
                        />
                        {errors.name && <p className="text-red-500 mt-2">{errors.name}</p>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="text-sm font-medium text-gray-600">
                            <FaEnvelope className="inline-block mr-2" />
                            Email:
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={`w-full p-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md`}
                        />
                        {errors.email && <p className="text-red-500 mt-2">{errors.email}</p>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="text-sm font-medium text-gray-600">
                            <FaComment className="inline-block mr-2" />
                            Message:
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className={`w-full p-2 border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-md`}
                        ></textarea>
                        {errors.message && <p className="text-red-500 mt-2">{errors.message}</p>}
                    </div>
                    <button type="submit" className="bg-emerald-500 text-white py-2 px-4 rounded-md flex items-center">
                        <FaPaperPlane className="mr-2" />
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};
