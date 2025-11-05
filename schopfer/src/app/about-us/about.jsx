// app/about/page.jsx
import Image from 'next/image';
import {ChevronRight} from 'lucide-react';
import MainTwo from '../components/MainTwo';

export default function About() {
  return (
    <main className="bg-white text-[#333366]">
      < MainTwo />

      {/* About Us Section */}
      <section className="grid md:grid-cols-2 gap-12 py-20 px-6 bg-white max-w-6xl mx-auto">
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-semibold text-[#333366] mb-6">About Us</h2>
          <p className="text-[#333366] text-lg leading-relaxed text-justify">At Schopfer Retail, we understand that in the digital marketplace, your product listing is your storefront. Founded with a vision to help brands maximize their e-commerce potential, we've built a team of specialists who combine technical expertise with creative excellence to deliver listings that don't just look good—they perform exceptionally well.</p>
        </div>
        <div className="overflow-hidden rounded-xl shadow-lg">
          <Image src="/about/about-img.png" alt="About Us" width={600} height={400} className="w-full h-full object-cover" />
        </div>
      </section>

      {/* Our Story Section */}
      <section className="grid md:grid-cols-2 gap-12 py-20 px-6 bg-white max-w-6xl mx-auto">
        <div className="overflow-hidden rounded-xl shadow-lg order-2 md:order-1">
          <Image src="/about/story-img.png" alt="Our Story" width={600} height={400} className="w-full h-full object-cover" />
        </div>
        <div className="flex flex-col justify-center order-1 md:order-2">
          <h2 className="text-3xl font-semibold text-[#333366] mb-6">Our Story</h2>
          <p className="text-[#333366] text-lg leading-relaxed text-justify">Schopfer Retail was born from a simple observation: great products were failing to reach their sales potential. Our founder, Naveen Kumar, saw countless high-quality products struggling with low visibility, high return rates, and poor conversion while working with Amazon at Cloudtail. <br></br><br></br>

            Recognizing this gap in the market, Naveen assembled a team of e-commerce specialists, photographers, content experts, and designers who shared his vision of transforming how brands sell
            online. Today, we've helped over 20 brands optimize their product listings, resulting in measurable improvements in visibility, conversion
            rates, and customer satisfaction. <br></br><br></br>

            We are committed to our vision with a razor-sharp focus: to ensure great products receive the visibility and sales they deserve through exceptional e commerce content.</p>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 px-6 bg-white text-[#333366]">
      <div className="max-w-6xl mx-auto px-4 ">

  <div className="flex flex-col md:flex-row gap-8 text-justify">
    <div className="flex-1 my-auto pr-10">
      <h1 className="text-4xl font-semibold mb-2 text-[#333366]">Our approach</h1>
      <p className="mb-4 text-[#333366]">
        We believe in data-driven creativity. While our listings are visually appealing and compelling,
        everything we create is strategically designed to drive specific performance metrics :
      </p>
      <h4 className="text-xl font-semibold mb-1 text-[#333366]">Speed</h4>
      <p className="text-[#333366]">
       Our motto of 'speed with quality' drives everything we do. We utilize the latest technology and proprietary software to deliver premium content with industry-leading turnaround times.
      </p>
    </div>

    <div className="flex-1 grid md:grid-cols-2 gap-6 text-left">
      <div className="bg-white border border-[#D6E8F9] p-4 rounded-xl shadow-md hover:transform hover:scale-105 transition duration-300 align-middle items-center mx-auto my-auto">
        <div className="bg-[#D6E8F9] h-12 w-12 rounded-full flex items-center justify-center mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#000000]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold mb-3 text-[#333366]">Visibility</h3>
        <p className="text-[#333366] opacity-90">
          We craft content that helps products rank higher in search results.
        </p>
      </div>

      <div className="bg-white border border-[#D6E8F9] p-4 rounded-xl shadow-md hover:transform hover:scale-105 transition duration-300 align-middle items-center mx-auto my-auto">
        <div className="bg-[#D6E8F9] h-12 w-12 rounded-full flex items-center justify-center mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#000000]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        </div>
        <h3 className="text-xl font-bold mb-3 text-[#333366]">Conversion</h3>
        <p className="text-[#333366] opacity-90">
          We highlight product benefits and features in ways that motivate purchases.
        </p>
      </div>

      <div className="bg-white border border-[#D6E8F9] p-4 rounded-xl shadow-md hover:transform hover:scale-105 transition duration-300 align-middle items-center mx-auto my-auto">
        <div className="bg-[#D6E8F9] h-12 w-12 rounded-full flex items-center justify-center mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#000000]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        </div>
        <h3 className="text-xl font-bold mb-3 text-[#333366]">Engagement</h3>
        <p className="text-[#333366] opacity-90">
         We create visuals and descriptions that capture and hold customer attention.
        </p>
      </div>

      <div className="bg-white border border-[#D6E8F9] p-4 rounded-xl shadow-md hover:transform hover:scale-105 transition duration-300 align-middle items-center mx-auto my-auto">
        <div className="bg-[#D6E8F9] h-12 w-12 rounded-full flex items-center justify-center mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#000000]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
        </div>
        <h3 className="text-xl font-bold mb-3 text-[#333366]">Satisfaction</h3>
        <p className="text-[#333366] opacity-90">
          We set accurate expectations to reduce returns and build loyalty.
        </p>
      </div>
    </div>
  </div>
</div>

      </section>

      {/* Our Values Section */}
      <section className="py-20 px-6 bg-white max-w-7xl mx-auto text-justify">
        <h2 className="text-3xl font-semibold text-center text-[#333366] mb-8">Our Values</h2>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="p-4 border rounded-xl border-[#94B4C1] bg-white">
            <h4 className="font-bold text-[#333366] mb-2 text-center">Excellence Without Compromise</h4>
            <p className="text-[#333366]">We maintain the highest standards in every listing we create, regardless of project size or budget.</p>
          </div>
          <div className="p-4 border rounded-xl border-[#94B4C1] bg-white">
            <h4 className="font-bold text-[#333366] mb-2 text-center">Data-Driven Execution</h4>
            <p className="text-[#333366]">We let performance metrics guide our creative process, ensuring beautiful content that also delivers results.</p>
          </div>
          <div className="p-4 border rounded-xl border-[#94B4C1] bg-white">
            <h4 className="font-bold text-[#333366] mb-2 text-center">Efficiency With Quality</h4>
            <p className="text-[#333366]">We believe great work doesn't have to take weeks. Our streamlined processes deliver premium content rapidly.</p>
          </div>
          <div className="p-4 border rounded-xl border-[#94B4C1] bg-white">
            <h4 className="font-bold text-[#333366] mb-2 text-center">Client Partnerships</h4>
            <p className="text-[#333366]">We view ourselves as an extension of your team, aligning our expertise with your business goals.</p>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-20 px-6 bg-white text-[#333366]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-semibold text-center mb-12 text-[#333366]">Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white border border-[#94B4C1]/30 text-[#333366] p-6 rounded-xl shadow-md hover:transform hover:scale-105 transition duration-300">
              <div className="h-20 w-20 rounded-full bg-[#D6E8F9] flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#000000]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h4 className="font-extrabold text-center text-2xl mb-0 text-[#333366]">Naveen Kumar</h4>
              <h5 className='font-bold text-center text-md mb-2 text-[#333366]/70'>Managing Partner</h5>

              <p className="text-center mb-6 font-medium text-sm text-[#333366]/70">E-commerce strategy, Amazon marketplace optimization, retail analytics</p>
              <p className="text-justify px-1 font-medium text-[#333366]/80">With nearly a decade and a half of experience in the retail industry, Naveen is the driving force behind Schopfer Retail. His background at Amazon and education from IIM Calcutta equipped him with deep understanding of e-commerce strategy and
                                            marketplace dynamics. Naveen leads our strategic direction, ensuring every client receives solutions tailored to their specific business goals.
             </p>
            </div>

            <div className="bg-white border border-[#94B4C1]/30 text-[#333366] p-6 rounded-xl shadow-md hover:transform hover:scale-105 transition duration-300">
              <div className="h-20 w-20 rounded-full bg-[#D6E8F9] flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#000000]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h4 className="font-extrabold text-center text-2xl mb-0 text-[#333366]">Yogaraj Mudalgi</h4>
              <h5 className='font-bold text-center text-md mb-2 text-[#333366]/70'>Brand & Content Strategist</h5>

              <p className="text-center mb-6 font-medium text-sm text-[#333366]/70">Brand communication, content strategy, advertising psychology</p>
              <p className="text-justify px-1 font-medium text-[#333366]/80">Yogaraj brings 10+ years of brand communication expertise, refined through his experiences at Saatchi and Saatchi, Edusys Global, and Lodestar. His deep understanding of consumer psychology and messaging strategy ensures our content
                                                resonates with target audiences and drives action.
             </p>
            </div>

            <div className="bg-white border border-[#94B4C1]/30 text-[#333366] p-6 rounded-xl shadow-md hover:transform hover:scale-105 transition duration-300">
              <div className="h-20 w-20 rounded-full bg-[#D6E8F9] flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#000000]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h4 className="font-extrabold text-center text-2xl mb-0 text-[#333366]">Mansoor</h4>
              <h5 className='font-bold text-center text-md mb-2 text-[#333366]/70'>Lead Creative Designer</h5>

              <p className="text-center mb-6 font-medium text-sm text-[#333366]/70">Infographic design, UI/UX, brand visual identity, e-commerce graphics</p>
              <p className="text-justify px-1 font-medium text-[#333366]/80">Mansoor leads our graphics team with innovation and precision. His expertise in creating visually striking infographics and product visualizations helps communicate complex features simply and effectively.
             </p>
            </div>

          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 px-6 bg-white text-[#333366]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-[#333366]">Ready to Transform Your Product Listings?</h2>
          <p className="text-lg mb-8 text-[#333366]">Let's supercharge your e-commerce sales with product listings that convert.</p>
          <button className="bg-[#333366] hover:bg-[#333366]/90 text-white font-bold py-3 px-8 rounded-md transition duration-300 text-lg flex items-center mx-auto">
            Schedule a Call <ChevronRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </section>
    </main>
  );
}