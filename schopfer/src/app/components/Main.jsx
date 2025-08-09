'use client';

import React from 'react';
import { ChevronRight, ShoppingCart, BarChart2, Repeat, TrendingUp, Edit, Image, PieChart } from 'lucide-react';
import { useEffect, useRef } from 'react'

const logos = [
  '/logos/godrej.png',
  '/logos/nippon.png',
  '/logos/kansai.png',
  '/logos/asianpaints.png',
  '/logos/marshalls.png',
  '/logos/hyphen.png',
]

export default function Main() {

    // Brand Slider
      const scrollRef = useRef(null)
    
      useEffect(() => {
        let scrollAmount = 0
    
        const autoScroll = () => {
          if (scrollRef.current) {
            scrollAmount = scrollRef.current.scrollLeft + 0.8
            if (
              scrollAmount >=
              scrollRef.current.scrollWidth - scrollRef.current.clientWidth
            ) {
              scrollAmount = 0
            }
            scrollRef.current.scrollLeft = scrollAmount
          }
        }
    
        const interval = setInterval(autoScroll, 30)
        return () => clearInterval(interval)
      }, [])

  return (
    <section className="w-full section min-h-screen bg-[#FFFAFA] text-[#001F3F] flex flex-col">

      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row justify-between items-center px-4 sm:px-6 md:px-12 lg:px-16 py-6 pt-26 sm:py-12  md:py-16 md:pt-24 lg:pt-20 lg:pb-26 max-w-7xl mx-auto flex-1">

        {/* Left Content */}
        <div className=" flex flex-col items-start text-left max-w-2xl mb-2 sm:mb-10 lg:mb-0 w-full lg:mt-12">
          
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl lg:text-[50px] font-bold leading-tight mb-2 sm:mb-4 lg:mb-1 text-[#001F3F]"> 
            <span className="bg-lime-400 text-[#001F3F] px-1 sm:px-2 rounded-md">Transform</span>{" "}
            Product Listings Into Sales Machines
          </h1>

          <p className="text-base sm:text-lg md:text-xl lg:text-[24px] font-semibold mb-4 sm:mb-6 lg:mb-6 text-[#001F3F]">
            Supercharge your E-commerce Sales with us.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
            <button className="bg-[#001F3F] border-2 text-[#F6FCDF] font-bold py-2 sm:py-3 px-6 sm:px-8 rounded-lg flex items-center justify-center hover:bg-[#fff]/90 hover:text-black hover:border-2 ease-in-out duration-500 text-sm sm:text-base">
              Schedule a Call <ChevronRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div> 
            
        {/* Right Content - Image */}
        <div className="flex-1 flex justify-center items-center w-full lg:w-auto">
          <div className="p-0 mt-0 lg:mt-4 lg:ml-10 w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl">
            <img
              src='/feature-images/product-listing.jpg'
              alt="Product listing example"
              className="w-full lg:w-[90%] h-auto lg:h-[90%] object-cover lg:object-fit rounded-md "
            />
          </div>
        </div>
      </div>
   
      {/* Stats Section */}
      <div className="bg-[#001F3F] text-[#F6FCDF] py-6 sm:py-8 lg:pt-3 lg:pb-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="bg-lime-600 text-[#F6FCDF] w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center mb-2">
                <ShoppingCart className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
              </div>
              <p className="text-xl sm:text-2xl lg:text-3xl lg:text-[20px] font-bold">2,000+</p>
              <p className="text-xs sm:text-sm lg:text-[14px] mt-1">Brands Served</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-lime-600 text-[#F6FCDF] w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center mb-2">
                <BarChart2 className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
              </div>
              <p className="text-xl sm:text-2xl lg:text-3xl lg:text-[20px] font-bold">1,239</p>
              <p className="text-xs sm:text-sm lg:text-[14px] mt-1">Listings Created</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-lime-600 text-[#F6FCDF] w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center mb-2">
                <Repeat className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
              </div>
              <p className="text-xl sm:text-2xl lg:text-3xl lg:text-[20px] font-bold">21%</p>
              <p className="text-xs sm:text-sm lg:text-[14px] mt-1">Decrease in Returns</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-lime-600 text-[#F6FCDF] w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center mb-2">
                <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
              </div>
              <p className="text-xl sm:text-2xl lg:text-3xl lg:text-[20px] font-bold">89%</p>
              <p className="text-xs sm:text-sm lg:text-[14px] mt-1">Better Conversions</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Brands Section */}
      <div className="bg-[#94B4C1]/20 backdrop-blur-sm py-4 sm:py-6 lg:py-8 px-2 sm:px-4 overflow-hidden border-t border-b border-[#94B4C1]/40">
        <div
          ref={scrollRef}
          className="flex space-x-6 sm:space-x-8 lg:space-x-10 overflow-x-scroll whitespace-nowrap scrollbar-hide"
        >
          {logos.concat(logos).map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Logo ${index}`}
              className="h-6 sm:h-7 lg:h-8 w-auto object-contain flex-shrink-0"
            />
          ))}
        </div>
      </div>
    </section>
  );
}