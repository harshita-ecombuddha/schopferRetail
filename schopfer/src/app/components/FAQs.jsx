'use client'

import { useState } from 'react';
import Head from 'next/head';

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqData = [
    {
      question: "What is it?",
      answer: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    },
    {
      question: "Why is it?",
      answer: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters."
    },
    {
      question: "How is it?",
      answer: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
    },
    {
      question: "When is it?",
      answer: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
    },
    {
      question: "Where is it?",
      answer: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from 'de Finibus Bonorum et Malorum' by Cicero."
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen  py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-white tracking-tight sm:text-4xl">
            Frequently Asked Questions
          </h1>
          <div className="mt-3 h-1 w-20 bg-indigo-600 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div 
              key={index}
              className={`bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 ${
                activeIndex === index ? 'ring-2 ring-indigo-500 ring-opacity-50' : 'hover:shadow-lg'
              }`}
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full px-6 py-5 flex justify-between items-center focus:outline-none"
                aria-expanded={activeIndex === index}
              >
                <h3 className={`text-lg md:text-xl text-gray-800 ${activeIndex === index ? 'font-semibold' : 'font-medium'}`}
                > {faq.question}
                </h3>
                
                <span className="ml-6 flex-shrink-0">
                  <svg
                    className={`w-6 h-6 transform transition-transform duration-300 ${
                      activeIndex === index ? 'rotate-180 text-indigo-600' : 'text-gray-400'
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </button>
              <div className={`transition-max-height duration-300 ease-in-out overflow-hidden ${
                activeIndex === index ? 'max-h-96' : 'max-h-0'
              }`}>
                <div className="px-6 pb-5">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}