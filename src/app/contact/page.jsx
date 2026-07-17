"use client";

import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

const ContactPage = () => {
  return (
    <section className="min-h-screen bg-black py-16">
      <div className="max-w-6xl mx-auto px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-blue-400 font-semibold uppercase tracking-widest">
            Contact Us
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-white mt-3">
            We d Love to Hear From You
          </h1>

          <p className="text-gray-400 mt-5 leading-8">
            Have questions about our products or need assistance with your
            order? Our team is here to help you anytime.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-zinc-900 rounded-3xl border border-white/10 p-8"
          >
            <h2 className="text-3xl font-bold text-white mb-8">Get in Touch</h2>

            <div className="space-y-8">
              <div className="flex gap-5">
                <div className="w-14 h-14 rounded-xl bg-blue-600 flex items-center justify-center text-white">
                  <FaEnvelope />
                </div>

                <div>
                  <h3 className="text-white font-semibold">Email</h3>
                  <p className="text-gray-400">support@fashionstore.com</p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="w-14 h-14 rounded-xl bg-blue-600 flex items-center justify-center text-white">
                  <FaPhoneAlt />
                </div>

                <div>
                  <h3 className="text-white font-semibold">Phone</h3>
                  <p className="text-gray-400">+880 1780-589179</p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="w-14 h-14 rounded-xl bg-blue-600 flex items-center justify-center text-white">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <h3 className="text-white font-semibold">Address</h3>
                  <p className="text-gray-400">Sylhet, Bangladesh</p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="w-14 h-14 rounded-xl bg-blue-600 flex items-center justify-center text-white">
                  <FaClock />
                </div>

                <div>
                  <h3 className="text-white font-semibold">Working Hours</h3>
                  <p className="text-gray-400">Monday - Saturday</p>
                  <p className="text-gray-400">9:00 AM - 8:00 PM</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-zinc-900 rounded-3xl border border-white/10 p-8"
          >
            <h2 className="text-3xl font-bold text-white mb-8">
              Send a Message
            </h2>

            <form className="space-y-6">
              <div>
                <label className="block text-gray-300 mb-2">Full Name</label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full rounded-xl bg-black border border-zinc-700 px-4 py-3 text-white outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-xl bg-black border border-zinc-700 px-4 py-3 text-white outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2">Subject</label>

                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full rounded-xl bg-black border border-zinc-700 px-4 py-3 text-white outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2">Message</label>

                <textarea
                  rows={5}
                  placeholder="Write your message..."
                  className="w-full rounded-xl bg-black border border-zinc-700 px-4 py-3 text-white outline-none resize-none focus:border-blue-500"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full rounded-xl bg-blue-600 hover:bg-blue-700 py-3 text-lg font-semibold text-white transition"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
