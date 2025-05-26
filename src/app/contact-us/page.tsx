'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';

const ContactUsPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission logic
    setSubmitted(true);
  };

  return (
    <>
      <Head>
        <title>Contact Us | Interview Stack</title>
      </Head>

      <div className="min-h-screen bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white shadow-2xl rounded-2xl p-8 md:p-10 max-w-md w-full"
        >
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Contact Us</h1>

          {submitted ? (
            <p className="text-green-600 font-semibold text-center">
              Thank you! We'll get back to you soon.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="peer w-full h-12 px-3 border-b-2 bg-transparent placeholder-transparent focus:outline-none transition-all border-gray-300 focus:border-blue-500"
                  placeholder="Your name"
                  required
                />
                <label
                  className="absolute left-3 -top-3.5 text-sm text-gray-600 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all"
                >
                  Name
                </label>
              </div>

              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="peer w-full h-12 px-3 border-b-2 bg-transparent placeholder-transparent focus:outline-none transition-all border-gray-300 focus:border-blue-500"
                  placeholder="Email"
                  required
                />
                <label
                  className="absolute left-3 -top-3.5 text-sm text-gray-600 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all"
                >
                  Email
                </label>
              </div>

              <div className="relative">
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="peer w-full px-3 py-2 border-b-2 bg-transparent placeholder-transparent focus:outline-none transition-all border-gray-300 focus:border-blue-500"
                  placeholder="Message"
                  required
                ></textarea>
                <label
                  className="absolute left-3 top-0 text-sm text-gray-600 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all"
                >
                  Message
                </label>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all"
              >
                Send Message
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </>
  );
};

export default ContactUsPage;
