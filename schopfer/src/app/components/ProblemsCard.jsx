import { ChevronRight, Edit, Image, PieChart } from 'lucide-react';

export default function ProblemsCard() {
    return (
        <div id="features" className="w-full mx-auto px-4 sm:px-6 lg:px-6 bg-white py-8 sm:py-12 lg:p-14 lg:px-20 lg:py-38 section min-h-screen lg:h-screen border-t border-[#94B4C1]/40 flex flex-col justify-center">
        <h2 className="text-xl sm:text-2xl lg:text-[40px] font-bold text-center text-[#333366] mb-8 sm:mb-10 lg:mb-12">
          How We Transform Your <span className="text-[#333366]">Product Listings</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto gap-6 sm:gap-8 lg:gap-10">
          {[
            {
              title: "Increase Visibility",
              icon: <Edit className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
              description: "Our strategically crafted, SEO-optimized content—with intelligent keyword placement—boosts organic views by 22%, significantly enhancing product discovery.",
              buttonText: "Learn More"
            },
            {
              title: "Reduce Return Rates",
              icon: <Image className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
              description: "Our detailed, easy-to-understand product descriptions and professional visuals resonate with your audience and set accurate expectations—cutting return rates from 20%+ down to just 5%.",
              buttonText: "Read Case Study"
            },
            {
              title: "Boost Conversions",
              icon: <PieChart className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
              description: "Our conversion-focused content highlights key benefits, addresses customer questions, and doubles conversion rates from 2.5% to 5%.",
              buttonText: "Read More"
            }
          ].map((feature, i) => (
            <div key={i} className="bg-white border border-[#94B4C1]/60 rounded-xl p-4 sm:p-5 lg:p-6 flex flex-col shadow-sm">
              <div className="flex items-center mb-3 sm:mb-4 gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 bg-[#D6E8F9] text-[#000000] rounded-full flex items-center justify-center flex-shrink-0">
                  {feature.icon}
                </div>
                <h3 className="text-lg sm:text-xl lg:text-[20px] text-[#333366] font-bold">{feature.title}</h3>
              </div>

              <p className="text-sm sm:text-base lg:text-[16px] leading-6 sm:leading-7 mb-4 flex flex-grow text-[#333366] font-medium text-justify">{feature.description}</p>
              
              {/* Button at bottom */}
              <button className="w-full py-2.5 sm:py-3 px-3 sm:px-4 font-semibold bg-[#333366] hover:bg-[#333366]/90 text-white rounded-md border border-[#94B4C1]/30 text-xs sm:text-sm transition flex items-center justify-center">
                {feature.buttonText}
                <ChevronRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    );
}