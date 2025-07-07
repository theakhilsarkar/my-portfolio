"use client";
import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="bg-[#0f0f0f] text-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
        {/* LEFT: FORM */}
        <div className="bg-[#1a1a1a] p-8 rounded-lg">
          <h2 className="text-green-400 text-3xl font-bold mb-2">
            Let’s work together
          </h2>
          <p className="text-gray-400 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt
            sit illo esse commodi.
          </p>

          <form className="space-y-4">
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="First name"
                className="w-full p-3 bg-[#0f0f0f] rounded border border-[#333] text-white"
              />
              <input
                type="text"
                placeholder="Last name"
                className="w-full p-3 bg-[#0f0f0f] rounded border border-[#333] text-white"
              />
            </div>

            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Email address"
                className="w-full p-3 bg-[#0f0f0f] rounded border border-[#333] text-white"
              />
              <input
                type="tel"
                placeholder="Phone number"
                className="w-full p-3 bg-[#0f0f0f] rounded border border-[#333] text-white"
              />
            </div>

            <select className="w-full p-3 bg-[#0f0f0f] rounded border border-[#333] text-white">
              <option>Select a service</option>
              <option>Web Development</option>
              <option>UI/UX Design</option>
              <option>Consultation</option>
            </select>

            <textarea
              rows="4"
              placeholder="Type your message here."
              className="w-full p-3 bg-[#0f0f0f] rounded border border-[#333] text-white"
            />

            <button
              type="submit"
              className="bg-green-400 text-black px-6 py-2 rounded hover:bg-green-500 transition"
            >
              Send message
            </button>
          </form>
        </div>

        {/* RIGHT: CONTACT INFO */}
        <div className="flex flex-col gap-6 justify-center">
          <div className="flex items-center gap-4">
            <div className="bg-green-500 p-3 rounded">
              <Phone className="text-black" />
            </div>
            <div>
              <h4 className="font-semibold">Phone</h4>
              <p className="text-gray-400"> +91 98254 86060</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-green-500 p-3 rounded">
              <Mail className="text-black" />
            </div>
            <div>
              <h4 className="font-semibold">Email</h4>
              <p className="text-gray-400">theakhilsarkar@gmail.com</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-green-500 p-3 rounded">
              <MapPin className="text-black" />
            </div>
            <div>
              <h4 className="font-semibold">Address</h4>
              <p className="text-gray-400">Surat, Gujrat, India</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
