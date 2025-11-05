'use client';

import { useState } from 'react';
import { useRouter } from "next/navigation";
import { X, Menu } from 'lucide-react'; // For hamburger and close icons

export default function Header() {
  const router = useRouter(); 
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 flex justify-center z-20 bg-transparent">
      <div className="w-full text-[#333366] max-w-[1350px] mx-auto bg-white shadow-md flex items-center justify-between px-10 py-3 rounded-b-2xl border-b border-[#94B4C1]/40">

        {/* Logo */}
        <div className="flex items-center space-x-2">
          <span className="font-extrabold text-4xl cursor-pointer text-[#333366]" onClick={() => router.push("/")}>
            Schopfer
          </span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="font-semibold text-[#333366] hover:text-[#333366]/80 transition-colors" onClick={() => router.push("/")}>Home</a>
          <a href="#" className="font-semibold text-[#333366] hover:text-[#333366]/80 transition-colors" onClick={() => router.push("/about-us")}>About Us</a>
          <a href="#" className="font-semibold text-md text-[#333366] hover:text-[#333366]/80 transition-colors" onClick={() => router.push("/case-study")}>Case Studies</a>
          <a href="#" className="font-semibold text-md text-[#333366] hover:text-[#333366]/80 transition-colors" onClick={() => router.push("/blog")}>Blogs</a>
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center space-x-3">
          <button className="bg-[#333366] text-white font-bold py-2 px-5 rounded-lg hover:bg-[#333366]/90 transition-all" onClick={() => router.push("/contact")}>
            Contact Us
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden text-[#333366]"
          onClick={() => setMenuOpen(true)}
        >
          <Menu size={28} />
        </button>

      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <>
          {/* Backdrop */}
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-20" onClick={() => setMenuOpen(false)}></div>
          
          {/* Menu Content */}
          <div className="fixed top-0 left-0 right-0 bg-white/90 z-30 flex flex-col p-6 space-y-4 overflow-y-auto shadow-2xl">
                
                {/* Top: Logo + Close */}
                <div className="flex items-center justify-between border-b border-[#94B4C1] pb-2">
                <div className="flex items-center space-x-2">
                    <span className="font-bold text-[#333366] text-xl">
                    Schopfer
                    </span>
                </div>
                <button onClick={() => setMenuOpen(false)} className="text-[#333366]">
                    <X size={28} />
                </button>
                </div>

                {/* Nav Items */}
                <nav className="flex flex-col text-[#333366] space-y-4">
                <a href="#" className="font-semibold text-base hover:text-[#333366]/80 transition-colors" onClick={() => router.push("/")}>Home</a>
                <a href="#" className="font-semibold text-base hover:text-[#333366]/80 transition-colors" onClick={() => router.push("/about-us")}>About Us</a>
                <a href="#" className="font-semibold text-base hover:text-[#333366]/80 transition-colors" onClick={() => router.push("/case-study")}>Case Studies</a>
                <a href="#" className="font-semibold text-base hover:text-[#333366]/80 transition-colors" onClick={() => router.push("/blog")}>Blogs</a>
                </nav>

                {/* Buttons */}
                <div className="flex flex-col space-y-4 mt-auto border-t border-[#94B4C1] pt-6">
                 <button className="bg-[#333366] text-white font-bold py-2 px-5 rounded-lg hover:bg-[#333366]/90 transition-all" onClick={() => router.push("/contact")}>
                    Contact Us
                </button>
                </div>

                         </div>
          </>
       )}
 
     </header>
   );
 }