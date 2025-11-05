// ProcessSection.jsx
'use client'
import React, { useState } from 'react';
import { ClipboardDocumentIcon, PhotoIcon, PlayIcon, DevicePhoneMobileIcon, ChartBarIcon } from '@heroicons/react/24/outline';

export default function Process() {
  const [hoveredStep, setHoveredStep] = useState(null);

  // Brand cohesive colors - white cards with light blue accents
  const stepColors = [
    {
      bg: "bg-white", // White background
      text: "text-[#333366]", // Dark blue text
      iconBg: "bg-[#D6E8F9]", // Light blue icon background
      iconColor: "text-[#000000]", // Black icon
      border: "border-[#D6E8F9]", // Light blue border
      numberBg: "bg-white", // White number background
      numberText: "text-[#333366]" // Dark blue number text
    },
    {
      bg: "bg-white",
      text: "text-[#333366]",
      iconBg: "bg-[#D6E8F9]",
      iconColor: "text-[#000000]",
      border: "border-[#D6E8F9]",
      numberBg: "bg-white",
      numberText: "text-[#333366]"
    },
    {
      bg: "bg-white",
      text: "text-[#333366]",
      iconBg: "bg-[#D6E8F9]",
      iconColor: "text-[#000000]",
      border: "border-[#D6E8F9]",
      numberBg: "bg-white",
      numberText: "text-[#333366]"
    },
    {
      bg: "bg-white",
      text: "text-[#333366]",
      iconBg: "bg-[#D6E8F9]",
      iconColor: "text-[#000000]",
      border: "border-[#D6E8F9]",
      numberBg: "bg-white",
      numberText: "text-[#333366]"
    },
    {
      bg: "bg-white",
      text: "text-[#333366]",
      iconBg: "bg-[#D6E8F9]",
      iconColor: "text-[#000000]",
      border: "border-[#D6E8F9]",
      numberBg: "bg-white",
      numberText: "text-[#333366]"
    }
  ];

  const processSteps = [
    {
      number: "01",
      icon: <ClipboardDocumentIcon className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8" />,
      title: "Discovery & Analysis",
      description: "We begin by analyzing your products, target audience, and current listings to identify improvement opportunities."
    },
    {
      number: "02",
      icon: <PhotoIcon className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8" />,
      title: "Strategy & Development",
      description: "Our specialists create professional photography, compelling copy, and engaging videos for your products."
    },
    {
      number: "03",
      icon: <PlayIcon className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8" />,
      title: "Production & Creation",
      description: "We optimize and upload your content across e-commerce platforms, ensuring proper formatting and presentation."
    },
    {
      number: "04",
      icon: <DevicePhoneMobileIcon className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8" />,
      title: "Optimisation & Implementation",
      description: "We optimize and upload your content across e-commerce platforms, ensuring proper formatting and presentation."
    },
    {
      number: "05",
      icon: <ChartBarIcon className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8" />,
      title: "Analysis & Refinement",
      description: "We track key metrics and make data-driven refinements to maximize your listing performance."
    },
  ];

  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 lg:pt-24 section min-h-screen lg:h-screen bg-white border-t border-[#94B4C1]/40 flex items-center">
      <div className="max-w-7xl px-4 mx-auto sm:px-6 lg:px-0 w-full">
        <div className="text-center mb-8 sm:mb-12 lg:mb-18">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[50px] font-bold text-[#333366] tracking-tight">
            Our Process
          </h2>
          <p className="mt-3 sm:mt-4 max-w-4xl mx-auto font-medium text-base sm:text-lg lg:text-[20px] text-[#333366]/80 px-4">
            Our streamlined approach delivers quality results with 
            industry-leading turnaround times
          </p>
        </div>

        <div className="relative">
          {/* Timeline connector - updated to light blue */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#D6E8F9] via-[#D6E8F9] to-[#D6E8F9] transform -translate-y-1/2 z-0"></div>
          
          {/* Process steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-4 relative z-10">
            {processSteps.map((step, index) => {
              const isHovered = hoveredStep !== null && index >= hoveredStep;
              const animationDelay = hoveredStep !== null ? (index - hoveredStep) * 100 : 0;
              
              return (
                <div 
                  key={index} 
                  className={`
                    flex flex-col items-center transition-all duration-300 ease-in-out
                    ${index % 2 === 0 ? 'lg:mt-0' : 'lg:mt-16'}
                  `}
                  onMouseEnter={() => setHoveredStep(index)}
                  onMouseLeave={() => setHoveredStep(null)}
                >
                  <div 
                    className={`
                      ${stepColors[index].bg} rounded-2xl p-3 sm:p-4 ${stepColors[index].border} border-2 
                      shadow-md transition-all duration-300 w-full max-w-xs sm:max-w-sm lg:max-w-4xl lg:max-h-[350px]
                      ${isHovered ? 'transform -translate-y-2 shadow-xl scale-105 bg-gradient-to-br from-white to-[#D6E8F9]/5' : 'hover:shadow-lg hover:-translate-y-1'}
                    `}
                    style={{
                      transitionDelay: isHovered ? `${animationDelay}ms` : '0ms'
                    }}
                  >
                    <div className="flex flex-col items-center mb-3 sm:mb-4">
                      <div 
                        className={`
                          ${stepColors[index].numberBg} rounded-full w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 flex items-center justify-center mb-2 sm:mb-3
                          transition-all duration-300
                          ${isHovered ? '' : ''}
                        `}
                        style={{
                          transitionDelay: isHovered ? `${animationDelay + 50}ms` : '0ms'
                        }}
                      >
                        <span className={`text-2xl sm:text-3xl lg:text-4xl font-bold ${stepColors[index].numberText}`}>{step.number}</span>
                      </div>
                      <div 
                        className={`
                          p-2 sm:p-2.5 lg:p-3 ${stepColors[index].iconBg} rounded-full shadow-md mb-2 sm:mb-3
                          transition-all duration-300
                          ${isHovered ? 'transform scale-110 shadow-lg' : ''}
                        `}
                        style={{
                          transitionDelay: isHovered ? `${animationDelay + 100}ms` : '0ms'
                        }}
                      >
                        {React.cloneElement(step.icon, { className: `h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 ${stepColors[index].iconColor}` })}
                      </div>
                      <h3 
                        className={`
                          text-sm sm:text-base lg:text-[18px] font-semibold ${stepColors[index].text} text-center leading-tight
                          transition-all duration-300
                          ${isHovered ? 'transform scale-105' : ''}
                        `}
                        style={{
                          transitionDelay: isHovered ? `${animationDelay + 150}ms` : '0ms'
                        }}
                      >
                        {step.title}
                      </h3>
                    </div>
                    <p 
                      className={`
                        text-xs sm:text-sm lg:text-[15px] leading-relaxed
                        ${stepColors[index].text}/80 text-center
                        transition-all duration-300
                        ${isHovered ? 'opacity-100' : ''}
                      `}
                      style={{
                        transitionDelay: isHovered ? `${animationDelay + 200}ms` : '0ms'
                      }}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}