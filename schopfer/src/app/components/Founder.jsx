'use client'

import { ChevronRight, Phone } from 'lucide-react';

export default function Founder() {
  return (
    <section className="bg-[#F6FCDF] text-[#F6FCDF] py-32 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 section h-screen border-t border-[#94B4C1]/40">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
        
        {/* Image */}
        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-md xl:max-w-lg mx-auto lg:mx-0 rounded-lg overflow-hidden shadow-lg border-2 border-[#94B4C1]/30">
          <img
            src="/founder/founder-photo.png"
            alt="Naveen Kumar"
            className="w-full h-auto object-cover grayscale"
          />
        </div>

        {/* Text */}
        <div className="flex-1 w-full">
          <div className="rounded-lg p-6 sm:p-8 md:p-10 shadow-md  border border-[#94B4C1]/20">
            
            {/* Line badge + heading */}
            <div className="flex items-center gap-3 mb-4">
              <span className="h-1 w-8 sm:w-10 bg-lime-500 rounded-full"></span>
              <h2 className="text-2xl sm:text-3xl md:text-[34px] font-bold text-[#000]">
                Meet Naveen Kumar
              </h2>
            </div>

            <h3 className="text-base sm:text-[22px] font-semibold text-lime-500 mb-3">
              Founder
            </h3>

            <p className="italic text-sm sm:text-[18px] text-[#000]/80 mb-5 font-medium">
              E-commerce strategy, Amazon marketplace optimization, retail analytics
            </p>

            <p className="text-[#000]/90 text-sm sm:text-lg leading-relaxed mb-4 font-normal">
              With nearly a decade and a half of experience in the retail industry, Naveen is the driving force behind Schopfer Retail. His background at Amazon and education from IIM Calcutta equipped him with deep understanding of e-commerce strategy and marketplace dynamics.
            </p>
            
            <p className="text-[#000]/90 text-sm sm:text-lg leading-relaxed mb-8 font-normal">
              Naveen leads our strategic direction, ensuring every client receives solutions tailored to their specific business goals.
            </p>
            
            {/* Call-to-action button */}
            <div className="flex justify-start">
              <button className="flex items-center px-5 py-3  hover:bg-white bg-lime-500 border-2 text-[#000] font-bold hover:border-black border-lime-400 rounded-md transition-colors ease-in-out duration-500 ">
                <Phone className="w-4 h-4 mr-2" />
                Schedule a call
                <ChevronRight className="w-4 h-4 ml-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}