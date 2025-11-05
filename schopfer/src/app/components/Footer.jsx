'use client'

import { useState } from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');

  return (
    <footer className="bg-white text-[#333366] pt-8 pb-4 section border-t border-[#94B4C1]/40">
      <div className="max-w-7xl mx-auto px-6 space-y-4">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between gap-12">
          {/* Left - Schopfer Brand */}
          <div className="flex items-center md:w-1/4 pl-[60px]">
            <h2 className="text-[46px] font-bold text-[#333366]">Schopfer</h2>
          </div>

          {/* Right - Info Links and Contact */}
          <div className="space-y-8">
            {/* Info Links Row */}
            <div className="flex flex-wrap gap-16 text-sm">
              <div>
                <h4 className="text-lg font-semibold mb-3 text-[#333366]">About Us</h4>
                <ul className="space-y-2 text-[#333366]/70">
                  <li><a href="#" className="hover:text-[#333366] transition-colors">Our Story</a></li>
                  <li><a href="#" className="hover:text-[#333366] transition-colors">What We Do</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-3 text-[#333366]">Resources</h4>
                <ul className="space-y-2 text-[#333366]/70">
                  <li><a href="/blog" className="hover:text-[#333366] transition-colors">Blogs</a></li>
                  <li><a href="/case-study" className="hover:text-[#333366] transition-colors">Case Studies</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-3 text-[#333366]">Get In Touch</h4>
                <ul className="space-y-1 text-[#333366]/70">
                  <li>Email:</li>
                  <li><a href="mailto:info@schopferretail.com" className="hover:text-[#333366] transition-colors">info@schopferretail.com</a></li>
                  <li><a href="mailto:schopfer.retail@gmail.com" className="hover:text-[#333366] transition-colors">schopfer.retail@gmail.com</a></li>
                  <li className="pt-2">Phone:</li>
                  <li><a href="tel:+918867378930" className="hover:text-[#333366] transition-colors">+91 88673 78930</a></li>
                </ul>
              </div>
            </div>

            {/* Email Form Below */}
            <div className="w-full max-w-md">
              <h4 className="text-lg font-semibold mb-3 text-[#333366]">Drop your mail</h4>
              <div className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className="w-full px-4 py-2 rounded-l bg-white text-[#333366] border border-[#94B4C1]/30 focus:outline-none focus:ring-1 focus:ring-[#333366]"
                />
                <button
                  type="submit"
                  className="bg-[#333366] text-white font-bold px-6 rounded-r hover:bg-[#333366]/90 transition-colors ease-in-out duration-500"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-[#94B4C1]/20 pt-6 text-center text-sm text-[#333366]/70">
          © {currentYear} Schopfer Retail. All rights reserved.
        </div>
      </div>
    </footer>
  );
}